import MyCard from "./MyCard.vue"

export default {
   title: 'Components/MyCard',
   component: MyCard,
}


export const Default = {
    render: (args) => ({
        components: { MyCard },
        setup(args) {
         return { args }
        },
        template: `<MyCard v-bind="args">
         <template #header>
          Header Content
         </template>

         <p>Main Content</p>


         <template #footer>
         footer content         
         </template>
        
        </MyCard>`
    })
}


export const DynamicSlot = {
    args: {
        header: "Header Content",
        content: "this is the content of DynamicSlot",
        footer: "Footer Content",
    },
    render: (args) => ({
        components: { MyCard },
        setup() {
            return { args }
        },
        template: `<MyCard>
         <template v-if="args.header" #header>
          {{ args.header }}
         </template>

         {{ args.content }}

         <template v-if="args.footer" #footer>
          {{ args.footer }}
         </template>
        </MyCard>`
    })

}