<template>
  <v-container fluid class="header-back ma-0 pa-0" :style="{ height: headerHeight }">
    <v-img :src="headerBackImage" :height="headerHeight" :position="headerBackPosition" class="mx-0 px-0">
      <v-row class="mx-0 px-0">
        <v-col cols="12" lg="6" class="mx-0 px-0">
          <v-card flat class="transparent mx-auto text-center" :style="{ marginTop: textCardMarginTop }">
            <v-card-title>
              <h1>Helping The Community</h1>
            </v-card-title>
            <v-card-text>
              <h4>The COVID-19 pandemic is the defining challenge<br>of our generation. Here’s how we’re helping.</h4>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6" class="mx-0 px-0 mt-12">
          <v-card flat class="transparent mx-auto my-12 py-12 text-center">
            <v-img
                  v-if="viewport.width > 900"
                  src="@/components/top-picture.png"
                  :width="imageWidth"
                  style="position: absolute; right: 44px; top: -20px;">
            </v-img>
            <v-img
                  v-else
                  src="@/components/top-picture.png"
                  height="278"
                  contain
                  position="center"
                  style="position: relative; margin-top: -130px;">
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

h1 {
  width: 100%;
  font-size: 56px;
  line-height: 56px;
  color: #FFFFFF;
  text-align: center;
  font-family: 'Bebas Neue';
}
h4 {
  color: #FFFFFF;
  font-size: 24px;
  line-height: 150%;
  font-family: 'Gilroy';
}

  @media screen and (min-width: 1904px) {
    h1 { font-size: 72px; }
    h4 { font-size: 40px; }
  }

  @media screen and (max-width: 600px) {
    h1 { font-size: 36px; margin-left: 5%; }
    h4 { font-size: 16px; margin-left: 5%; }
  }

  @media screen and (max-width: 320px) {
    h1 { font-size: 18px; left: 5%; }
    h4 { font-size: 12px; left: 5%; }
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
