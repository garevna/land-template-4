<template>
  <v-container fill-height class="homefone mx-auto my-12 px-0 py-12">
    <v-card flat class="transparent mx-auto">
      <v-card-title>
        <h1>FAQ</h1>
      </v-card-title>
      <v-card-text>
        <v-expansion-panels
              v-model="panel"
        >
          <v-expansion-panel
              v-for="(item, index) in faq"
              :key="index"
              class="homefone"
          >
            <v-expansion-panel-header height="64"><h4 class="my-12">{{ item.question }}</h4></v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>{{ item.answer }}</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

.v-card__title, h1, h4, h3, p {
  word-break: normal!important;
}

h1 {
  width: 100%;
  font-size: 50px;
  line-height: 54px;
  color: #000;
  text-align: center;
  font-family: 'Roboto';
}
h4 {
  color: #000;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
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
  name: 'FAQ',
  data: function () {
    return {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      panel: null,
      faq: [
        {
          question: 'Why is DGtek Giving Away Free Internet?',
          answer: `DGTek gives you the same upload and download speed.
            Our upload speeds are 20x faster than the NBN.
            This means all your upload thirsty Skype, Zoom and Google Hangouts calls are handled, no issue!`
        },
        {
          question: 'How Does DGtek’s Symmetrical Fibre Help Me Work or Study from Home? ',
          answer: 'Stream in 4K on every TV, laptop and phone in your house - no waiting time. With our 500Mbps fibre connection, we never miss a beat.'
        },
        {
          question: 'Where is DGtek Available?',
          answer: 'In these uncertain times, the internet is our lifeline. It connects us to our work, our friends and our families. DGtek’s fibre has 99.9% uptime, how’s that for peace of mind?'
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
