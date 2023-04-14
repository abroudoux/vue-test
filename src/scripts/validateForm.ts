import { defineComponent } from 'vue';

export default defineComponent ({

    name: 'validateForm',
    props: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        subject: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
    },
    methods: {
        
        validateInfos(): boolean {

            if ( this.firstName ===  "" || this.lastName === '' || this.email === '' || this.subject === '' || this.message === '' ) {
                return false;
            } else {
                return true;
            }

        },

    },

});
