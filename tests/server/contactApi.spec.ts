// @vitest-environment node

import { describe, it, expect, vi, beforeAll, beforeEach } from 'vitest'
import nodemailer from 'nodemailer'

let handler: any

// nodemailer をモック
vi.mock('nodemailer', () => {
    return {
        default: {
            createTransport: vi.fn(() => ({
                sendMail: vi.fn(),
            })),
        },
    }
})

beforeAll(async () => {
    // Nuxt/Nitro の自動インポート相当をテスト環境で再現
    vi.stubGlobal('readBody', vi.fn())
    vi.stubGlobal('defineEventHandler', (fn: any) => fn)

    // グローバルを用意してから API モジュールを読み込む
    const mod = await import('../../server/api/contact.post')
    handler = mod.default
})

beforeEach(() => {
    vi.clearAllMocks()
})

describe('/api/contact (POST)', () => {
    it('必須項目が不足しているとエラーを返す', async () => {
        ; (globalThis.readBody as unknown as vi.Mock).mockResolvedValueOnce({
            name: '',
            email: '',
            message: '',
        })

        const res = await handler({} as any)

        expect(res).toEqual({
            success: false,
            error: '必須項目が未入力です。',
        })
    })

    it('正常な入力の場合、メール送信が呼ばれて success: true を返す', async () => {
        ; (globalThis.readBody as unknown as vi.Mock).mockResolvedValueOnce({
            name: 'テストユーザー',
            email: 'test@example.com',
            message: 'こんにちは',
        })

        const createTransportMock = (nodemailer as any).createTransport as vi.Mock
        const sendMailMock = vi.fn().mockResolvedValue(true)
        createTransportMock.mockReturnValue({ sendMail: sendMailMock })

        const res = await handler({} as any)

        expect(createTransportMock).toHaveBeenCalledTimes(1)
        expect(sendMailMock).toHaveBeenCalledTimes(1)
        expect(res).toEqual({ success: true })
    })

    it('メール送信中にエラーが起きた場合、エラーレスポンスを返す', async () => {
        ; (globalThis.readBody as unknown as vi.Mock).mockResolvedValueOnce({
            name: 'テストユーザー',
            email: 'test@example.com',
            message: 'こんにちは',
        })

        const createTransportMock = (nodemailer as any).createTransport as vi.Mock
        const sendMailMock = vi.fn().mockRejectedValue(new Error('SMTP error'))
        createTransportMock.mockReturnValue({ sendMail: sendMailMock })

        const res = await handler({} as any)

        expect(createTransportMock).toHaveBeenCalledTimes(1)
        expect(sendMailMock).toHaveBeenCalledTimes(1)
        expect(res).toEqual({
            success: false,
            error: '送信に失敗しました。',
        })
    })
})
