<template>
  <v-row class="mx-0 px-0 my-12 py-12" align="center" justify="space-around">
    <v-col cols="12" md="6" class="aside-col">
      <v-card flat width="100%" max-width="500" class="transparent">
        <v-img :src="require('@/assets/pictures/lady_on_sofa.svg')" max-width="500" contain class="mx-auto"></v-img>
      </v-card>
    </v-col>
    <v-col cols="12" md="6" class="mx-0 px-0">
      <v-card
            flat
            class="transparent mx-12"
            max-width="500"
      >
        <v-card-title>
          <h2>{{ aside.header }}</h2>
        </v-card-title>
        <v-card-text>
          <p>
            {{ aside.text }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn
              dark
              width="220"
              height="48"
              color="buttons"
              class="submit-button"
              @click="action"
          >
            {{ aside.button }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
</style>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Aside',
  props: ['page'],
  data () {
    return {
      // contact: false
    }
  },
  computed: {
    ...mapState('content', ['aside'])
  },
  methods: {
    action () {
      console.log('Button clicked')
    }
  }
}
</script>
