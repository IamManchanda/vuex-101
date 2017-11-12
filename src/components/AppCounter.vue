<template>
  <div>
    <h4>Sync</h4>
    <button class="button radius primary" @click="syncUpdateIncrement(200)">Increment by 200</button>
    <button class="button radius primary" @click="syncUpdateDecrement(100)">Decrement by 100</button>
    <br>
    <h4>Async</h4>
    <button class="button radius primary" @click="asyncUpdateIncrement({ by: 100, duration: 1000 })">Increment by 100</button>
    <button class="button radius primary" @click="asyncUpdateDecrement({ by: 200, duration: 2000 })">Decrement by 200</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['syncUpdateIncrement', 'syncUpdateDecrement', 'asyncUpdateIncrement', 'asyncUpdateDecrement'])
  }
}
</script>