<template>
  <!-- Modal Overlay -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen && ministry"
        @click="handleClose"
        class="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 backdrop-blur-sm sm:items-center"
      >
        <!-- Modal Content -->
        <Transition
          enter-active-class="transition-all duration-300"
          enter-from-class="translate-y-full sm:translate-y-0 sm:scale-95 opacity-0"
          enter-to-class="translate-y-0 sm:scale-100 opacity-100"
          leave-active-class="transition-all duration-300"
          leave-from-class="translate-y-0 sm:scale-100 opacity-100"
          leave-to-class="translate-y-full sm:translate-y-0 sm:scale-95 opacity-0"
        >
          <div
            v-if="isOpen && ministry"
            @click.stop
            class="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-t-2xl bg-white shadow-2xl dark:bg-[#1c2127] sm:rounded-2xl"
          >
            <!-- Close Button -->
            <button
              @click="handleClose"
              class="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900 dark:bg-gray-900/90 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-white"
              aria-label="Cerrar"
            >
              <MaterialIcon name="close" class-name="text-2xl" />
            </button>

            <!-- Scrollable Content -->
            <div class="max-h-[90vh] overflow-y-auto">
              <!-- Header Image -->
              <div class="relative h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-800 md:h-64">
                <img
                  :src="ministry.image"
                  :alt="ministry.name"
                  class="h-full w-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                <!-- Icon Badge -->
                <div class="absolute bottom-4 left-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl dark:bg-gray-900 md:h-20 md:w-20">
                  <MaterialIcon :name="ministry.icon" class-name="text-3xl text-primary md:text-4xl" />
                </div>
              </div>

              <!-- Content -->
              <div class="p-6 md:p-8">
                <!-- Title and Age Range -->
                <div class="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <h2 class="text-2xl font-bold text-[#111418] dark:text-white md:text-3xl">
                    {{ ministry.name }}
                  </h2>
                  <span v-if="ministry.ageRange" class="inline-flex items-center gap-2 self-start rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primary/20">
                    <MaterialIcon name="groups" class-name="text-lg" />
                    {{ ministry.ageRange }}
                  </span>
                </div>

                <!-- Description -->
                <div class="mb-8">
                  <h3 class="mb-3 text-lg font-semibold text-[#111418] dark:text-white">
                    Acerca de este Ministerio
                  </h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    {{ ministry.fullDescription }}
                  </p>
                </div>

                <!-- Leader Section -->
                <div class="mb-8 rounded-lg bg-gray-50 p-6 dark:bg-gray-800/50">
                  <h3 class="mb-4 text-lg font-semibold text-[#111418] dark:text-white">
                    Líder del Ministerio
                  </h3>
                  <div class="flex items-center gap-4">
                    <div class="h-16 w-16 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                      <img
                        v-if="ministry.leader.photo"
                        :src="ministry.leader.photo"
                        :alt="ministry.leader.name"
                        class="h-full w-full object-cover"
                      />
                    </div>
                    <div class="flex-1">
                      <p class="font-semibold text-[#111418] dark:text-white">
                        {{ ministry.leader.name }}
                      </p>
                      <div v-if="ministry.contact" class="mt-2 flex flex-wrap gap-3 text-sm">
                        <a
                          v-if="ministry.contact.email"
                          :href="`mailto:${ministry.contact.email}`"
                          class="flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
                        >
                          <MaterialIcon name="email" class-name="text-base" />
                          <span>Email</span>
                        </a>
                        <a
                          v-if="ministry.contact.phone"
                          :href="`tel:${ministry.contact.phone}`"
                          class="flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
                        >
                          <MaterialIcon name="phone" class-name="text-base" />
                          <span>Llamar</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Schedule -->
                <div v-if="ministry.schedule && ministry.schedule.length > 0" class="mb-8">
                  <h3 class="mb-4 text-lg font-semibold text-[#111418] dark:text-white">
                    Horarios
                  </h3>
                  <div class="space-y-3">
                    <div
                      v-for="(schedule, index) in ministry.schedule"
                      :key="index"
                      class="flex items-start gap-3 rounded-lg border border-gray-200 p-4 dark:border-gray-700"
                    >
                      <MaterialIcon name="schedule" class-name="mt-0.5 text-xl text-primary" />
                      <div class="flex-1">
                        <p class="font-medium text-[#111418] dark:text-white">
                          {{ schedule.activity }}
                        </p>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                          {{ schedule.day }} • {{ schedule.time }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Activities -->
                <div v-if="ministry.activities && ministry.activities.length > 0" class="mb-8">
                  <h3 class="mb-4 text-lg font-semibold text-[#111418] dark:text-white">
                    Actividades
                  </h3>
                  <ul class="grid gap-3 sm:grid-cols-2">
                    <li
                      v-for="(activity, index) in ministry.activities"
                      :key="index"
                      class="flex items-start gap-2"
                    >
                      <MaterialIcon name="check_circle" class-name="mt-0.5 text-lg text-green-600 dark:text-green-400" />
                      <span class="text-sm text-gray-700 dark:text-gray-300">{{ activity }}</span>
                    </li>
                  </ul>
                </div>

                <!-- CTA Buttons -->
                <div class="flex flex-col gap-3 border-t border-gray-200 pt-6 dark:border-gray-700 sm:flex-row">
                  <AppButton
                    variant="primary"
                    size="lg"
                    full-width
                    @click="handleJoin"
                  >
                    <MaterialIcon name="person_add" class-name="mr-2 text-xl" />
                    Unirme a este Ministerio
                  </AppButton>
                  <AppButton
                    variant="secondary"
                    size="lg"
                    full-width
                    @click="handleContact"
                  >
                    <MaterialIcon name="contact_support" class-name="mr-2 text-xl" />
                    Más Información
                  </AppButton>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { watch } from 'vue'
import MaterialIcon from '../../../components/shared/ui/MaterialIcon.vue'
import AppButton from '../../../components/shared/ui/AppButton.vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  ministry: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits(['close', 'join', 'contact'])

// Lock body scroll when modal is open
watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

const handleClose = () => {
  emit('close')
}

const handleJoin = () => {
  emit('join', props.ministry)
}

const handleContact = () => {
  emit('contact', props.ministry)
}
</script>
