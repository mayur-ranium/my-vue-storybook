import ModelValue from "./ModelValue.vue";

export default {
    title: 'Components/ModelValue',
    component: ModelValue,

    argTypes: {
        modelValue: {control: 'text'},
        'update:modelValue': { action: 'updated'}
    }
};


export const Default = {
    render: (args) => ({
        components: { ModelValue },
        setup() {
            return { args }
        },
        template: '<ModelValue :modelValue="args.modelValue" @update:modelValue="args.modelValue = $event" />'
    }),

    args: {
      modelValue : "helloooooo"
    }
}



export const Empty = {
    args: {
        modelValue: ''
    }
}


export const Prefield = {
    args : {
        modelValue: "Mayur"
    }
}