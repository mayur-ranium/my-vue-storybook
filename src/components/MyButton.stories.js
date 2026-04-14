import MyButton from './MyButton.vue';
import IconCheck from './IconCheck.vue';
import IconLeft from './IconLeft.vue';
import IconRight from './IconRight.vue';

export default {
  title: 'Components/MyButton',
  component: MyButton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<MyButton v-bind="args" />',
});

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'With Icon',
  icon: IconCheck,
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Loading...',
  loading: true,
};

export const IconAndLoading = Template.bind({});
IconAndLoading.args = {
  label: 'Processing',
  icon: IconCheck,
  loading: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  variant: 'secondary',
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  label: 'Back',
  leftIcon: IconLeft,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  label: 'Next',
  rightIcon: IconRight,
};

export const BothIcons = Template.bind({});
BothIcons.args = {
  label: 'Continue',
  leftIcon: IconLeft,
  rightIcon: IconRight,
};