<template>
  <v-container>
    <v-row class="mx-auto">
      <v-col cols="12" xl="10" class="mx-auto">
        <v-row>
          <v-col cols="12" lg="4">
            <v-card flat class="transparent mx-auto">
              <v-card-actions>
                <v-img src="@/components/dgtek-logo.svg" width="80" height="52" contain position="left center"></v-img>
              </v-card-actions>
              <v-card-title>
                <h4>About us</h4>
              </v-card-title>
              <v-card-text>
                <p>
                  DGtek is a registered Australia Telecommunications Infrastructure Carrier that designs, builds, operates and maintains high-speed Optical Fibre Networks.
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" lg="2">
            <v-card flat class="transparent mx-auto">
              <v-card-title>
                <h4>Company</h4>
              </v-card-title>
              <v-card-text>
                <p><a href="https://dgtek.net/products" target="_blank">Products</a></p>
                <p><a href="https://dgtek.net" target="_blank">About Us</a></p>
                <p><a href="https://dgtek.net/blog/dgtek-in-media" target="_blank">Dgtek in Media</a></p>
                <p><a href="https://dgtek.net/blog" target="_blank">Blog</a></p>
                <p><a href="https://dgtek.net" target="_blank">FAQ</a></p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" lg="2">
            <v-card flat class="transparent mx-auto">
              <v-card-title>
                <h4>Products</h4>
              </v-card-title>
              <v-card-text>
                <p><a href="https://dgtek.net/products/residential-internet" target="_blank">Residential Internet</a></p>
                <p><a href="https://dgtek.net/products/commercial-internet" target="_blank">Commercial Internet</a></p>
                <p><a href="https://dgtek.net/products/dedicated-services" target="_blank">Lit/dark fibre</a></p>
                <p><a href="https://dgtek.net/products/developers" target="_blank">Developers/greenfield</a></p>
                <p><a href="https://dgtek.net/products/owners-corporations" target="_blank">OCs&body corporates</a></p>
                <p><a href="https://dgtek.net/products/social-responsibility" target="_blank">Free internet for not-for-profit</a></p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" lg="2">
            <v-card flat class="transparent mx-auto">
              <v-card-title>
                <h4>Client</h4>
              </v-card-title>
              <v-card-text>
                <p>Website Disclaimer</p>
                <p>Terms & Conditions</p>
                <p>DGTek Privacy Policy</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" lg="2">
            <v-card flat class="transparent mx-auto">
              <v-card-title>
                <h4>Contacts</h4>
              </v-card-title>
              <v-card-text>
                <p>Phone:
                  <a href="tel:1800 359 602">1800 359 602</a>
                </p>
                <p>Email:
                  <a href="mailto:info@dgtek.net">info@dgtek.net</a>
                </p>
                <p>
                  <a href="https://www.facebook.com/ISPDGtek/" target="_blank">
                    <v-img src="@/components/fb.png" width="10" height="10" contain></v-img>
                  </a>
                  <a href="https://www.picuki.com/tag/DGTEK" target="_blank">
                    <v-img src="@/components/instagram.png" width="10" height="10" contain></v-img>
                  </a>
                  <a href="https://www.linkedin.com/company/dgtek/" target="_blank">
                    <v-img src="@/components/linkedin.png" width="10" height="10" contain></v-img>
                  </a>
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <hr />
    <v-row class="mx-auto">
      <p style="width: 100%; text-align: center;">2019 © DGtek Pty. Ltd. ABN 61 600 896 115</p>
    </v-row>
  </v-container>
</template>

<style scoped>
h4 {
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #000;
}
p {
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  color: #757575;
}
a {
  text-decoration: none;
  color: #757575!important;
  display: inline-block;
  margin-right: 10px;
}
</style>

<script>

export default {
  name: 'Footer',
  data () {
    return {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      }
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
