<template>
  <span class="material-symbols-outlined" :class="className">
    {{ name }}
  </span>
</template>

<script setup>
/**
 * Componente reutilizable para iconos de Material Symbols
 * Siguiendo principio de responsabilidad única (SRP)
 */
defineProps({
  name: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: '',
  },
})
</script>
