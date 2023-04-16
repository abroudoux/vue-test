<template>

	<section id="presentation">

		<div id="presentation_txt">

			<h1>
				Notre histoire
			</h1>

			<p>
				Découvrez l'histoire et l'origine de Krakn
			</p>

			<h2>
				Quels sont nos missions ?
			</h2>

			<p>
				Nous aidons les entreprises à transformer réellement les comportements de leurs clients et de leurs collaborateurs grâce aux découvertes récentes issues des sciences du comportement : Psychologie, Economie Comportementale (Nudge) et Neurosciences.
			</p>

		</div>

		<div id="presentation_img">
			<!-- <a href="/">
                <img :src='require("public/img/illustration_home.png")' />
            </a> -->
		</div>

	</section>

</template>


<script lang="ts">

    import { defineComponent } from 'vue';

    export default defineComponent({
    	name: 'PresentationAbout',
    });

</script>


<style lang="scss">

	// Imports
	@import "src/styles/global.scss";
	@import "src/components/about/presentation/about.presentation.scss";

</style>
