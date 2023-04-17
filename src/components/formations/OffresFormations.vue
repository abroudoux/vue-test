<template>

	<section id="offers">

        <h1>
            Nos formations
        </h1>

        <div id="offers_cards">

            <div class="card closed">

                <p>
                    Équipes Commerciales
                </p>

                <h3>
                    Vendez plus grâce aux techniques d'influence
                </h3>

                <button class="btn-1 btn-card" id="card_1">
                    En savoir plus
                    <font-awesome-icon icon="fa-solid fa-arrow-down" class="icons-buttons" />
                </button>

                <p class="txt-offers">
                    Cette formation s'appuie sur des années de recherches et sur les plus récentes publications scientifiques dans les domaines de la psychologie sociale, comportementale et cognitive.
                </p>

            </div>
            
            <div class="card closed">

                <p>
                    Chefs de projet
                </p>

                <h3>
                    Fédérez une équipe autour de votre projet
                </h3>

                <button class="btn-1 btn-card" id="card_2">
                    En savoir plus
                    <font-awesome-icon icon="fa-solid fa-arrow-down" class="icons-buttons" />
                </button>

                <p class="txt-offers">
                    Cette formation s'appuie les plus récentes publications scientifiques dans les domaine de la psychologie de la persuasion et de l'engagement.
                </p>

            </div>

            <div class="card closed">

                <p>
                    Équipes Marketing
                </p>

                <h3>
                    Convertissez plus grâce aux secrets du cerveau
                </h3>

                <button class="btn-1 btn-card" id="card_3">
                    En savoir plus
                    <font-awesome-icon icon="fa-solid fa-arrow-down" class="icons-buttons" />
                </button>

                <p class="txt-offers">
                    Cette formation s'appuie les plus récentes publications scientifiques dans les domaine de la psychologie comportementale et des neurosciences. Elle est directement issue du cours dispensé aux étudiants de Sciences Po.
                </p>

            </div>

        </div>
        
    </section>

</template>


<script lang="ts">

    import { arrayTypeAnnotation } from '@babel/types';
import { defineComponent } from 'vue';

    export default defineComponent ({
    	name: 'OffresFormation',
        mounted() {
            this.extendCards();
        }, 
		methods: {
            extendCards(): void {
                let btns: NodeList = document.querySelectorAll('.btn-card');
                let cards: NodeList = document.querySelectorAll('.card');
                let offers = document.getElementById('offers') as HTMLDivElement;

                Array.from(btns).forEach( btn => {

                    Array.from(cards).forEach( card => {

                        (btn as HTMLElement).addEventListener( 'click', () => {

                            if ((card as HTMLElement).classList.contains('open')) {
                                (card as HTMLElement).classList.remove('open');
                                (card as HTMLElement).classList.add('closed');
                                offers.style.height = "80vh";
                            } else {
                                (card as HTMLElement).classList.remove('closed');
                                (card as HTMLElement).classList.add('open');
                                offers.style.height = "100vh";
                            };

                        });

                    });

                });
            },
		},	
    });

</script>


<style lang="scss">

	// Imports
	@import "src/styles/global.scss";
	@import "src/components/formations/formations.offres.scss";

</style>
