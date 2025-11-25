<template>
    <section class="page top-page">

        <div class="hero-container">
            <img src="/images/IMG_0545.jpeg" class="hero-bg" alt="メイン画像" />

            <div class="hero-text">
                <p>
                    初めまして。<br>
                    このサイトでは、私が現在までにエンジニアとして経験したことや制作した作品を紹介しています。<br>
                    私について少しでも知っていただけると嬉しいです。
                </p>
            </div>
        </div>

        <!-- ナビゲーションボタン -->
        <PageNavButtons next-to="/portfolio/profile" />
    </section>
</template>

<script setup lang="ts">
import PageNavButtons from '~/components/common/PageNavButtons.vue'
</script>
