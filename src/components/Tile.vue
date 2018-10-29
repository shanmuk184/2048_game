<template>
    <div class = "tile text-center align-middle">
        {{data}}
    </div>
</template>
<script>
    export default {
        name:"Tile",
        props:{
            data:Number
        }
    }
</script>
<style scoped>
    .tile{
        display:inline-block;
        background-color:#efe;
        width:50px;
        height:50px;
        position:relative;
        
    }
    .tile span{
        position:absolute;
        top:9px;
    }
</style>