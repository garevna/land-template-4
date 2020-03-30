<template>
  <v-container fluid class="homefone ma-0 pa-0">
    <v-img src="@/components/red-background.png" :height="backgroundHeight" position="center" class="mx-0 px-0"></v-img>
      <v-card flat class="white-title transparent mx-auto" :style="{ marginTop: whiteTextMarginTop }">
        <v-card-title>
          <h1>All The Bandwidth You’ll Ever Need , Zero Congestion.</h1>
        </v-card-title>
        <v-card-text>
          <h4>We started building our fibre-to-the-home network in 2016.<br>
            In all this time, we have maintained 99.9% uptime and have never delivered a speed below what we promised to a customer.</h4>
        </v-card-text>
      </v-card>
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" lg="10" xl="8" class="mx-auto">
            <v-row
                align="center"
                justify="center"
            >
              <v-col
                  cols="12"
                  lg="4"
                  v-for="(card, index) in cards"
                  :key="index"
              >
                <v-card
                    shaped
                    elevation="10"
                    class="cards mx-auto px-6 px-xs-4"
                    :style="{ marginTop: cardsMarginTop }"
                >
                  <v-img
                      class="icons"
                      :src="card.image"
                      :width="iconSize"
                      :height="iconSize"
                      contain position="left"
                  ></v-img>
                  <h3>{{ card.title }}</h3>
                  <v-card-text>
                    <p>{{ card.text }}</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
  </v-container>
</template>

<style scoped>

.header-back {
  overflow: hidden;
}

.v-card__title, h1, h4, h3, p {
  word-break: normal!important;
}

h1 {
  width: 100%;
  font-size: 42px;
  line-height: 54px;
  color: #FFFFFF;
  text-align: left;
  margin-left: 130px;
  font-family: 'Bebas Neue';
}
h4 {
  color: #FFFFFF;
  font-size: 24px;
  line-height: 150%;
  font-family: 'Gilroy';
  text-align: left;
  margin-left: 130px;
  max-width: calc(100% - 260px);
}

h3 {
  font-family: 'Bebas Neue';
  font-size: 24px;
  color: #000;
  margin-top: 32px;
}

p {
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 161.5%;
  color: #2D2D2D;
}

.cards {
  border-radius: 15px;
  width: 380px;
  height: 400px;
  padding-top: 20px;
}

@media screen and (max-width: 600px) {
  h1 { font-size: 28px; margin-left: 20px; }
  h4 {
    font-size: 14px;
    max-width: 80%;
    margin-left: 10%;
  }
  p {
    font-size: 14px;
  }
  .cards {
    width: 340px;
    height: 235px;
    margin-left: calc(50% - 170px);
    padding-top: 20px;

  }
  .icons, h3 {
    display: inline-block;
  }
  h3 {
    margin-top: 0px;
    vertical-align: bottom;
  }
  .icons {
    margin-right: 16px;
  }
}

@media screen and (max-width: 320px) {
  h1 {
    font-size: 18px;
    margin-left: 24px;
    max-width: 280px;
    line-height: 32px;
  }
  h4 {
    font-size: 12px;
    margin-left: 24px;
    max-width: 280px;
    line-height: 32px;
  }
  .cards {
    width: 340px;
    height: 260px;
    margin-left: calc(50% - 170px);
  }
  .icons, h3 {
    display: inline-block;
  }
  .icons {
    margin-right: 10px;
  }
  h3 {
    margin-top: 0px;
    vertical-align: bottom;
  }
}

@media screen and (min-width: 1904px) {
  .white-title * {
    width: 100%;
    text-align: center;
  }
}
</style>

<script>

export default {
  name: 'BandWidth',
  data: function () {
    return {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      cards: [
        {
          image: require('@/components/ico-1.svg'),
          title: 'Symmetrical Speeds',
          text: `DGTek gives you the same upload and download speed.
            Our upload speeds are 20x faster than the NBN.
            This means all your upload thirsty Skype, Zoom and Google Hangouts calls are handled, no issue!`
        },
        {
          image: require('@/components/ico-2.svg'),
          title: 'Zero Congestion',
          text: 'Stream in 4K on every TV, laptop and phone in your house - no waiting time. With our 500Mbps fibre connection, we never miss a beat.'
        },
        {
          image: require('@/components/ico-3.svg'),
          title: 'Reliability',
          text: 'In these uncertain times, the internet is our lifeline. It connects us to our work, our friends and our families. DGtek’s fibre has 99.9% uptime, how’s that for peace of mind?'
        }
      ]
    }
  },
  computed: {
    fullHeight () {
      return this.viewport.width >= 1140 ? '766px' : '1045px'
    },
    backgroundHeight () {
      return this.viewport.width >= 1140 ? '635px' : '955px'
    },
    whiteTextMarginTop () {
      return this.viewport.width >= 1140 ? '-580px' : '-900px'
    },
    whiteTextMarginLeft () {
      return this.viewport.width >= 1140 ? '380px' : '100px'
    },
    cardsMarginTop () {
      return this.viewport.width > 1140 ? '40px' : '0px'
    },
    iconSize () {
      return this.viewport.width > 1140 ? '51px' : '32px'
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
