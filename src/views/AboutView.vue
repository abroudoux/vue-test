<template>

    <div>
    	<PresentationAbout />
	</div>

</template>


<script lang="ts">

    import { defineComponent } from 'vue';
    import PresentationAbout from '@/components/about/PresentationAbout.vue';

    export default defineComponent({
        name: 'AboutView',
        components: {
            PresentationAbout,
        },
    });

</script>


<style lang="scss"></style>