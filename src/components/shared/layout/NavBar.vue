<template>
  <header class="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/90 px-4 py-4 backdrop-blur-md md:px-10 lg:px-20">
    <div class="mx-auto flex max-w-7xl items-center justify-between">
      <router-link to="/" class="flex items-center gap-3 transition-opacity hover:opacity-80">
        <div class="text-primary">
          <MaterialIcon name="church" class-name="text-4xl" />
        </div>
        <h1 class="text-lg font-bold tracking-tight text-primary sm:text-xl">
          Iglesia Bautista
        </h1>
      </router-link>

      <nav class="hidden items-center gap-8 md:flex">
        <router-link
          v-for="link in navigationLinks"
          :key="link.path"
          :to="link.path"
          class="text-sm font-medium transition-colors hover:text-primary"
          active-class="text-primary font-bold"
        >
          {{ link.name }}
        </router-link>
      </nav>

      <div class="flex items-center gap-2">
        <AppButton
          variant="primary"
          size="sm"
          class="hidden px-6 md:inline-flex"
          @click="handleJoinClick"
        >
          Únete a Nosotros
        </AppButton>
        <button
          class="flex h-10 w-10 items-center justify-center rounded-lg text-primary transition-colors hover:bg-primary/10 md:hidden"
          aria-label="Menú"
          @click="toggleMenu"
        >
          <MaterialIcon name="menu" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import MaterialIcon from '../ui/MaterialIcon.vue'
import { navigationLinks } from '../../../constants/navigation'
import AppButton from '../ui/AppButton.vue'

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

const handleJoinClick = () => {
  emit('join-click')
}
</script>
