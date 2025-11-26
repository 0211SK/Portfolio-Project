import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import WorksList from '@/components/works/WorksList.vue'
import type { Work } from '@/data/works/worksData'

describe('WorksList', () => {
    const mockWorks: Work[] = [
        { id: 1, title: '作品1', src: [] },
        { id: 2, title: '作品2', src: [] },
        { id: 3, title: '作品3', src: ['/images/3.png'] },
    ]

    it('作品タイトルが正しく表示される', () => {
        const wrapper = mount(WorksList, {
            props: {
                works: mockWorks,
                selectedWorkId: null,
            },
        })

        const items = wrapper.findAll('.works-item')
        expect(items.length).toBe(3)

        // タイトルチェック
        expect(items[0].text()).toBe('作品1')
        expect(items[1].text()).toBe('作品2')
        expect(items[2].text()).toBe('作品3')
    })

    it('selectedWorkId の要素に active クラスが付く', () => {
        const wrapper = mount(WorksList, {
            props: {
                works: mockWorks,
                selectedWorkId: 2,
            },
        })

        const items = wrapper.findAll('.works-item')

        expect(items[1].classes()).toContain('active') // id:2 の item
        expect(items[0].classes()).not.toContain('active')
        expect(items[2].classes()).not.toContain('active')
    })

    it('クリックした作品を select イベントとして emit する', async () => {
        const wrapper = mount(WorksList, {
            props: {
                works: mockWorks,
                selectedWorkId: null,
            },
        })

        const secondItem = wrapper.findAll('.works-item')[1]
        await secondItem.trigger('click')

        // emit の確認
        expect(wrapper.emitted().select).toBeTruthy()
        expect(wrapper.emitted().select![0][0]).toEqual(mockWorks[1])
    })
})
