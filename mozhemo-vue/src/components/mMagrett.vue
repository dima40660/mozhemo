<template>
    <div class="container pos">
                <h1 class="pos-head">Портфоліо</h1>
            </div>
    <mMagrettImgHead />
    <mMagrettBlock />
    <mMagrettImgGrid />                  
</template>

<script>

import mMagrettImgHead from './Magrett/mMagrettImgHead'
import mMagrettBlock from './Magrett/mMagrettBlock'
import mMagrettImgGrid from './Magrett/mMagrettImgGrid'

export default {
    name : 'mMagrett',
    components: {
        mMagrettImgHead,
        mMagrettBlock,
        mMagrettImgGrid
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