<template>
  <div class="grid-container">
    <div class="grid-x grid-margin-x align-center">
      <div class="small-12 medium-9 large-7 cell">
        <h1>Vuex</h1>
        <AppResult />
        <hr>
        <AppCounter />
        <hr>
        <AppValue />
      </div>
    </div>
  </div>
</template>

<script>
import AppCounter from './components/AppCounter.vue';
import AppResult from './components/AppResult.vue';
import AppValue from './components/AppValue.vue';

import { mapGetters } from 'vuex';

export default {
  components: {
    AppCounter,
    AppResult,
    AppValue,
  }
}
</script>
