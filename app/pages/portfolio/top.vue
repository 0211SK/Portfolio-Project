<template>
    <section class="page top-page">

        <div class="hero-container">
            <img src="/images/DSC01792.jpg" class="hero-bg" alt="メイン画像" />

            <div class="hero-text">
                <p>
                    初めまして。<br>
                    このサイトでは、私が現在までにエンジニアとして経験したことや制作した作品を紹介しています。<br>
                    私について少しでも知っていただけると嬉しいです。
                </p>
            </div>
        </div>

        <!-- 次ページボタン -->
        <NextPageButton to="/portfolio/profile" />

    </section>
</template>

<script setup lang="ts">
import NextPageButton from '~/components/common/NextPageButton.vue'
</script>
