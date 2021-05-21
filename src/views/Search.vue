<template>
  <q-page padding>
    <div class="search">
      <div class="text-center" style="margin-left: auto; margin-right: auto;">
        <h3>Поиск репозиториев</h3>
        <q-input @change="search" outlined dense v-model="value" label="Поиск" style="max-width: 250px;margin-left: auto; margin-right: auto"/>
        <div>
          <q-badge color="black" @click="setHistory(h)" class="q-mr-xs history_el" v-for="h in $store.getters.history.slice(0, 5)">
            {{h}}
          </q-badge>
        </div>
      </div>
      <div class="text-center" v-if="isLoading">
        <q-spinner-hearts color="pink-12" size="7em"/>
      </div>
      <div v-else>
        <repo :repo="repo" v-for="repo in infos" :key="repo.id"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import Repo from '../components/Repo.vue'
import axios from 'axios'

export default {
  name: 'Search',
  data () {
    return {
      value: this.$route.query.login || "SafiVL/",
      infos: [],
      history: [],
      isLoading: true
    }
  },
  mounted () {
    this.search()
  },
  methods: {
    search: function() {
      this.isLoading = true
      this.$store.commit('ADD_HISTORY', this.value)
      axios.get('https://api.github.com/search/repositories', {
        params: {
          q: this.value
        }
      })
      .then((response) => {
        this.infos = response.data.items
        this.isLoading = false
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    setHistory: function(h) {
      this.value = h
      this.search()
    }
  },
  components: {
    Repo
  }
}
</script>
