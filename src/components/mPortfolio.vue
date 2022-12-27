<template>
    <div class="container pos">
        <h1 class="pos-head">{{ $t('portfolio.header')}}</h1>
    </div>
  <div class="">
    <div class="container px-3 portfolio">
        <div class="row gap-2">
            <div class="col mb-5">
                <div class="card-body">
                    <router-link to="/portfolio/product"><img class="img-fluid" src="@/assets/magred.png" alt=""></router-link>
                    <div class="container-fluid m-0 p-0">
                        <div class="vr">
                            <div class="container card-content">
                                <h3 class="card-header">
                                    {{ $t('portfolio.magrett.header')}}
                                </h3>
                                <h3 class="card-secondary-header">
                                    {{ $t('portfolio.development')}}
                                </h3>
                                <p class="card-text">
                                    {{ $t('portfolio.magrett.type')}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col mb-5">
                <div class="card-body">
                    <img class="img-fluid" src="@/assets/katalog1.png" alt="">
                    <div class="container-fluid m-0 p-0">
                        <div class="vr">
                            <div class="container card-content">
                                <h3 class="card-header">
                                    {{ $t('portfolio.respublika.header')}}
                                </h3>
                                <h3 class="card-secondary-header">
                                    {{ $t('portfolio.development')}}
                                </h3>
                                <p class="card-text">
                                    {{ $t('portfolio.respublika.type')}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col mb-5">
                <div class="card-body">
                    <img class="img-fluid" src="@/assets/kramar.png" alt="">
                    <div class="container-fluid m-0 p-0">
                        <div class="vr">
                            <div class="container card-content">
                                <h3 class="card-header">
                                    {{ $t('portfolio.kramar.header')}}
                                </h3>
                                <h3 class="card-secondary-header">
                                    {{ $t('portfolio.development')}}
                                </h3>
                                <p class="card-text">
                                    {{ $t('portfolio.kramar.type')}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col mb-5">
                <div class="card-body">
                    <img class="img-fluid" src="@/assets/monami.png" alt="">
                    <div class="container-fluid m-0 p-0">
                        <div class="vr">
                            <div class="container card-content">
                                <h3 class="card-header">
                                    {{ $t('portfolio.monami.header')}}
                                </h3>
                                <h3 class="card-secondary-header">
                                    {{ $t('portfolio.development')}}
                                </h3>
                                <p class="card-text">
                                    {{ $t('portfolio.monami.type')}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col mb-5">
                <div class="card-body">
                    <img class="img-fluid" src="@/assets/pack.png" alt="">
                    <div class="container-fluid m-0 p-0">
                        <div class="vr">
                            <div class="container card-content">
                                <h3 class="card-header">
                                    {{ $t('portfolio.cr-night.header')}}
                                </h3>
                                <h3 class="card-secondary-header">
                                    {{ $t('portfolio.development')}}
                                </h3>
                                <p class="card-text">
                                    {{ $t('portfolio.magrett.type')}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col mb-5">
                <div class="card-body">
                    <img class="img-fluid" src="@/assets/brand3.png" alt="">
                    <div class="container-fluid m-0 p-0">
                        <div class="vr">
                            <div class="container card-content">
                                <h3 class="card-header">
                                    {{ $t('portfolio.zic.header')}}
                                </h3>
                                <h3 class="card-secondary-header">
                                    {{ $t('portfolio.development')}}
                                </h3>
                                <p class="card-text">
                                    {{ $t('portfolio.zic.type')}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name : 'mPortfolio'
}
</script>

<style scoped>
.card-body, .col{
    width: 391px !important;
}
.portfolio{
    margin-top: 15px;
    padding-left: 48px;
}
.pos-head{
    font-weight: 600;
    color: #36b6cd;
}
.card-header{
    margin-top: 0.5rem;
    font-weight: 700;
    color: #36b6cd;
}
.card-content{
    width: 21rem !important;
    height: 9rem;
    margin-left: 1rem;
}
.card-secondary-header{
    max-width: 80%;
    margin-top: 1rem;
    font-size: 1em;
}
img{
    width: auto;
    height: auto;
}
.vr{
    width: 3px;
    opacity: 100%;
    padding: 0;
    margin: 1rem 0rem 0rem 0rem;
    background-color: #36b6cd;
}
</style>