<template>
    <div class="container-fluid offer-2">
                <img src="@/assets/logo2.png" alt="" class="offer2-logo">
                <h1 class="offer2-head">{{$t('offer-2.offer-2-head')}}</h1>
                <p class="offer2-text">{{$t('offer-2.offer-2-text')}}</p>
                <a href="#" class="offer2-link">{{$t('offer-2.offer2-link')}}</a>
            </div>
</template>

<script>
export default {
    name: 'mOffer2'
}
</script>

<style>
/*offer-2*/

.offer2-logo{
    padding-top: 3rem;
    margin-left: 10rem;
}
.offer2-head{
    color: #fff;
    margin-left: 10rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 32px;
}
.offer2-text{
    margin-left: 10rem;
    margin-bottom: 1.5rem;
    font-size: 19px;
    max-width: 35rem;
}
.offer2-link:link, .offer2-link:visited{
    color:#fff;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    margin-top: 5rem;
    margin-left: 10rem;
    margin-bottom: 5rem;
}
.offer2-link:hover{
    color: #000;
    transition: 0.2s;
}
.offer-2{
    margin-left: 0;
    margin-top: 6rem;
    max-width: auto;
    height: 450px;
    background-image: url("@/assets/offer2.png");
    background-repeat: no-repeat;
    position: relative; 
    z-index: 10;
}

</style>