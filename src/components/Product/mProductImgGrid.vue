<template>
    <div class="container">
                <div class="row row-cols-2 justify-content-center mt-5">
                    <div class="col-md-12 col-xl-6 mb-5">
                        <img src="@/assets/portfolio2.png" class="img-fluid port-img" alt="">
                    </div>
                    <div class="col-md-12 col-xl-6 mb-5">
                        <img src="@/assets/portfolio3.png" class="img-fluid port-img" alt="">
                    </div>
                    <div class="col-md-12 col-xl-6 mb-5">
                        <img src="@/assets/portfolio4.jpg" class="img-fluid port-img" alt="">
                    </div>
                    <div class="col-md-12 col-xl-6 mb-5">
                        <img src="@/assets/portfolio5.jpg" class="img-fluid port-img" alt="">
                    </div>
                </div>
            </div>
</template>

<script>
export default {
    name : 'mProductImgGrid'
}
</script>

<style>
.port-img{
    position: relative;
    max-width: 100%;
}
</style>