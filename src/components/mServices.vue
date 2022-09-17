<template>
    <div class="container pos">
            <h1 class="pos-head">{{ $t('services.header')}}</h1>
        </div>
    <mServicesTextBlock />
</template>

<script>

import mServicesTextBlock from './Services/mServicesTextBlock'

export default {
    name: 'mServices',
    components : {
        mServicesTextBlock
    }
}
</script>

<style>
.pos{

    margin-top: 3rem;
}
.pos-head{
    font-weight: 600;
    color: #36b6cd;
}
</style>