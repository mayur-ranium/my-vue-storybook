<template>
    <nav class="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
        
        <!-- logo -->
        <div class="text-xl font-bold">
          {{  logo }}
        </div>

        <!-- menu + actions -->
        <div class="hidden md:flex items-center gap-6">
          <ul class="flex gap-6 items-center">
            <li v-for="item in links" :key="item.name" @click="$emit('navigate', item)">
             {{ item.name }}
            </li>
          </ul>
          <div class="flex items-center gap-3">
           <slot name="actions"/>
          </div>
        </div>

        <button
      class="md:hidden ml-2"
      @click="toggleMenu"
    >
      ☰
    </button>
    </nav>

    <div v-if="isOpen" class="md:hidden bg-white shadow px-6 py-4">
      <ul class="flex flex-col gap-4"> 
        <li v-for="item in links" :key="item.name" class="cursor-pointer hover:text-blue-600" @click="$emit('navigate', item)">
          {{ item.name }}
        </li>
      </ul>
    </div>
</template>


<script>

export default {
    name: 'MyNavbar',
    props: {
        logo: {
            type: String,
            default: 'MyApp'
        },
        links: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        }
    }
}


</script>