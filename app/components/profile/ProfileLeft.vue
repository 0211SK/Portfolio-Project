<template>
    <div class="profile-left">
        <figure class="profile-photo">
            <img src="/images/IMG_0556.jpeg" alt="プロフィール写真" />
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
</template>

<script setup lang="ts">
</script>

<style scoped>
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
</style>
