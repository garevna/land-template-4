<template>
  <v-card class="user-info mx-auto pa-6">
    <v-card-title>
      <h3>Get Our Limited Offer!</h3>
    </v-card-title>
    <v-card-text class="mx-0 px-0" width="100%">
      <v-text-field
            placeholder="Name*"
            outlined
            v-model="name"
            class="inputs"
      ></v-text-field>
      <v-text-field
            placeholder="Email*"
            outlined
            v-model="email"
            class="inputs"
      ></v-text-field>
      <v-text-field
            placeholder="Address*"
            outlined
            v-model="address"
            class="inputs"
      ></v-text-field>
      <v-text-field
            placeholder="Postcode*"
            outlined
            v-model="postcode"
            class="inputs"
      ></v-text-field>
      <v-text-field
            placeholder="State*"
            outlined
            v-model="state"
            class="inputs"
      ></v-text-field>
      <v-textarea
            placeholder="Tell us how covid-19 impacted you*"
            outlined
            auto-grow
            v-model="message"
            class="inputs"
      ></v-textarea>
    </v-card-text>
    <v-card-actions class="text-center">
      <v-btn
          dark
          width="100%"
          height="65"
          color="buttons"
          class="submit-button"
      >GET OFFER</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.user-info {
  border-radius: 15px!important;
}
h3 {
  width: 100%;
  text-align: center;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 30px;
}
.inputs {
  font-family: Gilroy;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #656565;
}
.submit-button {
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 150%;
  text-transform: capitalize;
}

@media screen and (max-width: 600px) {
  .user-info {
    width: 340px!important;
  }
  h3 {
    font-size: 18px;
  }
  .inputs {
    font-size: 14px;
  }
  .submit-button {
    font-size: 16px;
  }
}
@media screen and (max-width: 320px) {
  .user-info {
    width: 300px!important;
  }
  h3 {
    font-size: 18px;
  }
  .inputs {
    font-size: 14px;
  }
  .submit-button {
    font-size: 16px;
  }
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
