<template>

    <header>

        <div id="logo">
            <a href="/">
                <img :src='require("../public/img/logo_krakn.png")' />
            </a>
        </div>

        <nav>
            <router-link to="/" :class="{ 'nav-active': currentRoutePath === '/' }">Accueil</router-link>
            <router-link to="/formations" :class="{ 'nav-active': currentRoutePath === '/formations' }">Formations</router-link>
            <router-link to="/about" :class="{ 'nav-active': currentRoutePath === '/about' }">À propos</router-link>
            <router-link to="/contact" :class="{ 'nav-active': currentRoutePath === '/contact' }">Contact</router-link>
        </nav>

    </header>


    <router-view />


    <footer>

        <div id="footer_top">

            <div id="logo">
                <a href="/">
                    <img :src='require("../public/img/logo_krakn.png")' />
                </a>
            </div>

            <nav>
                <router-link to="/mentions-legales">Mentions Légales</router-link>
                <router-link to="/politiques-confidentialites">Politiques de confidentialité</router-link>
                <router-link to="/about">À propos</router-link>
            </nav>
            
            <div id="rs">
                <ul>
                    <li>
                        <a href="">
                            <font-awesome-icon :icon="['fab', 'youtube']" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <font-awesome-icon :icon="['fab', 'linkedin']" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/abroudoux/vue-test" target="_blank">
                            <font-awesome-icon :icon="['fab', 'github']" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <font-awesome-icon :icon="['fas', 'link']" />
                        </a>
                    </li>
                </ul>
            </div>

        </div>

        <div id="footer_bottom">

            <p>
                © 2023 - Krakn Behavioural
            </p>

        </div>

    </footer>

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
