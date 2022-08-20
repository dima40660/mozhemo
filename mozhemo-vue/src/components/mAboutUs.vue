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
</style>