<template>

	<section id="concept">

        <div id="sc">

            <h2>
                Pourquoi choisir les sciences comportementales ?
            </h2>

            <div id="reasons_sc">

                <div class="reason">
                    <h3>
                        1
                    </h3>
                    <h4>
                        SCIENTIFIQUE
                    </h4>
                    <p>
                        Récompensé par 2 prix Nobel, D. Kahneman & R. Thaler
                    </p>
                </div>

                <div class="reason">
                    <h3>
                        2
                    </h3>
                    <h4>
                        IMPACTANT
                    </h4>
                    <p>
                        Cible directement les mécanismes de notre cerveau
                    </p>
                </div>

                <div class="reason">
                    <h3>
                        3
                    </h3>
                    <h4>
                        INNOVANT
                    </h4>
                    <p>
                        Alimenté par les recherches sientifiques les plus récentes
                    </p>
                </div>

            </div>

            <div id="conseils">
                <h4>
                    Conseil en Sciences Comportementales & Nudges
                </h4>
                <p>
                    L'ingénierie comportementale au service de votre entreprise
                </p>
            </div>

        </div>

	</section>

</template>


<script lang="ts">

    import { defineComponent } from 'vue';

    export default defineComponent ({
    	name: 'ConceptHome',
        mounted() {
            this.hoverReason();
        }, 
		methods: {
            hoverReason(): void {
                let reasons: NodeList = document.querySelectorAll('.reason');

                Array.from(reasons).forEach(reason => {
                    (reason as HTMLElement).addEventListener( 'mouseover', () => {
                        (reason as HTMLElement).style.border = "1px solid #F3F5F7";
                    }); 
                });

                Array.from(reasons).forEach(reason => {
                    (reason as HTMLElement).addEventListener( 'mouseout', () => {
                        (reason as HTMLElement).style.border = "none";
                    });
                });
            },
		},	
    });

</script>


<style lang="scss">

	// Imports
	@import "src/styles/global.scss";
	@import "src/components/home/home.concept.scss";

</style>
