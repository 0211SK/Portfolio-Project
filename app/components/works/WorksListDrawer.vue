<template>
    <div class="works-drawer">
        <!-- ドロワーを開くトグルボタン -->
        <button class="works-drawer-toggle" @click="isOpen = true">
            <span class="works-drawer-icon">
                <span></span>
                <span></span>
                <span></span>
            </span>
            <span class="works-drawer-label">制作物一覧</span>
            <span v-if="currentTitle" class="works-drawer-current">
                （{{ currentTitle }}）
            </span>
        </button>

        <!-- ドロワー本体 -->
        <transition name="works-drawer-fade">
            <div v-if="isOpen" class="works-drawer-overlay" @click.self="isOpen = false">
                <div class="works-drawer-panel">
                    <div class="works-drawer-header">
                        <p class="works-drawer-title">制作物一覧</p>
                        <button class="works-drawer-close" @click="isOpen = false">×</button>
                    </div>

                    <ul class="works-drawer-list">
                        <li v-for="work in works" :key="work.id">
                            <button class="works-drawer-item" :class="{ 'is-active': work.id === selectedWorkId }"
                                @click="handleSelect(work)">
                                {{ work.title }}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Work } from '~/data/works/worksData'

const props = defineProps<{
    works: Work[]
    selectedWorkId: number | null
}>()

const emit = defineEmits<{
    (e: 'select', work: Work): void
}>()

const isOpen = ref(false)

const currentTitle = computed(() => {
    const current = props.works.find(w => w.id === props.selectedWorkId)
    return current?.title ?? ''
})

const handleSelect = (work: Work) => {
    emit('select', work)
    isOpen.value = false
}
</script>

<style scoped>
.works-drawer {
    margin-bottom: 16px;
}

/* トグルボタン */
.works-drawer-toggle {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 10px 14px;
    border-radius: 999px;
    border: none;
    background: #222;
    color: #fff;
    font-size: 14px;
}

.works-drawer-icon {
    display: inline-flex;
    flex-direction: column;
    gap: 3px;
}

.works-drawer-icon span {
    width: 16px;
    height: 2px;
    border-radius: 999px;
    background: #fff;
}

.works-drawer-label {
    font-weight: 600;
}

.works-drawer-current {
    font-size: 12px;
    opacity: 0.8;
}

/* オーバーレイ＋パネル */
.works-drawer-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    display: flex;
    justify-content: flex-end;
    z-index: 2000;
}

.works-drawer-panel {
    width: 80%;
    max-width: 320px;
    height: 100%;
    background: #f7f7f7;
    padding: 16px;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.25);
    overflow-y: auto;
}

.works-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
}

.works-drawer-title {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
}

.works-drawer-close {
    background: transparent;
    border: none;
    font-size: 22px;
    cursor: pointer;
}

/* 一覧 */
.works-drawer-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.works-drawer-item {
    width: 100%;
    text-align: left;
    padding: 10px 12px;
    border-radius: 10px;
    border: none;
    background: #f2ffab;
    font-size: 14px;
    cursor: pointer;
}

.works-drawer-item.is-active {
    background: #222;
    color: #fff;
}

/* フェードアニメーション */
.works-drawer-fade-enter-active,
.works-drawer-fade-leave-active {
    transition: opacity 0.2s ease;
}

.works-drawer-fade-enter-from,
.works-drawer-fade-leave-to {
    opacity: 0;
}
</style>
