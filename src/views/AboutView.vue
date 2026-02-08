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
import NavBar from '../components/layout/NavBar.vue'
import FooterSection from '../components/layout/FooterSection.vue'
import FloatingLocationButton from '../components/layout/FloatingLocationButton.vue'
import AboutHero from '../components/about/AboutHero.vue'
import MissionVisionCards from '../components/about/MissionVisionCards.vue'
import HistorySection from '../components/about/HistorySection.vue'
import ValuesGrid from '../components/about/ValuesGrid.vue'
import PastoralTeam from '../components/about/PastoralTeam.vue'
import FaithStatement from '../components/about/FaithStatement.vue'

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
