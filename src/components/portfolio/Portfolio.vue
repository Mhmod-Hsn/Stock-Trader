<template>
    <div class="portfolio">
        <vs-row>
            <stock
                v-for="stock in stocks"
                :stock="stock"
                :key="stock.id"
                vs-type="flex"
                vs-w="3"
                class="px-md-3"
            ></stock>
        </vs-row>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Stock from "./Stock";

    export default {
        computed:{
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        },
        components:{
            Stock
        }
    }
</script>

<style scoped>

</style>
