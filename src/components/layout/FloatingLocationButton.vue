<template>
  <button
    class="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent-gold text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-200 z-40"
    @click="handleClick"
    aria-label="Ver ubicación"
  >
    <MaterialIcon name="location_on" />
  </button>
</template>

<script setup>
import MaterialIcon from '../common/MaterialIcon.vue'

/**
 * Botón flotante para ubicación
 * Responsabilidad única: Abrir mapa de ubicación
 */
const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click')
  // Aquí se podría abrir Google Maps o un modal con la dirección
  console.log('Abrir ubicación')
}
</script>
