<template>

    <div>
        <FormContact />
    </div>

</template>
  
  
<script lang="ts">

    import { defineComponent } from 'vue';
    import FormContact from '@/components/contact/FormContact.vue';

    export default defineComponent({
        name: 'ContactView',
        components: {
            FormContact,
        },
    });
  
</script>
  
  
<style lang="scss"></style>