import Login2 from "./Login2.vue";

export default {
  title: "Auth/Login2",
  component: Login2,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Login form component with validation, error states, and loading support.'
      }
    }
  },
  argTypes: {
    email: { control: "text", description: "this is simple email input" },
    password: { control: "text", description: "User email password" },
    emailError: { control: "text", description: "Email validation error" },
    passwordError: { control: "text", description: "Password validation error" },
    success: { control: "boolean", description: "Success Message" },
    loading: { control: "boolean", description: "Loading state" },
    isDisabled: { control: "boolean", description: "Disabled state" },
    login: { action: "login" }
  },
};

const Template = (args) => ({
  components: { Login2 },
  setup() {
    return { args };
  },
  template: `<Login2 v-bind="args" @update-email="args.email = $event" @update-password="args.password = $event" @login="args.login"/>`,
})

export const Blank = Template.bind({});
Blank.args = {
  email: "",
  password: "",
  emailError: 'Email is required',
  passwordError: 'Password is required',
  success: false,
  loading: false,
  isDisabled: false,
};

export const InvalidEmail = Template.bind({});
InvalidEmail.args = {
  email: "invalid-email",
  password: "12345678",
  emailError: 'Please enter a valid email',
  passwordError: '',
  success: false,
  loading: false,
  isDisabled: false,
};

export const ShortPassword = Template.bind({});
ShortPassword.args = {
  email: 'user@example.com',
  password: '123',
  emailError: '',
  passwordError: 'Password must be at least 6 characters',
  success: false,
  loading: false,
  isDisabled: true
};

export const Filled = Template.bind({});
Filled.args = {
  email: "test@gmail",
  password: "12345678",
  emailError: '',
  passwordError: '',
  success: false,
  loading: false,
  isDisabled: false,
};

export const withError = Template.bind({});
withError.args = {
  email: "test@gmail",
  password: "12345679",
  emailError: '',
  passwordError: 'Invalid credentials',
  success: false,
  isDisabled: false,
};

export const Success = Template.bind({});
Success.args = {
  email: "test@gmail",
  password: "12345678",
  emailError: '',
  passwordError: '',
  success: true,
  isDisabled: false,
}

export const WithLoader = Template.bind({});
WithLoader.args = {
  email: "test@gmail",
  password: "12345678",
  emailError: '',
  passwordError: '',
  success: false,
  loading: true,
  isDisabled: true
};