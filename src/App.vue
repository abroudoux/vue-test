<template>

    <header id="header" v-show="showHeader">

        <div class="logo">
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

            <div class="logo">
                <a href="/">
                    <img :src='require("../public/img/logo_krakn.png")' />
                </a>
            </div>

            <nav>
                <router-link to="/">Mentions Légales</router-link>
                <router-link to="/">Politiques de confidentialité</router-link>
                <router-link to="/about">À propos</router-link>
            </nav>
            
            <div id="rs">
                <ul>
                    <li>
                        <a href="https://www.youtube.com/@cerveauclient3769" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-youtube" class="icons" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/hi-is-nice/?originalSubdomain=fr" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-linkedin" class="icons" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/abroudoux/vue-test" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-github" class="icons" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.krakn.fr/" target="_blank">
                            <font-awesome-icon icon="fa-solid fa-link" class="icons" />
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
    import { ref } from 'vue';

    export default defineComponent({

        name: 'AppHeader',
        setup() {
            const route = useRoute();
            const currentRoutePath = computed(() => route.path);

            const showHeader = ref(true);
            const lastScrollTop = ref(0);

            const scrollFunction = (): void => {

                const header = document.getElementById('header') as HTMLElement;
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                if (scrollTop === 0) {
                    showHeader.value = true;
                } else if (scrollTop < lastScrollTop.value) {
                    showHeader.value = true;
                } else {
                    showHeader.value = false;
                }

                lastScrollTop.value = scrollTop;
                
            };

            window.addEventListener('scroll', scrollFunction);

            return {
                currentRoutePath,
                showHeader,
            };
        },
    });

</script>


<style lang="scss">

    // Imports
    @import "src/styles/global.scss";
    @import "src/styles/app.scss"; 

</style>
