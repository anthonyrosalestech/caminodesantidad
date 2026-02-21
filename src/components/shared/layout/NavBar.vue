<template>
  <header class="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/90 px-4 py-4 backdrop-blur-md md:px-10 lg:px-20">
    <div class="mx-auto flex max-w-7xl items-center justify-between">
      <router-link to="/" class="flex items-center gap-3 transition-opacity hover:opacity-80">
        <div class="flex h-10 w-10 items-center justify-center">
          <img
            src="/IMG_3090.PNG"
            alt="Logo Iglesia Bíblica Camino de Santidad"
            class="h-10 w-10 object-contain"
          />
        </div>
        <h1 class="text-lg font-bold tracking-tight text-primary sm:text-xl">
          Iglesia Bíblica Camino de Santidad
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
          :aria-expanded="isMenuOpen"
          aria-label="Menú"
          @click="toggleMenu"
        >
          <MaterialIcon :name="isMenuOpen ? 'close' : 'menu'" />
        </button>
      </div>
    </div>

    <transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-if="isMenuOpen"
        class="mt-4 rounded-xl border border-primary/10 bg-white/95 p-4 shadow-lg md:hidden"
      >
        <ul class="flex flex-col gap-3">
          <li v-for="link in navigationLinks" :key="link.path">
            <router-link
              :to="link.path"
              class="block rounded-lg px-3 py-2 text-sm font-medium text-[#111418] transition-colors hover:bg-primary/10"
              @click="closeMenu"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
        <AppButton
          variant="primary"
          size="sm"
          class="mt-4 w-full"
          @click="handleJoinClick"
        >
          Únete a Nosotros
        </AppButton>
      </nav>
    </transition>
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
const emit = defineEmits(['toggle-menu', 'join-click'])

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  emit('toggle-menu', isMenuOpen.value)
}

const closeMenu = () => {
  isMenuOpen.value = false
  emit('toggle-menu', false)
}

const handleJoinClick = () => {
  closeMenu()
  emit('join-click')
}
</script>
