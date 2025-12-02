<template>
  <section class="page">
    <h1>Works</h1>

    <!-- スマホ：ハンバーガーメニューで一覧を開く -->
    <div class="works-list-mobile">
      <WorksListDrawer :works="works" :selected-work-id="selectedWork?.id ?? null" @select="selectWork" />
    </div>

    <div class="works-layout">
      <!-- PC：左カラムに一覧（スマホでは非表示） -->
      <div class="works-list-desktop">
        <WorksList :works="works" :selected-work-id="selectedWork?.id ?? null" @select="selectWork" />
      </div>

      <!-- 右：プレビュー（PC/スマホ共通） -->
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
import WorksListDrawer from '~/components/works/WorksListDrawer.vue'
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
  margin-top: 16px;
}

/* スマホ用トグルボタンのラッパー */
.works-list-mobile {
  margin-top: 16px;
}

/* PC ではモバイル用を隠す */
@media (min-width: 769px) {
  .works-list-mobile {
    display: none;
  }
}

/* スマホでは左カラムを消して1カラムにする */
@media (max-width: 768px) {
  .works-layout {
    grid-template-columns: 1fr;
  }

  .works-list-desktop {
    display: none;
  }
}
</style>
