<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>

                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h3>Exercise 1</h3>
                <input v-model="textToReverse">
                <p>{{ textToReverse | toReverse }}</p>
                <hr>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <h3>Exercise 2</h3>
                <input v-model="textToCountWords">
                <p>{{ textToCountWords | count-words }}</p>
                <hr>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <h3>Exercise 3</h3>
                <h4>Text showed from computed</h4>
                <p>{{ textToReverseComputed }}</p>
                
                <h4>Count showed from computed</h4>
                <p>{{countWordsComputed }}</p>
                <hr>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <h3>Exercise 4</h3>                
                <input v-model="textToCountWordsMixin">
                <p>{{ countWordsComputedMixin }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { CountWordsMixin } from './CountWordsMixin'

    export default {
        mixins: [CountWordsMixin],
        data () {
            return {
                textToReverse: 'Example text to reverse',
                textToCountWords: 'Text to count the words'
            }
        },
        filters: {
            toReverse(value) {
                return value.split("").reverse().join("");
            }
        },
        computed: {
            textToReverseComputed() {
                return this.textToReverse.split("").reverse().join("");
            },
            countWordsComputed() {
                return this.textToCountWords.split(" ").length;
            }
        }
    }
</script>

<style>
</style>
