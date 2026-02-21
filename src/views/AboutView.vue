<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
    <!-- Navigation -->
    <NavBar @toggle-menu="handleMenuToggle" />

    <!-- Hero Section -->
    <AboutHero />

    <!-- Mission & Vision -->
    <MissionVisionCards />

    <!-- History Timeline -->
    <HistorySection />

    <!-- Values -->
    <ValuesGrid />

    <!-- Pastoral Team -->
    <PastoralTeam />

    <!-- Faith Statement -->
    <FaithStatement />

    <!-- Footer -->
    <FooterSection />

    <!-- Floating Location Button -->
    <FloatingLocationButton @click="handleLocationClick" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import NavBar from '../components/shared/layout/NavBar.vue'
import FooterSection from '../components/shared/layout/FooterSection.vue'
import FloatingLocationButton from '../components/shared/layout/FloatingLocationButton.vue'
import AboutHero from '../modules/about/components/AboutHero.vue'
import MissionVisionCards from '../modules/about/components/MissionVisionCards.vue'
import HistorySection from '../modules/about/components/HistorySection.vue'
import ValuesGrid from '../modules/about/components/ValuesGrid.vue'
import PastoralTeam from '../modules/about/components/PastoralTeam.vue'
import FaithStatement from '../modules/about/components/FaithStatement.vue'

/**
 * Vista Nosotros/About
 * Responsabilidad: Componer todas las secciones de "Quiénes Somos"
 * Muestra historia, misión, visión, valores, equipo y declaración de fe
 */

const router = useRouter()

const handleMenuToggle = (isOpen) => {
  console.log('Menu toggled:', isOpen)
  // Aquí se podría mostrar un sidebar o modal de menú mobile
}

const handleLocationClick = () => {
  router.push('/ubicacion')
}
</script>
