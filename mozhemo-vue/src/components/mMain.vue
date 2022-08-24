<template>
<div class="banner">
<img src="@/assets/banner-overlay.png" alt="">
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
    place-items: center;
    position: relative;
    background-repeat: no-repeat;
    background-size:cover;
}
.img-fluid{
    max-width: 100%;
    height: auto;
    box-sizing: content-box;
    position: relative;
}
</style>