<template>
  <div id="app">
    <head>
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro|Handlee|Pacifico" rel="stylesheet">
    </head>
    <div id="nav" class="navigation">
      <router-link to="/">Home</router-link> |
      <router-link to="/nedStory">Ned's Story</router-link> |
      <router-link to="/coffee">Coffee</router-link> |
      <router-link to="/coffeev2">Coffee V2</router-link> |
      <router-link to="/food">Food</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
  @import './assets/styles/main.css';
</style>