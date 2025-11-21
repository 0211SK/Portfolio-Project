<template>
  <section class="page">
    <h1>Skill</h1>
    <ul>
      <li>HTML / CSS</li>
      <li>JavaScript / TypeScript</li>
      <li>Vue.js / Nuxt</li>
    </ul>

    <!-- ナビゲーションボタン -->
    <PageNavButtons back-to="/portfolio/works" />
  </section>
</template>

<script setup lang="ts">
import PageNavButtons from '~/components/common/PageNavButtons.vue';
</script>