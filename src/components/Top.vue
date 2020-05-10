<template>
  <v-container fluid style="overflow-x: hidden; margin-top: 40px; margin-bottom: 64px;">
    <v-img
          :src="require('@/assets/pictures/headerPicture/family-3.jpg')"
          scroll-threshold="500"
          min-height="300"
          max-height="500"
          max-width="1904"
          position="center"
    >
      <v-row align="center" justify="start" class="mx-0">
        <v-col cols="12" md="6" class="text-left mx-0">
          <v-card flat class="transparent" width="100%" max-width="1440">
            <v-card flat width="100%" max-width="500" class="transparent">
              <v-card-text class="text-left">
                <h1 class="text-center text-sm-left ml-0 ml-sm-4">
                    {{ top.header }}
                </h1>
              </v-card-text>
              <v-card-text class="mx-auto mx-lg-0">
                <p class="text-center text-sm-left">
                    {{ top.text }}
                </p>
              </v-card-text>
              <v-card-text class="text-center text-md-left">
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
            </v-card>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
        </v-col>
      </v-row>
    </v-img>
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
