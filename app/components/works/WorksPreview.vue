<template>
    <div class="works-preview">
        <!-- まだ何も選択されていない場合 -->
        <p v-if="!work" class="works-preview-empty">
            作品を選択してください。
        </p>

        <!-- 作品が選択されている場合 -->
        <template v-else>
            <h2 class="works-preview-title">
                {{ work.title }}
            </h2>

            <div class="work-image" v-for="(image, index) in work.src" :key="index">
                <img :src="image" :alt="`${work.title} ページ${index + 1}`" />
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import type { Work } from '~/data/works/worksData'

const props = defineProps<{
    work: Work | null
}>()
</script>

<style scoped>
.works-preview-title {
    margin-top: 0;
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 700;
}

.works-preview-empty {
    margin-top: 8px;
    color: #777;
    font-size: 14px;
}

.work-image {
    margin-bottom: 16px;
}

.work-image img {
    width: 100%;
    max-height: 600px;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

/* プレビュー側の背景と枠を消す */
.works-preview {
    background: transparent !important;
    box-shadow: none !important;
    border: none !important;
}

/* 画像ブロックの枠も完全に消す */
.work-image img {
    background: transparent !important;
    box-shadow: none !important;
    border: none !important;
}
</style>