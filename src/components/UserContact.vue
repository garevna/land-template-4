<template>
  <v-card class="mx-auto pa-4">
    <v-card-title>
      <h3>Get Our Limited Offer!</h3>
    </v-card-title>
    <v-card-text>
      <v-text-field
            placeholder="Name*"
            outlined
            v-model="name"
      ></v-text-field>
      <v-text-field
            placeholder="Email*"
            outlined
            v-model="email"
      ></v-text-field>
      <v-text-field
            placeholder="Address*"
            outlined
            v-model="address"
      ></v-text-field>
      <v-text-field
            placeholder="Postcode*"
            outlined
            v-model="postcode"
      ></v-text-field>
      <v-text-field
            placeholder="State*"
            outlined
            v-model="state"
      ></v-text-field>
      <v-text-field
            placeholder="Tell us how covid-19 impacted you*"
            outlined
            v-model="message"
      ></v-text-field>
    </v-card-text>
    <v-card-actions class="text-center">
      <v-btn
          dark
          width="100%"
          height="65"
          color="buttons"
      >GET OFFER</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
h3 {
  width: 100%;
  text-align: center;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
}
</style>

<script>

export default {
  name: 'UserContact',
  data () {
    return {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      name: '',
      email: '',
      address: '',
      postcode: '',
      state: '',
      message: ''
    }
  },
  computed: {
    width () {
      return this.viewport.width * 0.2
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
