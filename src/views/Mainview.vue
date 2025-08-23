<template>
<div class="container">
<sidebar></sidebar>
<div class="content"></div>
<router-view></router-view>

   
</div>
</template>

<script setup>

import sidebar from '../componentes/sidebar.vue';   
</script>

<style>
.container {
    display: flex;
    
}
.content {
    flex: 1;
    padding: 20px;
}

</style>