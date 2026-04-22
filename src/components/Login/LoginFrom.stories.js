// LoginForm.stories.js
import LoginForm from './LoginForm.vue';
import { loginSuccess, loginError, loginLoading } from '../../../mocks/authHandlers';

export default {
  title: 'API/LoginForm',
  component: LoginForm,
};

export const Success = {
  parameters: {
    msw: { handlers: [loginSuccess] },
  },
};

export const Error = {
  parameters: {
    msw: { handlers: [loginError] },
  },
};

export const Loading = {
  parameters: {
    msw: { handlers: [loginLoading] },
  },
};