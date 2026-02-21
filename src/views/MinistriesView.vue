<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
    <NavBar @toggle-menu="handleMenuToggle" />
    
    <!-- Hero Section -->
    <MinistriesHero />

    <!-- Main Content -->
    <div class="mx-auto w-full max-w-7xl flex-1 px-4 py-12 md:py-16">
      <!-- Section Title -->
      <div class="mb-12 text-center">
        <SectionTitle title="Explora Nuestros Ministerios" size="lg" />
        <p class="mt-4 text-gray-600 dark:text-gray-300">
          Encuentra el ministerio que se alinea con tus dones y pasiones
        </p>
      </div>

      <!-- Ministries Grid -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <MinistryCard
          v-for="ministry in ministries"
          :key="ministry.id"
          :ministry="ministry"
          @view-details="handleViewDetails"
        />
      </div>
    </div>

    <!-- Join Ministry Banner -->
    <JoinMinistryBanner
      @join="handleJoinMinistry"
      @contact="handleContact"
    />

    <!-- Ministry Detail Modal -->
    <MinistryDetail
      :is-open="isModalOpen"
      :ministry="selectedMinistry"
      @close="closeModal"
      @join="handleJoinMinistry"
      @contact="handleContactMinistry"
    />

    <FooterSection />
    <FloatingLocationButton @click="handleLocationClick" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import NavBar from '../components/shared/layout/NavBar.vue'
import FooterSection from '../components/shared/layout/FooterSection.vue'
import FloatingLocationButton from '../components/shared/layout/FloatingLocationButton.vue'
import SectionTitle from '../components/shared/ui/SectionTitle.vue'
import MinistriesHero from '../modules/ministries/components/MinistriesHero.vue'
import MinistryCard from '../modules/ministries/components/MinistryCard.vue'
import MinistryDetail from '../modules/ministries/components/MinistryDetail.vue'
import JoinMinistryBanner from '../modules/ministries/components/JoinMinistryBanner.vue'
import { useMinistries } from '../composables/useMinistries'

const router = useRouter()
const { ministries } = useMinistries()

const isModalOpen = ref(false)
const selectedMinistry = ref(null)

const handleMenuToggle = (isOpen) => console.log('Menu toggled:', isOpen)
const handleLocationClick = () => router.push('/ubicacion')

const handleViewDetails = (ministry) => {
  selectedMinistry.value = ministry
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  // Delay clearing selected ministry to allow exit animation
  setTimeout(() => {
    selectedMinistry.value = null
  }, 300)
}

const handleJoinMinistry = (ministry) => {
  // In a real app, this could open a registration form or redirect to contact
  console.log('Join ministry:', ministry?.name || 'general')
  router.push('/contacto')
}

const handleContact = () => {
  router.push('/contacto')
}

const handleContactMinistry = (ministry) => {
  // In a real app, could pre-fill contact form with ministry info
  console.log('Contact ministry:', ministry.name)
  router.push('/contacto')
}
</script>
