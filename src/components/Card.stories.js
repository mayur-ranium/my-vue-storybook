import Card from './Card.vue';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Card',
  component: Card,
  argTypes: {
    title: 'String',
    subText: 'String',
    mediaHref: 'String',
    paragraph: 'String'
  }
};

const Template = (args) => ({
    components : { Card },
    setup() {
        return {args};
    },
    template: '<Card v-bind="args" />',
})

export const Primary = Template.bind({})
Primary.args = {
    title: 'Card Title',
    subText: 'Card Subtext',
}


export const Secondary = Template.bind({})
Secondary.args = {
    title: 'Card title 2',
    subText : 'Card Subtext 2',
    mediaHref: '/favicon.svg',
}

export const Third = Template.bind({})
Third.args = {
    title: 'Card title 3',
    subText : 'Card Subtext 3',
    mediaHref: '/vite.svg',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur efficitur. Sed at felis a enim efficitur efficitur. Donec vel sapien eget nunc efficitur efficitur. Sed at felis a enim efficitur efficitur.'
}

export const Fourth = Template.bind({})
Fourth.args = {
    title: 'Card title 4',
    subText : 'Card Subtext 4',
    mediaHref: '/vite.svg',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur efficitur. Sed at felis a enim efficitur efficitur.',
    buttonText: 'Go'
}