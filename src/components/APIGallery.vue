<template>
  <v-container class="ma-xs-0 pa-xs-0">
    <v-row class="ma-xs-0 pa-xs-0">
      <v-col class="pa-0">
        <Header></Header>
        <Hero title="Unsere Schnittstellen" :video='require("../assets/side-view-of-african-american-female-engineer-working-on-computer-in-electronics-la-SBV-336736578-HD.mp4")'></Hero>
        <v-sheet class="mission-statement">
          Egal ob Sie als Privatperson eine Open-Source-Anwendung bauen oder als Unternehmen Open-Data in Ihre Produkte integrieren wollen. Unsere Schnittstellen stehen der gesamten Gesellschaft offen.</v-sheet>

        <v-sheet class="api-gallery">
           <v-row>

            <v-col class="col-12 " v-bind:key="api.name" v-for="api in apis">
              <v-card class="api-item" flat   >
                <div class="content">
                  <h3><span class="institution">{{api.office}}:</span>
                    {{api.name}}</h3>
                  <p>{{api.description}}</p>

                  <a :href="api.documentationURL" v-if="api.documentationURL" target="_blank" class="documentation">
                    <span class="doc-btn">Dokumentation</span>
                  </a>
                  <a :href="api.githubURL" v-if="api.githubURL" target="_blank" class="documentation">
                    <span class="doc-btn">Github</span>
                  </a>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-sheet>
        <Footer></Footer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";

export default {
  name: "APIGallery",
  components: {Header, Footer, Hero},
  data() {
    return {
      apis: []
    }
  },
  async created() {
    // GET request using fetch with async/await
    const response = await fetch("https://api.bund.dev/");
    const data = await response.json();
    this.apis = data;
  },
  metaInfo() {
    return {
      title: "API Übersicht - bund.dev",
      meta: [
        { name: 'description', content:  'Liste aller im Rahmen der Sofortmaßnahmen der Bundesstelle Open Data dokumentierten Programmierschnittstellen.'},
        { property: 'og:title', content: "API Übersicht - bund.dev"},
        { property: 'og:site_name', content: 'bund.dev'},
        { property: 'og:image', content: 'https://bund.dev/preview-apis.png'},
        { property: 'twitter:image', content: 'https://bund.dev/preview-apis.png'},
        { property: 'twitter:site', content: '@bund_dev'},
        { property: 'og:type', content: 'website'},
        { property: 'og:locale', content: 'de'},
        { property: 'twitter:card', content: 'summary'},
        { property: 'og:url', content: 'https://bund.dev'},
        { property: 'twitter:description', content: 'Liste aller im Rahmen der Sofortmaßnahmen der Bundesstelle Open Data dokumentierten Programmierschnittstellen.'},
        { name: 'robots', content: 'index,follow'}

      ]
    }
  },

}
</script>

<style scoped lang="scss">

.api-gallery {
  font-family: 'Varta', sans-serif;
  padding-left: 8vh;
  padding-right: 8vh;
  padding-top: 4vh;
  padding-bottom: 12vh;

.api-item {
  background: #d0ecff;
  padding-bottom: 1vh;
  min-height: 100px;
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
</style>