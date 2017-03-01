<template>
    <li>
        Server #{{ server.id }} - Status: {{ status }}
    </li>
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
