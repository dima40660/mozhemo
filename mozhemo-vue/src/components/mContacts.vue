<template>
  <div class="container-fluid contacts">
          <div class="container">
              <h1 class="contacts-head">Контакти</h1>
            <div class="contacts-banner">
                <img src="@/assets/contacts-banner.png" alt="" class="img-fluid">
            </div>
          </div>
  </div>
  <div class="container-fluid">
      <div class="container contacts-grid">
          <div class="row">
              <div class="col">
                  <h1 class="contacts-header">Mожемо!</h1>
                  <h1 class="contacts-header-second">студія ефективних рішень</h1>
              </div>
              <div class="col contacts-block">
                  <div class="contacts-vertical-line"></div>
                  <ul class="list-group">
                      <li class="list-group-item">+380 67 379 0 996</li>
                      <li class="list-group-item">+380 67 999 18 87</li>
                      <li class="list-group-item">+380 66 290 8 224</li>
                  </ul>
              </div>
              <div class="col contacts-block">
                  <div class="contacts-vertical-line"></div>
                  <ul class="list-group">
                      <li class="list-group-item">Україна, м. Дніпро</li>
                      <li class="list-group-item">Email: contact@mozhemo.com.ua</li>
                      <li class="list-group-item">Email: mozhemo.info@gmail.com</li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
  <div class="container-fluid contacts-form">
      <div class="container form">
          <div class="row">
              <div class="col-4">
                  <h1 class="form-header">Написати нам</h1>
                  <p class="form-header-text">або</p>
                  <p class="form-header-text">запросити презентацію</p>
              </div>
              <div class="col">
                  <div class="mb-5">
                      <label for="contacts-input-name" class="form-label text-white">Ваше ім`я</label>
                      <input type="text" name="name" id="contacts-input-name" class="form-control form-input">
                  </div>
                  <div class="mb-5">
                      <form class="row g-5">
                          <div class="col-6">
                              <label for="contacts-input-email" class="form-label text-white">Ваш email</label>
                              <input type="email" id="contacts-input-email" class="form-control form-input">
                          </div>
                          <div class="col-6">
                              <label for="contacts-input-company" class="form-label text-white">Ваша компанія</label>
                              <input type="text" id="contacts-input-company" class="form-control form-input">
                          </div>
                      </form>
                  </div>
                  <div class="mb-5">
                      <label for="contacts-input-message" class="form-label text-white">Ваше повідомлення</label>
                      <textarea name="message" id="contacts-input-message" cols="1" rows="4" class="form-control form-input"></textarea>
                  </div>
              </div>
              <div class="container align-self-end text-end mb-5">
                      <button class="btn btn-submit" type="submit">Надіслати</button>
                  </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'mContacts'
}
</script>

<style>
/*-- Contacts --*/
.contacts{
    background-color: #313e53;
}
.contacts-grid{
    padding-top: 4rem;
    padding-bottom: 4rem;
}
/*-- Contacts Form --*/
.contacts-form{
    background-color: #313e53;
}
.form{
    padding-top: 5rem;
}
.form-input{
    background-color: #313e53;
    color: #fff;
    border-radius: 0;
    border-left: 0;
    border-top: 0;
    border-right: 0;
    border-color: #36b6cd;
}
.form-input:focus{
    background-color: #313e53;
    color: #fff;
    border-radius: 0;
    border-color: #d3bb64;
    transition: 0.2s;
}
.form-header{
    font-weight: 700;
    font-size: 2em;
    color: #fff;
    max-width: 20rem;
}
.form-header-text{
    color: #fff;
    font-weight: 600;
    font-size: 1.2em;
    line-height: 0.7;
    text-align: left;
}
.btn-submit, .btn-submit:active, .btn-submit:visited{
    color: #fff;
    background-color: #d3bb64;
    border-radius: 0;
    font-size: 1.2em;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.3rem;
    margin: 0;
}
.btn-submit:hover{
    background-color: #bba659;
    color: #fff;
    border-radius: 0;
    border-color: #bba659;
}
/*-- Vertical Line --*/
.contacts-block{
    position: relative;
}
.contacts-vertical-line{
    height: 100%;
    width: 2px;
    background-color: #36b6cd;
    position: absolute;
    left: 2;
}
.contacts-head{
    padding-top: 3rem;
    font-weight: 600;
    color: #36b6cd;
}
.contacts-banner{
    text-align: left;
    padding-top: 1rem;
    margin-left: auto;
    margin-right: auto;
    max-width: auto;
    height: auto;
    display: block;
    padding-bottom: 5rem;
}
/*-- Contacts --*/
.contacts-header{
    font-weight: 700;
    font-size: 2em;
    color: #36b6cd;
    max-width: 20rem;
    line-height: 0.5;
    padding-top: 2%;
}
.contacts-header-second{
    font-weight: 700;
    font-size: 2em;
    color: #36b6cd;
    max-width: 20rem;
}
/*-- Contacts Numbers --*/
.list-group-item{
    margin-left: 4rem;
}
</style>