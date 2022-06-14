<template>
  <div id="app">
    <head>
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro|Handlee|Pacifico" rel="stylesheet">
    </head>
    <div id="nav" class="navigation">
      <router-link to="/">Home</router-link> |
      <router-link to="/computers">Ned's Story</router-link> |
      <router-link to="/coffee">Coffee</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
  @import './assets/styles/main.css';
</style>