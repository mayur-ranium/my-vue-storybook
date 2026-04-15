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
          <Dropdown v-if="dropdown">
            <template #trigger>
              <button class="bg-gray-200 px-3 py-1 rounded">
                {{ dropdown.label }}
              </button>
            </template>
            <ul class="text-black">
              <li
                v-for="item in dropdown.items"
                :key="item.name"
                class="p-2 hover:bg-gray-100 cursor-pointer"
              >
                {{ item.name }}
              </li>
            </ul>
          </Dropdown>
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
import Dropdown from '../Dropdown/Dropdown.vue';

export default {
    name: 'MyNavbar',
    components: {
      Dropdown
    },
    props: {
        logo: {
            type: String,
            default: 'MyApp'
        },
        links: {
            type: Array,
            default: () => []
        },
        dropdown : {
          type: Object,
          default: null
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