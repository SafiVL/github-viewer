<template>
  <div class="home">
    <div class="repos">
      <repo :repo="repo" v-for="repo in repos" />
    </div>
  </div>
</template>

<script>
import Repo from '../components/Repo.vue'
import axios from 'axios'

export default {
  name: 'Home',
  mounted() {
    axios 
      .get('https://api.github.com/users/safivl/repos')
      .then(response => this.repos = response.data)
      .catch(error => {
        console.log(error);
      })
  },
  data() {
    return {
      repos: []
    }
  },
  components: {
    Repo
  }
}
</script>
<style>
  .repos {
    margin-left: 53px;
  }
</style>
