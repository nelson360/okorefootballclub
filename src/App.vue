<template>
 
  <HeaderComponent/>
  <BodyComponent/>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import BodyComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent, FooterComponent, BodyComponent
  }
}
</script>

<style>

</style>
