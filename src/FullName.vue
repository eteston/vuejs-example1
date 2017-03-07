<template>
    <div>
        <div class="form-group">
            <label for="firstname">First name</label>
            <input type="text" class="form-control" id="firstname"
            :value="value.firstName"
            @input="changeFirstName($event.target.value)">
        </div>
            <div class="form-group">
            <label for="lastname">Last name</label>
            <input type="text" class="form-control" id="lastname"
            :value="value.lastName"
            @input="changeLastName($event.target.value)">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            changeFirstName : function(value) {
                this.value.firstName = value;
                this.$emit('input', this.value);
            },
            changeLastName : function(value) {
                this.value.lastName = value;
                this.$emit('input', this.value);
            }
        }
    }
</script>

<style>
</style>
