<template>
  <v-sheet
      class="hero-sheet"
  >
    <video playsinline autoplay muted loop class="hero-video">
      <source :src='video' type='video/mp4'>
    </video>
    <div class="bottom-left">{{title}}</div>
  </v-sheet>
</template>

<script>
export default {
  props: ['title', 'video'],
  name: "Hero"
}
</script>

<style scoped lang="scss">
.hero-sheet {
  position: relative;

  padding: 0;
  margin: 0;
.hero-video {
  width: 100%;
  max-height: 360px;
  min-height: 260px;

  object-fit: cover;
  filter: brightness(70%);
  overflow:hidden;
  display:block;
}
.bottom-left {
  position: absolute;
  bottom: 1vh;
  left: 3vh;
  font-size: 2.4rem;
  font-weight: 800;
  text-shadow: 0 2px 4px rgb(24 52 71 / 24%);
  color: #fff;
  font-family: 'Varta', sans-serif;

}

}

</style>