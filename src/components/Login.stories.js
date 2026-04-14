import Login from "./Login.vue";
import { linkTo } from "@storybook/addon-links";
import { within, userEvent } from "storybook/test";

export default {
  title: "Auth/Login",
  component: Login,
};

// Helper function to simulate delay
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Blank State
export const Blank = () => ({
  components: { Login },
  data() {
    return {
      email: "",
      password: "",
      error: null,
      success: false,
    };
  },
  template: `<Login :email="email" :password="password" :error="error" :success="success" @update-email="email = $event" @update-password="password = $event" />`,
});

// Filled State
export const Filled = () => ({
  components: { Login },
  data() {
    return {
      email: "test@gmail.com",
      password: "12345678",
      error: null,
      success: false,
    };
  },
  template: `<Login :email="email" :password="password" :error="error" :success="success" @update-email="email = $event" @update-password="password = $event" />`,
});

// With Error State
export const withError = () => ({
  components: { Login },
  data() {
    return {
      email: "",
      password: "",
      error: "All fields are required",
      success: false,
    };
  },
  template: `
    <Login 
      :email="email" :password="password" :error="error" :success="success" @update-email="email = $event" @update-password="password = $event" />`,
});

// Success State
export const Success = () => ({
  components: { Login },
  data() {
    return {
      email: "test@gmail.com",
      password: "123456",
      error: "",
      success: true,
    };
  },
  template: `
    <Login
      :email="email"
      :password="password"
      :error="error"
      :success="success"
      @update-email="email = $event"
      @update-password="password = $event"
    />
  `,
});

// With Loader State
export const WithLoader = () => ({
  components: { Login },
  data() {
    return {
      email: "test@gmail.com",
      password: "123456",
      error: "",
      success: false,
      loading: true,
    };
  },
  template: `
    <Login
      :email="email"
      :password="password"
      :error="error"
      :success="success"
      :loading="loading"
      @update-email="email = $event"
      @update-password="password = $event"
    />
  `,
});

// Auto Test with loader and link to another story on success
export const WithInterAction = () => ({
  components: { Login },
  data() {
    return {
      email: "",
      password: "",
      error: null,
      success: false,
      loading: false,
    };
  },
  methods: {
    async handleSubmit() {
      // validation
      if (!this.email || !this.password) {
        this.error = "All fields are required";
        return;
      }

      this.error = "";
      this.loading = true;

      // 🕐 simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      this.loading = false;

      // Fake success condition
      if (this.email === "test@gmail.com" && this.password === "123456") {
        this.success = true;
        linkTo("Card", "Secondary")();
      } else {
        this.error = "Invalid credentials";
      }
    },
  },
  template: `<Login
      :email="email"
      :password="password"
      :error="error"
      :success="success"
      :loading="loading"
      @update-email="email = $event"
      @update-password="password = $event"
      @submit="handleSubmit"
    />`,
});
WithInterAction.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const emailInput = await canvas.getByLabelText(/email/i);

  const passwordInput = await canvas.getByLabelText(/password/i);

  const submitButton = await canvas.getByRole("button", { name: /login/i });

  await sleep(2000);

  await userEvent.type(emailInput, "test@gmail.com", {
    delay: 200,
  });

  await sleep(2000);

  await userEvent.type(passwordInput, "123456", {
    delay: 200,
  });

  await sleep(2000);

  await userEvent.click(submitButton);
};
