<template>
<mNavbar />
<mMain />
<mFooter />
</template>

<script>

import mNavbar from './components/mNavbar'
import mMain from './components/mMain.vue'
import mFooter from './components/mFooter.vue'

export default {
  name: 'App',
  components : {
    mNavbar,
    mMain,
    mFooter
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

</style>
