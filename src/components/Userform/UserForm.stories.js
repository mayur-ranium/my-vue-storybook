import UserForm from './UserForm.vue';

export default {
  title: 'Components/UserForm',
  component: UserForm,
  tags: ['autodocs'],

  parameters: {
    docs: {
      description: {
        component:
          'User form with name and email fields, built-in validation, and submit handling.'
      }
    }
  },

  argTypes: {
    modelValue: {
      control: 'object',
      description: 'Pre-fill form fields (name, email)'
    },
    nameError: {
      control: 'text',
      description: 'Initial error message for name field'
    },
    emailError: {
      control: 'text',
      description: 'Initial error message for email field'
    },
    submit: { action: 'submit' }
  }
};

// 🔥 reusable render (modern replacement of Template)
const render = (args) => ({
  components: { UserForm },
  setup() {
    return { args };
  },
  template: `
    <UserForm 
      v-bind="args"
      @update:modelValue="args.modelValue = $event"
      @submit="args.submit"
    />
  `
});

export const Default = {
  render,
  args: {
    modelValue: { name: '', email: '' },
    nameError: '',
    emailError: ''
  }
};

export const Filled = {
  render,
  args: {
    modelValue: { name: 'John Doe', email: 'john@example.com' }
  }
};

export const NameError = {
  render,
  args: {
    modelValue: { name: '', email: 'john@example.com' },
    nameError: 'Name is Required.'
  }
};

export const EmailError = {
  render,
  args: {
    modelValue: { name: 'John Doe', email: 'invalid-email' },
    emailError: 'Valid email required'
  }
};

export const BothErrors = {
  render,
  args: {
    modelValue: { name: '', email: '' },
    nameError: 'Name is Required.',
    emailError: 'Valid email required'
  }
};