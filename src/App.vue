<template>
  <div class="container-center">

  <div class="body">
    <nav-bar/>
    <theme-button/>
    <router-view/>
  </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import ThemeButton from './components/ThemeButton.vue';


export default {
    name: "App",
    components: { NavBar, ThemeButton }
}



</script>

<style>
:root {
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --element-size: 4rem;
}
:root.dark-theme {
  --background-color-primary: #1e1e1e;
  --background-color-secondary: #2d2d30;
  --accent-color: #3f3f3f;
  --text-primary-color: #ddd;
}
.container-center {
  background-color: var(--background-color-primary);
  height: 100vh;
}
.body{
color: var(--text-primary-color);
}
</style>
