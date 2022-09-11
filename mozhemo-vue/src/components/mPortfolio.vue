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
                            <h3 class="port-head w-50">Редизайн для чая Magrett</h3>
                            <h6 class="port-text mt-3">РОЗРОБКА</h6>
                            <p class="port-text mb-5">дизайн логотипу та упаковки</p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-12">
                        <img src="@/assets/katalog1.png" alt="">
                        <div class="container portfolio-block-2">
                            <div class="portfolio-vertical-line"></div>
                            <h3 class="port-head">Дизайн буклета ТРЦ Respublika</h3>
                            <h6 class="port-text mt-3">РОЗРОБКА</h6>
                            <p class="port-text mb-5">презентаційний буклет</p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-12">
                        <img src="@/assets/kramar.png" alt="">
                        <div class="container portfolio-block-2">
                            <div class="portfolio-vertical-line"></div>
                            <h3 class="port-head">Ребрендінг для компанії "Крамар"</h3>
                            <h6 class="port-text mt-3">РОЗРОБКА</h6>
                            <p class="port-text mb-5">оновлення бренду</p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-12">
                        <img src="@/assets/monami.png" alt="">
                        <div class="container portfolio-block-2">
                            <div class="portfolio-vertical-line"></div>
                            <h3 class="port-head w-75">Логотип для Mon Ami Macarons</h3>
                            <h6 class="port-text mt-3">РОЗРОБКА</h6>
                            <p class="port-text mb-5">дизайн логотипу</p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-12">
                        <img src="@/assets/pack.png" alt="">
                        <div class="container portfolio-block-2">
                            <div class="portfolio-vertical-line"></div>
                            <h3 class="port-head w-70">Етикетки для вина Crimean Night</h3>
                            <h6 class="port-text mt-3">РОЗРОБКА</h6>
                            <p class="port-text mb-5">дизайн логотипу та етикеток</p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-12">
                        <img src="@/assets/brand3.png" alt="">
                        <div class="container portfolio-block-2">
                            <div class="portfolio-vertical-line"></div>
                            <h3 class="port-head w-50">Brand Guide для TM ZIC</h3>
                            <h6 class="port-text mt-3">РОЗРОБКА</h6>
                            <p class="port-text mb-5">guidebook</p>
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
    color: #36b6cd;
}
.port-text{
    margin-left: 1rem;
    max-width: 80%;
}
</style>