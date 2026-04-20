import MyButton1 from "./MyButton1.vue";

export default {
    title: 'Components/MyButton1',
    component: MyButton1,

    argTypes: {
        label: { control : 'text' },
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'danger']
        },
        clicked: { action: 'button-clicked' }
    }
}


const Template = (args) => ({
   components: { MyButton1 },
   setup() {
    return { args };
   },
   template: `<MyButton1 v-bind="args" @clicked="args.onClicked"/>`
})

export const Default = {
    args: {
        label: "Default",
        variant: 'secondary'
    }
}

export const Primary = {
    args: {
        label: 'Primary button',
        variant: 'primary',
        disabled: false,
        loading: false
    }
}

export const loading = {
    args: {
        label: 'Submitting...',
        loading: true
    }
}


export const Disabled = {
    args: {
        label: 'Disabled',
        disabled: true
    }
}