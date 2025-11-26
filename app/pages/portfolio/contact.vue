<template>
  <section class="page">
    <h1>Contact</h1>
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

    <!-- 戻るナビゲーション -->
    <PageNavButtons back-to="/portfolio/works" />
  </section>
</template>

<script setup lang="ts">
import PageNavButtons from '~/components/common/PageNavButtons.vue'
import ContactForm from '~/components/contact/ContactForm.vue'
</script>
