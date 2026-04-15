import MyNavbar from "./MyNavbar.vue";
import MyButton from "../MyButton.vue";

export default {
    title: 'Components/MyNavbar',
    component: MyNavbar
}

const links = [
    { name: 'Home' },
    { name: 'About' },
    { name: 'Services' },
    { name: 'Contact' }
]

const dropdown = {
    label: 'More',
    items: [
        { name: 'Blog' },
        { name: 'Careers' },
        { name: 'Press' }
    ]
}

const TemplateBasic = (args) => ({
    components: { MyNavbar },
    setup() {
        return { args }
    },
    template: `<MyNavbar v-bind="args" />`
})

const TemplateWithActions = (args) => ({
    components: { MyNavbar, MyButton },
    setup() {
        return { args }
    },
    template: `<MyNavbar v-bind="args">
      <template #actions>
        <MyButton label="Login" />
        <MyButton label="Signup" variant="secondary" />
      </template>
    </MyNavbar>`
})


// 1. Only dropdown, no links
export const OnlyDropdown = TemplateBasic.bind({});
OnlyDropdown.storyName = 'With Dropdown Only';
OnlyDropdown.args = {
    logo: 'MyApp',
    dropdown
}

// 2. Only links, no dropdown
export const OnlyLinks = TemplateBasic.bind({});
OnlyLinks.storyName = 'With Links Only';
OnlyLinks.args = {
    logo: 'MyApp',
    links
}

// 3. Links + dropdown
export const LinksAndDropdown = TemplateBasic.bind({});
LinksAndDropdown.storyName = 'With Links and Dropdown';
LinksAndDropdown.args = {
    logo: 'MyApp',
    links,
    dropdown
}

// 4. Links + Login/Signup buttons
export const LinksAndActions = TemplateWithActions.bind({});
LinksAndActions.storyName = 'With Links and Login/Signup';
LinksAndActions.args = {
    logo: 'MyApp',
    links
}
