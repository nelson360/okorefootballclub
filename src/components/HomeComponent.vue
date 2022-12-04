<template>
<AboutComponent />

<MediaComponent />

<ScheduleComponent />

<BlogComponent />
<SponsorsComponent />

<BodyComponent />
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
        BodyComponent,
        AboutComponent,
        BlogComponent,
        ScheduleComponent,
        SponsorsComponent,
        MediaComponent,
    }
}
</script>

<style scoped>
BodyComponent {
    display: hidden;
}
</style>
