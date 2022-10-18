<template>
    <div class="container product">
                <h1 class="product-header">{{ $t('portfolio.header')}}</h1>
            </div>
        <div class="container justify-content-center mt-5">
            <img src="@/assets/product.png" alt="" class="img-fluid product-img">
        </div>
    <div class="container mt-5">
                <div class="row product-block-div m-0">
                    <div class="col-xl-6 col-md-12 product-block">
                        <div class="vertical-line"></div>
                        <h1 class="product-head">{{$t('product.head')}}</h1>
                        <h4 class="product-text">{{$t('product.text-head')}}</h4>
                        <p class="product-text mt-5">{{$t('product.text.left')}}</p>
                    </div>
                    <div class="col-xl-6 col-md-12 product-block">
                        <div class="vertical-line-2"></div>
                        <p class="product-text-right">{{$t('product.text.right.first')}}</p>
                        <p class="product-text-right">{{$t('product.text.right.second')}}</p>
                    </div>
                </div>
            </div>
            <div class="container">
                        <div class="row row-cols-2 justify-content-center mt-5">
                            <div class="col-md-12 col-xl-6 mb-5">
                                <img src="@/assets/prod-grid-1.png" class="img-fluid product-grid-img" alt="">
                            </div>
                            <div class="col-md-12 col-xl-6 mb-5">
                                <img src="@/assets/prod-grid-2.png" class="img-fluid product-grid-img" alt="">
                            </div>
                            <div class="col-md-12 col-xl-6 mb-5">
                                <img src="@/assets/prod-grid-3.jpg" class="img-fluid product-grid-img" alt="">
                            </div>
                            <div class="col-md-12 col-xl-6 mb-5">
                                <img src="@/assets/prod-grid-4.jpg" class="img-fluid product-grid-img" alt="">
                            </div>
                        </div>
                    </div>                 
</template>

<script>

export default {
    name : 'mProduct'
}
</script>

<style scoped>
.product{
    margin-top: 3rem;
}
.product-header{
    font-weight: 600;
    color: #36b6cd;
}
.product-head{
    margin-left: 2%;
    font-weight: 700;
    font-size: 2em;
    color: #36b6cd;
    margin-bottom: 1rem;
}
.product-block-div{
    margin-left: 0.5%;
}
.vertical-line{
    height: 100%;
    width: 2px;
    background-color: #36b6cd;
    position: absolute;
    left: 0;
}
.vertical-line-2{
    height: 100%;
    width: 2px;
    background-color: #36b6cd;
    position: absolute;
    left: 2%;
}
.product-block{
    position: relative;
}
.product-text{
    margin-left: 2%;
    margin-top: 2rem;
    max-width: 80%;
}
.product-text-right{
    margin-left: 3%;
    margin-top: 2rem;
    max-width: 80%;
}
.product-img{
    position: relative;
    max-width: 100%;
}
.product-grid-img{
    position: relative;
    max-width: 100%;
}
</style>