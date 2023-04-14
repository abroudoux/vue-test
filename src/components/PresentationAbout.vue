<template>

	<section id="presentation">

		<div id="presentation_txt">

			<h1>
				Our History
			</h1>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eligendi explicabo nihil maiores eos reiciendis soluta. Sit error odit saepe illum assumenda necessitatibus, magni suscipit rerum facere fuga? Nam magni nihil quos tenetur veniam qui explicabo amet nostrum asperiores aliquid.
			</p>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eligendi explicabo nihil maiores eos reiciendis soluta. Sit error odit saepe illum assumenda necessitatibus, magni suscipit rerum facere fuga? Nam magni nihil quos tenetur veniam qui explicabo amet nostrum asperiores aliquid.
			</p>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eligendi explicabo nihil maiores eos reiciendis soluta. Sit error odit saepe illum assumenda necessitatibus, magni suscipit rerum facere fuga? Nam magni nihil quos tenetur veniam qui explicabo amet nostrum asperiores aliquid.
			</p>

			<h2>
				The Team :
			</h2>

			<div id="presentation_links">

				<button class="btn-1" id="btn_presentation_link">
					<a href="#team">
						Discover
					</a>
				</button>

			</div>

		</div>

		<div id="presentation_img"></div>

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
	@import "src/styles/styles.components/about.presentation.scss";

</style>
