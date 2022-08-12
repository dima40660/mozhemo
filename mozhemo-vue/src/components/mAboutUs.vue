<template>
  <div class="container-fluid about-us">
          <div class="container">
              <h1 class="about-us-head">Про нас</h1>
          <div class="about-us-banner">
              <img src="@/assets/about-us-banner.png" alt="" class="img-fluid">
          </div>
          </div>
  </div>
</template>

<script>
export default {
    name : 'mAboutUs'
}
</script>

<style scoped>
.about-us{
    background-color: #313e53;
}
.about-us-head{
    padding-top: 3rem;
    font-weight: 600;
    color: #36b6cd;
}
.about-us-banner{
    text-align: left;
    padding-top: 1rem;
    margin-left: auto;
    margin-right: auto;
    max-width: auto;
    height: auto;
    display: block;
}
</style>