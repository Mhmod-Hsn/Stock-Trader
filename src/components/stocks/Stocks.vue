<template>
    <div class="stocks">
        <h1>stocks</h1>

        <vs-row>
            <vs-col
                v-for="stock in stocks"
                :key="stock.id"
                vs-type="flex"
                vs-w="3"
                class="px-md-3"
            >
                <Stock :stock="stock"></Stock>
            </vs-col>
        </vs-row>

    </div>
</template>

<script>
    import Stock from "./Stock";

    export default {
        name: "Stocks",
        components:{
            Stock
        },
        computed:{
            stocks(){
                return this.$store.getters.stocks;
            }
        }
    }
</script>

<style scoped>

</style>
