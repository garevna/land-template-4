<template>
  <v-app light>
    <AppHeader :page="page"/>
    <v-container fluid class="pa-0 my-0 mx-auto" style="max-width: 1000px">

      <section id="home" class="mx-auto">
        <div class="base-title">
          <a href="#home" class="core-goto"></a>
          <Top />
        </div>
      </section>

      <!-- <Compare />
      <Banner /> -->

      <section id="benefits" class="mx-auto">
        <div class="base-title">
          <a href="#benefits" class="core-goto"></a>
          <Benefits />
        </div>
      </section>

      <Aside />

      <section id="testimonials" class="mx-auto">
        <div class="base-title">
          <a href="#testimonials" class="core-goto"></a>
          <Testimonials />
        </div>
      </section>

      <section id="faq" class="mx-auto">
        <div class="base-title">
          <a href="#faq" class="core-goto"></a>
          <FAQ />
        </div>
      </section>

      <section id="stay-connected" class="mx-auto">
        <div class="base-title">
          <a href="#stay-connected" class="core-goto"></a>
          <StayConnected />
        </div>
      </section>

      <section id="articles" class="mx-auto">
        <div class="base-title">
          <a href="#articles" class="core-goto"></a>
          <Articles />
        </div>
      </section>

      <section id="footer" class="mx-auto">
        <div class="base-title">
          <a href="#footer" class="core-goto"></a>
          <Footer />
        </div>
      </section>
    </v-container>
  </v-app>
</template>

<style>

html, body {
  margin: 0;
  padding: 0;
}
body {
  background: #E5E5E5;
  overflow-x:hidden;
}

.theme--light.v-application {
  background: #FBFBFB!important;
}

.user-contact {
  margin-top: -720px;
}

h1, h2, h3, h4, h5, p {
  font-family: 'Gilroy';
  letter-spacing: 0.02rem;
  line-height: 150%;
  font-style: normal;
  color: #000;
}

h1 {
  font-size: 54px;
  font-weight: 900;
}
h2 {
  font-size: 42px;
  font-weight: 600;
}
h3 {
  font-size: 24px;
  font-weight: 600;
}
h4 {
  font-size: 24px;
  font-weight: bold;
}
h5 {
  font-size: 24px;
  font-weight: medium;
}
p {
  font-weight: normal;
  font-size: 18px;
  color: #333;
}

@media screen and (max-width: 900px) {
  h1 {
    font-size: 36px;
  }
  h2 { font-size: 28px; }
  h3 { font-size: 24px; }
  h4, h5 { font-size: 18px; }
  p { font-size: 16px; }
}

@media screen and (max-width: 360px) {
  p { font-size: 14px; }
}

.v-card__title, h1, h4, h3, h4, h5, p {
  word-break: normal!important;
}

</style>

<style scoped>

@media screen and (max-width: 900px) {
  h1, h4 { text-align: center; }
}
@media screen and (max-width: 599px) {
  h1, h4 { text-align: center; }
}

@media screen and (max-width: 320px) {
  h1, h4 { width: 100%; text-align: center; }
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

import AppHeader from '@/components/AppHeader.vue'
import Top from '@/components/Top.vue'
import Aside from '@/components/Aside.vue'
// import Compare from '@/components/Compare.vue'
// import Banner from '@/components/Banner.vue'
// import UserContact from '@/components/UserContact.vue'
import Benefits from '@/components/Benefits.vue'
// import Testimonials from '@/components/Testimonials.vue'
import FAQ from '@/components/FAQ.vue'
import Articles from '@/components/Articles.vue'
// import StayConnected from '@/components/StayConnected.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  created () {
    document.title = '...'
  },
  components: {
    AppHeader,
    Top,
    Aside,
    // Compare,
    // Banner,
    // UserContact,
    Benefits,
    Articles,
    // Testimonials,
    FAQ,
    // StayConnected,
    Footer
  },
  data: function () {
    return {
      page: 0,
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
  watch: {
    page (val) {
      console.log(val)
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
    this.$store.dispatch('blog/GET_BLOG_NEWS')
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  }
}
</script>
