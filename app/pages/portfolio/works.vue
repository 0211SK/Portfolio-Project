<template>
  <section class="page">
    <h1>Works</h1>

    <div class="works-layout">
      <!-- 左：作品一覧 -->
      <aside class="works-list">
        <h2 class="works-list-title">制作物一覧</h2>
        <ul>
          <li v-for="work in works" :key="work.id"
            :class="['works-item', { active: selectedWork && work.id === selectedWork.id }]" @click="selectWork(work)">
            {{ work.title }}
          </li>
        </ul>
      </aside>

      <!-- 右：選択中の作品プレビュー（画像） -->
      <div class="works-preview" v-if="selectedWork">
        <h2 class="works-preview-title">
          {{ selectedWork.title }}
        </h2>

        <!-- 画像をループ表示 -->
        <div class="work-image" v-for="(image, index) in selectedWork.src" :key="index">
          <img :src="image" :alt="`${selectedWork.title} ページ${index + 1}`" />
          <p class="work-image-caption">ページ {{ index + 1 }}</p>
        </div>
      </div>
    </div>

    <PageNavButtons back-to="/portfolio/experience" next-to="/portfolio/contact" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageNavButtons from '~/components/common/PageNavButtons.vue'

type Work = {
  id: number
  title: string
  src: string[]
}

const works = ref<Work[]>([
  {
    id: 1,
    title: '和菓子を包むパッケージデザイン',
    src: [
      '/images/works/1.png',
    ],
  },
  {
    id: 2,
    title: '卒業制作①',
    src: [
      '/images/works/2.png',
      '/images/works/2-2.png',
    ],
  },
])

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

.works-list {
  padding: 16px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.works-list-title {
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 700;
}

.works-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.works-item {
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.works-item+.works-item {
  margin-top: 4px;
}

.works-item:hover {
  background: #f2f2f2;
}

.works-item.active {
  background: #333;
  color: #fff;
}

.works-preview-title {
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 700;
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

.work-image-caption {
  margin-top: 4px;
  font-size: 12px;
  color: #666;
}

/* スマホ */
@media (max-width: 768px) {
  .works-layout {
    grid-template-columns: 1fr;
  }
}
</style>
