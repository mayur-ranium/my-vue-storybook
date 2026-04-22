import UserList from './UserList.vue';
import { successHandler, errorHandler, loadingHandler } from '../../../mocks/userHandlers';

export default {
  title: 'Components/UserList',
  component: UserList,
};

export const Default = {
  parameters: {
    msw: { handlers: [successHandler] }
  }
};

export const Success = {
  parameters: {
    msw: { handlers: [successHandler] }
  }
};

export const Error = {
  parameters: {
    msw: { handlers: [errorHandler] }
  }
};

export const Loading = {
  parameters: {
    msw: { handlers: [loadingHandler] }
  }
};