<template><hr>
    <div class="title underline">sponsors</div>
    <br><br>
<div class="sponsors">
    <div class="sponsor">
        Kerisky investment
        <img src="pic/logo.png">
    </div>
    <div class="sponsor">
        ochunglo family
        <img src="pic/logo.png">
    </div>
    <div class="sponsor">
        Pipeline Kisumu
        <img src="pic/logo.png">
    </div>
    <div class="sponsor">
        loafers
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
.sponsors{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    
    align-items: stretch;
}
.sponsor>* {
    flex-basis: 100%;
    margin: 0.1em;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 200px;
}
</style>