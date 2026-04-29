<template>
    <div>
    <form @submit="handleSubmit">
     <BaseInput label="Name" v-model="form.name" :error="errors.name"/>
     <BaseInput label="Email" type="email" v-model="form.email" :error="errors.email" />
    <button class="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
      Submit
    </button>
    </form>
    </div>
</template>


<script>
import BaseInput from '../BaseInput/BaseInput.vue';

export default {
    name: 'UserForm',
    components: { BaseInput },
    props: {
        modelValue: {
            type: Object,
            default: () => ({})
        },
        nameError: {
            type: String,
            default: ''
        },
        emailError: {
            type: String,
            default: ''
        }
    },
    emits: ['update:modelValue', 'submit'],

    data() {
        return {
            form: {
                name: this.modelValue.name || '',
                email: this.modelValue.email || ''
            },
            errors: {
                name: this.nameError,
                email: this.emailError
            }
        }
    },
    watch: {
        form: {
            handler(val) {
                this.$emit('update:modelValue', val)
            },
            deep: true
        },
    },
    methods: {
        validate() {
            this.errors.name = this.form.name ? '' : "Name is Required.";

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                this.errors.email = emailRegex.test(this.form.email)
                ? '' : 'Valid email required';

            return !this.errors.name && !this.errors.email;
        },
        handleSubmit() {
            if (this.validate()) {
                this.$emit('submit', this.form)
            }
        }
    }


}



</script>