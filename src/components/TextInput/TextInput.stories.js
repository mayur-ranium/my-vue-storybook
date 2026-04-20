import TextInput from "./TextInput.vue";

export default {
    title: "Components/TextInput",
    id: "textinput",
    component: TextInput,

    argTypes: {
        modelValue: { control: "text" },
        placeholder: { control: "text" },
        type: { control: "text" },
        size: {
            control: "select",
            options: ["small", "medium", "large"]
        }
    }
}


const Template = (args) => ({
    components: { TextInput },
    setup() {
        return { args };
    },
    template: '<TextInput v-bind="args" :modelValue="args.modelValue" @update:modelValue="args.modelValue = $event"/>'
})

export const Default = Template.bind({})
Default.args = {
    modelValue: "",
    placeholder: "Enter default name",
    size: "medium",
    type: "text"
}

export const WithValue = Template.bind({})
WithValue.args = {
    modelValue: "Hello Mayur!!!!"
}

export const Small = Template.bind({})
Small.args = {
    placeholder: "Enter small name",
    size: "small",
    type: "text"
}

export const Medium = Template.bind({})
Medium.args = {
    placeholder: "Enter name for medium :",
    size: "medium",
    type: "text"
}

export const Large = Template.bind({})
Large.args = {
    placeholder: "Enter large name",
    size: "large",
    type: "text"
}