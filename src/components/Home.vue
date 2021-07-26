<template>
<v-container class="ma-xs-0 pa-xs-0">
  <v-row class="ma-xs-0 pa-xs-0">
<v-col class="pa-0">
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

      <v-col class="col-12 col-md-6">
        <v-card class="api-item" flat  >
          <img src="../assets/dip.jpg" />
          <div class="content">
            <h3><span class="institution">Deutscher Bundestag:</span><br>
              DIP API</h3>
            <p>Über diese API ist ein lesender Zugriff auf die Entitäten von
              DIP (Vorgänge und Vorgangspositionen, Aktivitäten, Personen sowie Drucksachen und Plenarprotokolle) möglich.</p>
            <a href="https://dip.bundestag.de/documents/informationsblatt_zur_dip_api_v01.pdf" class="documentation">
              <span class="doc-btn">Dokumentation</span>
            </a>
          </div>
        </v-card>
      </v-col>
      <v-col class="col-12 col-md-6">
      <v-card class="api-item" flat  >
        <img src="../assets/looking_for_job.jpg" />
        <div class="content">
          <h3><span class="institution">Bundesagentur für Arbeit:</span><br>
        Jobsuche API</h3>
          <p>Die größte Stellendatenbank Deutschlands durchsuchen, Details zu Stellenanzeigen und Informationen über Arbeitgeber abrufen.</p>
          <a href="https://jobsuche.api.bund.dev/" class="documentation">
            <span class="doc-btn">Dokumentation</span>

          </a>
        </div>
      </v-card>
      </v-col>
      <v-col class="col-12 col-md-6">
        <v-card class="api-item" flat  >
          <img src="../assets/autobahn.jpg" />
          <div class="content">
            <h3><span class="institution">Autobahn GmbH:</span><br>
              Autobahn API</h3>
            <p>Was passiert auf Deutschlands Bundesstraßen? Informationen zu Baustellen, Staus, Ladestationen. Zugang zu Verkehrsüberwachungskameras und vielen weiteren Datensätzen.</p>
          <a href="https://autobahn.api.bund.dev/" class="documentation">
            <span class="doc-btn">Dokumentation</span>

          </a>
          </div>
        </v-card>
      </v-col>
      <v-col class="col-12 col-md-6">
        <v-card class="api-item" flat  >
          <img src="../assets/nina.jpg" />
          <div class="content">
            <h3><span class="institution">Bundesamt für Bevölkerungsschutz:</span><br>
              NINA API</h3>
            <p>Erhalten Sie wichtige Warnmeldungen des Bevölkerungsschutzes für Gefahrenlagen wie zum Beispiel Gefahrstoffausbreitung oder Unwetter per Programmierschnittstelle.</p>
          <a href="https://nina.api.bund.dev/" class="documentation">
            <span class="doc-btn">Dokumentation</span>
          </a>
          </div>
        </v-card>
      </v-col>

      <v-col class="col-12 col-md-6">
        <v-card class="api-item" flat  >
          <img src="../assets/fitconnect.jpg" />
          <div class="content">
            <h3><span class="institution">Föderale IT-Kooperation:</span><br>
              Fit-Connect</h3>
            <p>Die Schnittstelle ermöglicht Ihnen, Anträge und Berichte aus Ihren eigenen Systemen in die unterschiedlichen Systeme der Verwaltung zu übermitteln.</p>
            <a href="https://fit-connect.fitko.de/" class="documentation">
              <span class="doc-btn">Dokumentation</span>
            </a>
          </div>
        </v-card>
      </v-col>


      <v-col class="col-12 col-md-6">
        <v-card class="api-item" flat  >
          <img src="../assets/wolken.jpg" />
          <div class="content">
            <h3><span class="institution">Deutscher Wetterdienst:</span><br>
              DWD API</h3>
            <p>Der DWD stellt über seine API nicht nur klassische Wetterdaten und Warnungen bereit, sondern auch viele weitere Informationen. Zum Beispiel von der Zivilgesellschaft eingereichte Wetterfotos.</p>
            <a href="https://dwd.api.bund.dev/" class="documentation">
              <span class="doc-btn">Dokumentation</span>
            </a>
          </div>
        </v-card>
      </v-col>
    </v-row>
    </v-sheet>
  <v-sheet class="testemonial">
    <v-row>
      <v-col>
        <blockquote class="col-8 offset-2 offset-md-3 col-md-6">
          <p>
            Von Open Data profitieren Start-Ups und zivilgesellschaftliche Organisationen ebenso wie die Spitzenforschung und die Verwaltung selbst. Mit dem Zweiten Open Data Gesetz stärkt der Bund die Nutzung von offenen Daten.</p>
        </blockquote>
        <figcaption> – Dr. Markus Richter, CIO Bund</figcaption>
      </v-col>
    </v-row>
  </v-sheet>
  <v-sheet class="api-gallery">
    <h2>5 Punkte Plan „Sofortmaßnahmen Zweites Open Data Gesetz“</h2>
    <p>Im Rahmen der Open Government Umsetzungsstrategie des Bundes wurde beschlossen, dass bis 2024 alle Datensätze und Verwaltungsverfahren der Bundesverwaltung per Programmierschnittstelle (API) zugänglich gemacht werden. Dabei setzen wir auf eine kombinierte Strategie, in der wir einerseits bestehende Schnittstellen dokumentieren und andrerseits alle neuen Projekte in einem offenen Entwicklungsverfahren umsetzen.</p>
    <p><b>Um diesen Veränderungsprozess transparent zu machen, soll ein 5-Punkte-Plan beschlossen werden:</b></p>
    <ol>
      <li>Dokumentation und Zugänglichmachung aller bestehenden Schnittstellen des Bundes bis Ende 2021.</li>
      <li>Bereitstellung aller Basisdatensätze aus den Themenfeldern Geobasisdaten, Wetterdaten, Statistiken, Handels- und Transparenzregister und Mobilität entsprechend der EU-Direktive 2019/1024 als Open Data bis Q3 2022.</li>
      <li>Ergänzung aller Leistungen des Onlinezugangsgesetzes um Programmierschnittstellen bis 2023.</li>
      <li>Umstellung auf Open Development Prozess in allen IT-Projekten des Bundes bis 2024.</li>
      <li>Ausweitung von Förderung der digitalen Zivilgesellschaft im Rahmen von unabhängigen Förderprogrammen über die neu zu gründende Verbrauchsstiftung Open Data.</li>
    </ol>
    <p>Bis zum 31.08 können Sie am Beteiligungsprozess zu den „Sofortmaßnahmen Zweites Open Data Gesetz“ auf <a href="https://github.com/bundesAPI/sofortmassnahmen/blob/main/Vorschlag.md" target="_blank">Github</a> teilnehmen. </p>
  </v-sheet>
  <v-sheet class="footer">
    <div class="social-media">
      <a href="https://twitter.com/bund_dev" target="_blank"><v-icon x-large color="white">mdi-twitter</v-icon></a>
      <a href="https://github.com/bundesAPI" target="_blank"><v-icon x-large color="white">mdi-github</v-icon></a>
    </div>
    <small>MfG, die Zivilgesellschaft™.</small>
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
    font-size: 2.4rem;
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


p, ol  {
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
  padding-bottom: 12vh;

  .api-item {
    background: #d0ecff;
    padding-bottom: 1vh;
    min-height: 550px;
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

.testemonial {
  background: #e6f5fd;
  font-size: 1.3rem;
  line-height: 1.375;
  display: inline-block;
  font-family: 'Varta', sans-serif;
  line-height: 1.5;
  text-align: center;
  padding-top: 4vh;
  padding-bottom: 6vh;
  font-style:italic;
  figcaption {
    font-weight: 800;
  }
}


.footer {
  background-color: rgb(10 24 32);
  color: #fff;
  font-size: 0.7rem;
  text-align: center;
  font-family: 'Varta', sans-serif;
  padding-top: 8vh;
  padding-bottom: 4vh;

  .social-media {
    font-size: 4rem;
    padding-bottom: 8vh;
    a {
      text-decoration: none;
    }
  }
}

</style>