<template>
  <div class="relative w-full bg-gradient-to-br from-primary/10 via-white to-primary/5 py-8 md:py-12">
    <div class="mx-auto max-w-7xl px-4">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <!-- Left: Course Info -->
        <div class="flex-1">
          <!-- Category Badge -->
          <div class="mb-4 flex items-center gap-2">
            <span class="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <MaterialIcon :name="categoryIcon" class-name="text-lg" />
              {{ categoryName }}
            </span>
            <span :class="[
              'inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium',
              levelColor
            ]">
              <MaterialIcon name="signal_cellular_alt" class-name="text-lg" />
              {{ levelName }}
            </span>
          </div>

          <!-- Title -->
          <h1 class="mb-4 text-3xl font-bold text-[#111418] md:text-4xl lg:text-5xl">
            {{ course.title }}
          </h1>

          <!-- Short Description -->
          <p class="mb-6 text-lg text-gray-600">
            {{ course.description }}
          </p>

          <!-- Meta Information -->
          <div class="flex flex-wrap items-center gap-4 text-gray-600">
            <div class="flex items-center gap-2">
              <MaterialIcon name="person" class-name="text-xl" />
              <span class="text-sm">{{ course.instructor }}</span>
            </div>
            <div class="flex items-center gap-2">
              <MaterialIcon name="schedule" class-name="text-xl" />
              <span class="text-sm">{{ course.duration }}</span>
            </div>
            <div class="flex items-center gap-2">
              <MaterialIcon name="video_library" class-name="text-xl" />
              <span class="text-sm">{{ totalLessons }} lecciones</span>
            </div>
          </div>
        </div>

        <!-- Right: CTA Card -->
        <div class="lg:w-80">
          <Card padding="lg" class="sticky top-4 shadow-xl">
            <div class="space-y-4">
              <!-- Price/Free Badge -->
              <div class="text-center">
                <div class="mb-2 flex items-center justify-center gap-2">
                  <MaterialIcon name="check_circle" class-name="text-2xl text-green-600" />
                  <span class="text-2xl font-bold text-green-600">Gratis</span>
                </div>
                <p class="text-sm text-gray-500">
                  Para miembros de la iglesia
                </p>
              </div>

              <!-- Enroll Button -->
              <AppButton 
                variant="primary" 
                size="lg"
                full-width
                @click="$emit('enroll')"
              >
                <MaterialIcon name="edit_note" class-name="mr-2 text-xl" />
                Inscribirse Ahora
              </AppButton>

              <!-- Contact Button -->
              <AppButton 
                variant="secondary"
                size="md"
                full-width
                @click="$emit('contact')"
              >
                <MaterialIcon name="contact_support" class-name="mr-2 text-xl" />
                ¿Tienes preguntas?
              </AppButton>

              <!-- Course Includes -->
              <div class="border-t border-gray-200 pt-4">
                <p class="mb-3 font-semibold text-[#111418]">
                  Este curso incluye:
                </p>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-start gap-2">
                    <MaterialIcon name="check" class-name="mt-0.5 text-lg text-green-600" />
                    <span>{{ totalLessons }} lecciones en video</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <MaterialIcon name="check" class-name="mt-0.5 text-lg text-green-600" />
                    <span>Material descargable</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <MaterialIcon name="check" class-name="mt-0.5 text-lg text-green-600" />
                    <span>Acceso de por vida</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <MaterialIcon name="check" class-name="mt-0.5 text-lg text-green-600" />
                    <span>Certificado de finalización</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import MaterialIcon from '../../../components/shared/ui/MaterialIcon.vue'
import Card from '../../../components/shared/ui/Card.vue'
import AppButton from '../../../components/shared/ui/AppButton.vue'

const props = defineProps({
  course: {
    type: Object,
    required: true,
  },
})

defineEmits(['enroll', 'contact'])

const categoryIcons = {
  biblical: 'menu_book',
  'spiritual-life': 'self_improvement',
  theology: 'school',
  family: 'family_restroom',
  leadership: 'groups',
  evangelism: 'campaign',
}

const categoryNames = {
  biblical: 'Estudios Bíblicos',
  'spiritual-life': 'Vida Espiritual',
  theology: 'Teología',
  family: 'Familia',
  leadership: 'Liderazgo',
  evangelism: 'Evangelismo',
}

const levelNames = {
  beginner: 'Principiante',
  intermediate: 'Intermedio',
  advanced: 'Avanzado',
}

const levelColors = {
  beginner: 'bg-green-100 text-green-700',
  intermediate: 'bg-yellow-100 text-yellow-700',
  advanced: 'bg-red-100 text-red-700',
}

const categoryIcon = computed(() => categoryIcons[props.course.category] || 'school')
const categoryName = computed(() => categoryNames[props.course.category] || props.course.category)
const levelName = computed(() => levelNames[props.course.level] || props.course.level)
const levelColor = computed(() => levelColors[props.course.level] || levelColors.beginner)

const totalLessons = computed(() => {
  if (!props.course.curriculum) return 0
  return props.course.curriculum.reduce((total, module) => {
    return total + (module.lessons?.length || 0)
  }, 0)
})
</script>
