<template>
    <aside class="works-list">
        <h2 class="works-list-title">制作物一覧</h2>
        <ul>
            <li v-for="work in works" :key="work.id"
                :class="['works-item', { active: selectedWorkId !== null && work.id === selectedWorkId }]"
                @click="handleSelect(work)">
                {{ work.title }}
            </li>
        </ul>
    </aside>
</template>

<script setup lang="ts">
import type { Work } from '~/data/works/worksData'

const props = defineProps<{
    works: Work[]
    selectedWorkId: number | null
}>()

const emit = defineEmits<{
    (e: 'select', work: Work): void
}>()

const handleSelect = (work: Work) => {
    emit('select', work)
}
</script>

<style scoped>
.works-list {
    padding: 16px;
    border-radius: 16px;
    background: #d9d9d9;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    /* 高さ固定＋スクロール */
    max-height: 400px;
    overflow-y: auto;
}

.works-list-title {
    margin-top: 0;
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 700;
}

.works-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.works-item {
    padding: 8px 10px;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease;
}

.works-item+.works-item {
    margin-top: 4px;
}

.works-item:hover {
    background: #f2f2f2;
}

.works-item.active {
    background: #333;
    color: #fff;
}
</style>
