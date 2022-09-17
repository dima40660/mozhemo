<template>
  <div class="container">
            <div class="container services-text-block">
                <div class="services-vertical-line"></div>
                <h1 class="pos1-head">{{$t('services.head.devbrand')}}</h1>
                <p class="pos-text">{{$t('services.text.devbrand')}}</p>
            </div>
                <div class="col-xl-12 col-md-1">
                    <img src="@/assets/kramar.png" alt="" class="poslugi-img">
                    <router-link to="/portfolio/product"><img src="@/assets/magred.png" class="margin poslugi-img" alt=""></router-link>
                    <a href="#">
                        <img src="@/assets/arrow.png" class="arrow" alt="">
                    </a>
                </div>
        </div>
        <div class="container">
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
        </div>
        <div class="container">
            <div class="container services-text-block">
                <div class="services-vertical-line"></div>
                <h1 class="pos1-head">{{$t('services.head.logodesign')}}</h1>
                <p class="pos-text">$t('services.text.logodesign')</p>
            </div>
                <div class="col-xl-12 col-md-1">
                    <img src="@/assets/magred.png" alt="" class="poslugi-img">
                    <img src="@/assets/monami.png" class="margin poslugi-img" alt="">
                    <a href="#">
                        <img src="@/assets/arrow.png" class="arrow" alt="">
                    </a>
                </div>
        </div>
        <div class="container">
            <div class="container services-text-block">
                <div class="services-vertical-line"></div>
                <h1 class="pos1-head">{{$t('services.head.corpidentity')}}</h1>
                <p class="pos-text">{{$t('services.text.corpidentity')}}</p>
            </div>
                <div class="col-xl-12 col-md-1">
                    <img src="@/assets/brand1.png" alt="" class="poslugi-img">
                    <img src="@/assets/brand2.png" class="margin poslugi-img" alt="">
                    <a href="#">
                        <img src="@/assets/arrow.png" class="arrow" alt="">
                    </a>
                </div>
        </div>
        <div class="container">
            <div class="container services-text-block">
                <div class="services-vertical-line"></div>
                <h1 class="pos1-head">{{$('services.head.brandbook')}}</h1>
                <p class="pos-text">{{$t('services.text.brandbook')}}</p>
            </div>
                <div class="col-xl-12 col-md-1">
                    <img src="@/assets/brand3.png" alt="" class="poslugi-img">
                    <img src="@/assets/brand4.png" class="margin poslugi-img" alt="">
                    <a href="#">
                        <img src="@/assets/arrow.png" class="arrow" alt="">
                    </a>
                </div>
        </div>
        <div class="container">
            <div class="container services-text-block">
                <div class="services-vertical-line"></div>
                <h1 class="pos1-head">{{$t('services.head.packdesign')}}</h1>
                <p class="pos-text">{{$t('services.text.packdesign')}}</p>
            </div>
                <div class="col-xl-12 col-md-1">
                    <img src="@/assets/pack.png" alt="" class="poslugi-img">
                    <img src="@/assets/monami.png" class="margin poslugi-img" alt="">
                    <a href="#">
                        <img src="@/assets/arrow.png" class="arrow" alt="">
                    </a>
                </div>
        </div>
        <div class="container">
            <div class="container services-text-block">
                <div class="services-vertical-line"></div>
                <h1 class="pos1-head">{{$t('services.head.webdesign')}}</h1>
                <p class="pos-text">{{$t('services.text.webdesign')}}</p>
            </div>
                <div class="col-xl-12 col-md-1">
                    <img src="@/assets/web1.png" alt="" class="poslugi-img">
                    <img src="@/assets/web2.png" class="margin poslugi-img" alt="">
                    <a href="#">
                        <img src="@/assets/arrow.png" class="arrow" alt="">
                    </a>
                </div>
        </div>
        <div class="container">
            <div class="container services-text-block">
                <div class="services-vertical-line"></div>
                <h1 class="pos1-head">{{$t('services.head.catalog')}}</h1>
                <p class="pos-text">{{$t('services.text.catalog')}}</p>
            </div>
                <div class="col-xl-12 col-md-1">
                    <img src="@/assets/katalog1.png" alt="" class="poslugi-img">
                    <img src="@/assets/katalog2.png" class="margin poslugi-img" alt="">
                    <a href="#">
                        <img src="@/assets/arrow.png" class="arrow" alt="">
                    </a>
                </div>
        </div>
</template>

<script>
export default {
    name: 'mServicesTextBlock'
}
</script>

<style>
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