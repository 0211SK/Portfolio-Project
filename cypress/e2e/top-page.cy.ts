describe('Top page', () => {
    it('Top ページが表示され、メイン画像と紹介文が見える', () => {
        cy.visit('/portfolio/top')

        // 画像の存在と可視
        cy.get('.hero-bg')
            .should('exist')
            .and('be.visible')

        // 挨拶テキスト
        cy.get('.hero-text')
            .should('exist')
            .invoke('text')
            .should('contain', '初めまして')
    })

    it('次へ → Profile に遷移できる', () => {
        cy.visit('/portfolio/top')

        cy.get('.next-page-button').should('be.visible')
        cy.get('.next-page-button').click()

        cy.url().should('include', '/portfolio/profile')
    })
})
