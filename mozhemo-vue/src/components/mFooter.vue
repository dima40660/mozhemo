<template>
    <div class="container-fluid footer align-self-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-2 col-md-12 align-self-start">
                            <h6 class="footer-text">+380 67 37 90 996</h6>
                        </div>
                        <div class="col-xl-2 col-md-12 align-self-start">
                            <h6 class="footer-text2">+380 67 999 18 87</h6>
                        </div>
                        <div class="col-xl-4 col-md-12 align-self-center">
                            <h6 class="footer-text3">9:00 - 19:00  Пн-Пт</h6>
                        </div>
                        <div class="col-xl-4 col-md-12 align-self-end">
                            <h6 class="footer-text2"><a class="footer-link" href="mailto:info@mozhem.com.ua">info@mozhem.com.ua</a></h6>
                        </div>
                    </div>
                </div>
        </div>
</template>

<script>
export default {
    name: 'mFooter'
}
</script>

<style>
.footer{
    background-color: #36b6cd;
    margin: 0;
    max-width: auto;
    height: auto;
}
.footer-text{
    color: #fff;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
.footer-text2{
    color: #fff;
    text-align: left;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
.footer-text3{
    color: #fff;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.footer-link{
    color: #313e53;
    text-align:end;
    padding-left: 15rem;
}
</style>