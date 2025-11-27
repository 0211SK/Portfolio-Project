describe('Profile page', () => {
    /**
     * 前提：
     *  - Nuxt dev サーバーが http://localhost:3000 で動いている
     *  - cypress.config.ts で baseUrl が設定されている
     *  - 分割前の profile.vue と同じクラス名を各パーツが使っていること
     *      - 左：.profile-photo, .profile-name-ja
     *      - 中央：.about-block, .skills-block
     *      - 右：.work-block, .timeline
     *      - ナビ：.back-page-button, .next-page-button
     */

    it('Profile ページが表示され、3カラム構成になっている', () => {
        cy.visit('/portfolio/profile')

        // レイアウトのコンテナが存在すること
        cy.get('.profile-page').should('exist')
        cy.get('.profile-inner').should('exist')
        cy.get('.profile-grid').should('exist')

        // PC幅では3カラム想定なので、子要素が3つあること
        cy.get('.profile-grid').children().should('have.length', 3)
    })

    it('左カラム：写真と基本情報が表示されている', () => {
        cy.visit('/portfolio/profile')

        // プロフィール写真が表示されている
        cy.get('.profile-photo img')
            .should('exist')
            .and('be.visible')

        // 名前（日本語）が表示されている
        cy.get('.profile-name-ja')
            .should('exist')
            .and('contain.text', '菅原') // フル一致でなくてもOKなように苗字だけチェック

        // 基本情報リストが存在する
        cy.get('.profile-basic')
            .should('exist')
            .within(() => {
                cy.get('li').its('length').should('be.gte', 1)
            })
    })

    it('中央カラム：ABOUT と SKILLS が表示されている', () => {
        cy.visit('/portfolio/profile')

        // ABOUT ブロック
        cy.get('.about-block')
            .should('exist')
            .within(() => {
                cy.contains('ABOUT ME').should('exist')
                cy.contains('わたしについて').should('exist')
                cy.get('.about-text').invoke('text').should('not.be.empty')
            })

        // SKILLS ブロック
        cy.get('.skills-block')
            .should('exist')
            .within(() => {
                cy.contains('SKILLS').should('exist')
                cy.get('.skills-radar-wrapper').should('exist')
            })
    })

    it('右カラム：MY LIFE タイムラインが表示されている', () => {
        cy.visit('/portfolio/profile')

        cy.get('.work-block')
            .should('exist')
            .within(() => {
                cy.contains('MY LIFE').should('exist')
                cy.get('.timeline').should('exist')
            })

        // タイムラインの行が1件以上あること
        cy.get('.timeline-row').its('length').should('be.gte', 1)
    })

    it('ナビゲーションボタンで Top / Experience に移動できる', () => {
        cy.visit('/portfolio/profile')

        // 戻る・次へボタンの存在
        cy.get('.back-page-button').should('be.visible')
        cy.get('.next-page-button').should('be.visible')

        // 「次へ」で /portfolio/experience へ
        cy.get('.next-page-button').click()
        cy.url().should('include', '/portfolio/experience')

        // もう一度 profile に戻って、「戻る」で /portfolio/top へ
        cy.visit('/portfolio/profile')
        cy.get('.back-page-button').click()
        cy.url().should('include', '/portfolio/top')
    })
})
