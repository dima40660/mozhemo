<template>
<div class="head-banner text-end">
<img class="overlay" src="@/assets/banner-overlay-test.png" alt="">
</div>
<div class="inner-text">
    <p>{{ $t('banner.banner-text')}} <sup>тм</sup> Crimean Night</p>
</div>
        <mOffer2 />
        <mOffer3 />
        <mService />
        <mCompetence />
        <mCarousel />
</template>

<script>

import mOffer2 from './Main/mOffer2.vue'
import mOffer3 from './Main/mOffer3.vue'
import mService from './Main/mServices'
import mCompetence from './Main/mCompetence.vue'
import mCarousel from './Main/mCarousel.vue'
export default{
    name: 'mMain',
    components: {
        mOffer2,
        mOffer3,
        mService,
        mCompetence,
        mCarousel
    }
}
</script>

<style>
/*banner*/
.head-banner{
    background-image:url("@/assets/banner.png");
    width: auto;
    max-width: auto;
    height:auto;
    background-position: left;
}
  
.overlay{
    width: 70%;
    height:auto;
    opacity: 95%;
    position:relative;
    background-position:top;
    z-index: 2;
}
.inner-text{
    position: absolute;
    color: #fff;
    text-align: left;
    font-size: 3vw;
    top: 8%;
    left: 70%;
    z-index: 3;
}
.banner{
    max-width: 100%;
    height: auto;
    background-image:url("@/assets/banner.png");
    position: relative;
}
.banner-overlay{
    max-width:105% !important;
    height: 759px;
    background-image: url("@/assets/banner-overlay-test.png");
    opacity: 95%;
    position:relative;
    background-repeat: no-repeat;
    background-position: center;
    background-clip: 0;
    left: 22%;
}
.overlay-text-123{
    position: absolute;
    top: 80%;
    left: 80%;
    max-width: 50%;
    color: #fff;
    text-align: left;
    font-size: 2em;
}
.overlay-text-second{
    position: absolute;
    top: 85%;
    left: 80%;
    max-width: 50%;
    color: #fff;
    text-align: left;
    font-size: 2em;
}

.img-fluid{
    max-width: 100%;
    height: auto;
    box-sizing: content-box;
    position: relative;
}
</style>