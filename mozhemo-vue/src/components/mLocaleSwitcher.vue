<template>
<div class="lang-switch">
      <ul class="nav lang-item">
                    <li class="nav-item">
                        <a href="#" class="nav-link lang" @click="setLocale('ua')">UA</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link lang" @click="setLocale('en')">EN</a>
                    </li>
                </ul>
</div>
</template>

<script>
export default {
    name: 'mLocaleSwitcher',
    methods: {
      setLocale(locale){
          this.$i18n.locale = locale
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
.lang, .lang:visited{
    border-radius: 25px;
    padding: 10px 10px;
    margin-right: 10px;
    color: #36b6cd;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
}
.lang:hover{
    transition: 0s;
    background-color: #36b6cd;
    color: white;
    border-radius: 20px;
    font-weight: bold;
}
.active{
    background-color: #36b6cd;
    color: #fff !important;
    border-radius: 20px;
    font-weight: bold;
}
</style>