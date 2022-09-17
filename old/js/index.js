Vue.component('navbar', {
    template : `
    <nav class="navbar bg-custom">
            <div class="container-fluid">
                <ul class="nav lang-item">
                    <li class="nav-item">
                        <a href="#" class="nav-link lang">UA</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link lang">EN</a>
                    </li>
                </ul>
                <a href="index.html" class="navbar-brand">
                    <img src="img/logo.png" alt="">
                </a>
                <ul class="nav menu">
                    <a href="portfolio.html" class="nav-link menu-links">ПОРТФОЛIО</a>
                    <a href="uslugi.html" class="nav-link menu-links">ПОСЛУГИ</a>
                    <a href="#" class="nav-link menu-links">ПРО НАС</a>
                    <a href="#" class="nav-link menu-links">КОНТАКТИ</a>
                </ul>
                <ul class="nav numbers">
                        <p class="number">+380 67 37 90 996</p>
                        <p class="number">+380 67 999 18 87</p>
                </ul>
            </div>
        </nav>
    `
})
Vue.component('offer-2', {
    template : `
    <div class="container-fluid offer-2">
                <img src="img/logo2.png" alt="" class="offer2-logo">
                <h1 class="offer2-head">Ми рекламне агентство повного циклу</h1>
                <p class="offer2-text">Виконуємо комплекс послуг зі створення поточного ведення торгових марок, у тому числі  та власних торгових марок торговельних суб'єктів.</p>
                <a href="#" class="offer2-link">Детальнiше</a>
            </div>
    `
})

let sample = new Vue({
    el: '#app',
    data: {
    }
})
