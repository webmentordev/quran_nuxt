<template>
    <div class="px-4">
        <ul class="py-6 verses" v-if="data.length">
            <li class="text-end border-b border-gray-200 py-3 text-2xl" v-for="(verse, index) in data" :key="index"><span>{{ verse.text_madani }}</span></li>
        </ul>
        <div class="flex items-center m-auto max-w-fit" v-else>
            <Icon class="text-5xl" name="eos-icons:bubble-loading" />
            <h2 class="ml-3 text-xl font-semibold">Loading...</h2>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const route = useRoute();
    const data = ref([]);
    onMounted(() => {
        $fetch(`http://api.quran.com/api/v3/chapters/${route.params.id}/verses?translations=21&language=en&text_type=words`).then((response) => {
            data.value = response.verses
        })
    })
</script>