<template>
    <div class="container-fluid carousel-1 justify-content-center">
            <div class="container justify-content-center mb-5">
                <div id="carousel1" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="@/assets/slide2.png" class="d-block w-100 slide" alt="">
                            <div class="carousel-caption">
                                <h2 class="carousel-head">Бренд-проект 365</h2>
                                <p class="carousel-text">
                                    ТМ “365” – це бакалейні продукти:
                                    рис, різні крупи, цукор, макарони.</p>
                                    <a href="#" class="carousel-link">Детальнiше</a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/slide2.png" class="d-block w-100 slide" alt="">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/slide1.png" class="d-block w-100 slide" alt="">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/slide1.png" class="d-block w-100 slide" alt="">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/slide1.png" class="d-block w-100 slide" alt="">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/slide1.png" class="d-block w-100 slide" alt="">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
                        <i class="bi bi-arrow-left"></i>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
                        <i class="bi bi-arrow-right"></i>
                        <span class="visually-hidden">Next</span>
                      </button>
                      <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carousel1" data-bs-slide-to="0" class="active btn-active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousel1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousel1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carousel1" data-bs-slide-to="3" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carousel1" data-bs-slide-to="4" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carousel1" data-bs-slide-to="5" aria-label="Slide 3"></button>
                      </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'mCarousel'
}
</script>

<style>
/*carousel*/
.carousel-1{
    position: relative;
    z-index: 10;
    background-color: white;
    margin-top: 0;
    padding-top: 5rem;
}
.carousel-indicators button {
    height: 10px !important;
    width: 10px !important;
    margin: 0 10px !important;

    background-color: #fff !important;
}

.bi-arrow-left{
    color: #313e53;
    background-color: #fff;
    width: 2em;
    height: 2em;
    padding-top: 0.34em;
    border-radius: 100%;
    font-size: 2rem;
    margin-right: 3em;
}
.bi-arrow-right{
    color: #313e53;
    background-color: #fff;
    width: 2em;
    height: 2em;
    padding-top: 0.34em;
    border-radius: 100%;
    font-size: 2rem;
    margin-left: 3em;
}

.bi:hover{
    background-color: #36b6cd;
    color: #fff;
}
.carousel-caption{
    position: absolute;
    top: 6rem;
    right: 5rem;
    bottom: auto;
    width: max-content;
    background-repeat: repeat-x;
}
.carousel-head{
    font-size: 2.5em;
    max-width: 15rem;
    text-align: start;
}
.carousel-text{
    font-size: 1em;
    margin-top: 1rem;
    max-width: 17rem;
    text-align: start;
}
.carousel-link, .carousel-link:visited{
    color: #fff;
    text-align: start;
    text-decoration: none;
    margin-top: 15rem;
    margin-right: 15rem;
}
.carousel-link:hover{
    transition: 0.3s;
    color: #36b6cd;
}
</style>