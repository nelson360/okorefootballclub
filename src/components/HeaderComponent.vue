<template>
<nav>
    <ul>

        <li>
            <router-link to="/HomeComponent">Home</router-link>
        </li>

        <li>
            <router-link to="/PlayersComponent">Team</router-link>
        </li>

        <li>
            <router-link to="/ContactComponent">Contact</router-link>
        </li>
        <li>

        </li>
       
    </ul>

</nav>
</template>

<script>
export default {
    name: 'HeaderComponent',

}
</script>

<style>
nav {
    position: absolute;
    width: 100%;
    line-height: 1.4em;
}

ul {
    list-style: none;

    display: block;
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: center;

    margin-bottom: -1.4em;
}

ul:after {
    content: "";

    color: rgb(20, 182, 33);
    display: inline-block;
    width: 100%;
}

li {
    display: inline-block;
    margin: 4%;
    padding: auto;
    font: size 25px;
    font-style: normal;
    color: rgb(20, 182, 33);
    text-decoration: none;

}

nav>a {
    font-weight: bold;
    color: #2c3e50;
    /* &.router-link-exact-active {
    color: #42b983;
  } */
}

html {
    position: relative;
    min-height: 100%;
    min-width: 100%;
}

body {
    margin-bottom: 60px;
    /* Margin bottom by footer height */
}
</style>
