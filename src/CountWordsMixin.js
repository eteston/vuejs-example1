export const CountWordsMixin = {
    data () {
        return {
            textToCountWordsMixin: ''
        }
    },
    computed: {
        countWordsComputedMixin() {
            return this.textToCountWordsMixin.split(" ").length;
        }
    },
    created () {
        console.log('Created mixing')
    }
}