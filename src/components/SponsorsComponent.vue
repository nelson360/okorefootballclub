<template>
<hr>
<div class="title underline">sponsors</div>
<br><br>
<div class="sponsors">
    <div class="sponsor">
        <a href="#">Kerisky investment</a>
        <img src="pic/logo.png">
    </div>
    <div class="sponsor">
        <a href="#">ochunglo family</a>
        <img src="pic/logo.png">
    </div>
    <div class="sponsor">
       <a href="#">Pipeline Kisumu</a>
        <img src="pic/logo.png">
    </div>
   

</div>
<hr>
</template>

<script>
export default {
    name: "SponsorsComponent",
}
</script>

<style>
.sponsors {
    display: flex;
    flex-wrap: wrap;
    text-transform: uppercase;
    font-weight: bolder;
}

.sponsor>* {
    flex-basis: 100%;
    margin: 0.1em;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 200px;
}
</style>
