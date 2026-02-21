<template>
  <div class="space-y-6">
    <!-- Courses Grid -->
    <div 
      v-if="paginatedCourses.length > 0"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <CourseCard 
        v-for="course in paginatedCourses" 
        :key="course.id"
        :course="course"
      />
    </div>

    <!-- Empty State -->
    <div 
      v-else
      class="flex flex-col items-center justify-center py-16 text-center"
    >
      <MaterialIcon name="search_off" class-name="mb-4 text-6xl text-gray-300" />
      <h3 class="mb-2 text-xl font-semibold text-gray-700">
        No se encontraron cursos
      </h3>
      <p class="text-gray-500">
        Intenta ajustar tus filtros o búsqueda
      </p>
    </div>

    <!-- Pagination -->
    <div 
      v-if="totalPages > 1"
      class="flex items-center justify-center gap-2 pt-4"
    >
      <!-- Previous Button -->
      <button
        @click="goToPage(currentPage - 1)"
        :disabled="currentPage === 1"
        :class="[
          'flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-all',
          currentPage === 1
            ? 'cursor-not-allowed bg-gray-100 text-gray-400'
            : 'bg-white text-gray-700 shadow-sm hover:bg-gray-50'
        ]"
      >
        <MaterialIcon name="chevron_left" class-name="text-xl" />
        <span class="hidden sm:inline">Anterior</span>
      </button>

      <!-- Page Numbers -->
      <div class="flex gap-1">
        <button
          v-for="page in visiblePages"
          :key="page"
          @click="goToPage(page)"
          :class="[
            'h-10 w-10 rounded-lg text-sm font-medium transition-all',
            currentPage === page
              ? 'bg-primary text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          ]"
        >
          {{ page }}
        </button>
      </div>

      <!-- Next Button -->
      <button
        @click="goToPage(currentPage + 1)"
        :disabled="currentPage === totalPages"
        :class="[
          'flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-all',
          currentPage === totalPages
            ? 'cursor-not-allowed bg-gray-100 text-gray-400'
            : 'bg-white text-gray-700 shadow-sm hover:bg-gray-50'
        ]"
      >
        <span class="hidden sm:inline">Siguiente</span>
        <MaterialIcon name="chevron_right" class-name="text-xl" />
      </button>
    </div>

    <!-- Results Info -->
    <p class="text-center text-sm text-gray-500">
      Mostrando {{ startIndex + 1 }}-{{ Math.min(endIndex, courses.length) }} de {{ courses.length }} cursos
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import CourseCard from './CourseCard.vue'
import MaterialIcon from '../../../components/shared/ui/MaterialIcon.vue'

const props = defineProps({
  courses: {
    type: Array,
    required: true,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  itemsPerPage: {
    type: Number,
    default: 9,
  },
})

const emit = defineEmits(['page-change'])

// Pagination calculations
const totalPages = computed(() => {
  return Math.ceil(props.courses.length / props.itemsPerPage)
})

const startIndex = computed(() => {
  return (props.currentPage - 1) * props.itemsPerPage
})

const endIndex = computed(() => {
  return startIndex.value + props.itemsPerPage
})

const paginatedCourses = computed(() => {
  return props.courses.slice(startIndex.value, endIndex.value)
})

// Visible page numbers (max 5)
const visiblePages = computed(() => {
  const pages = []
  const maxVisible = 5
  let start = Math.max(1, props.currentPage - Math.floor(maxVisible / 2))
  let end = Math.min(totalPages.value, start + maxVisible - 1)
  
  if (end - start < maxVisible - 1) {
    start = Math.max(1, end - maxVisible + 1)
  }
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  return pages
})

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    emit('page-change', page)
    // Scroll to top of grid
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>
