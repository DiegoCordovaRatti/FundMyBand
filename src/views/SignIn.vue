<template>
    <div>
        <v-container class="d-flex align-center" style="min-height: 100vh;">

        
            <v-form ref="form" v-model="valid" lazy-validation style="width: 100%">
    
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
    
                <v-text-field v-model="password" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]" :type="showPassword ? 'text' : 'password'" name="input-10-1"
                    label="Contraseña" hint="Tu contraseña debe tener 8 caracteres" counter @click:append="showPassword = !showPassword">
                </v-text-field>
    
                <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
                    Validate
                </v-btn>
    
                <v-btn color="error" class="mr-4" @click="reset">
                    Reset Form
                </v-btn>
    
            </v-form>
        </v-container>
        <!-- register -->

    </div>
</template>

<script>
    export default {
        data: () => ({
            valid: true,
            email: '',
            emailRules: [
                v => !!v || 'E-mail requerido',
                v => /.+@.+\..+/.test(v) || 'El e-mail debe ser válido',
            ],
            password: '',
            showPassword: false,
            rules: {
                required: value => !!value || 'Esta area es requerida.',
                min: v => v.length >= 8 || 'Ingresa 8 caracteres como minimo',
                emailMatch: () => (`El e-mail o la contraseña que ingresaste no concuerdan`),
            },
        }),

        methods: {
            validate() {
                this.$refs.form.validate()
            },
            reset() {
                this.$refs.form.reset()
            },
        },
    }
</script>

<style>

</style>