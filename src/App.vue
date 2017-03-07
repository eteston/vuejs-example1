<template>
    <div class="container">
        <!-- Exercise 1 -->
        <!-- Create a Signup Form where you retrieve the following Information -->
        <!-- Full Name (First Name + Last Name) -->
        <!-- Mail -->
        <!-- Password -->
        <!-- Store Data? Yes/No -->

        <!-- Exercise 2 -->
        <!-- Only display the Form if it has NOT been submitted -->
        <!-- Display the Data Summary ONCE the Form HAS been submitted -->

        <!-- Exercise 3 -->
        <!-- Edit the Example from above and create a custom "Full Name" Control -->
        <!-- which still holds the First Name and Last Name Input Field -->

        <p>Example of form with Vue.js</p>
        <form>
          <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <full-name v-model="datos.name"></full-name>
                    <div class="form-group">
                        <label for="mail">Email address</label>
                        <input type="email" class="form-control" id="mail"
                        v-model="datos.mail">
                    </div>
                    <div class="form-group">
                        <label for="passw">Password</label>
                        <input type="password" class="form-control" id="passw"
                        v-model="datos.password">
                    </div>
                    <div class="form-group">
                        <label for="storedata">Store data?</label>
                    
                        <label for="storedatayes" class="radio-inline">
                            <input type="radio" id="storedatayes"
                            v-model="datos.storeData" value="Yes"> Yes
                        </label>
                        <label for="storedatano" class="radio-inline">
                            <input type="radio" id="storedatano"
                            v-model="datos.storeData" value="No"> No
                        </label>
                    </div>
                    <button type="submit" class="btn btn-default"
                        @click.prevent="submitted">Submit</button>
                </div>
            </div>
            </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ datos.name.firstName}} {{ datos.name.lastName }}</p>
                        <p>Mail: {{ datos.mail }}</p>
                        <p>Password: {{ datos.password }} </p>
                        <p>Store in Database?: {{ datos.storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue';

    export default {
        data () {
            return {
                datos: {
                    name: {
                        firstName: 'Eduardo',
                        lastName: ''
                    },
                    mail: '',
                    password: '',
                    storeData: '',
                },
                isSubmitted: false
            }
        },
        methods: {
            submitted () {
                this.isSubmitted = !this.isSubmitted;
            }
        },
        components: {
            "full-name": FullName
        }
    }
</script>

<style>
</style>
