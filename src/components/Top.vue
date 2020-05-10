<template>
  <v-container fluid style="overflow-x: hidden; margin-top: 40px; margin-bottom: 64px;">
    <!-- <v-img
          :src="require('@/assets/pictures/headerPicture/family-3.jpg')"
          scroll-threshold="500"
          min-height="300"
          max-height="500"
          max-width="1904"
          position="center"
    > -->
      <!-- <v-row align="center" justify="start" class="mx-0"> -->
        <!-- <v-col cols="12" md="6" class="text-center mx-0"> -->
          <v-card flat class="transparent mx-auto text-center" max-width="500">
            <!-- <v-card flat width="100%" class="transparent"> -->
              <v-card-text width="400" class="mx-auto text-center">
                <h1 class="text-center">
                    {{ top.header }}
                </h1>
              </v-card-text>
              <v-card-text width="400" class="mx-auto text-center">
                <p class="text-center">
                    {{ top.text }}
                </p>
              </v-card-text>
              <v-card-text class="text-center">
                <v-btn
                    color="buttons"
                    dark
                    height="48"
                    class="submit-button px-auto mx-auto"
                    @click="$emit('update:page', 'contact')"
                >
                  {{ top.button }}
                </v-btn>
              </v-card-text>
            <!-- </v-card> -->
          </v-card>
        <!-- </v-col>
        <v-col cols="12" md="6">
        </v-col>
      </v-row> -->
    <!-- </v-img> -->
  </v-container>
</template>

<style scoped>
p {
  line-height: 180%!important;
  color: #000!important;
  background: #fff7!important;
  padding: 8px 16px;
  box-shadow: 0 0 32px #fff9!important;
}
</style>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Top',
  props: ['page'],
  data () {
    return {
      topImage: require('@/assets/pictures/headerPicture/family-1-large.jpg')
    }
  },
  computed: {
    ...mapState('content', ['top'])
  }
}
</script>
