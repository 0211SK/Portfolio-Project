<template>
  <section class="page">
    <h1>Works</h1>

    <div class="works-layout">
      <!-- 左：作品一覧 -->
      <WorksList :works="works" :selected-work-id="selectedWork?.id ?? null" @select="selectWork" />

      <!-- 右：作品プレビュー -->
      <WorksPreview :work="selectedWork" />
    </div>

    <!-- ナビゲーションボタン -->
    <PageNavButtons back-to="/portfolio/experience" next-to="/portfolio/contact" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageNavButtons from '~/components/common/PageNavButtons.vue'
import WorksList from '~/components/works/WorksList.vue'
import WorksPreview from '~/components/works/WorksPreview.vue'
import { worksData, type Work } from '~/data/works/worksData'

const works = ref<Work[]>(worksData)

// 最初の1件を選択状態に
const selectedWork = ref<Work | null>(works.value[0] ?? null)

const selectWork = (work: Work) => {
  selectedWork.value = work
}
</script>

<style scoped>
.works-layout {
  display: grid;
  grid-template-columns: minmax(220px, 260px) 1fr;
  gap: 24px;
  margin-top: 24px;
}

/* スマホ対応 */
@media (max-width: 768px) {
  .works-layout {
    grid-template-columns: 1fr;
  }
}
</style>
