<template>
  
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <heading />
  <!-- <HostelDetails /> -->
  <router-view/>
 
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import heading from './components/LandingPage/heading.vue';
// import HostelDetails from './components/LandingPage/HostelDetails.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    heading,
    // HostelDetails
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app{
  height: 100vh;
}
</style>
