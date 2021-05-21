<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-black text-white" height-hint="98">
      <q-tabs align="left">
        <q-route-tab to="/" label="Главная" />
        <q-route-tab to="/search" label="Поиск" />
        <q-route-tab to="/about" label="Обо мне" />
      </q-tabs>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'LayoutDefault'
}
</script>

<style>
body {
  background: linear-gradient(287deg, #e070c4, #86bf85, #becc73, #7473cc);
}
</style>
