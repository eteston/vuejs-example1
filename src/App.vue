<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <p>{{ testClick }} </p>

                <button class="btn btn-primary"
                    v-myon:click="eventClick" 
                    >Owner click</button>
                <button class="btn btn-info"
                    @click="testClick += ' >>OFFICIAL<< '" 
                    >Vuejs click</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                testClick: 'Click the buttons'
            }
        },
        methods: {
            eventClickERROR: function(expression) {
                this.testClick += ' ' + expression
            },
            eventClick: function() {
                this.testClick += ' ' + 'test'
            }
        },
        directives: {
            'myon' : {
                bind(el, binding, vnode) {
                    // if (binding.arg == 'click') {
                    //     el.click(binding.expression);
                    //     console.info('[BIND]Attach click ' + JSON.stringify(el));
                    //     console.info('[BIND]Expression: ' + binding.expression);
                    // }

                    el.addEventListener(binding.arg, binding.value);
                }
            }
        }
    }
</script>

<style>
</style>
