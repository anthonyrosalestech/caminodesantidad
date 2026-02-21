<template>
  <div class="w-full" :class="backgroundClass">
    <div class="max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
      <div v-if="icon" class="flex justify-center mb-4">
        <MaterialIcon :name="icon" class-name="text-primary text-5xl md:text-6xl" />
      </div>
      
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-[#111418] dark:text-white leading-tight mb-4">
        {{ title }}
      </h1>
      
      <p v-if="subtitle" class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script setup>
import MaterialIcon from './MaterialIcon.vue'

/**
 * Hero reutilizable para páginas internas
 * Responsabilidad: Título y subtítulo de página
 */
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  backgroundClass: {
    type: String,
    default: 'bg-background-light dark:bg-background-dark',
  },
})
</script>
