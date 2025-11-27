<template>
    <button class="back-page-button" @click="goBack">
        ← 戻る
    </button>
</template>

<script setup lang="ts">
/**
 * props で遷移先を受け取る
 */
const props = defineProps<{
    to: string
}>()

/**
 * ページ遷移
 */
const router = useRouter()
const goBack = () => {
    router.push(props.to)
}
</script>