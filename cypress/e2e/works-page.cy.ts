describe('Works page', () => {
    /**
     * 前提：
     *  - Nuxt dev サーバーが http://localhost:3000 で動いている
     *  - cypress.config.ts で baseUrl が設定されている
     *  - WorksList の li に .works-item クラス
     *  - 選択中に .active クラス
     *  - WorksPreview のタイトルは .works-preview-title
     */

    it('初期表示で最初の作品が選択され、プレビューに表示されている', () => {
        cy.visit('/portfolio/works')

        // 作品一覧のアイテムが1件以上あること
        cy.get('.works-item').should('have.length.greaterThan', 0)

        // 一番上のアイテムを取得
        cy.get('.works-item')
            .first()
            .as('firstItem')

        // 最初のアイテムに active クラスが付いていること
        cy.get('@firstItem').should('have.class', 'active')

        // そのタイトルと、右側プレビューのタイトルが一致していること
        cy.get('@firstItem')
            .invoke('text')
            .then((firstTitle) => {
                cy.get('.works-preview-title')
                    .invoke('text')
                    .should('equal', firstTitle.trim())
            })
    })

    it('別の作品をクリックすると、選択状態とプレビューが切り替わる', () => {
        cy.visit('/portfolio/works')

        // 2つ以上作品がある前提
        cy.get('.works-item').its('length').should('be.gte', 2)

        cy.get('.works-item').eq(0).as('firstItem')
        cy.get('.works-item').eq(1).as('secondItem')

        // まず最初が active
        cy.get('@firstItem').should('have.class', 'active')
        cy.get('@secondItem').should('not.have.class', 'active')

        // 2番目をクリック
        cy.get('@secondItem').click()

        // active が 2番目に移る
        cy.get('@secondItem').should('have.class', 'active')
        cy.get('@firstItem').should('not.have.class', 'active')

        // プレビュータイトルも 2番目のタイトルに変わっていること
        cy.get('@secondItem')
            .invoke('text')
            .then((secondTitle) => {
                cy.get('.works-preview-title')
                    .invoke('text')
                    .should('equal', secondTitle.trim())
            })
    })

    it('ナビゲーションボタンが表示されている（戻る・次へ）', () => {
        cy.visit('/portfolio/works')

        // PageNavButtons が正しく表示されているか
        cy.get('.back-page-button').should('be.visible')
        cy.get('.next-page-button').should('be.visible')
    })
})
