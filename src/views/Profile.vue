<template>
  <q-page padding>
    <div class="text-center">
      <div class="ava">
        <img :src="user.avatar_url">
      </div>
      <div class="name">{{user.name}}</div>
      <div class="user">{{user.login}}</div>
      <router-link :to="{name: 'search', query: {login: id + '/'}}">
      <div>
        <q-btn text-color="black" no-caps> Repositories ({{user.public_repos}}) </q-btn>
      </div>
      </router-link>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Profile',
    props: ['id'],
    mounted() {
      axios 
        .get(`https://api.github.com/users/${this.id}`)
        .then(response => this.user = response.data)
        .catch(error => {
          console.log(error);
        })
    },
    data () {
      return {
        user: {}
      }
    }
  }
</script>
<style>
  .name {
    padding: 5px;
  }
  img {
    width: 150px;
    height: 150px;
    border: 2px solid black;
    border-radius: 50%;
  }
</style>