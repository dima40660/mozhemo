<template>
  <div class="container services-text-block">
                <div class="services-vertical-line"></div>
                <h1 class="pos1-head"> {{$t('services.head.devbrand')}} </h1>
                <p class="pos-text">{{$t('services.text.devbrand')}}</p>
            </div>
                <div class="col-xl-12 col-md-1">
                    <img src="@/assets/kramar.png" alt="" class="poslugi-img">
                    <router-link to="/portfolio/product"><img src="@/assets/magred.png" class="margin poslugi-img" alt=""></router-link>
                    <a href="#">
                        <img src="@/assets/arrow.png" class="arrow" alt="">
                    </a>
                </div>
</template>

<script>
export default {
    name:'mBrandDev'
}
</script>

<style>

</style>