import Loader from "./Loader.vue";

export default {
    title: 'Components/Loader',
    component: Loader,
    argTypes: {
        size: {
            control: 'select',
            option: [ 'md', 'sm', 'lg' ]
        },
        label: { control : 'text'},
        fullScreen: { control: 'boolean' }
    },
}


export const Default = {
    args: {
     size: 'md'
    }
}


export const WithLabel = {
    args: {
        label: 'Loading Data...'
    }
}


export const Large = {
    args: {
        size: 'lg'
    }
}


export const Small = {
    args: {
        size: 'sm',
    }
}