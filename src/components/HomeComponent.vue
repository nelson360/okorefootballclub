<template>
    <p>fdfdf</p>
    <BodyComponent/>
</template>
<script>
import BodyComponent from './BodyComponent.vue';

export default{
    name: "HomeComponent",
    components: { BodyComponent }
}</script>
<style scoped>
BodyComponent{
display: hidden;
}
</style>