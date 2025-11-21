<template>
  <section class="page">

    <h1>実績</h1>

    <div class="exp-grid">
      <ExperienceCard v-for="item in experiencesData" :key="item.id" :title="item.title" :summary="item.summary"
        @open="openModal(item)" />
    </div>

    <ExperienceModal v-if="selected" :title="selected.title" :detail="selected.detail" :timeline="selected.timeline"
      @close="selected = null" />

    <!-- ナビゲーションボタン -->
    <PageNavButtons back-to="/portfolio/profile" next-to="/portfolio/works" />

  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageNavButtons from '~/components/common/PageNavButtons.vue'
import ExperienceCard from '~/components/experience/ExperienceCard.vue'
import ExperienceModal from '~/components/experience/ExperienceModal.vue'
import { experiencesData, type Experience } from '~/data/experience/experiencesData'

const selected = ref<Experience | null>(null)

const openModal = (item: Experience) => {
  selected.value = item
}
</script>

<style scoped>
.exp-grid {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}
</style>
