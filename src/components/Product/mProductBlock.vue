<template>
    <div class="container mt-5">
                <div class="row portfolio-block-div m-0">
                    <div class="col-xl-6 col-md-12 portfolio-block">
                        <div class="portfolio-vertical-line"></div>
                        <h1 class="portfolio-head">Редизайн для чая Magrett</h1>
                        <h4 class="portfolio-text">ЧАЙ MAGRETT ВІД КОМПАНІЇ JFK.</h4>
                        <p class="portfolio-text mt-5">Це високоякісні листові чаї з Індії та Шрі-Ланки. 
                            Тому виникла потреба у створенні яскравішого і сучасного дизайну, який би відповідав якості продукту. Було виконано редизайн 
                            логотипу та упаковки, сітілайт, а також підкріплено поліграфічною продукцією.</p>
                    </div>
                    <div class="col-xl-6 col-md-12 portfolio-block">
                        <div class="portfolio-vertical-line-2"></div>
                        <p class="portfolio-text-2">
                            У дизайні була мета передати приналежність до англійського аристократичному суспільству самого покупця, що вибрав чай ​​Magrett.
                        </p>
                        <p class="portfolio-text-2">При цьому передати відчуття теплоти та затишок від теплого пледа в холодну та сиру осінь. 
                            Задоволення від чаювання вранці чи ввечері.</p>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
    name : 'mProductBlock'
}
</script>

<style>
.portfolio-head{
    margin-left: 2%;
    font-weight: 700;
    font-size: 2em;
    color: #36b6cd;
    margin-bottom: 1rem;
}
.portfolio-block-div{
    margin-left: 0.5%;
}
.portfolio-vertical-line{
    height: 100%;
    width: 2px;
    background-color: #36b6cd;
    position: absolute;
    left: 0;
}
.portfolio-vertical-line-2{
    height: 100%;
    width: 2px;
    background-color: #36b6cd;
    position: absolute;
    left: 2%;
}
.portfolio-block{
    position: relative;
}
.portfolio-text{
    margin-left: 2%;
    margin-top: 2rem;
    max-width: 80%;
}
.portfolio-text-2{
    margin-left: 3%;
    margin-top: 2rem;
    max-width: 80%;
}
</style>