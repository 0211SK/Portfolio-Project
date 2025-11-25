// メール受信API
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    if (!body.name || !body.email || !body.message) {
        return { success: false, error: '必須項目が未入力です。' }
    }

    // Gmail 認証情報を読み込み
    const user = process.env.GMAIL_USER
    const pass = process.env.GMAIL_PASS
    const to = process.env.MAIL_TO

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user, pass },
    })

    const mailOptions = {
        from: user,
        to,
        subject: `【ポートフォリオサイト】お問い合わせ：${body.name}様`,
        text: `
名前：${body.name}
メール：${body.email}
------------------------
${body.message}
    `,
    }

    try {
        await transporter.sendMail(mailOptions)
        return { success: true }
    } catch (error) {
        console.error('[MAIL ERROR]', error)
        return { success: false, error: '送信に失敗しました。' }
    }
})
