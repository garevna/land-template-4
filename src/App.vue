<template>
  <v-app light>
    <Header />
    <v-container fluid class="pa-0 ma-0">
      <v-row justify="center" class="pa-0 ma-0">
        <v-sheet
          width="100%"
          color="homefone"
          tile
          class="mx-auto"
        >
          <v-row class="mx-0 px-0">
            <v-col cols="12" md="6" class="mx-0 px-0">
              <v-card flat class="transparent mx-0">
                <v-img src="@/components/map-picture.svg" height="800" contain style="opacity:0.2;"></v-img>
                <v-card
                        :width="viewport.width > 600 ? 450 : 340"
                        flat
                        class="user-contact transparent mx-auto pa-0"
                >
                  <UserContact/>
                </v-card>
              </v-card>
            </v-col>
            <v-col cols="12" md="6" class="aside-col">
              <v-card
                      flat
                      class="aside-card transparent"
              >
                <Aside />
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
      <v-row>
        <section id="footer">
        <div class="base-title">
          <a href="#footer" class="core-goto"></a>
          <Footer />
        </div>
      </section>
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
  overflow-x:hidden;
}
.user-contact {
  margin-top: -920px;
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

@media screen and (max-width: 600px) {
  .user-contact {
    margin-top: -900px;
  }
  .aside-col {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .aside-card {
    width: 100%;
    margin-left: -10px;
    padding: 0;
  }
}

@media screen and (max-width: 320px) {
  .user-contact {
    margin-top: -900px;
  }
  .aside-col {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .aside-card {
    width: 100%;
    margin-left: -10px;
    padding: 0;
  }
}
</style>

<script>

import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'
import UserContact from '@/components/UserContact.vue'
import BandWidth from '@/components/BandWidth.vue'
import FAQ from '@/components/FAQ.vue'
import StayConnected from '@/components/StayConnected.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Aside,
    UserContact,
    BandWidth,
    FAQ,
    StayConnected,
    Footer
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
