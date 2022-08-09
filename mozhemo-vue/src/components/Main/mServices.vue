<template>
    <div class="container-fluid services">
            <div class="row">
                <div class="col-xl-3 col-md-12 marg">
                    <h1 class="services-head">Послуги</h1>
                </div>
                <div class="col-xl-4 col-md-12 marg services-text-block">
                    <div class="services-vertical-line"></div>
                    <div class="services-text-block-content">
                        <h1 class="services-brand">Брендiнг послуги</h1>
                        <p class="services-text1">Розробка бренду пiд ключ.
                            Бренд - це платформа, де будується успіх бізнесу.
                        </p>
                        <a href="#" class="services-link">Детальнiше</a>
                    </div>

                </div>
                <div class="col-xl-4 col-md-12 marg services-text-block">
                    <div class="services-vertical-line"></div>
                    <div class="services-text-block-content">
                        <h1 class="services-brand">Дизайн послуги</h1>
                        <p class="services-text2">Бренд-дизайн - це система елементів, що формують візуальний образ компанії або продукту та диференціюють бренд від
                            конкурентів. Переоцінити важливість дизайну бренду у складі
                            комплексного брендингу неможливо
                        </p>
                        <a href="#" class="services-link">Детальнiше</a>
                    </div>
                </div>
                <div class="col-xl-3 col-md-12 marg services-text-block services-text-block-empty"></div>
                <div class="col-xl-4 col-md-12 marg services-text-block">
                    <div class="services-vertical-line"></div>
                    <div class="services-text-block-content">
                        <h1 class="services-brand">Дизайн iнтерфейсiв та WEB</h1>
                        <p class="services-text3">
                            Сьогодні практично всі бренди так чи інакше присутні
                            у цифровому середовищі
                        </p>
                        <a href="#" class="services-link">Детальнiше</a>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'mServices'
}
</script>

<style>
/*services*/
.services{
    position: relative;
    width: auto;
    padding-left: 10rem;
    padding-right: 10rem;
    padding-top: 7rem;
    z-index: 10;
    background-color: white;
}

.services-head{
    font-weight: 800;
    color: #384556;
}
.services-brand{
    color: #36b6cd;
    font-weight: 800;
}
.marg{
    margin-bottom: 3rem;
}

.services-text-block{
    position: relative;
}
.services-text-block-empty{
    height: 0;
    margin-bottom: 0;
}
.services-text-block-content{
    margin-left: 10px;
}
.services-text1{
    margin-bottom: 4rem;
}
.services-text3{
    margin-bottom: 1rem;
}
.services-link:link, .services-link:visited{
    color:#000;
    float: left;
    text-decoration: none;
    text-align: left;
    font-weight: bold;
}
.services-link:hover{
    color: #36b6cd;
    transition: 0.2s;
}
.services-vertical-line{
    height: 100%;
    width: 2px;
    background-color: #36b6cd;
    position: absolute;
    left: 0;
}
</style>