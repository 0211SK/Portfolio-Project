<template>
    <section class="page home-center">
        <h1>Welcome to My Portfolio</h1>
        <p>このサイトは Nuxt4 で作成したポートフォリオサイトです。</p>

        <NuxtLink to="/portfolio/top" class="btn">
            ポートフォリオを見る
        </NuxtLink>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.home-center {
    /* 画面中央に配置するためのレイアウト */
    /* ヘッダー分を引く */
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    /* 横方向の中央 */
    justify-content: center;
    /* 縦方向の中央 */
    text-align: center;
    gap: 20px;
}
</style>
