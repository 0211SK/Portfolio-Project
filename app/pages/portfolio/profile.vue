<template>
  <section class="page profile-page">
    <div class="profile-inner">

      <!-- 3カラム -->
      <div class="profile-grid">
        <!-- ───────── 左カラム：写真＋基本情報 ───────── -->
        <div class="profile-left">
          <figure class="profile-photo">
            <!-- プロフィール画像 -->
            <img src="/images/DSC04152.JPG" alt="プロフィール写真" />
          </figure>

          <div class="profile-name-block">
            <h1 class="profile-name-ja">菅原 古都乃</h1>
            <p class="profile-name-en">sugawara kotono</p>

            <ul class="profile-basic">
              <li>嵯峨美術大学　芸術学部　デザイン学科　グラフィックデザイン領域</li>
              <li>Saga Art University Faculty of Arts Department of Design Graphic Design Program</li>
              <li>2001.2.11</li>
            </ul>
          </div>
        </div>

        <!-- ───────── 中央カラム：ABOUT / SKILLS ───────── -->
        <div class="profile-center">
          <!-- ABOUT ME -->
          <section class="about-block">
            <h2 class="section-title">
              <span class="en">ABOUT ME</span>
              <span class="ja">わたしについて</span>
            </h2>
            <p class="about-text">
              小さいころからお菓子作りや絵を描くことが好きで、将来は何かを作る職業に就きたいなとぼんやり思いながら過ごす中、
              大学のWEBデザインの授業でプログラムに触れたことがIT業界に入るきっかけになりました。
              <br />
              様々な案件に参画する中で、新しいことに挑戦する楽しさとやりがいを日々感じています。
            </p>
          </section>

          <!-- SKILLS -->
          <section class="skills-block">
            <h2 class="section-title">
              <span class="en">SKILLS</span>
              <span class="ja">スキル</span>
            </h2>

            <div class="skills-radar-wrapper">
              <SkillRadar title="Frontend" :labels="frontendLabels" :values="frontendValues" />
              <SkillRadar title="Backend" :labels="backendLabels" :values="backendValues" />
            </div>
          </section>
        </div>

        <!-- ───────── 右カラム：WORK EXPERIENCE タイムライン ───────── -->
        <div class="profile-right">
          <section class="work-block">
            <h2 class="section-title">
              <span class="en">MY LIFE</span>
              <span class="ja">歩んできた道</span>
            </h2>

            <div class="timeline">
              <div v-for="item in myLifeData" :key="item.id" class="timeline-row">
                <div class="timeline-year">
                  {{ item.year }}
                </div>
                <div class="timeline-line">
                  <span class="timeline-dot" />
                </div>
                <div class="timeline-detail">
                  <p class="timeline-title">{{ item.title }}</p>
                  <p v-if="item.note" class="timeline-note">
                    {{ item.note }}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>

    <!-- ナビゲーションボタン -->
    <PageNavButtons back-to="/portfolio/top" next-to="/portfolio/experience" />
  </section>
</template>

<script setup lang="ts">
import PageNavButtons from '~/components/common/PageNavButtons.vue'
import SkillRadar from '~/components/profile/SkillRadar.vue'
import { frontendLabels, frontendValues, backendLabels, backendValues } from '~/data/profile/skillData'
import { myLifeData } from '~/data/profile/myLifeData'
</script>

<style scoped>
.profile-page {
  display: flex;
  justify-content: center;
}

.profile-inner {
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
}

.profile-grid {
  display: grid;
  grid-template-columns: 1.3fr 1.8fr 1.6fr;
  gap: 60px;
  /* 各カラムを上揃えにする */
  align-items: flex-start;
}

.profile-center {
  /* 中央カラムの中身を上から順に並べる */
  display: flex;
  flex-direction: column;
  /* ABOUT と SKILLS の間の余白 */
  gap: 32px;
}

/* 左カラム */
.profile-left {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.profile-photo img {
  width: 100%;
  border-radius: 6px;
  object-fit: cover;
}

.profile-name-block {
  padding-top: 16px;
  border-top: 5px solid #f0c14b;
}

.profile-name-ja {
  margin: 0;
  font-size: 32px;
  font-weight: 700;
}

.profile-name-en {
  margin: 6px 0 12px;
  font-size: 15px;
  color: #777;
}

.profile-basic {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 15px;
  line-height: 1.9;
}

/* 中央カラム */
.section-title {
  font-size: 18px;
  letter-spacing: 0.08em;
  margin: 0 0 14px;
}

.section-title .en {
  font-weight: 700;
  margin-right: 10px;
}

.section-title .ja {
  font-size: 13px;
  color: #999;
}

/* ABOUT ブロック */
.about-block {
  margin-bottom: 0;
}

.about-text {
  font-size: 16px;
  line-height: 1.9;
}

/* SKILLS（レーダーチャート） */
.skills-block {
  margin-top: 0;
}

.skills-radar-wrapper {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  /* Frontend と Backend の間の余白 */
  gap: 24px;
  align-items: center;
}

/* 右カラム：タイムライン */
.work-block {
  padding-left: 12px;
}

.timeline {
  margin-top: 16px;
  position: relative;
}

.timeline::before {
  content: "";
  position: absolute;
  top: 3px;
  bottom: 0;
  left: 110px;
  width: 2px;
  background: #f2d37a;
}

.timeline-row {
  display: grid;
  grid-template-columns: 100px 24px 1fr;
  align-items: flex-start;
  font-size: 15px;
  margin-bottom: 18px;
}

.timeline-year {
  color: #555;
}

.timeline-line {
  position: relative;
  width: 24px;
}

.timeline-dot {
  position: relative;
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background: #f5a623;
  margin-top: 2px;
  margin-left: 4px;
}

.timeline-title {
  margin: 0;
  font-weight: 600;
  font-size: 16px;
}

.timeline-note {
  margin: 0;
  color: #555;
  font-size: 14px;
}

/* レスポンシブ */
@media (max-width: 900px) {
  .profile-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
