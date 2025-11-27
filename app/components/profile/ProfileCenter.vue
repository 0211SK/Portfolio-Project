<template>
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
</template>

<script setup lang="ts">
import SkillRadar from '~/components/profile/SkillRadar.vue'
import {
    frontendLabels,
    frontendValues,
    backendLabels,
    backendValues,
} from '~/data/profile/skillData'
</script>

<style scoped>
.profile-center {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

/* セクションタイトル共通 */
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
    gap: 24px;
    align-items: center;
}
</style>
