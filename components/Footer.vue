<template>
    <footer class="text-center py-6">
        <p class="text-sm text-gray-600">{{ date }} Holy Quran | Powered by <Icon class="text-5xl mx-2 -mt-1" name="logos:nuxt" /> | Created by <NuxtLink class="hover:underline font-semibold" to="https://www.fiverr.com/mahmer97" rel="nofollow" target="_blank">mahmer97</NuxtLink></p>
    </footer>
</template>

<script setup>
    const date = new Date().getFullYear();
</script>