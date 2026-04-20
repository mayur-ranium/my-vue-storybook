import MyButton2 from "./MyButton2.vue";

export default {
    title: 'Components/MyButton2',
    component: MyButton2,
    render: (args) => ({    
    components: { MyButton2 },
    setup() {
        return { args }
    },
    template:  `<MyButton2 v-bind="args" @clicked="args.clicked"/>`
    }),
    argTypes: {
        label: { control : 'text'},
        variant: { control: 'select', options: [ 'primary', 'secondary' ] },
        clicked: { action: 'btn-clicked' }
    },
}

export const Primary = {
    args : {
        label: 'Primary',
        variant: 'primary'
    },
}


export const Secondary = {
    args: {
        label: 'Secondary',
        variant: 'secondary'
    },
}
