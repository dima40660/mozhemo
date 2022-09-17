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