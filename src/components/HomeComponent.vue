<template>
<p>fdfdf

</p>
<P>
About
<AboutComponent/>
</P>
<P>
    Blog
    <router-link to="/PlayersComponent"><button>team</button></router-link>
    <BlogComponent/>
</P>
<P>
    media
    <MediaComponent/>
</P>
<p>
    schedule
    <ScheduleComponent/>
    <SponsorsComponent/>
</p>

<BodyComponent />
<p>
    sponsors
</p>
</template>

<script>
import AboutComponent from './AboutComponent.vue';
import BodyComponent from './BodyComponent.vue';
import BlogComponent from './BlogComponent.vue';
import MediaComponent from './MediaComponent.vue';
import ScheduleComponent from './ScheduleComponent.vue';
import SponsorsComponent from './SponsorsComponent.vue';

export default {
    name: "HomeComponent",
    components: {
        BodyComponent, AboutComponent, BlogComponent, ScheduleComponent, SponsorsComponent, MediaComponent,
    }
}
</script>

<style scoped>
BodyComponent {
    display: hidden;
}
</style>
