<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="server !== undefined">
            Server #{{ server.id }} - Status: {{ server.status }}
            <button @click="changeStatus">Change status to Normal</button>
        </p>
        <p v-else>Server Details are currently not updated</p>
        
    </div>

</template>

<script>
    import { eventBus } from './../../main';

    export default {
        data () {
            return {
                server: undefined
            }
        },
        //props: ['server'],
        methods: {
            changeStatus () {
                this.server.status = 'Normal';
            }
        },
        created () {
            eventBus.$on('itemWasSelected', (data) => {
                this.server = data;
            })
        }
    };
</script>

<style>

</style>
