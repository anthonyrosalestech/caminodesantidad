<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
    <!-- Navigation -->
    <NavBar @toggle-menu="handleMenuToggle" @join-click="handleJoinClick" />

    <!-- Hero Section -->
    <HeroSection
      @join-click="handleJoinClick"
      @live-click="handleLiveClick"
    />

    <!-- Vision Section -->
    <VisionSection />

    <!-- Schedule Section -->
    <ScheduleSection />

    <!-- Courses Section -->
    <CoursesSection />

    <!-- Footer -->
    <FooterSection />

    <!-- Floating Location Button -->
    <FloatingLocationButton @click="handleLocationClick" />
  </div>
</template>

<script setup>
import NavBar from '../components/shared/layout/NavBar.vue'
import FooterSection from '../components/shared/layout/FooterSection.vue'
import FloatingLocationButton from '../components/shared/layout/FloatingLocationButton.vue'
import HeroSection from '../modules/home/components/HeroSection.vue'
import VisionSection from '../modules/home/components/VisionSection.vue'
import ScheduleSection from '../modules/home/components/ScheduleSection.vue'
import CoursesSection from '../modules/home/components/CoursesSection.vue'

/**
 * Vista principal Home
 * Responsabilidad: Componer todas las secciones de la página de inicio
 * Siguiendo el principio de composición sobre herencia
 */

const handleMenuToggle = (isOpen) => {
  console.log('Menu toggled:', isOpen)
  // Aquí se podría mostrar un sidebar o modal de menú
}

const handleJoinClick = () => {
  console.log('Join button clicked')
  // Navegar a página de registro o mostrar formulario
}

const handleLiveClick = () => {
  window.open('https://www.facebook.com/caminodesantidad.ib/live', '_blank', 'noopener,noreferrer')
}

const handleLocationClick = () => {
  console.log('Location button clicked')
  // Abrir Google Maps o mostrar dirección
  window.open('https://maps.google.com', '_blank')
}
</script>
