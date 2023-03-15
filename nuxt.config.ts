// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    app: {
        head: {
            title: "Read The Holy Quran",
            meta: [
                {
                    name: "description",
                    content: "The Quran, also romanized Qur'an or Koran, is the central religious text of Islam, believed by Muslims to be a revelation from God. It is organized in 114 chapters, which consist of verses"
                }
            ],
            link: [
                {
                    rel: "shortcut icon",
                    href: "/quran.png"
                }
            ]
        }
    }
})
