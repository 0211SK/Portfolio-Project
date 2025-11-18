<template>
  <NuxtLayout>
    <!-- ページ遷移中だけローディングを表示 -->
    <TheLoading v-if="loading" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TheLoading from '~/components/common/TheLoading.vue'

const loading = ref(false)
const nuxtApp = useNuxtApp()

nuxtApp.hook('page:start', () => {
  console.log('▶ page:start')
  loading.value = true
})

nuxtApp.hook('page:finish', () => {
  console.log('■ page:finish')
  loading.value = false
})

// 最初の表示でもローディングを出す
loading.value = true
</script>