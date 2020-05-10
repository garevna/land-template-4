<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6">
        <v-card flat class="transparent">
          <v-card-text class="text-center">
            <h3>
              {{ compare.left.title }}
            </h3>
          </v-card-text>
          <v-card-text class="text-left">
            <p>
              {{ compare.left.text }}
            </p>
          </v-card-text>

          <v-card-text
                class="text-left"
                v-for="(item, index) in compare.left.items"
                :key="index"
          >
            <v-row>
              <v-col cols="1">
                <v-icon color="green">mdi-check-bold</v-icon>
              </v-col>
              <v-col cols="10">
                <h4>
                  {{ item.title }}
                </h4>
                <p>
                  {{ item.text }}
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card flat class="transparent">
          <v-card-text class="text-center">
            <h3>
              {{ compare.right.title }}
            </h3>
          </v-card-text>
          <v-card-text class="text-left">
            <p>
              {{ compare.right.text }}
            </p>
          </v-card-text>
          <v-card-text
                class="text-left"
                v-for="(item, index) in compare.right.items"
                :key="index"
          >
            <v-row>
              <v-col cols="1">
                <v-icon color="red">mdi-close</v-icon>
              </v-col>
              <v-col cols="10">
                <h4>
                  {{ item.title }}
                </h4>
                <p>
                  {{ item.text }}
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

.aside-card {
  padding-top: 150px;
}

h2 {
  color: #1A1A1A;
  letter-spacing: 0.1rem;
}
h4 {
  color: #665566;
}
.red--text {
  color: #F54436;
}
p {
  color: #665566;
}
.small {
  font-size: 14px;
}

@media screen and (max-width: 900px) {
  .aside-card {
    margin-top: -180px;
    margin-bottom: 80px;
  }
}
@media screen and (max-width: 600px) {
  .aside-card {
    margin-top: -90px;
    margin-bottom: 80px;
  }
}

</style>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Compare',
  props: ['page'],
  data () {
    return {
      // contact: false
    }
  },
  computed: {
    ...mapState('content', ['compare'])
  }
}
</script>
