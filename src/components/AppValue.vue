<template>
  <div>
    <input type="text" :value="getValue" @input="syncUpdateValue">
    <p>{{ getValue }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getValue']),
    /* // Getter and Setters for `v-model` instead of `:value` and `@input` handler
    // Use with caution, computed property is not really the place to play with getter's and setter's 
    get()         { return this.$store.getters.getValue; },
    set(getValue) { this.$store.dispatch('syncUpdateValue', value); }, */
  },
  methods: {
    syncUpdateValue(event) {
      this.$store.dispatch('syncUpdateValue', event.target.value);
    }
  },
}
</script>