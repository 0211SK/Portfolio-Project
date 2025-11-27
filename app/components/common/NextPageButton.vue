<template>
    <button class="next-page-button" @click="goNext">
        次へ →
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
const goNext = () => {
    router.push(props.to)
}
</script>