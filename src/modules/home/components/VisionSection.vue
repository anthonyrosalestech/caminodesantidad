<template>
  <section class="bg-[#f5efeb] px-4 py-16 sm:py-20">
    <div class="mx-auto max-w-4xl text-center">
      <div class="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
        <MaterialIcon name="auto_awesome" class-name="text-3xl" />
      </div>
      <h2 class="text-3xl font-black tracking-tight text-primary sm:text-4xl">
        {{ title }}
      </h2>
      <p class="mt-5 text-base leading-loose text-slate-700 sm:text-lg">
        {{ description }}
      </p>
    </div>
  </section>
</template>

<script setup>
import MaterialIcon from '../../../components/shared/ui/MaterialIcon.vue'

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
