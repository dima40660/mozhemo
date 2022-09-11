<template>
  <div class="container pos">
                <h1 class="pos-head">{{ $t('portfolio.header')}}</h1>
            </div>
            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-12">
                        <router-link to="/portfolio/product"><img src="@/assets/magred.png" alt=""></router-link>
                        <div class="container portfolio-block-2">
                            <div class="portfolio-vertical-line"></div>
                            <h3 class="port-head">{{ $t('portfolio.magrett.header')}}</h3>
                            <h6 class="port-text mt-3">{{ $t('portfolio.development')}}</h6>
                            <p class="port-text mb-5">{{ $t('portfolio.magrett.type')}}</p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-12">
                        <img src="@/assets/katalog1.png" alt="">
                        <div class="container portfolio-block-2">
                            <div class="portfolio-vertical-line"></div>
                            <h3 class="port-head">{{ $t('portfolio.respublika.header')}}</h3>
                            <h6 class="port-text mt-3">{{ $t('portfolio.development')}}</h6>
                            <p class="port-text mb-5">{{ $t('portfolio.respublika.type')}}</p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-12">
                        <img src="@/assets/kramar.png" alt="">
                        <div class="container portfolio-block-2">
                            <div class="portfolio-vertical-line"></div>
                            <h3 class="port-head">{{ $t('portfolio.kramar.header')}}</h3>
                            <h6 class="port-text mt-3">{{ $t('portfolio.development')}}</h6>
                            <p class="port-text mb-5">{{ $t('portfolio.kramar.type')}}</p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-12">
                        <img src="@/assets/monami.png" alt="">
                        <div class="container portfolio-block-2">
                            <div class="portfolio-vertical-line"></div>
                            <h3 class="port-head">{{ $t('portfolio.monami.header')}}</h3>
                            <h6 class="port-text mt-3">{{ $t('portfolio.development')}}</h6>
                            <p class="port-text mb-5">{{ $t('portfolio.monami.type')}}</p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-12">
                        <img src="@/assets/pack.png" alt="">
                        <div class="container portfolio-block-2">
                            <div class="portfolio-vertical-line"></div>
                            <h3 class="port-head">{{ $t('portfolio.cr-night.header')}}</h3>
                            <h6 class="port-text mt-3">{{ $t('portfolio.development')}}</h6>
                            <p class="port-text mb-5">{{ $t('portfolio.cr-night.type')}}</p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-12">
                        <img src="@/assets/brand3.png" alt="">
                        <div class="container portfolio-block-2">
                            <div class="portfolio-vertical-line"></div>
                            <h3 class="port-head w-50">{{ $t('portfolio.zic.header')}}</h3>
                            <h6 class="port-text mt-3">{{ $t('portfolio.development')}}</h6>
                            <p class="port-text mb-5">{{ $t('portfolio.zic.type')}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <router-view />
</template>

<script>
export default {
    name : 'mPortfolio'
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
.portfolio-block-2{
    position: relative;
}
.portfolio-vertical-line{
    height: 100%;
    width: 2px;
    background-color: #36b6cd;
    position: absolute;
    left: 0;
}
.port-head{
    margin-left: 1rem;
    margin-top: 1rem;
    font-weight: 700;
    max-width: 80%;
    color: #36b6cd;
}
.port-text{
    margin-left: 1rem;
    max-width: 80%;
}
</style>