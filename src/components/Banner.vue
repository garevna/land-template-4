<template>
  <v-card
        flat
        class="transparent mx-auto my-12 py-12"
        max-width="1000"
  >
    <v-card-text class="text-center">
      <h1>
        {{ banner.header.black }}
        <span class="red-text">{{ banner.header.red }}</span>
      </h1>
      <h3>
        {{ banner.text }}
      </h3>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.red-text {
  margin-left: 16px;
  color: #a3332C;
}
</style>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Banner',
  props: ['page'],
  data () {
    return {
      // contact: false
    }
  },
  computed: {
    ...mapState('content', ['banner'])
  }
}
</script>
