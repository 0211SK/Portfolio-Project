describe('Experience page', () => {
    /**
     * 前提：
     *  - Nuxt dev サーバーが http://localhost:3000 で動いている
     *  - cypress.config.ts で baseUrl が設定されている
     *  - Experience ページは /portfolio/experience で表示される
     *  - カード：.exp-card / タイトル：.exp-title
     *  - モーダル：.modal-overlay / .modal-content / .close-btn / .detail / .timeline / .timeline-row
     *  - ナビボタン：.back-page-button / .next-page-button
     */

    it('Experience ページが表示され、カード一覧が表示される', () => {
        cy.visit('/portfolio/experience')

        // 見出しが "Experience" であること
        cy.contains('h1', 'Experience').should('exist')

        // 経験カードが1つ以上存在すること
        cy.get('.exp-card').its('length').should('be.gte', 1)
    })

    it('カードをクリックするとモーダルが開き、内容が表示される', () => {
        cy.visit('/portfolio/experience')

        // 最初のカードのタイトルを取っておく
        cy.get('.exp-card').first().as('firstCard')
        cy.get('@firstCard').find('.exp-title').invoke('text').as('firstTitle')

        // カードをクリック
        cy.get('@firstCard').click()

        // モーダルが表示される
        cy.get('.modal-overlay').should('be.visible')
        cy.get('.modal-content').should('be.visible')

        // モーダルのタイトルが、クリックしたカードのタイトルを含んでいる
        cy.get('@firstTitle').then((title) => {
            cy.get('.modal-content h2')
                .invoke('text')
                .should((text) => {
                    expect(text.trim()).to.contain((title as string).trim())
                })
        })

        // 詳細テキスト or タイムラインのどちらかは存在する想定
        cy.get('.modal-content').within(() => {
            cy.get('.detail').then(($detail) => {
                if ($detail.length > 0) {
                    // detail があれば、空でないことをざっくりチェック
                    cy.wrap($detail).invoke('text').should('not.be.empty')
                }
            })

            // タイムラインがあれば、行が1つ以上あること
            cy.get('section.timeline').then(($timeline) => {
                if ($timeline.length > 0) {
                    cy.wrap($timeline).find('.timeline-row').its('length').should('be.gte', 1)
                }
            })
        })
    })

    it('モーダルを閉じると消える', () => {
        cy.visit('/portfolio/experience')

        // モーダルを開く
        cy.get('.exp-card').first().click()
        cy.get('.modal-content').should('be.visible')

        // 閉じるボタンを押す
        cy.get('.close-btn').click()

        // モーダルが消えていること
        cy.get('.modal-content').should('not.exist')
        cy.get('.modal-overlay').should('not.exist')
    })

    it('ナビゲーションボタン（戻る・次へ）が動く', () => {
        cy.visit('/portfolio/experience')

        // 戻る -> /portfolio/profile
        cy.get('.back-page-button').should('be.visible').click()
        cy.url().should('include', '/portfolio/profile')

        // もう一度 /experience を開いて、次へ -> /portfolio/works
        cy.visit('/portfolio/experience')
        cy.get('.next-page-button').should('be.visible').click()
        cy.url().should('include', '/portfolio/works')
    })
})
