<template>
    <section class="page">
        <h1>Portfolio Top</h1>
        <p>ここに自己紹介やメインビジュアルなどを配置します。</p>

        <figure class="hero-image">
            <img src="/images/DSC01792.jpg" alt="メイン画像" />
            <figcaption>メインビジュアルのキャプション</figcaption>
        </figure>
        <!-- 次ページボタン -->
        <NextPageButton to="/portfolio/profile" />
    </section>
</template>

<script setup lang="ts">
import NextPageButton from '~/components/common/NextPageButton.vue'
</script>