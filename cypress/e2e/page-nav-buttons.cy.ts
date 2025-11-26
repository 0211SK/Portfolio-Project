describe('PageNavButtons navigation', () => {
    /**
     * 前提：
     *  Nuxt dev サーバーが http://localhost:3000 で動いていること
     *  cypress.config.ts で baseUrl が設定されていること
     */

    it('/portfolio/top で「次へ」ボタンから /portfolio/profile に遷移できる', () => {
        cy.visit('/portfolio/top')

        // NextPageButton が表示されていること
        cy.get('.next-page-button').should('be.visible')

        // クリックして /portfolio/profile へ移動
        cy.get('.next-page-button').click()
        cy.url().should('include', '/portfolio/profile')
    })

    it('/portfolio/profile で「戻る」「次へ」ボタンが正しく動作する', () => {
        cy.visit('/portfolio/profile')

        // 両方のボタンが存在すること
        cy.get('.back-page-button').should('be.visible')
        cy.get('.next-page-button').should('be.visible')

        // 「次へ」で /portfolio/experience へ
        cy.get('.next-page-button').click()
        cy.url().should('include', '/portfolio/experience')

        // 戻って再度チェック（履歴を戻る or 直接アクセス）
        cy.visit('/portfolio/profile')

        // 「戻る」で /portfolio/top へ
        cy.get('.back-page-button').click()
        cy.url().should('include', '/portfolio/top')
    })

    it('/portfolio/works から contact への「次へ」、contact から works への「戻る」が動く', () => {
        // works から contact へ
        cy.visit('/portfolio/works')

        cy.get('.next-page-button').should('be.visible')
        cy.get('.next-page-button').click()
        cy.url().should('include', '/portfolio/contact')

        // contact では戻るのみ存在し、次へは存在しない前提
        cy.get('.back-page-button').should('be.visible')
        cy.get('.next-page-button').should('not.exist')

        // 戻るで works へ
        cy.get('.back-page-button').click()
        cy.url().should('include', '/portfolio/works')
    })
})
