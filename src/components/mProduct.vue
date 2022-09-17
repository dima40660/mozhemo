<template>
    <div class="container pos">
                <h1 class="pos-head">Портфоліо</h1>
            </div>
    <mProductImgHead />
    <mProductBlock />
    <mProductImgGrid />                  
</template>

<script>

import mProductImgHead from './Product/mProductImgHead'
import mProductBlock from './Product/mProductBlock'
import mProductImgGrid from './Product/mProductImgGrid'

export default {
    name : 'mProduct',
    components: {
        mProductImgHead,
        mProductBlock,
        mProductImgGrid
    }
}
</script>

<style>
.pos{
    margin-top: 3rem;
}
.Magrett-block-2{
    position: relative;
}
.port-head{
    margin-left: 1rem;
    margin-top: 1rem;
    font-weight: 700;
    color: #36b6cd;
}
.port-text{
    margin-left: 1rem;
    max-width: 80%;
}
</style>