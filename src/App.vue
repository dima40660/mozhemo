<template>
        <nav class="navbar bg-custom">
            <div class="container-fluid">
                <mLocaleSwitcher />
                <router-link to="/" class="navbar-brand">
                    <img :src="imgSwitch[$i18n.locale]" alt="" srcset="">
                </router-link>    
                <ul class="nav menu">
                  <router-link to="/portfolio" class="nav-link menu-links">{{ $t('navbar.portfolio')}}</router-link>
                  <router-link to="/services" class="nav-link menu-links">{{ $t('navbar.services')}}</router-link>
                  <router-link to="/about-us" class="nav-link menu-links">{{ $t('navbar.about-us')}}</router-link>
                  <router-link to="/contacts" class="nav-link menu-links">{{ $t('navbar.contacts')}}</router-link>
                </ul>
                <ul class="nav numbers">
                        <p class="number">+380 67 37 90 996</p>
                        <p class="number">+380 67 999 18 87</p>
                </ul>
            </div>
        </nav>
        <router-view/>
<mFooter />
</template>

<script>
import mFooter from './components/mFooter.vue'
import mLocaleSwitcher from './components/mLocaleSwitcher.vue'
import logoUa from  '@/assets/logo.png'
import logoEn from '@/assets/logo-eng.png'


export default {
  name: 'App',
  components : {
    mLocaleSwitcher,
    mFooter
  },
  data () {
    return {
      imgSwitch: {
        ua: logoUa,
        en: logoEn
      }
    }
  }
}
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css");
#app {
    font-family: 'Comfortaa', cursive;
    font-family: 'Nunito', sans-serif;
    place-items: center;
    background-color: white;
    position: relative;
    overflow-x: hidden;
    max-width: 1920px;
    margin: auto;
}

/*scroll bar*/
/* width */
::-webkit-scrollbar {
    width: 5px;
    border-radius: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(70, 70, 70);
    width: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
    width: 10px;
  }

/*  navbar */
.bg-custom{
    background-color: #313e53;
    position: relative;
}
.menu{
    margin-top: 3rem;
    margin-bottom: 0.5rem;
}
.menu-links, .menu-links:visited{
    color: #36b6cd;
    font-size: 0.9em;
}
.menu-links:hover{
    color: #fff;
}
.menu-links.router-link-exact-active{
    color: #fff;

}
.numbers{
    color: #fff;
    margin-right: 9rem;
    margin-top: 3.5rem;
    margin-bottom: 0rem;
}
.number{
    margin-left: 1rem;
}

.no-padding {
    padding: 0;
}

.pos-head{
    font-weight: 600;
    color: #36b6cd;
}

</style>
