import Vue from 'vue';
import App from './App.vue';

export const eventBus = new Vue({
  methods: {
    selectedItem (server) {
      this.$emit('itemWasSelected', server);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
