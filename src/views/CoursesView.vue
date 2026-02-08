<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
    <NavBar @toggle-menu="handleMenuToggle" />
    
    <!-- Hero with Search -->
    <CoursesHero 
      :results-count="filteredCourses.length"
      @search="handleSearch"
      @clear="clearSearch"
    />

    <!-- Main Content -->
    <div class="mx-auto w-full max-w-7xl flex-1 px-4 py-8 md:py-12">
      <!-- Featured Courses Section (only show when no filters active) -->
      <FeaturedCourses 
        v-if="!hasActiveFilters"
        @view-all="scrollToAllCourses"
        class="mb-12"
      />

      <!-- All Courses Section -->
      <div id="all-courses" class="space-y-6">
        <!-- Section Title -->
        <div class="text-center" :class="{ 'mt-12': !hasActiveFilters }">
          <SectionTitle 
            :title="hasActiveFilters ? 'Resultados de Búsqueda' : 'Todos los Cursos'"
            size="lg" 
          />
          <p class="mt-2 text-gray-600 dark:text-gray-300">
            {{ filteredCourses.length }} {{ filteredCourses.length === 1 ? 'curso disponible' : 'cursos disponibles' }}
          </p>
        </div>

        <!-- Category Tabs -->
        <CourseCategories 
          v-model="selectedCategory"
          :course-counts="courseCounts"
        />

        <!-- Filters -->
        <CourseFilters 
          v-model="filters"
          @clear="clearFilters"
        />

        <!-- Courses Grid with Pagination -->
        <CourseGrid 
          :courses="filteredCourses"
          :current-page="currentPage"
          :items-per-page="itemsPerPage"
          @page-change="handlePageChange"
        />
      </div>
    </div>

    <!-- Enrollment CTA Banner (Full Width) -->
    <EnrollmentBanner 
      @enroll="handleEnroll"
      @contact="handleContact"
      class="mt-12"
    />

    <FooterSection />
    <FloatingLocationButton @click="handleLocationClick" />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import NavBar from '../components/layout/NavBar.vue'
import FooterSection from '../components/layout/FooterSection.vue'
import FloatingLocationButton from '../components/layout/FloatingLocationButton.vue'
import SectionTitle from '../components/common/SectionTitle.vue'
import CoursesHero from '../components/courses/CoursesHero.vue'
import CourseCategories from '../components/courses/CourseCategories.vue'
import CourseFilters from '../components/courses/CourseFilters.vue'
import CourseGrid from '../components/courses/CourseGrid.vue'
import FeaturedCourses from '../components/courses/FeaturedCourses.vue'
import EnrollmentBanner from '../components/courses/EnrollmentBanner.vue'
import { useCourses } from '../composables/useCourses'
import { useCategories } from '../composables/useCategories'

const router = useRouter()

// Composables
const { courses, filterCourses } = useCourses()
const { countCoursesByCategory } = useCategories()

// State
const searchQuery = ref('')
const selectedCategory = ref('all')
const filters = ref({
  category: 'all',
  level: 'all',
  duration: 'all',
})
const currentPage = ref(1)
const itemsPerPage = 9

// Watch category selection and update filters
watch(selectedCategory, (newCategory) => {
  filters.value.category = newCategory
  currentPage.value = 1 // Reset to first page
})

// Watch filters and reset to first page
watch(filters, () => {
  currentPage.value = 1
}, { deep: true })

// Computed
const filteredCourses = computed(() => {
  return filterCourses({
    searchTerm: searchQuery.value,
    category: filters.value.category,
    level: filters.value.level,
    duration: filters.value.duration,
  })
})

const courseCounts = computed(() => {
  return countCoursesByCategory(courses.value)
})

const hasActiveFilters = computed(() => {
  return searchQuery.value !== '' ||
         filters.value.category !== 'all' ||
         filters.value.level !== 'all' ||
         filters.value.duration !== 'all'
})

// Methods
const handleMenuToggle = (isOpen) => console.log('Menu toggled:', isOpen)

const handleLocationClick = () => router.push('/ubicacion')

const handleSearch = (query) => {
  searchQuery.value = query
  currentPage.value = 1
}

const clearSearch = () => {
  searchQuery.value = ''
  currentPage.value = 1
}

const clearFilters = () => {
  filters.value = {
    category: 'all',
    level: 'all',
    duration: 'all',
  }
  selectedCategory.value = 'all'
  currentPage.value = 1
}

const handlePageChange = (page) => {
  currentPage.value = page
}

const scrollToAllCourses = () => {
  const element = document.getElementById('all-courses')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const handleEnroll = () => {
  // In a real app, this would open an enrollment form or redirect
  router.push('/contacto')
}

const handleContact = () => {
  router.push('/contacto')
}
</script>
