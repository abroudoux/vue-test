<template>

	<section id="presentation">

		<div id="presentation_txt">

			<h1>
				Notre <span id="txt_important">histoire</span>
			</h1>

			<p>
				Découvrez l'histoire et l'origine de Krakn
			</p>

			<h2>
				Quelles sont nos missions ?
			</h2>

			<p>
				Nous aidons les entreprises à transformer réellement les comportements de leurs clients et de leurs collaborateurs grâce aux découvertes récentes issues des sciences du comportement : Psychologie, Economie Comportementale (Nudge) et Neurosciences.
			</p>

		</div>

		<div id="presentation_img">
			<img :src='require("/Users/arthur/vue_project/public/img/sc_illustration.png")' />
		</div>

	</section>

</template>


<script lang="ts">

    import { defineComponent } from 'vue';

    export default defineComponent({
    	name: 'PresentationAbout',
		mounted() {
			this.spanTxt();
		},
		methods: {
			spanTxt(): void {
				let txtImportant = document.getElementById('txt_important') as HTMLSpanElement;

				txtImportant.addEventListener( 'mouseover', () => {
					setTimeout(() => {
            			txtImportant.textContent = "mission";
						
						setTimeout(() => {
            				txtImportant.textContent = "objectif";

							setTimeout(() => {
            					txtImportant.textContent = "but";
        					}, 500);

        				}, 500);

        			}, 500);
				});
			}, 
		},
    });

</script>


<style lang="scss">

	// Imports
	@import "src/styles/global.scss";
	@import "src/components/about/about.presentation.scss";

</style>
