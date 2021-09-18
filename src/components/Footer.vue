<template>
  <v-sheet class="footer">
    <div class="social-media">
      <a href="https://twitter.com/bund_dev" target="_blank"><v-icon x-large color="#fff">mdi-twitter</v-icon></a>
      <a href="https://github.com/bundesAPI" target="_blank"><v-icon x-large color="#fff">mdi-github</v-icon></a>
    </div>
    <small>MfG, die Zivilgesellschaft™. E-Mail: kontakt@bund.dev</small>
  </v-sheet>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="scss">
.footer {
  background-color: rgb(10 24 32);
  color: #fff;
  font-size: 0.9rem;
  text-align: center;
  font-family: 'Varta', sans-serif;
  padding-top: 8vh;
  padding-bottom: 4vh;

  .social-media {
      font-size: 4rem;
      padding-bottom: 8vh;
      color: #fff;
      a {
        text-decoration: none;
      }
    }
}

</style>