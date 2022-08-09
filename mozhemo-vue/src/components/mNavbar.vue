<template>
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
                    <img src="@/assets/logo.png" alt="" srcset="">
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
</template>

<script>
export default {
    name: 'mNavbar'
}
</script>
<style>
/*  navbar */
.bg-custom{
    background-color: #313e53;
    position: relative;
}
.lang-item{
    margin-left: 2rem;
    margin-top: 3rem;
    margin-bottom: 0.5rem;
}
.lang, .lang:visited{
    border-radius: 25px;
    padding: 10px 10px;
    color: #36b6cd;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
}
.lang:hover{
    transition: 0s;
    background-color: #36b6cd;
    color: white;
    border-radius: 25px;
    font-weight: bold;
}

.menu{
    margin-top: 3rem;
    margin-bottom: 0.5rem;
}
.menu-links, .menu-links:visited{
    color: #36b6cd;
    font-size: 0.9em;
}
.menu-links:hover{
    color: #fff;

}
.numbers{
    color: #fff;
    margin-right: 9rem;
    margin-top: 3.5rem;
    margin-bottom: 0rem;
}
.number{
    margin-left: 1rem;
}

.no-padding {
    padding: 0;
}

</style>