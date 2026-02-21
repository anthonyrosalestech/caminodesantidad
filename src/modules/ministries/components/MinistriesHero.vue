<template>
  <div class="relative w-full bg-gradient-to-br from-primary/10 via-white to-accent-gold/5 py-16 md:py-24">
    <div class="mx-auto max-w-4xl px-4 text-center">
      <!-- Icon -->
      <div class="mb-6 flex justify-center">
        <div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 md:h-20 md:w-20">
          <MaterialIcon name="diversity_3" class-name="text-4xl text-primary md:text-5xl" />
        </div>
      </div>

      <!-- Title -->
      <h1 class="mb-4 text-3xl font-bold text-[#111418] md:text-4xl lg:text-5xl">
        Nuestros Ministerios
      </h1>

      <!-- Subtitle -->
      <p class="mb-8 text-base text-gray-600 md:text-lg lg:text-xl">
        Descubre dónde puedes servir y crecer en tu fe. 
        Hay un lugar para ti en nuestra iglesia.
      </p>

      <!-- Stats -->
      <div class="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3">
        <div class="flex flex-col items-center">
          <div class="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <MaterialIcon name="groups" class-name="text-2xl text-primary" />
          </div>
          <p class="text-2xl font-bold text-[#111418] md:text-3xl">7</p>
          <p class="text-sm text-gray-600">Ministerios Activos</p>
        </div>

        <div class="flex flex-col items-center">
          <div class="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold/10">
            <MaterialIcon name="favorite" class-name="text-2xl text-accent-gold" />
          </div>
          <p class="text-2xl font-bold text-[#111418] md:text-3xl">200+</p>
          <p class="text-sm text-gray-600">Voluntarios</p>
        </div>

        <div class="col-span-2 flex flex-col items-center md:col-span-1">
          <div class="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <MaterialIcon name="check_circle" class-name="text-2xl text-green-600" />
          </div>
          <p class="text-2xl font-bold text-[#111418] md:text-3xl">Todas</p>
          <p class="text-sm text-gray-600">Las Edades</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MaterialIcon from '../../../components/shared/ui/MaterialIcon.vue'
</script>
