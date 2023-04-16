<template>

    <div>
        <OffresFormations />
    </div>

</template>
  
  
<script lang="ts">

    import { defineComponent } from 'vue';
        import OffresFormations from '@/components/formations/OffresFormations.vue';

        export default defineComponent({
            name: 'FormationsView',
            components: {
                OffresFormations,
            },
        });

</script>
  
  
<style lang="scss"></style>