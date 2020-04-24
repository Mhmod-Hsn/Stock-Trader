<template>
    <div class="header">
        <vs-navbar
            color="primary"
            text-color="rgba(255,255,255,.8)"
            class="navbar shadow"
        >

            <div slot="title">
                <vs-navbar-title>
                    <router-link exact :to="{name: 'Home'}" tag="h4" class="text-white cursor-pointer bg-transparent">Stock Trader</router-link>
                </vs-navbar-title>
            </div>

            <vs-navbar-item v-for="(link,index) in links" :index="index" :key="index">
                <router-link exact :to="{name: link.componentName}">{{link.title}}</router-link>
            </vs-navbar-item>


            <vs-navbar-item :index="links.length+1">
                <vs-button class="btn-drop" @click="endDay">End Day</vs-button>
            </vs-navbar-item>

            <vs-navbar-item :index="links.length+2">
                <vs-dropdown vs-trigger-click>
                    <vs-button class="btn-drop" title="filled" icon="save"></vs-button>


                    <vs-dropdown-menu>
                        <vs-dropdown-item @click="saveData">
                            Save Data
                        </vs-dropdown-item>
                        <vs-dropdown-item @click="loadData">
                            Load Data
                        </vs-dropdown-item>
                    </vs-dropdown-menu>
                </vs-dropdown>
            </vs-navbar-item>


            <vs-navbar-item class="font-weight-bolder text-white ml-4 bg-transparent" :index="links.length+9">
                Funds: {{funds | currency}}
            </vs-navbar-item>


        </vs-navbar>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import db from '@/firebase/init'


    export default {
        name: "Header",
        data(){
            return{
                links:[
                    {
                        componentName: 'Portfolio',
                        title: 'Portfolio'
                    },
                    {
                        componentName: 'Stocks',
                        title: 'Stocks'
                    }
                ]
            }
        },
        computed:{
            funds(){
                return this.$store.getters.funds;
            }
        },
        methods:{
            ...mapActions({
                randomizeStocks: 'randomizeStocks',
                fetchData: 'loadData'
            }),
            endDay(){
                this.randomizeStocks();
            },
            saveData(){
                const data = {
                    funds:this.$store.getters.funds,
                    stockPortfolio:this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks
                };
                db.collection('data').doc('savedData').set(data)
                    .then(()=>{
                        this.$vs.notify({
                            title:'Success',
                            text:'Data saved Successfully',
                            color:'success',
                            icon:'check_box'
                        })
                    }).catch((error)=>{
                        this.$vs.notify({
                            title:'Danger',
                            text:`Error Occurred ${error}`,
                            color:'danger',
                            icon:'check_circle'
                        })
                });

            },
            loadData(){
                this.fetchData()
            }
        }
    }
</script>

<style lang="sass" scoped>
.header
    .parent-dropdown:before
        content: 'Save/Load'
        padding: 11px 7px 7px 7px
        color: rgba(255, 255, 255, 0.8)
        font-size: 1rem
        float: left
    .vs-navbar--item
        a
            font-size: 1rem
</style>
