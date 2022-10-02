<template>
    <div class="container pos">
            <h1 class="pos-head">{{ $t('services.header')}}</h1>
        </div>
    <div class="container">
            <MBrandDev/>
        </div>
        <div class="container">
            <MTitleDev/>
        </div>
        <div class="container">
            <MLogoDesign/>
        </div>
        <div class="container">
            <MCorpStyle/>
        </div>
        <div class="container">
            <MBrandbook/>
        </div>
        <div class="container">
            <MPackDesign/>
        </div>
        <div class="container">
            <MWebDesign/>
        </div>
        <div class="container">
            <MCatalog/>  
        </div>
</template>

<script>
import MBrandDev from "./Services/mBrandDev.vue";
import MLogoDesign from "./Services/mLogoDesign.vue";
import MTitleDev from "./Services/mTitleDev.vue";
import MCorpStyle from "./Services/mCorpStyle.vue";
import MBrandbook from "./Services/mBrandbook.vue";
import MPackDesign from "./Services/mPackDesign.vue";
import MWebDesign from "./Services/mWebDesign.vue";
import MCatalog from "./Services/mCatalog.vue";

export default {
    name: 'mServices',
    components : {
        MBrandDev, 
        MLogoDesign, 
        MTitleDev, 
        MCorpStyle, 
        MBrandbook, 
        MPackDesign, 
        MWebDesign, 
        MCatalog
    }
}
</script>

<style>
.pos{

    margin-top: 3rem;
}
.pos-head{
    font-weight: 600;
    color: #36b6cd;
}
.services-text-block{
    position: relative;
}
.services-vertical-line{
    height: 100%;
    width: 2px;
    background-color: #36b6cd;
    position: absolute;
    left: 0;
}
.pos1-head{
    margin-left: 1.5rem;
    font-weight: 700;
    font-size: 2em;
    color: #36b6cd;
    margin-top: 3rem;
    margin-bottom: 1rem;
}
.pos-text{
    margin-left: 1.5rem;
    font-size: 1em;
    margin-bottom: 2rem;
    max-width: 65rem;
}
.poslugi-img{
    width: 21rem;
}
.arrow{
    margin-top: 0.3rem;
    margin-left: 2rem !important
}
.margin{
    margin-left: 2rem !important
}
</style>