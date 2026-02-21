<template>
  <section class="relative flex min-h-[90vh] items-center justify-center overflow-hidden sm:min-h-[78vh] lg:min-h-[85vh]">
    <div class="absolute inset-0">
      <img
        :src="backgroundImage"
        :alt="backgroundAlt"
        class="h-full w-full object-cover"
        loading="lazy"
      />
    </div>

    <div class="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 text-center">
      <h1 class="text-4xl font-black leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
        {{ title }}
      </h1>
      <p class="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
        {{ description }}
      </p>

      <div class="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
        <AppButton
          variant="primary"
          size="lg"
          :full-width="true"
          class="px-8"
          @click="$emit('join-click')"
        >
          <span class="flex items-center gap-2">
            <MaterialIcon name="group" class-name="text-xl" />
            {{ primaryButtonText }}
          </span>
        </AppButton>

        <AppButton
          variant="secondary"
          size="lg"
          :full-width="true"
          class="px-8"
          @click="$emit('live-click')"
        >
          <span class="flex items-center gap-2">
            <MaterialIcon name="live_tv" class-name="text-xl" />
            {{ secondaryButtonText }}
          </span>
        </AppButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppButton from '../../../components/shared/ui/AppButton.vue'
import MaterialIcon from '../../../components/shared/ui/MaterialIcon.vue'

/**
 * Sección Hero con imagen de fondo y CTA
 * Responsabilidad: Mostrar mensaje principal y llamados a la acción
 */
const props = defineProps({
  title: {
    type: String,
    default: 'Bienvenidos a Casa',
  },
  description: {
    type: String,
    default: 'Un lugar para crecer en fe, esperanza y amor. Te esperamos con los brazos abiertos.',
  },
  backgroundImage: {
    type: String,
    default: '/Fondo-3.png',
  },
  backgroundAlt: {
    type: String,
    default: 'Interior de una iglesia con iluminación cálida',
  },
  primaryButtonText: {
    type: String,
    default: 'Únete a Nosotros',
  },
  secondaryButtonText: {
    type: String,
    default: 'Ver Servicios en Vivo',
  },
})

defineEmits(['join-click', 'live-click'])

</script>
