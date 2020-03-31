<template>
        <v-card
              flat
              class="aside-card transparent mx-3"
              width="450"
              height="480"
        >
          <v-card-title>
            <h1>Our Offer To The Community</h1>
          </v-card-title>
          <v-card-text>
            <p>
              DGtek wants to help you adjust to the new normal.<br>
              That’s why we are giving away ultra-fast fibre connections - for free. No strings attached.<br>
              No clauses or contracts.
            </p>
          </v-card-text>
          <v-card-text>
            <p style="margin-left: 0!important"><b>Exactly what’s on offer:</b></p>
            <h3>6 months <span class="red--text">of free internet*</span></h3>
            <h3>3 months <span class="red--text">of free internet**</span></h3>
          </v-card-text>
          <v-card-text>
            <p class="small">
              *to pensioners, retirees and residents in aged<br>
              care facilities<br>
              **to all families impacted by COVID-19
            </p>
          </v-card-text>
        </v-card>
</template>

<style scoped>

.aside-card {
  padding-top: 150px;
}

h1 {
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 42px;
  color: #1A1A1A;
  margin-left: 16px;
}
h3 {
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 150%;
  color: #665566;
}
.red--text {
  color: #F54436;
}
p {
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  color: #665566;
  margin-left: 16px;
}
.small {
  font-size: 14px;
  padding-left: 32px;
}

@media screen and (max-width: 900px) {
  .aside-card {
    height: 540px;
    padding-top: 50px;
  }
  h1 {
    font-size: 28px;
    line-height: 28px;
  }
  h3 {
    font-size: 18px;
  }
  p {
    font-size: 14px;
  }
}
@media screen and (max-width: 320px) {
  .aside-card {
    height: 580px!important;
    padding-top: 40px;
    margin: 0;
  }
  h1 {
    font-size: 28px;
    line-height: 28px;
    padding-left: 0px;
  }
  h3 {
    font-size: 18px;
  }
  p {
    font-size: 14px;
    padding-left: 0px;
  }
  .small {
    padding-left: 0px;
  }
}

</style>
