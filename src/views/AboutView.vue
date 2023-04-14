<template>

    <div>
    	<PresentationAbout/>
	</div>
    <div>
    	<TeamAbout/>
	</div>

</template>


<script lang="ts">

    import { defineComponent } from 'vue';
    import PresentationAbout from '@/components/PresentationAbout.vue';
    import TeamAbout from '@/components/TeamAbout.vue';

    export default defineComponent({
        name: 'AboutView',
        components: {
            PresentationAbout,
            TeamAbout,
        },
    });

</script>


<style lang="scss"></style>