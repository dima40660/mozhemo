<template>
  <div class="container-fluid about-us">
          <div class="container">
              <h1 class="about-us-head">Про нас</h1>
            <div class="about-us-banner">
                <img src="@/assets/about-us-banner.png" alt="" class="img-fluid">
            </div>
          </div>
          <div class="container about-us-container">
              <div class="row">
                  <div class="col-lg-6 col-md-12 about-us-block mt-5">
                      <div class="about-us-vertical-line"></div>
                      <h1 class="about-us-header w-75">Mожемо! студія ефективних  рішень</h1>
                      <p class="about-us-text mt-5 mb-5" style="color:#bfae71">Ми рекламна агенція повного циклу</p>
                        <p class="about-us-text w-75">
                            Студія “Можемо!” надає повний спектр послуг від 
                            створення бренду до його виходу ринку. 
                            Маючи досвід роботи з різними галузями та брендами, 
                            у пошуках вирішення завдань, ми не обмежуємо себе рамками. 
                        </p>
                  </div>
                  <div class="col-lg-6 col-md-12 mt-5">
                      <div class="row">
                          <div class="col-4 about-us-block">
                              <div class="about-us-vertical-line"></div>
                              <h1 class="about-us-header-number">12<sup>+</sup></h1>
                              <p class="about-us-text-number">рокiв досвiду</p>
                          </div>
                          <div class="col-4 about-us-block">
                              <div class="about-us-vertical-line"></div>
                              <h1 class="about-us-header-number">100<sup>+</sup></h1>
                              <p class="about-us-text-number">клієнтів</p>
                          </div>
                          <div class="col-4 about-us-block">
                              <div class="about-us-vertical-line"></div>
                              <h1 class="about-us-header-number">4</h1>
                              <p class="about-us-text-number">торгівельні мережі</p>
                          </div>
                      </div>
                      <p class="about-us-text-right">
                        Ми цінуємо наших клієнтів і завжди горді 
                        бачити їх у числі лідерів, радіючи їхнім успіхам як своїм.
                        Компанія працює на ринку України більш 10 років, має різних 
                        спеціалістів для вирішення питань, та має безліч проектів, 
                        які вийшли на ринок і приносять успіх своїм володарям.
                      </p>
                  </div>
              </div>
          </div>
  </div>
  <div class="container-fluid">
      <div class="container">
          <h1 class="about-us-header mt-5">Етапи створення нового бренду</h1>
      </div>
      <div class="container text-center about-us-create">
          <div class="row">
          <div class="col align-self-start about-us-col-top">
              <img src="@/assets/aus1.png" alt="">
              <p class="about-us-create-text-top">Підготовка збір інформації</p>
          </div>
          <div class="col align-self-end about-us-col-bottom">
              <img src="@/assets/aus2.png" alt="">
              <p class="about-us-create-text-bottom">Розробка стратегії бренду</p>
          </div>
          <div class="col align-self-start about-us-col-top">
              <img src="@/assets/aus3.png" alt="">
              <p class="about-us-create-text-top">Розробка назви копірайт</p>
          </div>
          <div class="col align-self-end about-us-col-bottom">
              <img src="@/assets/aus4.png" alt="">
              <p class="about-us-create-text-bottom">Розробка фірмового стилю</p>
          </div>
          <div class="col align-self-start about-us-col-top">
              <img src="@/assets/aus5.png" alt="">
              <p class="about-us-create-text-top">Дизайн упаковки етикетки. Фото</p>
          </div>
          <div class="col align-self-end about-us-col-bottom">
              <img src="@/assets/aus6.png" alt="">
              <p class="about-us-create-text-bottom">Стратегія просування бренду</p>
          </div>
          <div class="col align-self-start about-us-col-top">
              <img src="@/assets/aus7.png" alt="">
              <p class="about-us-create-text-top">Дизайн  інтерфейсів та WEB</p>
          </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
    name : 'mAboutUs'
}
</script>

<style scoped>

.about-us{
    background-color: #313e53;
}
.about-us-container{
    padding-bottom: 5rem;
}
.about-us-head{
    padding-top: 3rem;
    font-weight: 600;
    color: #36b6cd;
}
.about-us-block{
    position: relative;
}
.about-us-vertical-line{
    height: 100%;
    width: 2px;
    background-color: #36b6cd;
    position: absolute;
    left: 2;
}
.about-us-banner{
    text-align: left;
    padding-top: 1rem;
    margin-left: auto;
    margin-right: auto;
    max-width: auto;
    height: auto;
    display: block;
}
.about-us-header{
    font-weight: 700;
    font-size: 2em;
    color: #36b6cd;
    margin-left: 2rem;
    margin-bottom: 1rem;
}
.about-us-header-number{
    font-weight: 700;
    font-size: 2em;
    color: #36b6cd;
    margin-left: 1rem;
}
.about-us-text{
    margin-left: 2rem;
    font-size: 1.1em;
    max-width: 65rem;
    margin-bottom: 0;
    color: #fff;
}
.about-us-text-number{
    margin-left: 1rem;
    font-size: 1em;
    margin-bottom: 0;
    max-width: 30rem;
    color: #fff;
}
.about-us-text-right{
    padding-top: 8rem;
    margin-left: 0rem;
    margin-bottom: 0;
    font-size: 1.1em;
    max-width: 32rem;
    color: #fff;
}
/*-- Stages Block --*/
.about-us-create{
    margin-top: 5rem;
    margin-bottom: 15rem;
}
/*-- Top Column --*/
.about-us-col-top{
    position: relative;
}
.about-us-create-text-top{
    position: absolute;
    left: 70%;
    top: -7%;
    width: 70%;
    text-align: start;
}
/*-- Bottom Column --*/
.about-us-col-bottom{
    padding-top: 14.5rem;
    position: relative;
}
.about-us-create-text-bottom{
    position: absolute;
    left: -20%;
    top: 92.3%;
    max-width: 50%;
    text-align: right;
}
</style>