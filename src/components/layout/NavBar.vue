<template>
  <nav class="sticky top-0 z-50 flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800">
    <div class="max-w-7xl mx-auto w-full flex items-center justify-between">
      <!-- Logo y Título -->
      <router-link to="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <div class="text-primary flex size-10 shrink-0 items-center justify-center bg-primary/10 rounded-lg">
          <MaterialIcon name="church" />
        </div>
        <h2 class="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          Iglesia Bautista
        </h2>
      </router-link>

      <!-- Menú Desktop -->
      <nav class="hidden md:flex items-center gap-6">
        <router-link
          v-for="link in navigationLinks"
          :key="link.path"
          :to="link.path"
          class="text-[#111418] dark:text-white hover:text-primary dark:hover:text-blue-400 transition-colors font-medium"
          active-class="text-primary dark:text-blue-400 font-bold"
        >
          {{ link.name }}
        </router-link>
      </nav>

      <!-- Menú Mobile -->
      <div class="flex md:hidden w-12 items-center justify-end">
        <button
          @click="toggleMenu"
          class="flex cursor-pointer items-center justify-center rounded-xl h-10 w-10 bg-transparent text-[#111418] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Menú"
        >
          <MaterialIcon name="menu" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import MaterialIcon from '../common/MaterialIcon.vue'
import { navigationLinks } from '../../constants/navigation'

/**
 * Barra de navegación responsive
 * Responsabilidad: Mostrar logo, título y menú
 */
const emit = defineEmits(['toggle-menu'])

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  emit('toggle-menu', isMenuOpen.value)
}
</script>
