<template>
  <div class="container services-text-block">
                <div class="services-vertical-line"></div>
                <h1 class="pos1-head">{{$t('services.head.devname')}}</h1>
                <p class="pos-text">{{$t('services.text.devname')}}</p>
            </div>
                <div class="col-xl-12 col-md-1">
                    <img src="@/assets/365.png" alt="" class="poslugi-img">
                    <img src="@/assets/hatka.png" class="margin poslugi-img" alt="">
                    <a href="#">
                        <img src="@/assets/arrow.png" class="arrow" alt="">
                    </a>
                </div>
</template>

<script>
export default {
    name:'mTitleDev'
}
</script>

<style>

</style>