<template>
  <section class="page">
    <h1>Contact</h1>
    <p class="page-description">
      お仕事のご相談やご質問などがありましたら、こちらのフォームからお気軽にご連絡ください。
    </p>
    <p>※フォーム送信がうまくいかない場合は、
      「sugawarakotono0211@gmail.com」まで直接ご連絡ください。</p>

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
        <textarea id="message" v-model="form.message" rows="6" required></textarea>
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

type ContactResponse = {
  success: boolean
  error?: string
}

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

  if (!form.name || !form.email || !form.message) {
    error.value = 'すべての必須項目が入力されていません。'
    return
  }

  try {
    submitting.value = true

    // メール受信API呼び出し
    const res = await $fetch<ContactResponse>('/api/contact', {
      method: 'POST',
      body: { ...form },
    })

    if (res.success) {
      submitted.value = true
      form.name = ''
      form.email = ''
      form.message = ''
    } else {
      error.value = res.error || '送信に失敗しました。'
    }
  } catch (err) {
    error.value = '通信エラーが発生しました。'
  } finally {
    submitting.value = false
  }
}
</script>
