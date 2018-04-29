<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile @click="register" v-if="loggedIn">
          <v-list-tile-action>
            <v-icon>chrome_reader_mode</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>登録画面</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="editer" v-if="loggedIn">
          <v-list-tile-action>
            <v-icon>description</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>編集画面</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>管理画面</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
          <v-flex>
            <nuxt/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2018 Toru Takagi</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  },
  methods: {
    register () {
      this.$router.push('register')
    },
    editer () {
      this.$router.push('editer')
    }
  },
  computed: {
    ...mapGetters(['loggedIn'])
  }
}
</script>