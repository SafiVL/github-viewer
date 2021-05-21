<template>
<div class="repo">
  <div class="avatar">
    <router-link :to="{name: 'profile', params: {id: repo.owner.login} }">
      <img :src="repo.owner.avatar_url">
    </router-link>
  </div>
  <div class="description">
    <a :href="repo.html_url" target="_blank">{{repo.full_name}} </a>
    <div class="desc">{{repo.description}}</div> 
  </div>
  <div class="bottom">
    <q-chip outline color="black" text-color="white" icon="star">
      {{repo.stargazers_count}} stars
    </q-chip>
    <q-chip outline color="black" text-color="white" icon="visibility">
      {{repo.watchers}} watchers
    </q-chip>
  </div>
</div>
</template>

<script>
  export default {
    props: ['repo'],
    data () {
      return {
      }
    }
  }
</script>

<style>
.repo .description {
    height: 89px;
    padding-left: 114px;
    padding-top: 16px;
  }
  .repo a {
    font-size: 20px;
    color: #000000;
  }
  .repo .avatar {
    position: absolute;
    left: 20px;
    top: 15px;
  }
  .repo img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    top: 110px;
  }
  .repo {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    margin-top: 30px;
    border: 2px solid #000000;
    box-sizing: border-box;
    line-height: 23px;
    width: 490px;
    height: 139px;
    text-align: left;
  }
  .repo .desc {
    position:inherit;
    color: black;
    font-size: 11px;
  }
  .repo .bottom {
    padding-top: 10px;
    font-size: 2px;
    padding-left: 37px;
    color: #000000;
    font-weight: normal;
  }
  .repo .watchers, .stars {
    display: inline-block;
  }
  .repo .watchers {
    margin-left:  24px;
  }

</style>

