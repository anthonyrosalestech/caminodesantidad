<template>
  <section class="py-8 md:py-16 bg-white dark:bg-background-dark">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex flex-col items-center">
        <MaterialIcon name="auto_awesome" class-name="text-accent-gold text-4xl md:text-5xl mb-2 md:mb-4" />
        <h2 class="text-primary dark:text-blue-400 tracking-light text-[28px] md:text-4xl font-bold leading-tight px-4 text-center pb-2">
          {{ title }}
        </h2>
        <p class="text-[#111418] dark:text-gray-300 text-base md:text-lg font-normal leading-relaxed pb-3 pt-1 px-8 text-center max-w-lg md:max-w-3xl">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import MaterialIcon from '../common/MaterialIcon.vue'

/**
 * Sección de visión de la iglesia
 * Responsabilidad: Mostrar la visión y propósito
 */
defineProps({
  title: {
    type: String,
    default: 'Nuestra Visión',
  },
  description: {
    type: String,
    default: 'Buscamos ser una comunidad transformada por el Evangelio, sirviendo a nuestro prójimo y glorificando a Dios en todo lo que hacemos, impactando nuestra ciudad con el amor de Cristo.',
  },
})
</script>
