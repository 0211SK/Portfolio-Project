<template>
  <section class="page">
    <div>
      <h1>Contact</h1>
      <div class="contact-center-wrapper">
        <p class="page-description">
          最後まで閲覧いただきありがとうございます。<br>
          お仕事のご相談やご質問などがありましたら、こちらのフォームからお気軽にご連絡ください。
        </p>
        <p>
          ※フォーム送信がうまくいかない場合は、
          「sugawarakotono0211@gmail.com」まで直接ご連絡ください。
        </p>

        <!-- フォーム -->
        <ContactForm />
      </div>
    </div>
    <!-- 戻るナビゲーション -->
    <PageNavButtons back-to="/portfolio/works" />
  </section>
</template>

<script setup lang="ts">
import PageNavButtons from '~/components/common/PageNavButtons.vue'
import ContactForm from '~/components/contact/ContactForm.vue'
</script>

<style scoped>
.contact-center-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  gap: 16px;
}

.contact-center-wrapper .page-description,
.contact-center-wrapper p {
  text-align: center;
}
</style>