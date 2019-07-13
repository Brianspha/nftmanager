<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" fixed app>
      <v-list dense>
        <template v-for="item in items">
          <v-layout v-if="item.heading" :key="item.heading" row align-center>
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
          </v-layout>
          <v-list-group v-else-if="item.children" :key="item.text" v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon="">
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ item.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
            <v-list-tile v-for="(child, i) in item.children" :key="i">
              <v-list-tile-action v-if="child.render &&child.icon" :to="child.to">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content v-if="child.render">
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile :to="item.to" v-else :key="item.text">
            <v-list-tile-action v-if="item.render">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-if="item.render">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="#7E57C2" light app fixed>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">NFT Manager</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon large>
        <v-avatar size="32px" tile @click="toHomepage()">
          <img src="./images/pawprint.svg">
        </v-avatar>
      </v-btn>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <v-flex>
              <router-view></router-view>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </main>
    <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="fullPage">
    </loading>
  </v-app>
</template>

<script>
  import Swal from 'sweetalert2'
  import Vue from 'vue'
  import Loading from 'vue-loading-overlay';
  // Import stylesheet
  import 'vue-loading-overlay/dist/vue-loading.css';
  import Snotify from 'vue-snotify'; // 1. Import Snotify
  import {
    async
  } from 'q';
  Vue.use(Snotify)

  export default {
    name: 'app',
    data: () => ({
      isLoading: false,
      fullPage: true,
      drawer: null,
      items: [{
          icon: 'add',
          text: 'Mint NFT',
          to: "/MintNFT",
          render: true
        },
        {
          icon: 'laptop',
          text: 'View Minted NFTS ',
          to: "/MintedNFTS",
          render: true
        }
      ]
    }),
    mounted() {

    },
    methods: {
      init: async function () {
        if (err) {
          this.errorWithFooter(
            "<a href='https://metamask.io/;';>Please visit their website for instructions of how to download it</a>",
            'MetaMask is not installed!'
          )

        }
      },
      errorWithFooter(footerMessage, text) {
        Swal.fire({
          type: 'error',
          title: 'OH Noo',
          text: text,
          footer: footerMessage
        })
      }
    },
    components: {
      Loading
    },
    props: {
      source: String
    }
  }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .wrapText {
    overflow-wrap: break-word;
    word-wrap: break-word;
  }
</style>