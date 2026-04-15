import Input from "./Input.vue";

export default {
    title: 'Components/Input',
    component: Input,
    argTypes: {
        label: { control : 'text' },
        placeholder: { control : 'text' },
        error: { control : 'text' },
        disabled: { control: 'boolean' }
    }
};

const Template = (args) => ({
    components: { Input },
    setup() {
        return { args };
    },
    template: '<Input v-bind="args" />'
})


export const Default = Template.bind({});
Default.args = {
    label: 'username',
    placeholder: 'Enter your username',
    disabled: false
}

export const WithValue = Template.bind({});
WithValue.args = {
    label: 'Email',
    placeholder: 'Enter email'
}

export const WithError = Template.bind({});
WithError.args = {
    label: 'Password',
    placeholder: 'Enter password',
    error: 'Password is required'
}

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Name',
    placeholder: 'Disabled Input',
    disabled: true
}

export const NoLabel = Template.bind({});
NoLabel.args = {
    placeholder: 'Only Placeholder'
}