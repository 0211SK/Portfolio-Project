<template>
    <div class="modal-overlay" @click.self="close">
        <div class="modal-content">
            <button class="close-btn" @click="close">×</button>

            <h2>{{ title }}</h2>

            <!-- 通常の説明文（あれば） -->
            <p v-if="detail" class="detail">
                {{ detail }}
            </p>

            <!-- タイムライン（2025/04〜2025/10 など） -->
            <section v-if="timeline && timeline.length" class="timeline">
                <h3 class="timeline-title">担当業務のタイムライン</h3>

                <div class="timeline-body">
                    <div v-for="block in timeline" :key="block.period" class="timeline-row">
                        <!-- 左側：月 -->
                        <div class="timeline-period">
                            <div class="timeline-dot" />
                            <div class="timeline-period-text">
                                {{ block.period }}
                            </div>
                        </div>

                        <!-- 右側：その月の作業一覧 -->
                        <div class="timeline-tasks">
                            <ul>
                                <li v-for="task in block.items" :key="task">
                                    {{ task }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
type TimelineBlock = {
    period: string
    items: string[]
}

const props = defineProps<{
    title: string
    detail?: string
    timeline?: TimelineBlock[]
}>()

const emit = defineEmits(['close'])

const close = () => emit('close')
</script>

<style scoped>
/* 黒背景（外クリック可能） */
.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn .2s ease;
    z-index: 2000;
}

/* 本体 */
.modal-content {
    background: white;
    padding: 28px;
    width: 90%;
    max-width: 720px;
    border-radius: 12px;
    position: relative;
    animation: popUp .2s ease;

    max-height: 80vh;
    overflow-y: auto;
    overflow-x: hidden;
}

/* × ボタン */
.close-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    background: transparent;
    border: none;
    font-size: 22px;
    cursor: pointer;
}

/* 説明文 */
.detail {
    margin-top: 16px;
    line-height: 1.7;
    white-space: pre-wrap;
    word-break: break-word;
}

/* タイムライン */
.timeline {
    margin-top: 24px;
}

.timeline-title {
    margin: 0 0 12px;
    font-size: 18px;
    font-weight: bold;
}

.timeline-body {
    border-left: 2px solid #e0e0e0;
    margin-left: 10px;
    padding-left: 16px;
}

.timeline-row {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
}

/* 左側：月＋ドット */
.timeline-period {
    display: flex;
    align-items: flex-start;
    min-width: 80px;
}

.timeline-dot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: #2c7be5;
    margin-right: 8px;
    margin-top: 5px;
}

.timeline-period-text {
    font-weight: bold;
}

/* 右側：タスク一覧 */
.timeline-tasks ul {
    margin: 0;
    padding-left: 16px;
}

.timeline-tasks li {
    line-height: 1.6;
    word-break: break-word;
}

/* アニメーション */
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes popUp {
    from {
        transform: scale(0.9);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}
</style>
