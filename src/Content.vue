<template>
    <div class="row">
        <div class="col-xs-12 col-sm-6">
            <ul class="list-group">
                <item-server 
                    class="list-group-item"
                    v-for="index in 5"
                    :num="index"
                ></item-server>
            </ul>
        </div>
        <div class="col-xs-12 col-sm-6">
            <p>Server Details are currently not updated</p>
        </div>
    </div>
</template>

<script>
    import ItemServer from './ItemServer.vue'

    export default {
        components: {
            'item-server': ItemServer
        }
    }
</script>