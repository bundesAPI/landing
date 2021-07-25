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
    <p>Egal ob Sie als Privatperson eine Open-Source-Anwendung bauen oder als Unternehmen Open-Data in Ihre Produkte integrieren wollen. Unsere Schnittstellen stehen der gesamten Gesellschaft offen.</p>
    <v-row>
      <v-col >
      <v-card class="api-item" flat  >
        <img src="../assets/looking_for_job.png" />
        <div class="content">
          <h3><span class="institution">Bundesagentur für Arbeit:</span><br>
        Jobsuche API</h3>
          <p>Die größte Stellendatenbank Deutschlands durchsuchen, Details zu Stellenanzeigen und Informationen über Arbeitgeber abrufen.</p>
          <a href="https://bundesapi.github.io/autobahn-api/" class="documentation">
            <span class="doc-btn">Dokumentation</span>

          </a>
        </div>
      </v-card>
      </v-col>
      <v-col >
        <v-card class="api-item" flat  >
          <img src="../assets/autobahn.png" />
          <div class="content">
            <h3><span class="institution">Autobahn GmbH:</span><br>
              Autobahn API</h3>
            <p>Was passiert auf Deutschlands Bundesstraßen? Informationen zu Baustellen, Staus, Ladestationen. Zugang zu Verkehrsüberwachungskameras und vielen weiteren Datensätzen.</p>
          <a href="https://bundesapi.github.io/autobahn-api/" class="documentation">
            <span class="doc-btn">Dokumentation</span>

          </a>
          </div>
        </v-card>
      </v-col>
      <v-col >
        <v-card class="api-item" flat  >
          <img src="../assets/autobahn.png" />
          <div class="content">
            <h3><span class="institution">Autobahn GmbH:</span><br>
              Autobahn API</h3>
            <p>Was passiert auf Deutschlands Bundesstraßen? Informationen zu Baustellen, Staus, Ladestationen. Zugang zu Verkehrsüberwachungskameras und vielen weiteren Datensätzen.</p>
          <a href="https://bundesapi.github.io/autobahn-api/" class="documentation">
            <span class="doc-btn">Dokumentation</span>

          </a>
          </div>
        </v-card>
      </v-col>
      <v-col >
        <v-card class="api-item" flat  >
          <img src="../assets/autobahn.png" />
          <div class="content">
            <h3><span class="institution">Autobahn GmbH:</span><br>
              Autobahn API</h3>
            <p>Was passiert auf Deutschlands Bundesstraßen? Informationen zu Baustellen, Staus, Ladestationen. Zugang zu Verkehrsüberwachungskameras und vielen weiteren Datensätzen.</p>
          <a href="https://bundesapi.github.io/autobahn-api/" class="documentation">
            <span class="doc-btn">Dokumentation</span>

          </a>
          </div>
        </v-card>
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


p {
  font-size: 1.2rem;
  line-height: 1.375;
  color: #0a171f;
  margin-bottom: 24px;
  margin-top: 16px;
  font-family: 'Varta', sans-serif;

}

.api-gallery {
  font-family: 'Varta', sans-serif;
  padding-left: 8vh;
  padding-right: 8vh;
  padding-top: 4vh;
  padding-bottom: 4vh;

  .api-item {
    background: #d0ecff;
    padding-bottom: 2vh;
    img {
      width: 100%;
      object-fit: cover;
    }

    .content {
      padding-left: 2vh;
      padding-right: 2vh;
      .documentation {
        .doc-btn {
          font-size: 1.3rem;
          line-height: 1.375;
          display: inline-block;
          font-family: 'Varta', sans-serif;
          line-height: 1.5;
          color: #0a171f;
          margin-bottom: 8px;
          border-radius: 4px;
          border: 1px solid #0a171f;
          padding: 0 8px;
          padding-top: 5px;
          margin-right: 8px;
          background: transparent;
          transition: background .25s ease-in-out;
          -webkit-hyphens: auto;
          hyphens: auto;
          font-weight: 600;


        }
        :hover {
          background: rgba(55,121,163,.24);
        }
        :focus {
          background: #3779a3!important;
          color: #eaf7ff!important;
          border: 1px solid #3779a3;
        }

      }

      p {
        margin-bottom: 16px;
        margin-top: 8px;
      }
    }
    h3 {
      padding-top: 1vh;
      font-weight: 800;
      font-family: 'Varta', sans-serif;
      font-size: 1.3rem;
      .institution {
        font-weight: 200;
      }


    }
  }

}

</style>