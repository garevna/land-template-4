<template>
  <v-container class="homefone mx-auto my-12 px-0 py-12">
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
            <v-expansion-panel-header height="64"><h4 class="my-0">{{ item.question }}</h4></v-expansion-panel-header>
            <v-expansion-panel-content class="answer" v-html="item.answer">
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

.answer {
  padding: 10px 20px;
}

.v-card__text {
  font-family: 'Gilroy'!important;
  font-style: normal;
  font-weight: normal;
  font-size: 18px!important;
  line-height: 150%;
  color: #2D2D2D!important;

}

@media screen and (max-width: 600px) {
  h1 { font-size: 28px; margin-left: 20px; }
  h4 {
    font-size: 14px;
    max-width: 80%;
    margin-left: 10%;
  }
  .v-card__text {
    font-size: 14px!important;
  }
}

@media screen and (max-width: 320px) {
  :root {
    --font-size: '18px'
  }
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
  .v-card__text {
    font-size: 12px!important;
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
          question: 'Helping The Community',
          answer: '<p>The COVID-19 pandemic is the defining challenge of our generation. Here’s how we’re helping.</p>'
        },
        {
          question: 'Our Offer To The Community',
          answer: `<div>
                    <p>DGtek wants to help you adjust to the new normal. That’s why we are giving away ultra-fast fibre connections - for free. No strings attached. No clauses or contracts.</p>
                    <p class="atext">Exactly what’s on offer:</p>
                    <p><b>6 months</b> of free internet*</p>
                    <p><b>3 months</b> of free internet**</p>
                    <p>*to pensioners, retirees and residents in aged care facilities</p>
                    <p>**to all families impacted by COVID-19</p>
                  </div>
                   `
        },
        {
          question: 'All The Bandwidth You’ll Ever Need , Zero Congestion',
          answer: `<div>
          <p>We started building our fibre-to-the-home network in 2016. In all this time, we have maintained 99.9% uptime and have never delivered a speed below what we promised to a customer.</p>
          <p><b>Symmetrical Speeds</b></p>
          <p>DGTek gives you the same upload and download speed. Our upload speeds are 20x faster than the NBN. This means all your upload thirsty Skype, Zoom and Google Hangouts calls are handled, no issue!</p>
          <p><b>Zero Congestion</b></p>
          <p>Stream in 4K on every TV, laptop and phone in your house - no waiting time. With our 500Mbps fibre connection, we never miss a beat.</p>
          <p><b>Reliability</b></p>
          <p>In these uncertain times, the internet is our lifeline. It connects us to our work, our friends and our families. DGtek’s fibre has 99.9% uptime, how’s that for peace of mind?</p>
          </div>`
        },
        {
          question: 'Why is DGtek Giving Away Free Internet? ',
          answer: '<p>Aside from the fact that it’s our civic duty, and we are clearly all in this together, most of Australia’s internet infrastructure just isn’t equipped to handle traffic of this magnitude.</p>'
        },
        {
          question: 'How Does DGtek’s Symmetrical Fibre Help Me Work or Study from Home?',
          answer: `<div>
            <p>You might have noticed that all of the NBN’s residential connections have much faster download speeds than upload speeds.</p>
            <p>An assumption has been made about how we use the internet and to be fair it’s a pretty safe assumption. Unfortunately, their vision wasn’t 2020.</p>
            <p>Today, the virus has flipped society on its head and turned our homes into our offices. There could be as many people working online in your street as you’d find in a large office building - and that is a problem.</p>
            <p>Business applications like video conferencing are further antagonising the lack-of-bandwidth issue because they are upload thirsty. Remember, Australian homes had less upload bandwidth to begin with and the added strain has resulted in additional congestion.</p>
            <p>When the kids are online-learning, parents are online-working and grandma is FaceTiming, that bandwidth is shared by everyone.</p>
            <p>If there isn’t enough to go around, then connection quality suffers, calls are dropped, and voices are delayed.</p>
            <p>DGtek’s internet service alleviates all these problems by simply offering symmetrical speeds.</p>
            <p>All you really need to understand is that our upload speeds are as fast as our downloads.</p>
            <p>DGtek’s 500Mbps download is 5x faster than the fastest NBN 100 download internet service.</p>
            <p>DGtek’s 500Mbps upload is over 10x faster than the fastest NBN’s 40Mbps upload internet service.</p>
          </div>`
        },
        {
          question: 'Where is DGtek Available?',
          answer: '<div>DGtek currently provides ultra-fast, direct fibre service to homes and businesses across Melbourne CBD and South-East suburbs – Port/South Melbourne, St Kilda, Elwood, Bentleigh and Moorabbin.<br>Insert link to DGtek footprint address bar</div>'
        }
      ]
    }
  },
  computed: {
    //
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
