<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="nuxt-link" to="/">
                <b>Craftbench</b>
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item tag="nuxt-link" to="/">
                Home
            </b-navbar-item>
            <b-navbar-item tag="nuxt-link" to="/event">
                Events
            </b-navbar-item>
            <b-navbar-item tag="nuxt-link" to="/myprojects">
                My Projects
            </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <b-field>
                    <p class="control">
                        <b-button 
                            type="is-success" 
                            tag="nuxt-link"
                            to="/auth/signup"
                        >
                            Signup
                        </b-button>
                    </p>
                    <p class="control">
                        <b-button 
                            type="is-dark" 
                            tag="nuxt-link"
                            to="/auth/login"
                        >
                            Login
                        </b-button>
                    </p>
                </b-field>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<style scoped>

</style>