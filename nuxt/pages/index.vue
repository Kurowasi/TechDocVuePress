<template>
  <section class="container">
    <v-card class="elevation-12">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Login form</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field prepend-icon="email" name="login" label="Email" type="text" v-model="email"></v-text-field>
          <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="password"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'
export default {
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(res => {
          console.log('success')
          this.$store.dispatch('setLoggedIn', true)
          this.$router.push('register')
        })
        .catch(err => {
          console.log('error')
        })
      console.log(this.email, this.password)
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
}
</style>
