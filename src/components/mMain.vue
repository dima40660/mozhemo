<template>
<div class="banner">
            <div class="banner-overlay"></div>
            <p class="overlay-text" >{{ $t('banner.banner-text')}}</p>
            <p class="overlay-text-second"><sup>тм</sup> Crimean Night</p>
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
.banner{
    max-width: 100%;
    height: 759px;
    background-image:url("@/assets/banner.png");
    position: relative;
}
.banner-overlay{
    max-width: 100%;
    height: 759px;
    background-image: url("@/assets/banner-overlay-test.png");
    opacity: 95%;
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    background-clip: padding-box;
    left: 22%;
}
.overlay-text{
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