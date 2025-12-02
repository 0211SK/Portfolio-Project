<template>
  <section class="page profile-page">
    <div class="profile-inner">
      <div class="profile-grid">
        <!-- 左：写真＋基本情報 -->
        <ProfileLeft />

        <!-- 中央：ABOUT + SKILLS -->
        <ProfileCenter />

        <!-- 右：MY LIFE タイムライン -->
        <ProfileRight />
      </div>
    </div>

    <!-- ナビゲーションボタン -->
    <PageNavButtons back-to="/portfolio/top" next-to="/portfolio/experience" />
  </section>
</template>

<script setup lang="ts">
import PageNavButtons from '~/components/common/PageNavButtons.vue'
import ProfileLeft from '~/components/profile/ProfileLeft.vue'
import ProfileCenter from '~/components/profile/ProfileCenter.vue'
import ProfileRight from '~/components/profile/ProfileRight.vue'
</script>

<style scoped>
.profile-inner {
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
}

.profile-grid {
  display: grid;
  grid-template-columns: 1.3fr 1.8fr 1.6fr;
  gap: 60px;
  align-items: flex-start;
}

/* レスポンシブ */
@media (max-width: 900px) {
  .profile-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
