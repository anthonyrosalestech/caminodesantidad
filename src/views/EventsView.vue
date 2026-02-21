<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
    <NavBar @toggle-menu="handleMenuToggle" />
    
    <PageHero
      title="Próximos Eventos"
      subtitle="No te pierdas nuestras actividades especiales"
      icon="event"
    />

    <div class="flex-1 flex items-center justify-center p-12">
      <div class="text-center">
        <MaterialIcon name="construction" class-name="text-primary text-6xl mb-4" />
        <h2 class="text-2xl font-bold text-[#111418] mb-2">
          Vista en construcción
        </h2>
        <p class="text-gray-600">
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
import NavBar from '../components/shared/layout/NavBar.vue'
import FooterSection from '../components/shared/layout/FooterSection.vue'
import FloatingLocationButton from '../components/shared/layout/FloatingLocationButton.vue'
import PageHero from '../components/shared/ui/PageHero.vue'
import MaterialIcon from '../components/shared/ui/MaterialIcon.vue'

const router = useRouter()
const handleMenuToggle = (isOpen) => console.log('Menu toggled:', isOpen)
const handleLocationClick = () => router.push('/ubicacion')
</script>
