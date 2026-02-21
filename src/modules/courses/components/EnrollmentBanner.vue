<template>
  <section class="w-full bg-gradient-to-r from-primary to-accent-gold py-12 md:py-20">
    <div class="mx-auto max-w-4xl px-0 text-center">
      <!-- Icon -->
      <div class="mb-6 flex justify-center">
        <div class="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm md:h-20 md:w-20">
          <MaterialIcon name="school" class-name="text-4xl text-white md:text-5xl" />
        </div>
      </div>

      <!-- Title -->
      <h2 class="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
        ¿Listo para comenzar tu aprendizaje?
      </h2>

      <!-- Description -->
      <p class="mb-8 text-base text-white/90 md:text-lg">
        Inscríbete en nuestros cursos bíblicos y fortalece tu fe. 
        Aprende a tu propio ritmo con el apoyo de nuestra comunidad.
      </p>

      <!-- Benefits -->
      <div class="mb-8 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
        <div class="flex items-start gap-3 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
          <MaterialIcon name="check_circle" class-name="mt-0.5 text-2xl text-white" />
          <div>
            <h3 class="mb-1 font-semibold text-white">Contenido de Calidad</h3>
            <p class="text-sm text-white/80">
              Material revisado por nuestros pastores
            </p>
          </div>
        </div>

        <div class="flex items-start gap-3 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
          <MaterialIcon name="schedule" class-name="mt-0.5 text-2xl text-white" />
          <div>
            <h3 class="mb-1 font-semibold text-white">A tu Ritmo</h3>
            <p class="text-sm text-white/80">
              Estudia cuando y donde quieras
            </p>
          </div>
        </div>

        <div class="flex items-start gap-3 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
          <MaterialIcon name="groups" class-name="mt-0.5 text-2xl text-white" />
          <div>
            <h3 class="mb-1 font-semibold text-white">Comunidad</h3>
            <p class="text-sm text-white/80">
              Aprende junto a otros creyentes
            </p>
          </div>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <AppButton 
          variant="primary"
          class="bg-white text-primary hover:bg-gray-50"
          @click="$emit('enroll')"
        >
          <MaterialIcon name="edit_note" class-name="mr-2 text-xl" />
          Comenzar ahora
        </AppButton>

        <AppButton 
          variant="ghost"
          class="border-white text-white hover:bg-white/10"
          @click="$emit('contact')"
        >
          <MaterialIcon name="contact_support" class-name="mr-2 text-xl" />
          ¿Tienes preguntas?
        </AppButton>
      </div>

      <!-- Additional Info -->
      <p class="mt-6 text-sm text-white/70">
        Todos nuestros cursos son gratuitos y están disponibles para miembros de la iglesia.
      </p>
    </div>
  </section>
</template>

<script setup>
import MaterialIcon from '../../../components/shared/ui/MaterialIcon.vue'
import AppButton from '../../../components/shared/ui/AppButton.vue'

defineEmits(['enroll', 'contact'])
</script>
