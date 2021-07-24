<template>
  <v-toolbar extended class="header">
    <v-spacer></v-spacer>

    <div class="d-flex align-center">
      <div
          id="page-title">
        <span class="highlight ">bundes</span><span class="fdecent"><span class="fblack">A</span><span class="fred">P</span><span class="fgold">I</span></span>
        <span class="subtitle"><span class="highlight">VERWALTUNG</span> DIGITAL</span>
      </div>

    </div>

    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  name: "Header.vue"
}
</script>

<style scoped lang="scss">

#page-title {
  font-family: 'Varta', sans-serif;
  font-weight: 200;
  font-size: 2.5rem;
  margin-top: 5vh;


  .highlight {
    font-weight: 800;
  }
  .fdecent {
    color: #6B6B6B;
  }
  .subtitle {
    font-size: 1rem;
    text-align: right;
    margin-top: -1rem;
    display: block;
  }
}

.header:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  width: 4px;
  height: 100%;
  bottom: 0;
  background: linear-gradient(
          180deg
      ,#000 33%,#e30613 0,#e30613 66%,#f8d200 0);
  z-index: 1;
  transition: height .25s ease-in-out;
}
</style>