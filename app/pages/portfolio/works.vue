<template>
  <section class="page">
    <h1>Works</h1>

    <div class="works-category-buttons">
      <button :class="{ active: selectedCategory === 'web' }" @click="selectedCategory = 'web'">WEBサイト制作</button>
      <button :class="{ active: selectedCategory === 'graphic' }"
        @click="selectedCategory = 'graphic'">グラフィック作品</button>
    </div>

    <template v-if="selectedCategory === 'graphic' || selectedCategory === 'web'">
      <!-- スマホ：ハンバーガーメニューで一覧を開く -->
      <div class="works-list-mobile">
        <WorksListDrawer :works="currentWorks" :selected-work-id="selectedWork?.id ?? null" @select="selectWork" />
      </div>

      <div class="works-layout">
        <!-- PC：左カラムに一覧（スマホでは非表示） -->
        <div class="works-list-desktop">
          <WorksList :works="currentWorks" :selected-work-id="selectedWork?.id ?? null" @select="selectWork" />
        </div>

        <!-- 右：プレビュー（PC/スマホ共通） -->
        <div>
          <WorksPreview :work="selectedWork" />
          <template v-if="selectedCategory === 'web' && selectedWork">
            <div class="web-description">
              <p v-html="selectedWork.description.replace(/\r?\n/g, '<br>')"></p>
              <div class="web-links">
                <a v-if="selectedWork.gitUrl" :href="selectedWork.gitUrl[0]" target="_blank" rel="noopener"
                  class="web-link">フロントエンド：GitHub</a>
                <a v-if="selectedWork.gitUrl && selectedWork.gitUrl.length > 1" :href="selectedWork.gitUrl[1]"
                  target="_blank" rel="noopener" class="web-link">バックエンド：GitHub</a>
                <a v-if="selectedWork.webUrl" :href="selectedWork.webUrl" target="_blank" rel="noopener"
                  class="web-link">WEBサイト</a>
              </div>
            </div>
          </template>
        </div>
      </div>
    </template>

    <!-- ナビゲーションボタン -->
    <PageNavButtons back-to="/portfolio/experience" next-to="/portfolio/contact" />
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import PageNavButtons from '~/components/common/PageNavButtons.vue'
import WorksList from '~/components/works/WorksList.vue'
import WorksPreview from '~/components/works/WorksPreview.vue'
import WorksListDrawer from '~/components/works/WorksListDrawer.vue'
import { worksData, type Work } from '~/data/works/worksData'
import { webWorksData, type WebWork } from '~/data/works/webWorksData'

const works = ref<Work[]>(worksData)
const webWorks = ref<WebWork[]>(webWorksData)

// 選択中の作品リストをカテゴリで切り替え
const currentWorks = computed(() =>
  selectedCategory.value === 'web' ? webWorks.value : works.value
)

// カテゴリ選択状態
const selectedCategory = ref<'graphic' | 'web'>('web')

// 最初の1件を選択状態に
const selectedWork = ref<any>(currentWorks.value[0] ?? null)

// カテゴリ切り替え時に選択作品もリセット
watch(selectedCategory, () => {
  selectedWork.value = currentWorks.value[0] ?? null
})

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

/* 作品カテゴリ選択ボタン */
.works-category-buttons {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
}

.works-category-buttons button {
  padding: 8px 20px;
  border-radius: 20px;
  border: 1px solid #333;
  background: #fff;
  color: #333;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.works-category-buttons button.active {
  background: #333;
  color: #fff;
}

.web-placeholder {
  margin: 40px 0;
  text-align: center;
  color: #888;
  font-size: 18px;
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

.web-links {
  margin-top: 16px;
  display: flex;
  gap: 16px;
}

.web-description {
  margin-top: 16px;
  font-size: 15px;
  color: #333;
}
</style>
