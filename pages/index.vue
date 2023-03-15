<template>
    <div class="px-4">
        <h1 class="text-5xl mb-6 font-semibold">Learn the Holy Quran</h1>
        <p class="text-gray-700 mb-8">The Quran, also romanized Qur'an or Koran, is the central religious text of Islam, believed by Muslims to be a revelation from God. It is organized in <b>114 chapters</b>, which consist of verses</p>
        <ul class="surahs flex flex-wrap">
            <NuxtLink :to='`/surah/${surah.id}`' class="font-semibold p-2 px-3 mr-3 rounded-full border-gray-200 border mb-2 cursor-pointer" v-for="surah in data">{{ surah.name_arabic }}</NuxtLink>
        </ul>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const data = ref([]);

    onMounted(() => {
        $fetch("http://api.quran.com/api/v3/chapters").then((response) => {
            data.value = response.chapters;
        })
    })
</script>