import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'

import en from '../src/locales/en.json'
import ua from '../src/locales/ua.json'

const i18n = createI18n({
    locale: 'en',
    messages: {
        en,
        ua
    }
})

const store = createStore({
    onLanguageChange () {
        this.changeLanguage({ lang: this.selectedLang, i18n: this.$i18n })
      }
  })

createApp(App).use(store).use(VueCookies).use(i18n).use(router).mount('#app');



