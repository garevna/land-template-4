<template>
  <v-container fluid class="header-back ma-0 pa-0">
    <v-img :src="headerBackImage" :height="headerHeight" :position="headerBackPosition" class="mx-0 px-0">
      <v-row class="mx-0 px-0">
        <v-col cols="12" lg="6" class="mx-0 px-0">
          <v-card flat class="header-card transparent text-center">
            <v-card-title class="mx-0">
              <h1>Helping The Community</h1>
            </v-card-title>
            <v-card-text class="mx-0">
              <h4>The COVID-19 pandemic is the defining challenge of our generation. Here’s how we’re helping.</h4>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6" class="mx-0 px-0 mt-12">
          <v-card flat class="transparent mx-auto my-12 py-12 text-center">
            <v-img
                  src="@/components/top-picture.png"
                  class="picture">
            </v-img>
          </v-card>

        </v-col>
      </v-row>
    </v-img>

  </v-container>
</template>

<style scoped>

.header-back {
  overflow: hidden;
}

.header-card {
  margin-left: 130px!important;
  margin-top: 300px;
}

h1 {
  width: 100%;
  font-size: 56px;
  line-height: 56px;
  color: #FFFFFF;
  text-align: left;
  font-family: 'Bebas Neue';
  letter-spacing: 0.16rem;
  word-break: normal;
  font-weight: 100;
}

h4 {
  color: #FFFFFF;
  font-size: 24px;
  line-height: 150%;
  font-family: 'Gilroy';
  text-align: left;
  letter-spacing: 0.1rem;
}

.picture {
  width: 80%;
  position: absolute;
  right: 44px;
  top: -20px;
}

  @media screen and (min-width: 2600px) {
    h1 { font-size: 72px; }
    h4 { font-size: 40px; }
    .header-card {
      margin-left: 30%!important;
      margin-top: 20%;
    }
    .picture {
      width: 900px;
      position: absolute;
      right: 200px;
      top: 0;
    }
  }

  @media screen and (max-width: 900px) {
    h1, h4 { text-align: center; }
    h1 { font-size: 46px; }
    h4 { font-size: 20px; }
    .header-card {
      margin-left: 0!important;
      margin-top: 90px;
    }
    .picture {
      width: 50%;
      right: 25%;
      top: -100px;
    }
  }

  @media screen and (max-width: 599px) {
    h1, h4 { text-align: center; }
    h1 { font-size: 36px; }
    h4 { font-size: 16px; }
    .header-card {
      margin-left: 0!important;
      margin-top: 100px;
    }
    .picture {
      width: 80%;
      right: 10%;
      top: -100px;
    }
  }

  @media screen and (max-width: 320px) {
    h1, h4 { width: 100%; text-align: center; }
    h1 {
      font-size: 34px;
      letter-spacing: normal;
    }
    h4 { font-size: 12px; }
    .header-card {
      margin-left: 0px;
      margin-top: 130px;
    }
    .picture {
      width: 80%;
      right: 10%;
      top: -50px;
    }
  }
</style>

<script>

// import TopLeftCornerWithLogo from '@/components/TopLeftCornerWithLogo.vue'

export default {
  name: 'Header',
  components: {
    // TopLeftCornerWithLogo
  },
  data: function () {
    return {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
  },
  computed: {
    headerHeight () {
      return this.viewport.width >= 1904 ? '1000px' : this.viewport.width >= 1440 ? '810px' : '770px'
    },
    headerBackImage () {
      return this.viewport.width >= 1904 ? require('@/components/header-back-large.png') : this.viewport.width < 900 ? require('@/components/header-back-small.png') : require('@/components/header-back.png')
    },
    textCardMarginTop () {
      return this.viewport.width >= 1904 ? '400px' : this.viewport.width > 900 ? '300px' : '140px'
    },
    headerBackWidth () {
      console.log(this.viewport.width)
      console.log(this.viewport.width >= 1904 ? (this.viewport.width * 2 + 'px') : this.viewport.width)
      return this.viewport.width >= 1904 ? (this.viewport.width * 2 + 'px') : this.viewport.width
    },
    headerBackPosition () {
      console.log(this.viewport.width >= 1904 ? 'center top' : 'left top')
      return this.viewport.width >= 1904 ? 'center top' : 'left top'
    },
    imageWidth () {
      return this.viewport.width >= 1440 ? '705px' : '320px'
    }
  },
  methods: {
    onResize () {
      this.viewport.width = window.innerWidth
      this.viewport.height = window.innerHeight
    }
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
