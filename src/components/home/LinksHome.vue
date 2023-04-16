<template>

	<section id="links">

		<div id="links_txt">

			<h1>
				La Science des Comportements Cliens
			</h1>

			<p>
				Nous utilisons la Psychologie et les Neurosciences pour vous aider à relever les défis de la Relation Client.
			</p>

			<div id="links_btn">

				<a href="#concept">
					<button class="btn-2">Présentation</button>
				</a>

				<a href="/contact">
					<button class="btn-1">Contact</button>
				</a>

			</div>

		</div>

		<div id="links_img">
			<img :src='require("/Users/arthur/vue_project/public/img/illustration_home.png")' />
		</div>

	</section>

</template>


<script lang="ts">

    import { defineComponent } from 'vue';

    export default defineComponent({
    	name: 'LinksHome',
		methods: {

		},	
    });

</script>


<style lang="scss">

	// Imports
	@import "src/styles/global.scss";
	@import "src/components/home/home.links.scss";

</style>
