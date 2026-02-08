<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
    <NavBar @toggle-menu="handleMenuToggle" />
    
    <PageHero
      title="Contáctanos"
      subtitle="Estamos aquí para servirte"
      icon="contact_mail"
    />

    <div class="flex-1 flex items-center justify-center p-12">
      <div class="text-center">
        <MaterialIcon name="construction" class-name="text-primary text-6xl mb-4" />
        <h2 class="text-2xl font-bold text-[#111418] dark:text-white mb-2">
          Vista en construcción
        </h2>
        <p class="text-gray-600 dark:text-gray-300">
          Esta página estará disponible próximamente
        </p>
      </div>
    </div>

    <FooterSection />
    <FloatingLocationButton @click="handleLocationClick" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import NavBar from '../components/layout/NavBar.vue'
import FooterSection from '../components/layout/FooterSection.vue'
import FloatingLocationButton from '../components/layout/FloatingLocationButton.vue'
import PageHero from '../components/common/PageHero.vue'
import MaterialIcon from '../components/common/MaterialIcon.vue'

const router = useRouter()
const handleMenuToggle = (isOpen) => console.log('Menu toggled:', isOpen)
const handleLocationClick = () => router.push('/ubicacion')
</script>
