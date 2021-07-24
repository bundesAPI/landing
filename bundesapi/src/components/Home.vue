<template>
<v-container>
  <v-row>
<v-col>
  <Header></Header>
  <v-sheet
    class="hero-sheet"
  >
    <video playsinline autoplay muted loop class="hero-video">
      <source :src='require("../assets/videoblocks-flag-of-germany-near-the-reichstag-building-cloudy-day_rcfcg_flg_1080__-SBV-319286258-HD.mp4")' type='video/mp4'>
    </video>
    <div class="bottom-left">Wir dokumentieren Deutschland</div>
  </v-sheet>
  <v-sheet class="mission-statement">
    Im API-Portal des Bundes finden Sie Dokumentationen zu Programmierschnittstellen von Verwaltungsleistungen und Informationsportalen des Bundes.
    Die Zahl online verfügbarer Schnittstellen wird im Rahmen des "Gesetzes zur Änderung des E-Government-Gesetzes und zur Einführung des Gesetzes für die Nutzung von Daten des öffentlichen Sektors" (2. Open-Data-Gesetz) bis 2024 stark anwachsen.
  </v-sheet>


  <v-sheet class="api-gallery">
  <h2>Schnittstellen für alle Lebens- und Geschäftslagen</h2>
    <v-row>
      <v-col>

      </v-col>
      <v-col>
        
      </v-col>
    </v-row>
    </v-sheet>
</v-col>
  </v-row>
</v-container>
</template>

<script>
import Header from './Header'
export default {
  name: "Home.vue",
  components: {Header}
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
    font-size: 3rem;
    font-weight: 800;
    text-shadow: 0 2px 4px rgb(24 52 71 / 24%);
    color: #fff;
    font-family: 'Varta', sans-serif;

  }

}

.mission-statement {
  background-color: #183447;
  font-size: 1.2rem;
  line-height: 1.375;
  font-family: 'Varta', sans-serif;
  color: #fff;
  text-shadow: 0 2px 4px rgb(24 52 71 / 24%);
  font-weight: 800;
  padding: 8vh;
}

.api-gallery {
  font-family: 'Varta', sans-serif;
  padding-left: 8vh;
  padding-right: 8vh;
  padding-top: 4vh;
  padding-bottom: 4vh;


}

</style>