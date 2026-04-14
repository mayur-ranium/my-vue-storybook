import MyNavbar from "./MyNavbar.vue";
import MyButton from "../MyButton.vue";


export default {
    title: 'Components/MyNavbar',
    component: MyNavbar
}

const Template = (args) => ({
  components: { MyNavbar, MyButton },
  setup () {
    return {
        args
    }
  },
  template: `<MyNavbar v-bind="args">
   <template #actions>
     <MyButton label="Login" />
     <MyButton label="Signup" variant="secondary" />
   </template>
  </MyNavbar>`
})


export const Default = Template.bind({});
Default.args = {
    logo: 'MyApp',
    links: [
        { name: 'Home'},
        { name: 'About' },
        { name: 'Services' },
        { name: 'Contact' }
    ]
}
