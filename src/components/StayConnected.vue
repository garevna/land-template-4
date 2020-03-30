<template>
  <v-container>
    <v-card flat class="transparent mx-auto">
      <v-card-title><h1>Stay connected</h1></v-card-title>
      <v-card-text>
        <p>Send us an enquiry and a member of our team will get back to you as soon as possible to answer any questions you may have or guide you through the connection process</p>
      </v-card-text>
      <v-row align="center" justify="center" class="py-12">
        <v-col cols="12">
          <v-row align="center" justify="center">
            <v-col cols="12" lg="4">
              <v-text-field
                    placeholder="Name*"
                    outlined
                    filled
                    height="48"
                    v-model="name"
                    class="fields"
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="4">
              <v-text-field
                    placeholder="Email*"
                    outlined
                    filled
                    height="48"
                    v-model="email"
                    class="fields"
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="4">
              <v-text-field
                    placeholder="Phone*"
                    outlined
                    filled
                    height="48"
                    v-model="phone"
                    class="fields"
              ></v-text-field>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12">
            <v-textarea
              filled
              label="Your Message"
              auto-grow
              value=""
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" class="submit">
            <v-btn
              dark
              class="buttons"
              width="220"
              height="48"
            >Submit</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</v-container>
</template>

<style scoped>
h1 {
  width: 100%;
  text-align: center;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: bold;
  font-size: 46px;
  line-height: 150%;
  color: #000000;
}
p {
  color: #0b0b0b;
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;
  width: 100%;
  text-align: center;
}

@media screen and (max-width: 600px) {
  h1 { font-size: 28px; }
  p {
    font-size: 14px;
    color: #757575;
  }
  .submit {
    width: 100%;
    text-align: center;
  }
}
</style>

<script>
export default {
  data () {
    return {
      name: '',
      phone: '',
      email: '',
      message: ''
    }
  },
  methods: {
    resetData () {
      this.name = ''
      this.phone = ''
      this.email = ''
      this.message = ''
    },
    sendData () {
      const data = {
        email: this.email,
        phone: this.phone,
        name: this.name,
        subject: 'Confirmation of submission at www.dgtek.net',
        message: this.message
      }
      this.$store.dispatch('CONTACT_MESSAGE', data)
        .then((response) => { this.message = response })

      this.$parent.toggleSubmit()

      const inputs = document.querySelectorAll('.form-input')
      const textareas = document.querySelectorAll('.form-textarea')
      const form = [...inputs, ...textareas]

      this.resetData()

      // eslint-disable-next-line no-param-reassign
      return form.forEach((input) => { input.value = '' })
    }
  }
}
</script>
