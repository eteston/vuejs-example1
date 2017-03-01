<template>
    <li 
        class="list-group-item" 
        @click="selectedItem"
        >
        Server #{{ server.id }} - Status: {{ server.status }}
    </li>
</template>

<script>
    import { eventBus } from './../../main';

    export default {
        props: ['server'],
        methods: {
            selectedItem () {
                eventBus.selectedItem(this.server);
            }
        }
    }
</script>
<style>

</style>
