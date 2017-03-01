<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <item-server
                    v-for="row in servers"
                    :server="row"
                    ></item-server>
        </ul>
    </div>
</template>

<script>
    import ItemServer from './ItemServer.vue';

    export default {
        data () {
            return {
                selectedItem: {},
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unkwoned'},
                    {id: 4, status: 'Normal'},
                    {id: 5, status: 'Critical'},
                ]
            }
        },
        components: {
            'item-server': ItemServer
        }
    }
</script>

<style>

</style>
