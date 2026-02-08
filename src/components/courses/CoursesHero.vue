<template>
  <div class="relative flex w-full flex-col bg-gradient-to-br from-primary/5 via-white to-accent-gold/5 dark:from-primary/10 dark:via-[#111418] dark:to-accent-gold/10">
    <!-- Hero Content -->
    <div class="relative mx-auto max-w-7xl px-4 py-12 md:py-16 lg:py-20">
      <div class="flex flex-col items-center text-center">
        <!-- Icon -->
        <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg md:h-20 md:w-20">
          <MaterialIcon name="school" class-name="text-4xl md:text-5xl" />
        </div>

        <!-- Title -->
        <h1 class="mb-4 text-3xl font-bold text-[#111418] dark:text-white md:text-4xl lg:text-5xl">
          Cursos Bíblicos
        </h1>

        <!-- Subtitle -->
        <p class="mb-8 max-w-2xl text-base text-gray-600 dark:text-gray-300 md:text-lg">
          Explora nuestros cursos y fortalece tu fe. Encuentra el curso perfecto para tu crecimiento espiritual.
        </p>

        <!-- Search Bar -->
        <div class="relative w-full max-w-2xl">
          <div class="relative flex items-center">
            <MaterialIcon 
              name="search" 
              class-name="absolute left-4 text-2xl text-gray-400" 
            />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Buscar cursos por título, descripción o instructor..."
              class="w-full rounded-full border-2 border-gray-200 bg-white py-3 pl-12 pr-4 text-[#111418] shadow-md transition-all duration-200 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-[#1c2127] dark:text-white dark:placeholder:text-gray-500 dark:focus:border-primary"
              @input="handleSearch"
            />
            <button
              v-if="searchQuery"
              @click="clearSearch"
              class="absolute right-4 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              <MaterialIcon name="close" class-name="text-sm" />
            </button>
          </div>
          
          <!-- Search Results Count -->
          <p v-if="searchQuery" class="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {{ resultsCount }} {{ resultsCount === 1 ? 'curso encontrado' : 'cursos encontrados' }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MaterialIcon from '../common/MaterialIcon.vue'

const props = defineProps({
  resultsCount: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['search', 'clear'])

const searchQuery = ref('')

const handleSearch = () => {
  emit('search', searchQuery.value)
}

const clearSearch = () => {
  searchQuery.value = ''
  emit('clear')
}
</script>
