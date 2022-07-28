<template>

  <v-app id="app" style="background-color:#383838">
    <v-container fill-height fluid>
      <v-row>
        <v-col>
          <v-app-bar
            app
            absolute
            color="#383838"
            elevate-on-scroll
            dense
            >
            <v-btn
              class="mx-2"
              ripple
              large
              fab
              color="#383838"
              elevation="0"
              >
              <img
              :src="require('../src/assets/yelllow-transparent.png')"
              width="75"
              >
            </v-btn>
          <v-spacer></v-spacer>
            <v-tabs
              right
              color="#e1bf74"
              class="hidden-sm-and-down"
              >
              <v-tab @click="scrollMeTo('about')">ABOUT
              </v-tab>
              <v-tab @click="scrollMeTo('projects')">PROJECTS
              </v-tab>
              <v-tab @click="scrollMeTo('skills')">SKILLS
              </v-tab>
              <v-tab @click="scrollMeTo('contact')">CONTACT
              </v-tab>
            </v-tabs>
            <v-btn
              @click="drawer = !drawer"
              style="background-color:#383838"
              max-width="50"
              elevation="0"
              class="hidden-md-and-up"
              >
              <v-icon  style="color:#e1bf74">mdi-menu</v-icon>
            </v-btn>
          </v-app-bar>
        </v-col>
      </v-row>
    
    <v-main 
      app
      align="center"
      >
      <v-row
                  style="height: 500px"
                  align="center"
                  justify="center">
                <v-col 
                  cols="12" 
                  sm="4" 
                  class="text-center"
                  >
                    <h1 style="color:#e1bf74">Welcome!</h1>
                </v-col>
                <v-col
                    cols="12"
                    sm="8"
                    align="center"
                    >
                    <v-avatar
                      id="hero-img"
                      size="300"
                      >
                      <v-img :src="require('../src/assets/profile-pic.jpg')"/>
                    </v-avatar>
                </v-col>

              </v-row>

              <v-row
                  style="height: 100px"
                  align="center"
                  justify="center">
                <v-col class="text-center" cols="12" sm="4" md="8">
                    <p style="color:#e1bf74"> I'm Grant Wielgosz
                      a Full Stack Developer ready to make your idea become a reality!
                    </p>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <h1 ref="about" style="color:#e1bf74">ABOUT</h1>
              <v-row>
                <v-col>
                  <div>
                    <p style="color:#e1bf74">A recent graduate of Innotech College with a Full Stack Web Developer diploma!
                    <br>
                      Over the last few years I've grown a passion for coding and made the commitment to switch up careers.
                    <br>
                      Coming from the welding trades, I feel it has a similar scope albeit a different method.
                    <br>
                    <span><h2> Vision, Design, Build, and Quality Control</h2></span>
                    </p>
                  </div>
                  
                </v-col>
                
              </v-row> 
              <v-divider></v-divider>
                <h1 ref="projects" style="color:#e1bf74">PROJECTS</h1>
                <v-row>
                <v-col 
                  v-for="item in projects"
                  :key="item.id"
                  :item="item"
                  cols="12" sm="6" md="4" lg="4"
                  >
                  <v-hover v-slot="{ hover }">
                    <v-card
                      color="grey lighten-4"
                      min-width="100"
                      max-width="300"
                    >
                      <v-img
                        :aspect-ratio="16/9"
                        :src="`${item.img}`"
                      >
                        <v-expand-transition>
                          <div
                            v-if="hover"
                            class="d-flex transition-slow-in-fast-out v-card--reveal text-h2"
                            style="height: 100%; background-color:#e1bf74; font-color: #383838"
                          >
                            {{item.name}}
                          </div>
                        </v-expand-transition>
                      </v-img>
                    </v-card>
                  </v-hover>
                </v-col>
                
              </v-row>
              <v-divider></v-divider>
              <h1 ref="skills" style="color:#e1bf74">SKILLS</h1>
              <v-row>
              </v-row>
              <v-divider></v-divider>
              <h1 ref="contact" style="color:#e1bf74">CONTACT</h1>
              <v-row>
              </v-row>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
      drawer: false,
      navLinks: [
        { url: '#hero', name:"Home"},
        { url: '#about', name: "About"},
        { url: '#projects', name: "Projects"},
        { url: '#contact', name: "Contact"}
      ],
      projects: [
        {name: 'Pokemon Battle', img: require('../src/assets/charBattle.png'), skill: "fa-brands fa-html5",id: 1},
        {name: 'reDraft Fantasy Football', img: require('../src/assets/redraft-home.png'), id: 2},
        {name: 'Foodie: A Skip Clone', img: require('../src/assets/foodie.png'), id: 3}
      ],
      justify: [
        'start',
        'center',
        'end',
        'space-around',
        'space-between',
      ],
  }),
  methods: {
    scrollsTo(refName) {
    var element = this.$refs[refName];
    var top = element.offsetTop;
    window.scrollTo(0, top);
  }
  }
};
</script>
<style lang="css" scoped>
  .v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}
  #hero {
    height: 600px;
    
  }
  /* #hero-h3 {
    display: inline-block;
    position: relative;
    top: 100px;
    left: 100px;
  } */
  /* #hero-img {
    display: flex;
    position: absolute;
    top: 200px;
    left: 200px;
  } */
</style>
