<template>
    <div class="container product">
                <h1 class="product-header">{{ $t('portfolio.header')}}</h1>
            </div>
        <div class="container justify-content-center mt-5">
            <img src="@/assets/product.png" alt="" class="img-fluid product-img">
        </div>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-6 col-md-12">
                    <div class="vr">
                        <div class="card-body">
                            <div class="container product-content mx-3 my-3">
                                <h1 class="content-header">{{$t('product.head')}}</h1>
                                <h4 class="py-3 w-75">{{$t('product.text-head')}}</h4>
                                <p class="content-text">{{$t('product.text.left')}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12">
                <div class="vr">
                    <div class="card-body mt-md-0">
                        <div class="container product-content mx-3 py-5">
                            <p class="py-0">{{$t('product.text.right.first')}}</p>
                            <p class="py-4">{{$t('product.text.right.second')}}</p>
                        </div>
                    </div>
                </div>
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
.card-body{
    height: 18rem !important;
    width: 80% !important;
}
.product-content{
    position: relative;
    width: 30rem !important;
    height: auto !important;
}
.content-header{
    font-weight: 700;
    font-size: 2em;
    color: #36b6cd;   
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
.content-text{
    width: 95%;
}
.vr{
    width: 2px;
    opacity: 100%;
    padding: 0;
    height: auto;
    margin: 0rem 0rem 0rem 0rem;
    background-color: #36b6cd;
}
.product-img{
    position: relative;
    max-width: 100%;
}
.product-grid-img{
    position: relative;
    max-width: 100%;
    width: 100%;
    height: auto;
}
</style>