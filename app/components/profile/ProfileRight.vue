<template>
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
</template>

<script setup lang="ts">
import { myLifeData } from '~/data/profile/myLifeData'
</script>

<style scoped>
.work-block {
    padding-left: 12px;
}

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

/* タイムライン */
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
</style>
