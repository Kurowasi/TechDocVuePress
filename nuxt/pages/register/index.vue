<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <v-flex xs8>
            <h3 class="headline mb-0">登録画面</h3>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              name="input-1"
              label="フォルダ名"
              v-model="title"
            ></v-text-field>
          </v-flex>
          <v-flex xs2>
            <v-btn color="success" @click="postRegister">登録</v-btn>
          </v-flex>
          <v-flex xs6>
            <textarea class="editor" v-model="description"></textarea>
          </v-flex>
          <v-flex xs6>
            <vue-markdown :source="description" class="editor view"></vue-markdown>
          </v-flex>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  middleware: 'auth',
  components: {
    VueMarkdown
  },
  data () {
    return {
      title: null,
      description: ''
    }
  },
  methods: {
    postRegister () {
      console.log(this.title, this.description)
      $.post('http://localhost:3000/register', {
        title: this.title,
        description: this.description
      })
      .done((data) => {
        this.title = null
        this.description = ''
      })
      .fail((err) => {
        console.log(err)
      })
    }
  },
  computed: {
    compiledMarkdown () {
      return marked(this.input, { sanitize: true })
    }
  }
}
</script>

<style scoped>
  .editor {
    width: 100%; height: 500px;
    padding: 10px 30px;
    border: solid 3px #000;
    outline: none;
  }
  .view {
    border-left: none;
  }
</style>

