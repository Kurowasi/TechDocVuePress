<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <v-flex xs8>
            <h3 class="headline mb-0">編集画面</h3>
          </v-flex>
          <v-flex xs6>
            <v-select
              :items="parseDirLists"
              v-model="title"
              label="フォルダ選択"
              single-line
            ></v-select>
          </v-flex>
          <v-flex xs2>
            <v-btn color="success" @click="postRegister">登録</v-btn>
          </v-flex>
          <v-flex xs2>
            <v-btn color="error" @click="postDelete">削除</v-btn>
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
      dirLists: null,
      parseDirLists: [],
      title: '',
      description: ''
    }
  },
  watch: {
    title: function(name) {
      console.log(name.text)
      $.post('http://localhost:3000/getDocument', {
        dirName: name.text
      })
        .done((data) => {
          this.description = data
        })
        .fail((err) => {
          console.log(err)
        })
    }
  },
  created () {
    console.log('create')
    $.ajax('http://localhost:3000/dirLists')
      .done((data) => {
        this.dirLists = JSON.parse(data).dirLists
        for (let i = 0, max = this.dirLists.length; i < max; i++) {
          this.parseDirLists.push({
            text: this.dirLists[i]
          })
        }
        console.log(this.dirLists, this.parseDirLists)
        $.post('http://localhost:3000/getDocument', {
          dirName: this.dirLists[0]
        })
          .done((data) => {
            this.description = data
          })
          .fail((err) => {
            console.log(err)
          })
      })
      .fail((err) => {
        console.log(err)
      })
  },
  methods: {
    postRegister () {
      console.log(this.title, this.description)
      $.post('http://localhost:3000/register-re', {
        title: this.title.text,
        description: this.description
      })
      .done((data) => {
        console.log(data)
      })
      .fail((err) => {
        console.log(err)
      })
    },
    postDelete () {
      $.post('http://localhost:3000/delete', {
        title: this.title.text
      })
      .done((data) => {
        console.log(data)
      })
      .fail((err) => {
        console.log(err)
      })
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
    overflow-x: scroll;
    overflow-y: scroll;
  }
</style>

