<template>


	<section id="form">

        <h1 id="form_heading">
            Nous contacter
        </h1>

        <div id="infos_form">
            <span class="alert-success" id="span_success"></span>
            <span class="alert-error" id="span_alert"></span>
        </div>

        <form @submit.prevent="onSubmit">

            <label for="firstName">
                Votre Prénom
            </label>
            <input type="text" v-model="firstName" id="first_name" placeholder="Votre Prénom" autocomplete="none" class="input" @focus="headingForm" @blur="headingForm">

            <label for="lastName">
                Votre Nom
            </label>
            <input type="text" v-model="lastName" id="last_name" placeholder="Votre Nom" autocomplete="none" class="input" @focus="headingForm" @blur="headingForm">

            <label for="email">
                Votre Mail
            </label>
            <input type="email" v-model="email" id="email" placeholder="Votre Email" autocomplete="none" class="input" @focus="headingForm" @blur="headingForm">

            <label for="subject">
                L'object de votre message
            </label>
            <select v-model="subject" id="subject">
                <option value="">
                    Choisissez l'objet de votre message
                </option>
                <option value="consulting">
                    Un besoin en consulting
                </option>
                <option value="conference">
                    Un projet de Conférence
                </option>
                <option value="formation">
                    Un projet de formation
                </option>
                <option value="other">
                    Autre
                </option>
            </select>

            <label for="message">
                Votre message
            </label>
            <textarea v-model="message" id="message" cols="10" rows="10" placeholder="Votre message" resize="none" class="input" @focus="headingForm" @blur="headingForm"></textarea>

            <button type="submit" id="btn_submit" class="btn-1">
                Submit
            </button>

        </form>

	</section>

</template>



<script lang="ts">

    import { defineComponent } from 'vue';

    export default defineComponent ({

    	name: 'FormContact',
        data() {
            return {
                firstName:  '',
                lastName: '',
                email: '',
                subject: '',
                message: '',
            };
        },
        mounted() {
            this.headingForm();
        },
        methods: {

            validateForm(): boolean {

                if ( this.firstName ===  "" || this.lastName === '' || this.email === '' || this.subject === '' || this.message === '' ) {
                    return false;
                } else {
                    return true;
                }

            },

            onSubmit(): void {

                if ( this.validateForm() ) {

                    let formInfos = {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,
                        subject: this.subject,
                        message: this.message,
                    };

                    this.$emit( 'form-submitted', formInfos );

                    this.firstName = '';
                    this.lastName = '';
                    this.email = '';
                    this.subject = '';
                    this.message = '';

                    const errorMessage = document.querySelector(".alert-error") as HTMLSpanElement;
                    errorMessage.style.display = 'none';

                    const successMessage = document.querySelector(".alert-success") as HTMLSpanElement;
                    successMessage.style.display = 'block';
                    successMessage.innerText = "Votre message a été envoyé avec succès !";

                    const form = document.getElementById('form');

                    form?.addEventListener( 'submit', (e: Event) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    });

                } else {

                    const successMessage = document.querySelector(".alert-success") as HTMLSpanElement;
                    successMessage.style.display = 'none';

                    const errorMessage = document.querySelector(".alert-error") as HTMLSpanElement;
                    errorMessage.style.display = 'block';
                    errorMessage.innerText = "Veuillez remplir le formulaire correctement";

                    const form = document.getElementById('form');

                    form?.addEventListener( 'submit', (e: Event) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    });
                };

            },

            headingForm(): void {

                const formHeading = document.getElementById('form_heading') as HTMLHeadingElement;
                const formInputs = document.querySelectorAll(".input") as NodeListOf<HTMLInputElement>;

                formInputs.forEach( (input) => {

                    input.addEventListener( 'focus', () => {

                        formHeading.style.opacity = "0";

                        setTimeout(() => {
                            formHeading.textContent = `${input.placeholder}`;
                            formHeading.style.animation = "apparition_left 1s ease-in-out";
                            formHeading.style.opacity = "1";
                        }, 100);

                    });

                    input.addEventListener( 'blur', () => {

                        formHeading.style.opacity = "0";
                        formHeading.textContent = "Nous contacter";
                        formHeading.style.animation = "disparition_left 1s ease-in-out";
                        formHeading.style.opacity = "1";

                    });

                });

            },
            
        },

    });


</script>



<style lang="scss">

	// Imports
	@import "src/styles/global.scss";
    @import "src/components/contact/contact.form.scss";

</style>
