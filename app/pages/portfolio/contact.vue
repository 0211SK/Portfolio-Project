<template>
  <section class="page">
    <h1>Contact</h1>
    <p class="page-description">
      お仕事のご相談やご質問などがありましたら、こちらのフォームからお気軽にご連絡ください。
    </p>
    <p>※現在フォーム送信は実装していないため、何かありましたら「sugawarakotono0211@gmail.com」までお願いします。</p>

    <form class="contact-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">お名前<span class="required">*</span></label>
        <input id="name" type="text" v-model="form.name" required />
      </div>

      <div class="form-group">
        <label for="email">メールアドレス<span class="required">*</span></label>
        <input id="email" type="email" v-model="form.email" required />
      </div>

      <div class="form-group">
        <label for="message">お問い合わせ内容<span class="required">*</span></label>
        <textarea id="message" v-model="form.message" rows="6" required />
      </div>

      <!-- エラー/成功メッセージ -->
      <p v-if="error" class="form-message form-message-error">
        {{ error }}
      </p>
      <p v-if="submitted" class="form-message form-message-success">
        送信が完了しました。ありがとうございます。
      </p>

      <button type="submit" class="form-submit-button" :disabled="submitting">
        {{ submitting ? '送信中…' : '送信する' }}
      </button>
    </form>

    <!-- 戻るナビゲーション -->
    <PageNavButtons back-to="/portfolio/works" />
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import PageNavButtons from '~/components/common/PageNavButtons.vue'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const submitting = ref(false)
const submitted = ref(false)
const error = ref('')

const handleSubmit = async () => {
  error.value = ''
  submitted.value = false

  // 簡易バリデーション
  if (!form.name || !form.email || !form.message) {
    error.value = 'すべての必須項目を入力してください。'
    return
  }

  try {
    submitting.value = true

    // ▼ 実際の送信処理はここに実装（例：/api/contact へ POST）
    // const res = await $fetch('/api/contact', {
    //   method: 'POST',
    //   body: { ...form },
    // })

    // デモ用：0.5秒待って成功とみなす
    await new Promise((resolve) => setTimeout(resolve, 500))

    submitted.value = true
    // フォームリセット
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (e) {
    error.value = '送信に失敗しました。時間をおいて再度お試しください。'
  } finally {
    submitting.value = false
  }
}
</script>
