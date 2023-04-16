<template>

	<section id="offers">

        <h1>
            Nos formations
        </h1>

        <div id="offers_cards">

            <div class="card">

                <p>
                    Équipes Commerciales
                </p>

                <h3>
                    Vendez plus grâce aux techniques d'influence
                </h3>

                <button class="btn-1" id="card_1">
                    En savoir plus
                    <font-awesome-icon icon="fa-solid fa-arrow-down" class="icons-buttons" />
                </button>

            </div>
            
            <div class="card">

                <p>
                    Chefs de projet
                </p>

                <h3>
                    Fédérez une équipe autour de votre projet
                </h3>

                <button class="btn-1" id="card_2">
                    En savoir plus
                    <font-awesome-icon icon="fa-solid fa-arrow-down" class="icons-buttons" />
                </button>

            </div>

            <div class="card">

                <p>
                    Équipes Marketing
                </p>

                <h3>
                    Convertissez plus grâce aux secrets du cerveau
                </h3>

                <button class="btn-1" id="card_3">
                    En savoir plus
                    <font-awesome-icon icon="fa-solid fa-arrow-down" class="icons-buttons" />
                </button>

            </div>

        </div>
        
    </section>

</template>


<script lang="ts">

    import { defineComponent } from 'vue';

    export default defineComponent ({
    	name: 'OffresFormation',
        mounted() {

        }, 
		methods: {
            
		},	
    });

</script>


<style lang="scss">

	// Imports
	@import "src/styles/global.scss";
	@import "src/components/formations/formations.offres.scss";

</style>
