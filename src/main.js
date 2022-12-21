import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import VueCookies from 'vue-cookies'

const store = createStore({
    onLanguageChange () {
        this.changeLanguage({ lang: this.selectedLang, i18n: this.$i18n })
      }
  })

createApp(App).use(store).use(VueCookies).use(i18n).use(router).mount('#app');



