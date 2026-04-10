import Alert from './Alert.vue';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'error', 'warning']
    },
    closable: {
      control: 'boolean'
    }
  }
};

const Template = (args) => ({
  components: { Alert },
  setup() {
    return { args };
  },
  template: '<Alert v-bind="args" />'
});

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  message: 'This is an info alert',
  closable: false
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  message: 'Success alert!',
  closable: true
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  message: 'Something went wrong!',
  closable: true
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  message: 'Warning alert!',
  closable: false
};