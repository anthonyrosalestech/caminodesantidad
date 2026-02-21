<template>
  <section class="w-full bg-gradient-to-br from-primary to-primary/80 py-16 md:py-20">
    <div class="mx-auto max-w-5xl px-4">
      <div class="text-center">
        <!-- Icon -->
        <div class="mb-6 flex justify-center">
          <div class="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm md:h-20 md:w-20">
            <MaterialIcon name="volunteer_activism" class-name="text-4xl text-white md:text-5xl" />
          </div>
        </div>

        <!-- Title -->
        <h2 class="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          ¿Listo para hacer la diferencia?
        </h2>

        <!-- Description -->
        <p class="mb-8 text-base text-white/90 md:text-lg">
          Únete a uno de nuestros ministerios y descubre el gozo de servir. 
          Cada persona tiene dones únicos que Dios quiere usar para Su gloria.
        </p>

        <!-- Benefits Grid -->
        <div class="mb-10 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
          <div class="flex items-start gap-3 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
            <MaterialIcon name="group_add" class-name="mt-0.5 text-2xl text-white" />
            <div>
              <h3 class="mb-1 font-semibold text-white">Comunidad</h3>
              <p class="text-sm text-white/80">
                Construye relaciones significativas con otros creyentes
              </p>
            </div>
          </div>

          <div class="flex items-start gap-3 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
            <MaterialIcon name="trending_up" class-name="mt-0.5 text-2xl text-white" />
            <div>
              <h3 class="mb-1 font-semibold text-white">Crecimiento</h3>
              <p class="text-sm text-white/80">
                Desarrolla tus dones y habilidades espirituales
              </p>
            </div>
          </div>

          <div class="flex items-start gap-3 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
            <MaterialIcon name="auto_awesome" class-name="mt-0.5 text-2xl text-white" />
            <div>
              <h3 class="mb-1 font-semibold text-white">Propósito</h3>
              <p class="text-sm text-white/80">
                Encuentra tu lugar en el plan de Dios
              </p>
            </div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <AppButton
            variant="primary"
            size="lg"
            class="bg-white text-primary hover:bg-gray-50"
            @click="$emit('join')"
          >
            <MaterialIcon name="person_add" class-name="mr-2 text-xl" />
            Quiero Participar
          </AppButton>

          <AppButton
            variant="ghost"
            size="lg"
            class="border-white text-white hover:bg-white/10"
            @click="$emit('contact')"
          >
            <MaterialIcon name="contact_support" class-name="mr-2 text-xl" />
            Hablar con Alguien
          </AppButton>
        </div>

        <!-- Additional Info -->
        <p class="mt-8 text-sm text-white/70">
          No importa tu edad, experiencia o habilidades. Hay un lugar para ti en nuestros ministerios.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import MaterialIcon from '../../../components/shared/ui/MaterialIcon.vue'
import AppButton from '../../../components/shared/ui/AppButton.vue'

defineEmits(['join', 'contact'])
</script>
