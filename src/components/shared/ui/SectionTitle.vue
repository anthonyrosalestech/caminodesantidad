<template>
  <h2 
    class="text-[#111418] font-bold leading-tight tracking-[-0.015em]"
    :class="sizeClass"
  >
    <slot>{{ title }}</slot>
  </h2>
</template>

<script setup>
import { computed } from 'vue'

/**
 * Título de sección reutilizable
 * Responsabilidad: Títulos consistentes en todas las secciones
 */
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'lg',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value),
  },
})

const sizeClass = computed(() => {
  const sizes = {
    sm: 'text-xl md:text-2xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-[22px] md:text-3xl',
    xl: 'text-3xl md:text-4xl',
  }
  return sizes[props.size]
})
</script>
