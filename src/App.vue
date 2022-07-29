<template>

  <v-app id="app" style="background-color:#383838">
    <v-container fill-height fluid>
      <v-row>
        <v-col>
          <v-app-bar
            app
            fixed
            color="#383838"
            elevate-on-scroll
            dense
            height="75"
            >
            <v-btn
              class="mx-2"
              ripple
              small
              fab
              color="#383838"
              elevation="0"
              @click="scrollsTo('top-section')"
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
              <v-tab @click="scrollsTo('about')">ABOUT
              </v-tab>
              <v-tab @click="scrollsTo('projects')">PROJECTS
              </v-tab>
              <v-tab @click="scrollsTo('skills')">SKILLS
              </v-tab>
              <v-tab @click="scrollsTo('contact')">CONTACT
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
    </v-container>
  <v-main 
    app
    align="center">
      <v-container id="top-section">
        <v-row
          style="height: 500px"
          align="center"
          justify="center">
            <v-col 
              cols="12" 
              sm="4" 
              class="text-center">
                <h1 style="color:#e1bf74">Welcome!</h1>
                  <p style="color:#e1bf74"> 
                    I'm Grant Wielgosz a Full Stack Developer ready to make your idea become a reality!
                  </p>
            </v-col>
            <v-col
              cols="12"
              sm="8"
              align="center">
                <v-avatar
                  id="hero-img"
                  size="250"
                  >
                    <v-img
                      :src="require('../src/assets/profile-pic.jpg')"/>
                </v-avatar>
            </v-col>
        </v-row>
      </v-container>
      <v-divider color="#e1bf74"></v-divider>
      <v-container ref="about">
        <h1 style="color:#e1bf74">ABOUT</h1>
        <v-row
          style="height:300px"
          align="center">
          <v-col>
            <div>
              <p style="color:#e1bf74">A recent graduate of Innotech College with a Full Stack Web Developer diploma!
                    <br>
                      Over the last few years I've grown a passion for coding and made the commitment to switch up careers.
                    <br>
                      Coming from the welding trades, I feel it has a similar scope albeit a different method.
                    <br>
                    <span><h2> Vision, Design, and Build a Quality Product</h2></span>
              </p>
            </div>
          </v-col>
        </v-row> 
      </v-container>
      <v-divider color="#e1bf74"></v-divider>
      <v-container ref="projects">
        <h1 style="color:#e1bf74">PROJECTS</h1>
          <v-row
            style="height:300px"
            align="center">
            <v-col 
              v-for="project in projects"
              :key="project.id"
              :project="project"
              cols="12" sm="6" md="4" lg="4">
                <v-hover v-slot="{ hover }">
                  <v-card
                    color="grey lighten-4"
                    min-width="100"
                    max-width="300"
                    class="mx-auto">
                      <v-img
                        :aspect-ratio="16/9"
                        :src="`${project.img}`">
                          <v-expand-transition>
                            <div
                              v-if="hover"
                              class="d-flex transition-slow-in-fast-out v-card--reveal text-h2"
                              style="height: 100%; background-color:#e1bf74; font-color: #383838">
                              {{project.name}}
                            </div>
                          </v-expand-transition>
                      </v-img>
                  </v-card>
                </v-hover>
            </v-col>
          </v-row>
        </v-container>
        <v-divider color="#e1bf74"></v-divider>
        <v-container
          ref="skills"
          cols="12">
          <h1 style="color:#e1bf74">SKILLS</h1>
          <v-divider color="#e1bf74"></v-divider>
          <v-spacer></v-spacer>
          <v-row
            justify="start"
            align="center"
            >
            <v-col
              
              xs="12" sm="4" md="4" lg="4">
              <h3 style="color:#e1bf74">Programming Languages</h3>
              <v-divider color="#e1bf74"></v-divider>

              <v-avatar
                v-for="language, i in programmingIcons"
                :key="i"
                :language="language"
                >
                <v-spacer></v-spacer>
                <v-img
                  width="50"
                  height="50"
                  :src="language.logo">
                </v-img>
              </v-avatar>
            </v-col>
          </v-row>
            <v-row
              justify="center">
            <v-col
              
              xs="12" sm="4" md="4" lg="4">
              <h3 style="color:#e1bf74">Frameworks</h3>
              <v-divider color="#e1bf74"></v-divider>
              <v-avatar
                v-for="framework, n in frameworks"
                :key="n"
                :framework="framework"
                >
                <v-img 
                  width="50"
                  height="50"
                  :src="framework.logo">
                </v-img>
              </v-avatar>
            </v-col>
            </v-row>
            <v-row
              justify="end">
            <v-col
              xs="12" sm="4" md="4" lg="4">
              <h3 style="color:#e1bf74">Deployment Tools</h3>
              <v-divider color="#e1bf74"></v-divider>
              <v-avatar
                v-for="tool, j in deploymentTools"
                :key="j"
                :tool="tool"
                >
                <v-img 
                  width="100"
                  height="100"
                  :src="tool.logo">
                </v-img>
              </v-avatar>
            </v-col>
          </v-row>
        </v-container>
        <v-divider color="#e1bf74"></v-divider>
        <v-container ref="contact">
          <h1 style="color:#e1bf74">CONTACT</h1>
          <v-row
            style="height: 500px"
            align="center"
            justify="center">
              <v-col cols="12" sm="6" md="4" lg="4">
                  <v-card
                    style=" background-color:#383838"
                    elevation="0"
                    cols="12"
                    >
                    <v-text-field
                        color="#e1bf74"
                        v-model="firstName"
                        type="text"
                        outlined
                        placeholder="First name..."></v-text-field>
                      <v-text-field
                        color="#e1bf74"
                        v-model="companyName"
                        type="text"
                        outlined
                        placeholder="Company name..."></v-text-field>
                    <v-text-field
                        color="#e1bf74"
                        v-model="email"
                        type="email" 
                        outlined
                        placeholder="Email..."></v-text-field>
                    <v-textarea
                        color="#e1bf74"
                        v-model="comment"
                        type="comment" 
                        outlined
                        placeholder="Leave a comment..."></v-textarea>
                    <v-spacer></v-spacer>
                    <v-card-actions>
                      <v-btn @click="postComment(firstName, companyName, email, comment)">Add Review</v-btn>
                    </v-card-actions>
                  </v-card>
              </v-col>
              <v-spacer></v-spacer>
              <v-divider vertical inset color="#e1bf74"></v-divider>
              <v-spacer></v-spacer>
              <v-col
                  xs="12" sm="6" md="4" lg="4">
                  <h2 style="color:#e1bf74">Grant Wielgosz</h2>
                  <v-divider></v-divider>
                  <h4 style="color:#e1bf74">Edmonton, Alberta</h4>
                  <v-divider></v-divider>
                  <h4 style="color:#e1bf74">wieltonwebdev@gmail.com</h4>
                  <v-divider></v-divider>
                  <p style="color:#e1bf74">Please contact me for more info!</p>
                  <v-avatar
                    v-for="link, index in socialIcons"
                    :key="index"
                    :link="link"
                    >
                    <v-card
                      elevation="0">
                    <v-img
                      width="50"
                      height="50"
                      :src="link.logo">
                    </v-img>
                    </v-card>
                  </v-avatar>

                </v-col>

          </v-row>
        </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'pinia';
import {useUserStore} from '@/store/index';

export default {
  name: 'App',

  data: () => ({
      drawer: false,
      firstName: '',
      companyName: '',
      email: '',
      comment: '',
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
      programmingIcons: [
        {name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'},
        {name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'},
        {name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},
        {name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'},
        {name: 'mySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'}
        ],
      frameworks: [
          {name: 'Vue', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'},
          {name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
          {name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg'}
        ],
      socialIcons: [
        {name: 'Linkedin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'},
        {name: 'Github',logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'},
        ],
      deploymentTools: [
        {name: 'GoogleCloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'},
        {name: 'Apache', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg'},
        {name: 'Debian', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg'},
        {name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'},
        {name: 'Bash', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg'},
        {name: 'ssh', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original.svg'}
      ]
  }),
  methods: {
    scrollsTo(refName) {
    var element = this.$refs[refName];
    var top = element.offsetTop;
    window.scrollTo(0, top);
  },
  ...mapActions(useUserStore, ['postComment'])
  },
  computed: {
    
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
