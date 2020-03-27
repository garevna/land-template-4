<template>
  <v-app light>
    <v-container fluid fill-height>
      <v-row justify="center" class="mx-auto" style="max-width: 1440px">
        <v-col justify="center" cols="12" md="6" lg="4" xl="3" v-for="(card, index) in cards" :key="index">
          <v-card
                hover
                text-left
                style="position: relative"
                @click="clickHandler"
                class="py-auto px-8"
                height="320"
          >
            <v-card-text>{{ card.date }}</v-card-text>
            <v-card-title>{{ card.title }}</v-card-title>
            <v-row style="position: absolute; bottom: 30px">
              <v-col cols="6" style="text-align: left">
                  <v-img
                      :src="card.logo"
                      height="50"
                      contain
                      position="left bottom"
                  ></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
* {
  background-position: bottom left!important;
}
.card-logo {
  position: absolute;
  bottom: 20px;
  height: 70px;
  width: 160px;
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
    clickHandler () {
      window.open()
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
