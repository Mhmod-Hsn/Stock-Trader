<template>
    <vs-card class="cardx" actionable :class="{'danger-border': insufficientFunds}">
        <div slot="header">
            <h3 class="mb-0" >
                {{stock.name}}   <small>( Price: {{stock.price}} )</small>
            </h3>
        </div>
        <vs-divider border-style="solid" color="#ccc"  class="mt-0 "></vs-divider>
        <div class="d-flex justify-content-between ">
            <vs-input-number type="number"  size="medium" label="Quantity:" v-model="quantity"/>
            <vs-button
                    :color="insufficientFunds?'danger':'success'"
                    @click="buyStock"
                    :disabled="quantity <= 0 || !Number.isInteger(quantity) || insufficientFunds"
            >{{insufficientFunds?'Insufficient funds':'Buy'}}</vs-button>
        </div>
    </vs-card>
</template>

<script>
    export default {
        name: "Stock",
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
            insufficientFunds(){
                return this.quantity * this.stock.price > this.funds;
            }
        },
        methods:{
            buyStock(){
                const order ={
                    stockId: this.stock.id,
                    quantity: parseInt(this.quantity),
                    stockPrice: this.stock.price
                };
                this.$store.dispatch('buyStock',order);
                this.quantity=0;
            }
        }
    }
</script>

<style scoped>

</style>
