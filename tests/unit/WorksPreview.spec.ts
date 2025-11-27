import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WorksPreview from '@/components/works/WorksPreview.vue'
import type { Work } from '@/data/works/worksData'

describe('WorksPreview.vue', () => {
    const mockWork: Work = {
        id: 1,
        title: 'テスト作品',
        src: ['/images/test1.png', '/images/test2.png']
    }

    it('work が null のとき、空表示メッセージが表示される', () => {
        const wrapper = mount(WorksPreview, {
            props: { work: null }
        })

        expect(wrapper.text()).toContain('作品を選択してください。')
    })

    it('work があるとき、タイトルが表示される', () => {
        const wrapper = mount(WorksPreview, {
            props: { work: mockWork }
        })

        expect(wrapper.text()).toContain('テスト作品')
    })

    it('work.src の画像がすべて描画される', () => {
        const wrapper = mount(WorksPreview, {
            props: { work: mockWork }
        })

        const images = wrapper.findAll('img')

        // 画像枚数チェック
        expect(images.length).toBe(2)

        // 画像 src の確認
        expect(images[0].attributes('src')).toBe('/images/test1.png')
        expect(images[1].attributes('src')).toBe('/images/test2.png')
    })
})
