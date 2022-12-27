<template>
    <div class="expand-menu">
        <a class="btn btn-menu" data-bs-toggle="offcanvas" data-bs-target="#MenuRight"><i class="bi bi-list" style="font-size:2rem;"></i></a>
      </div>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="MenuRight" aria-labelledby="MenuRightLabel">
        <div class="offcanvas-body">
          <ul class="nav">
            <li class="nav-item">
                <router-link to="/" class="nav-link menu-links">{{ $t('navbar.main')}}</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/portfolio" class="nav-link menu-links">{{ $t('navbar.portfolio')}}</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/services" class="nav-link menu-links">{{ $t('navbar.services')}}</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/about-us" class="nav-link menu-links">{{ $t('navbar.about-us')}}</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/contacts" class="nav-link menu-links">{{ $t('navbar.contacts')}}</router-link>
            </li>
          </ul>
        </div>
      </div>
</template>

<script>
export default {
    name: 'mOffcanvasMenu'
}
</script>

<style scoped>
.nav{
    padding-top: 3.7em;
}
.btn-menu,.btn-menu:active, .btn-menu:visited{
    border-radius: 50px;
    padding: 12px 19px 10px 19px;
    margin-right: 10px;
    background-color: transparent;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    border: none;
  }
  .btn-menu:hover{
    transition: 0s;
    background-color: #fff !important;
    color: #36b6cd;
    border-radius: 45px;
    font-weight: bold;
    border: none;
  }
  .bi-list, .bi-list:hover{
    color: #36b6cd;
    background-color: transparent;
  }
  .offcanvas{
    background-color: #313e53;
    width: 20% !important;
  }
  .number{
    font-size: 13px;
  }
</style>