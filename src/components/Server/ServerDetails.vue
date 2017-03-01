<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>

        Server #{{ id }} - Status: {{ status }}
    </div>

</template>

<script>
    export default {
        props: [
           { 
               id: {
                    type: Number,
                    required: true
                }
           }, {
                status: {
                    type: String,
                    requiere: true
                }
           }
        ]
    };
</script>

<style>

</style>
