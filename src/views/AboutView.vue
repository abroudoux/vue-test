<template>

    <div>
    	<PresentationAbout />
	</div>

    <div>
    	<TeamAbout />
	</div>

</template>


<script lang="ts">

    import { defineComponent } from 'vue';
    import PresentationAbout from '@/components/about/presentation/PresentationAbout.vue';
    import TeamAbout from '@/components/about/team/TeamAbout.vue';

    export default defineComponent({
        name: 'AboutView',
        components: {
            PresentationAbout,
            TeamAbout,
        },
    });

</script>


<style lang="scss"></style>