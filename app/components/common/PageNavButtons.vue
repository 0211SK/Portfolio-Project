<template>
    <div class="button-position">
        <!-- 戻るだけ表示したいページでは back-to だけ渡す -->
        <BackPageButton v-if="backTo" :to="backTo" />

        <!-- 次へだけ表示したいページでは next-to だけ渡す -->
        <NextPageButton v-if="nextTo" :to="nextTo" />
    </div>
</template>

<script setup lang="ts">
import NextPageButton from '~/components/common/NextPageButton.vue'
import BackPageButton from '~/components/common/BackPageButton.vue'

const props = defineProps<{
    backTo?: string
    nextTo?: string
}>()
</script>
