<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden items-center justify-center bg-background-light dark:bg-background-dark">
    <!-- Navigation -->
    <NavBar />

    <div class="flex-1 flex flex-col items-center justify-center px-4 py-12 text-center">
      <MaterialIcon name="error_outline" class-name="text-primary text-8xl mb-6" />
      <h1 class="text-4xl md:text-6xl font-black text-[#111418] dark:text-white mb-4">
        404
      </h1>
      <h2 class="text-2xl md:text-3xl font-bold text-[#111418] dark:text-white mb-4">
        Página no encontrada
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-8 max-w-md">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <AppButton variant="primary" @click="goHome">
        Volver al Inicio
      </AppButton>
    </div>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import NavBar from '../components/shared/layout/NavBar.vue'
import FooterSection from '../components/shared/layout/FooterSection.vue'
import MaterialIcon from '../components/shared/ui/MaterialIcon.vue'
import AppButton from '../components/shared/ui/AppButton.vue'

/**
 * Vista 404 - Página no encontrada
 */
const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>
