<template>
    <div class="feed-view grid" data-columns>

        <feed-item
                v-for="item in items"
                :item="item"
                track-by="id">
        </feed-item>

    </div>
</template>

<script type="text/babel">
    import FeedItem from './FeedItem.vue'
    import Salvattore from 'salvattore'
    import { Promise } from 'es6-promise'



    export default {
        name: 'FeedView',

        components: {
            FeedItem
        },

        data () {
            return {
                items: null,
                types: ['design', 'technology', 'business'],
                currentType: 'semmi',
                apiURL: 'http://www.curatist.co/feed/river/',
                salvattoreInitialized: false

                }

        },

        route: {
            data (transition) {
                var type =  transition.to.params.type;

                var self = this,
                        url = this.apiURL + type;

                this.$http.get(url, function (results, status, request) {


                    transition.next({items: results.res});

                    if(!self.salvattoreInitialized) {
                        self.$nextTick(function () {
                            Salvattore.init();
                            this.salvattoreInitialized = true;
                        })
                    }


                }).error(function (data, status, request) {
                    throw (data);
                })
            }
        },

        created () {
           // this.fetchData(window.location.href.split("/").pop());
           // debugger;
            console.log("feedview created");
        },

        ready () {
           // debuggx`x er;
            console.log("feedview Ready");
            console.log("Item count: ", document.getElementsByClassName("feed-item").length);
        },


        watch: {
            items: function(){console.log('items changed')}
        },

        beforeDestroy () {
            //Salvattore = null;
        },

        methods: {
            fetchData (type) {
                var self = this,
                        url = this.apiURL + window.location.href.split("/").pop();

                this.$http.get(url, function (data, status, request) {

                    self.$set('items', data.res);

                    self.$nextTick(self.initSalvattore);

                }).error(function (data, status, request) {
                    throw (data);
                })
            },

            initSalvattore () {
                Salvattore.registerGrid(document.getElementsByClassName("grid"));

            }
        }
    }
</script>
