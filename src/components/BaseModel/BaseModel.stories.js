import BaseModel from "./BaseModel.vue";

export default {
    title: 'Components/BaseModel',
    component: BaseModel,
    argTypes: {
        title: { control: "text" }
    }
};

export const Default = {
    args: {
        title: 'My Modal'
    }
};

export const WithContent = {
    args: {
        title: 'Confirmation'
    },
    render: (args) => ({
        components: { BaseModel },
        setup() { return { args }; },
        template: '<BaseModel v-bind="args">Are you sure you want to continue?</BaseModel>'
    })
};
