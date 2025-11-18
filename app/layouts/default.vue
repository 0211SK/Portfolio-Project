<template>
    <div class="site-wrapper">
        <!-- 共通ヘッダー -->
        <TheHeader />

        <!-- ページ本体 -->
        <main class="site-main">
            <slot />
        </main>

        <!-- フッター（必要なら） -->
        <footer class="site-footer">
            <p>© 2025 My Portfolio</p>
        </footer>
    </div>
</template>

<script setup lang="ts">
import TheHeader from '~/components/common/TheHeader.vue'
</script>