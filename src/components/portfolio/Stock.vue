<template>
    <div class="portfolio-stock">

        <vs-card class="cardx" actionable :class="{'danger-border': insufficientQuantity}">
            <div slot="header">
                <h3 class="mb-0" >
                    {{stock.name}}   <small>( Price: {{stock.price}} | Quantity: {{stock.quantity}} )</small>
                </h3>
            </div>
            <vs-divider border-style="solid" color="#ccc"  class="mt-0 "></vs-divider>
            <div class="d-flex justify-content-between ">
                <vs-input-number type="number"  size="medium" label="Quantity:" v-model="quantity"/>
                <vs-button
                        :color="insufficientQuantity?'danger':'primary'"
                        @click="sellStock"
                        :disabled="quantity <= 0 || !Number.isInteger(quantity) || insufficientQuantity"
                >{{insufficientQuantity?'No Enough Stocks':'Sell'}}</vs-button>
            </div>
        </vs-card>

    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        props:['stock'],
        data(){
            return{
                quantity: 0,
            }
        },
        computed:{
            funds(){
                return this.$store.getters.funds;
            },
            insufficientQuantity(){
                return this.quantity > this.stock.quantity;
            }
        },
        methods:{
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sellStock(){
                const order = {
                    stockId: this.stock.id,
                    quantity: this.quantity,
                    stockPrice: this.stock.price
                };
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        }
    }
</script>

<style scoped>

</style>
