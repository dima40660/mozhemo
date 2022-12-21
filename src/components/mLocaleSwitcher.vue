<template>
<div class="lang-switch">
  <ul class="nav lang-item">
    <!--div class="locale-changer">
        <select class="lang-btn" v-model="$i18n.locale">
          <option class="language" value="UA">UA</option>
          <option class="language" value="EN">EN</option>
        </select>
      </div-->
      <a href="#" class="lang-btn" :class="{active: ActiveLocale('UA') }" @click="setLocale('UA')">UA</a>
      <a href="#" class="lang-btn" :class="{active: ActiveLocale('EN') }" @click="setLocale('EN')">EN</a>
    </ul>
</div>
</template>

<script>
    export default {
    name: 'mLocaleSwitcher',
    data() {
      return { 
        langs: ['UA', 'EN']
      }
    },
    methods: {
      setLocale(locale){
        this.$i18n.locale = locale
        localStorage.setItem('lang', locale)
      },
      ActiveLocale(locale){
        return this.$i18n.locale == locale
      }
    }
  }
</script>

<style>
.lang-item{
  margin-left: 2rem;
  margin-top: 3rem;
  margin-bottom: 0.5rem;
}
.lang-btn,.lang-btn:visited{
  border-radius: 25px;
  padding: 10px 10px;
  margin-right: 10px;
  color: #36b6cd;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
}
.lang-btn:hover{
  transition: 0s;
  background-color: #fff;
  color: #36b6cd;
  border-radius: 20px;
  font-weight: bold;
}
.active{
  background-color: #36b6cd;
  color: #fff !important;
  border-radius: 20px;
  font-weight: bold;
}
.active:hover{
  transition: 0s;
  background-color: #fff;
  color: #36b6cd !important;
  border-radius: 20px;
  font-weight: bold;
}
</style>