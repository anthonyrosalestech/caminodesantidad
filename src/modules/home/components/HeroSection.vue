<template>
  <div class="w-full">
    <div
      class="flex min-h-[520px] md:min-h-[600px] lg:min-h-[700px] flex-col gap-6 md:gap-8 bg-cover bg-center bg-no-repeat items-center justify-center p-6 md:p-12 text-center"
      :style="backgroundStyle"
    >
      <div class="flex flex-col gap-3 md:gap-4">
        <h1 class="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-[-0.033em]">
          {{ title }}
        </h1>
        <p class="text-white/90 text-base md:text-lg font-normal leading-normal max-w-[320px] md:max-w-[600px] mx-auto">
          {{ description }}
        </p>
      </div>

      <div class="flex flex-col md:flex-row gap-3 md:gap-4 w-full max-w-[280px] md:max-w-none justify-center">
        <AppButton
          variant="primary"
          :full-width="true"
          @click="$emit('join-click')"
          class="md:min-w-[200px] md:max-w-[240px]"
        >
          <span class="truncate">{{ primaryButtonText }}</span>
        </AppButton>

        <AppButton
          variant="secondary"
          :full-width="true"
          @click="$emit('live-click')"
          class="md:min-w-[200px] md:max-w-[240px]"
        >
          <span class="truncate">{{ secondaryButtonText }}</span>
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import AppButton from '../../../components/shared/ui/AppButton.vue'

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
    default: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9IFyvlrZOf98TrKQlPcNlM35qm71ey72j-2CNxziFz4EshNgW1fpHk3OM7qjeSx8aejWlcaqSpryLYsdL24VvtcauQqzTx6Ujs5GKh6Lh9x2o1WnWb6pzoAl_xHDJ4U7jryS3fMn02EOYn6_WGlpeYWK9rVTSYQZKAe2pX6wJzJBnr3OEtoTwZDxZ1uq1bAJOerI74J2EJpv33sbnyqGjd6WyZC_DL9aYgb-nFAgxGseMf4GF1uzy-8zAMbQlfgb4CxUiHGUqP2g',
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

const backgroundStyle = computed(() => ({
  backgroundImage: `linear-gradient(rgba(15, 102, 189, 0.6) 0%, rgba(16, 25, 34, 0.8) 100%), url("${props.backgroundImage}")`,
}))
</script>
