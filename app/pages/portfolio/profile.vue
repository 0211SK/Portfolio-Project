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
              <span class="en">WORK EXPERIENCE</span>
              <span class="ja">経歴</span>
            </h2>

            <div class="timeline">
              <div v-for="item in works" :key="item.id" class="timeline-row">
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
    <!-- 次ページボタン -->
    <NextPageButton to="/portfolio/experience" />
  </section>
</template>

<script setup lang="ts">
import NextPageButton from '~/components/common/NextPageButton.vue'
import SkillRadar from '~/components/profile/SkillRadar.vue'

// フロントエンド側の項目とスコア（0〜5 くらいで）
const frontendLabels = [
  'HTML / CSS',
  'JavaScript',
  'TypeScript',
  'Vue / Nuxt',
  'UI デザイン',
  'レスポンシブ'
]
const frontendValues = [4, 4, 3, 4, 3, 4]

// バックエンド側
const backendLabels = [
  'Java / Kotlin',
  'API設計',
  'BFF',
  'DB 設計',
  'テストコード',
  'パフォーマンス'
]
const backendValues = [3, 3, 4, 2, 4, 3]

type Work = {
  id: number
  year: string
  title: string
  note?: string
}

const works: Work[] = [
  {
    id: 1,
    year: '2001.2',
    title: '京都にて誕生',
    note: '小さなころからものづくりが好きで、絵を描いたりお菓子作りをして過ごす。'
  },
  {
    id: 2,
    year: '2012.3',
    title: '猫を飼い始める',
    note: '最終的に3匹まで増え、現在も一緒に暮らしている。'
  },
  {
    id: 3,
    year: '2016.4',
    title: '京都芸術高等学校 入学',
    note: 'イラスト・造形・デッサン・デザインなど芸術について幅広く学ぶ。学校生活に慣れてきた頃、餃子の王将でアルバイトを始める。'
  },
  {
    id: 4,
    year: '2017.4',
    title: 'グラフィックデザインコースへ進級',
    note: 'デザインを本格的に学び始める。鼻炎に悩み病院へ行くと花粉症と猫アレルギーだと診断される。'
  },
  {
    id: 5,
    year: '2019.3',
    title: '京都芸術高等学校 卒業',
    note: '高校卒業と共に餃子の王将を辞め、レストランのキッチンでアルバイトを始める。'
  },
  {
    id: 6,
    year: '2019.4',
    title: '嵯峨美術大学 入学',
    note: 'デザイン学科 グラフィックデザイン領域へ。大学のWEBデザインの授業でプログラムに触れ、IT業界に興味を持つきっかけに。'
  },
  {
    id: 7,
    year: '2023.3',
    title: '嵯峨美術大学 卒業',
    note: '卒業制作では、和菓子の魅力を伝えるためのパッケージデザインを制作。'

  },
  {
    id: 8,
    year: '2023.6',
    title: '株式会社ドライブライン 入社',
    note: '現在に至る。'
  }
]
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

.timeline-line::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: -16px;
  left: 11px;
  width: 2px;
  background: #f2d37a;
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
