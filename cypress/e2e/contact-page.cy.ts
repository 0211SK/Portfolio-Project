describe('Contact page', () => {
    /**
     * 前提：
     *  - Nuxt dev サーバーが http://localhost:3000 で動いている
     *  - cypress.config.ts で baseUrl が設定されている
     *  - ContactForm は以下の構造になっている：
     *      - <form class="contact-form">
     *      - #name, #email, #message の各フィールド
     *      - 送信ボタン: button.form-submit-button
     *      - エラー: p.form-message-error
     *      - 成功: p.form-message-success
     *  - /api/contact への POST をブラウザ側では fetch 経由で叩いている（$fetch -> fetch）
     */

    it('必須項目が空のまま送信すると、バリデーションエラーが表示される', () => {
        cy.visit('/portfolio/contact')

        // 何も入力せず送信
        cy.get('button.form-submit-button').click()

        // カスタムのバリデーションメッセージが出ていること
        cy.contains('すべての必須項目が入力されていません。').should('be.visible')

        // 成功メッセージは出ていない
        cy.contains('送信が完了しました。ありがとうございます。').should('not.exist')
    })

    it('正しく入力すると、API 成功レスポンスに応じて完了メッセージが表示され、フォームがリセットされる', () => {
        // 先にinterceptを張る（絶対URL / クエリ付きも拾えるようにする）
        cy.intercept('POST', '**/api/contact*', {
            statusCode: 200,
            body: { success: true },
        }).as('contactPost')

        // そのあとでページを開く
        cy.visit('/portfolio/contact')

        // フォーム入力
        cy.get('#name').type('テストユーザー')
        cy.get('#email').type('test@example.com')
        cy.get('#message').type('お問い合わせメッセージです。')

        // 送信
        cy.get('button.form-submit-button').click()

        // リクエスト内容の確認
        cy.wait('@contactPost')
            .its('request.body')
            .should((body) => {
                expect(body).to.have.property('name', 'テストユーザー')
                expect(body).to.have.property('email', 'test@example.com')
                expect(body).to.have.property('message', 'お問い合わせメッセージです。')
            })

        // 成功メッセージ
        cy.contains('送信が完了しました。ありがとうございます。').should('be.visible')

        // 入力欄がリセットされていること
        cy.get('#name').should('have.value', '')
        cy.get('#email').should('have.value', '')
        cy.get('#message').should('have.value', '')
    })

    it('戻るボタンで /portfolio/works に遷移できる', () => {
        cy.visit('/portfolio/contact')

        // 戻るボタンが表示されていること
        cy.get('.back-page-button').should('be.visible')

        // クリックでworksへ
        cy.get('.back-page-button').click()
        cy.url().should('include', '/portfolio/works')
    })
})
