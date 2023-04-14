<template>

    <header>

        <div id="logo">
            <a href="/">
                <img :src='require("../public/img/logo_krakn.png")' />
            </a>
        </div>

        <nav>
            <router-link to="/" :class="{ 'nav-active': currentRoutePath === '/' }">Accueil</router-link>
            <router-link to="/conseils" :class="{ 'nav-active': currentRoutePath === '/conseils' }">Conseils</router-link>
            <router-link to="/formations" :class="{ 'nav-active': currentRoutePath === '/formations' }">Formations</router-link>
            <router-link to="/about" :class="{ 'nav-active': currentRoutePath === '/about' }">À propos</router-link>
            <router-link to="/contact" :class="{ 'nav-active': currentRoutePath === '/contact' }">Contact</router-link>
        </nav>

    </header>

    <router-view/>

</template>


<script lang="ts">

    import { defineComponent, computed } from 'vue';
    import { useRoute } from 'vue-router';

    export default defineComponent({

        name: 'AppHeader',
        setup() {
            const route = useRoute();
            const currentRoutePath = computed(() => route.path);
            return {
                currentRoutePath,
            };
        },

    });

</script>


<style lang="scss">

    // Imports
    @import "src/styles/global.scss";
    @import "src/styles/app.scss"; 

</style>
