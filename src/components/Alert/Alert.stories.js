import Alert from "./Alert.vue";


export default {
    name: "Alert",
    component: Alert,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: "This is the alert component for different states"
            }
        }
    },


    argTypes: {
        type: {
            control:  'select',
            options: [ 'info', 'warning', 'success']
        },
        closable: {
            control: 'boolean',
        }
    }
};

const Template = (args) => ({
    components: { Alert },
    setup() {
        return { args }
    },
    template: `<Alert v-bind="args" />`
})


export const Info = Template.bind({});
Info.args = {
    message: "this is the info alert.",
    type: 'info',
    closable: false
} 

export const Warning = Template.bind({});
Warning.args = {
    message : "this is the warning alert",
    type: "warning",
    closable: true
}


export const Success = Template.bind({});
Success.args = {
    message: "this is the success alert.",
    type: "success",
    closable: true
} 