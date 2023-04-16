<template>

	<div>
    	<LinksHome />
	</div>

    <div>
    	<ConceptHome />
	</div>

</template>


<script lang="ts">

    import { defineComponent } from 'vue';
    import LinksHome from '@/components/home/LinksHome.vue';
    import ConceptHome from '@/components/home/ConceptHome.vue';

    export default defineComponent({
        name: 'HomeView',
        components: {
            LinksHome,
            ConceptHome,
        },
    });

</script>


<style lang="scss"></style>