import Card from "./Card.vue";

export default {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        title: { control: 'text' },
        subText: { control: 'text' },
        mediaHref: { control: 'text' },
        paragraph: { control: 'text' },
        buttonText: { control: 'text' },
        onButtonClick: { action: 'button-click' },
        onSuccess: { action: 'success' },
    },
}


const Template = (args) => ({
   components: { Card },
   setup () {
    return { args };
   },
   template: `<Card v-bind="args" />`
})


export const Primary = Template.bind({});
Primary.args = {
    title: 'Primary Card',
    subText: 'Primary Card Subtext'
}

export const Secondary = Template.bind({});
Secondary.args = {
    title: 'Secondary Card',
    subText: 'Secondary Card Subtext'
}

export const withImage = Template.bind({});
withImage.args = {
    title: 'Card with Image',
    subText: 'This card is use with the to show text with image.',
    mediaHref: '/vite.svg',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur efficitur.'
}


export const withImageBtn = Template.bind({});
withImageBtn.args = {
    title: 'Card with Image and btnText',
    subText: 'Card with Image and btn Subtext',
    mediaHref: '/vite.svg',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur efficitur. Sed at felis a enim efficitur efficitur.',
    buttonText: 'Go'
}