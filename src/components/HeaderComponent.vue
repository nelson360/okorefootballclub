<template>
<nav>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/AboutComponent">About</router-link><br>
    <router-link to="/BloggComponent">blogg</router-link><br>
    <router-link to="/MediaComponent"> media</router-link><br> 
    <router-link to="/PlayersComponent">players</router-link><br>
    <router-link to="/ScheduleComponent">schedule</router-link><br>
    <router-link to="/ContactComponent">contact</router-link><br>
</nav>
</nav>
<RouterView />
</template>

  
<script>
export default {
    name: 'HeaderComponent',

}
</script>

  
<style></style>
