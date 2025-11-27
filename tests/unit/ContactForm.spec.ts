import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactForm from '@/components/contact/ContactForm.vue'

type ContactResponse = {
    success: boolean
    error?: string
}

describe('ContactForm', () => {
    beforeEach(() => {
        vi.unstubAllGlobals()
        vi.resetAllMocks()
    })

    it('必須項目が空のときはバリデーションエラーを表示する', async () => {
        vi.stubGlobal('$fetch', vi.fn())

        const wrapper = mount(ContactForm)

        // フォームの submit を発火させる
        await wrapper.find('form').trigger('submit')

        expect(wrapper.text()).toContain('すべての必須項目が入力されていません。')
        expect((globalThis as any).$fetch).not.toHaveBeenCalled()
    })

    it('正しく入力すると送信成功メッセージを表示し、フォームをリセットする', async () => {
        const fetchMock = vi
            .fn<[], Promise<ContactResponse>>()
            .mockResolvedValue({ success: true })
        vi.stubGlobal('$fetch', fetchMock)

        const wrapper = mount(ContactForm)

        await wrapper.find('#name').setValue('テストユーザー')
        await wrapper.find('#email').setValue('test@example.com')
        await wrapper.find('#message').setValue('お問い合わせ本文')

        await wrapper.find('form').trigger('submit')

        expect(fetchMock).toHaveBeenCalledTimes(1)
        expect(wrapper.text()).toContain('送信が完了しました。ありがとうございます。')

        expect((wrapper.find('#name').element as HTMLInputElement).value).toBe('')
        expect((wrapper.find('#email').element as HTMLInputElement).value).toBe('')
        expect((wrapper.find('#message').element as HTMLTextAreaElement).value).toBe('')
    })

    it('API が失敗を返した場合、エラーメッセージを表示する', async () => {
        const fetchMock = vi
            .fn<[], Promise<ContactResponse>>()
            .mockResolvedValue({ success: false, error: '失敗しました' })
        vi.stubGlobal('$fetch', fetchMock)

        const wrapper = mount(ContactForm)

        await wrapper.find('#name').setValue('テストユーザー')
        await wrapper.find('#email').setValue('test@example.com')
        await wrapper.find('#message').setValue('お問い合わせ本文')

        await wrapper.find('form').trigger('submit')

        expect(fetchMock).toHaveBeenCalledTimes(1)
        expect(wrapper.text()).toContain('失敗しました')
    })

    it('API 呼び出しで例外が発生した場合、通信エラーを表示する', async () => {
        const fetchMock = vi
            .fn<[], Promise<ContactResponse>>()
            .mockRejectedValue(new Error('Network error'))
        vi.stubGlobal('$fetch', fetchMock)

        const wrapper = mount(ContactForm)

        await wrapper.find('#name').setValue('テストユーザー')
        await wrapper.find('#email').setValue('test@example.com')
        await wrapper.find('#message').setValue('お問い合わせ本文')

        await wrapper.find('form').trigger('submit')

        expect(fetchMock).toHaveBeenCalledTimes(1)
        expect(wrapper.text()).toContain('通信エラーが発生しました。')
    })
})