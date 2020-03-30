<template>
  <v-app light>
    <Header />
    <v-container fluid class="pa-0 ma-0">
      <v-row justify="center" class="pa-0 ma-0">
        <v-sheet
          width="100%"
          height="900"
          color="homefone"
          tile
          class="mx-auto"
        >
          <v-row class="mx-0 px-0">
            <v-col cols="12" md="6" class="mx-0 px-0">
              <v-card flat class="transparent mx-0">
                <v-img src="@/components/map-picture.svg" height="800" contain style="opacity:0.2;"></v-img>
                <v-card
                        :width="viewport.width > 600 ? 450 : 341"
                        height="858"
                        flat
                        class="transparent mx-auto pa-0"
                        style="margin-top: -870px"
                >
                  <UserContact/>
                </v-card>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card
                      flat
                      width="450"
                      height="858"
                      class="transparent mx-auto pa-4"
              >
              </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-row>
      <v-row class="mx-0 px-0">
        <BandWidth/>
      </v-row>
      <v-row class="mx-0 px-0">
        <FAQ/>
      </v-row>
      <v-row class="mx-0 px-0">
        <StayConnected/>
      </v-row>
    </v-container>
  </v-app>
</template>

<style>

@import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');

html, body {
  margin: 0;
  padding: 0;
}
/* html {
  background: #FF0E00;
} */
body {
  background: #E5E5E5;
}
.headers {
  font-family: 'Bebas Neue';
}
.other {
  font-family: 'Gilroy';
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #FF0E00;
}
::-webkit-scrollbar-thumb {
  background: #E5E5E5;
}
::-webkit-scrollbar-thumb:hover {
  background: #72BF44;
}
</style>

<script>

import Header from '@/components/Header.vue'
import UserContact from '@/components/UserContact.vue'
import BandWidth from '@/components/BandWidth.vue'
import FAQ from '@/components/FAQ.vue'
import StayConnected from '@/components/StayConnected.vue'

export default {
  name: 'App',
  components: {
    Header,
    UserContact,
    BandWidth,
    FAQ,
    StayConnected
  },
  data: function () {
    return {
      cards: null,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
  },
  computed: {
    headerHeight () {
      return this.viewport.width >= 1440 ? 810 : 770
    }
  },
  methods: {
    clickHandler (url) {
      window.open(url)
    },
    onResize () {
      this.viewport.width = window.innerWidth
      this.viewport.height = window.innerHeight
    }
  },
  beforeMount () {
    //
  },
  mounted () {
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  }
}
</script>
