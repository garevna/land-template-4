<template>
  <v-app light>
    <v-container class="my-md-12 py-md-12">
      <v-row>
        <v-col cols="12">
          <v-row
            align="center"
            justify="center"
            style="height: 400px;"
          >
            <v-card
                    v-for="(card, index) in cards"
                    :key="index"
                    class="ma-3 pa-6"
                    width="320"
                    height="320"
                    @click="clickHandler(card.ref)"
            >
              <v-row style="height: 40px;">
                <v-col cols="12">
                    {{ card.date }}
                </v-col>
              </v-row>
              <v-row style="height: 160px;">
                <v-col cols="12">
                    <h3 style="word-break: normal!important">{{ card.title }}</h3>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="5" style="text-align: left">
                  <v-img
                      :src="card.logo"
                      height="50"
                      contain
                      position="left bottom"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
* {
  font-family: 'Gilroy';
}
</style>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      cards: null
    }
  },
  methods: {
    async getData () {
      const rawData = await (await fetch('https://dka.dgtek.net/api/frontend/news')).json()
      this.cards = rawData.data
      this.cards.forEach((item) => { item.date = new Date(item.published_at).toGMTString().slice(0, 16) })
    },
    clickHandler (url) {
      window.open(url)
    }
  },

  computed: {
    //
  },
  beforeMount () {
    this.getData()
  },
  mounted () {
    //
  }
}
</script>
