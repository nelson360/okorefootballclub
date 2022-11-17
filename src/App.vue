<template>
 
  <HeaderComponent/>
  <BodyComponent/>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import BodyComponent from './components/BodyComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent, FooterComponent, BodyComponent
  }
}
</script>

<style></style>
