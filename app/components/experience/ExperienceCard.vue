<template>
    <div class="exp-card" @click="$emit('open')">
        <h3 class="exp-title">{{ title }}</h3>
        <p class="exp-summary">{{ summary }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string
    summary: string
}>()

defineEmits(['open'])
</script>

<style scoped>
.exp-card {
    background: #ecfee6;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: transform .2s ease, box-shadow .2s ease;
}

.exp-card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

.exp-title {
    margin: 0 0 8px;
    font-size: 20px;
    font-weight: bold;
}

.exp-summary {
    margin: 0;
    font-size: 14px;
    color: #666;
    /* 改行・連続スペースをそのまま反映 */
    white-space: pre-wrap;
}
</style>
