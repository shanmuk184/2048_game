<template>
    <div id="board" class="board text-center">
        <div v-for="row in board" class = "row">
            <div v-for="tile in row">
                <Tile v-bind:data = tile />
            </div>	
        </div>
    </div>
</template>
<script>
    import Tile from './Tile.vue';
    export default{
        name:'Board',
        components:{
            Tile
        },
        data: () => {
            return {
                board: Array(4).fill().map(() => Array(4).fill(0)),
            };
            
        },
        computed: {
        }
    };
</script>
<style scoped>
.row{
    display:flex;
    align-items: center;
    justify-content: center;
}
</style>