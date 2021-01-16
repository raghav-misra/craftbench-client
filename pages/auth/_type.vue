<template>
    <section class="page">
        <form @submit.prevent="authSubmit" class="pull-up">
            <h1 class="title brand">Craftbench</h1>
            <h2 class="subtitle">{{ isSignup ? "Signup" : "Login" }}</h2>

            <hr>

            <b-field label="Email Address">
                <div>
                    <b-input type="text" placeholder="john.doe@example.com" v-model="fields.email" />
                    <small v-if="!fields.email">Required</small>
                    <small v-else-if="!isValidEmail" class="has-text-danger">That email doesn't look right.</small>
                </div>
            </b-field>
            
            <b-field label="Password">
                <div>
                    <b-input type="password" placeholder="Don't tell anyone!" v-model="fields.password" />
                    <small v-if="!fields.password">Required</small>
                    <small v-else-if="fields.password.length < 8 && isSignup" class="has-text-danger">At least 8 characters please.</small>
                </div>
            </b-field>  

            <b-field label="Confirm Password" v-if="isSignup">
                <div>
                    <b-input type="password" placeholder="One more time please." v-model="fields.confirmPassword" />
                    <small v-if="!fields.confirmPassword">Required</small>
                    <small v-else-if="fields.password !== fields.confirmPassword" class="has-text-danger">The passwords don't match.</small>
                </div>
            </b-field>

            <hr>

            <b-field>
                <b-button type="is-success is-fullwidth" native-type="submit" :loading="isSubmitProcessing">
                    Let's Continue ⟶
                </b-button>
            </b-field>

            <small v-if="isSignup"><nuxt-link to="/auth/login">Already have an account?</nuxt-link></small>
            <small v-else><nuxt-link to="/auth/signup">Don't have an account?</nuxt-link></small>
        </form>
    </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    data() {
        return {
            fields: {
                email: "",
                password: "",
                confirmPassword: "",
            },

            isSubmitProcessing: false
        };
    },

    computed: {
        isSignup() {
            return this.$route.params.type === "signup";
        },
        isValidEmail(): boolean {
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return emailRegex.test(this.fields.email.toLowerCase());
        }
    },

    methods: {
        // Middleman function calls signup or login:
        async authSubmit() {            
            this.isSubmitProcessing = true;

            // Validate the form fields:
            if (await this.validateFields()) {
                // Signup:
                if (this.isSignup) await this.continueSignup();

                // Login:
                else await this.continueLogin();
            }

            this.isSubmitProcessing = false;
        },

       async validateFields(): Promise<boolean> {
            // Validate email:
            if (!this.isValidEmail) {
                await this.$swal("Is that your email?", "Make sure the email you typed in is correct.", "warning");
                return false;
            }

            // Test for required fields:
            const isSignupConfirmationMissing = this.isSignup && !this.fields.confirmPassword;
            if (!this.fields.email || !this.fields.password || isSignupConfirmationMissing) {
                await this.$swal("Try again.", "Please fill out all fields.", "warning");
                return false;
            };

            // If signing up, check if password and confirmation match:
            if (this.isSignup && (this.fields.password !== this.fields.confirmPassword)) {
                await this.$swal("That didn't work.", "Make sure your password and confirmation match.", "warning");
                return false;
            }

            // Short password:
            if (this.fields.password.length < 8) {
                await this.$swal("Short password.", "For security, please make your password at least 8 characters.", "warning");
                return false;
            }

            return true;
        },

        async continueSignup() {
            try {
                // SIGNUP LOGIC
                await this.$swal("Success!", "Check your email for a confirmation message. You can close this tab.", "success");
                this.$router.push("/");
            }

            catch (error) {
                console.log("GoTrue signup error", error);
                await this.$swal("Something went wrong.", `${error}`.split(":")[2], "error");
            }
        },

        async continueLogin() {
            try {
                // LOGIN LOGIC
                await this.$swal("Success!", "Redirecting you to the dashboard.", "success");
                this.$router.push("/app");
            }

            catch (error) {
                console.log("login error", error);
                await this.$swal("An error occurred.", `${error}`.split(":")[2], "error");
            }
        }
    }
});
</script>

<style scoped>
.page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--light);
}

form {
    background: white;
    padding: 2rem 4rem;
    min-width: 25rem;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    border-radius: 20px;
}
</style>