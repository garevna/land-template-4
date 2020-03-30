// import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  // icons: {
  //   iconfont: 'mdi',
  //   values: {
  //     expand: 'mdi-expand-more',
  //     support: 'mdi-lifebuoy',
  //     steam: 'mdi-steam-box',
  //     pc: 'mdi-desktop-classic',
  //     xbox: 'mdi-xbox',
  //     playstation: 'mdi-playstation',
  //     switch: 'mdi-nintendo-switch'
  //   }
  // },
  theme: {
    themes: {
      light: {
        primary: '#FF0E00',
        secondary: '#E82F37',
        buttons: '#F54436',
        homefone: '#FEFEFE',
        inputs: '#EFEFEF',
        activefield: '#D9D9D9',
        warning: '#FAFF00'
      },
      dark: {
        primary: '#FF0E00',
        secondary: '#E82F37',
        buttons: '#F54436',
        homefone: '#FEFEFE',
        fields: '#EFEFEF',
        activefield: '#D9D9D9',
        warning: '#FAFF00'
      }
    }
  }
})
