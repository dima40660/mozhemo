<template>
     <div class="container-fluid competence">
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <h1 class="сomp-head">Компетентнiсть</h1>
                    <p class="comp-text w-50">Студія “Можемо” пропонує повний спектр послуг з
                        розробки товарних, корпоративних, фінансових
                        брендів - від формування
                        стратегії та креативної ідеї до оформлення просторів
                        та створення сайту.</p>
                </div>
                <div class="col-lg-5 col-md-12 col-sm-12">
                    <div class="comp-list">
                        <div class="container no-padding">
                            <div class="comp-middle">
                                <div class="comp-vertical-line">
                                    <div class="comp-circle comp-circle-small"></div>
                                    <div class="comp-circle comp-circle-middle"></div>
                                    <div class="comp-circle comp-circle-big"></div>
                                    <div class="comp-circle comp-center-point"></div>
                                </div>
                            </div>
                            <div class="row comp-row">
                                <div class="col-5">
                                    <p class="comp-text-bl">Розробка стратегії бренду</p>
                                </div>
                                <div class="col-2"></div>
                                <div class="col-5">
                                    <p class="comp-text-wh">Privat lable</p>
                                </div>
                            </div>
                            <div class="row comp-row">
                                <div class="col-5">
                                    <p class="comp-text-bl">Розробка назви та копірайт</p>
                                </div>
                                <div class="col-2"></div>
                                <div class="col-5">
                                    <p class="comp-text-wh">Brandbook</p>
                                </div>
                            </div>
                            <div class="row comp-row">
                                <div class="col-5">
                                    <p class="comp-text-bl">Розробка фірмового стилю</p>
                                </div>
                                <div class="col-2"></div>
                                <div class="col-5">
                                    <p class="comp-text-wh">Дизайн упаковки</p>
                                </div>
                            </div>
                            <div class="row comp-row">
                                <div class="col-5">
                                    <p class="comp-text-bl">Стратегія просування бренду</p>
                                </div>
                                <div class="col-2"></div>
                                <div class="col-5">
                                    <p class="comp-text-wh">Дизайн інтерфейсів та WEB</p>
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
    name: 'mCompetence'
}
</script>

<style>
/*competence*/
.competence{
    background-size: auto 100%;
    background-color: #263c53;
}
.сomp-head{
    position: relative;
    z-index: 10;
    font-size: 3vmax;
    margin-left: 10rem;
    font-weight: 800;
    margin-top: 5rem;
    color: #fff;
}
.comp-text{
    position: relative;
    z-index: 10;
    margin-top: 2rem;
    margin-bottom: 20rem;
    margin-left: 10rem;
    font-size: 1em;
    color: #fff;
}
.list-group-item{
    background-color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
    font-size: 1.2em;
}
.list-group-comp{
    margin-top: 5rem;
    margin-left: 2rem;
}
.comp-text-bl{
    position: relative;
    z-index: 10;
    font-size: 1.2em;
    color:#36b6cd;
    margin-bottom: 0;
    text-align: end;
}
.comp-text-wh{
    position: relative;
    z-index: 10;
    font-size: 1.2em;
    color:#fff;
    margin-bottom: 0;
}

.comp-list{
    position: relative;
    margin-top: 110px;
}

.comp-row {
    margin-bottom: 20px;
}

.comp-middle {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    text-align:center;
    position:absolute;
    display:table-cell;
}

.comp-vertical-line{
    height: 20rem;
    width: 1px;
    background-color: #007E8F;
    position: relative;
    left: 50%;
}

.comp-circle{
    border-radius: 50%;
    border-style: solid;
    border-width: 1px;
    border-color: #007E8F;
    position: absolute;
    z-index: 5;
    display: inline-block;
}
.comp-circle-small{
    height: 250px;
    width: 250px;
    top: -100px;
    left: -125px;
}
.comp-circle-middle{
    height: 750px;
    width: 750px;
    top: -350px;
    left: -375px;
}
.comp-circle-big{
    height: 1500px;
    width: 1500px;
    top: -725px;
    left: -750px;
    border-top-color: transparent;
    border-right-color: transparent;
}
.comp-center-point{
    background-color: white;
    height: 20px;
    width: 20px;
    top: 15px;
    left: -10px;
}
</style>