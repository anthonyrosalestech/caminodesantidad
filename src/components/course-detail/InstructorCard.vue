<template>
  <section v-if="instructor" class="space-y-4">
    <SectionTitle title="Instructor" size="lg" />
    
    <Card padding="lg">
      <div class="flex flex-col gap-6 md:flex-row md:items-start">
        <!-- Instructor Photo -->
        <div class="flex-shrink-0">
          <div class="relative h-32 w-32 overflow-hidden rounded-full ring-4 ring-primary/20">
            <img
              :src="instructor.image"
              :alt="instructor.name"
              class="h-full w-full object-cover"
            />
          </div>
        </div>

        <!-- Instructor Info -->
        <div class="flex-1 space-y-4">
          <!-- Name and Role -->
          <div>
            <h3 class="text-2xl font-bold text-[#111418] dark:text-white">
              {{ instructor.name }}
            </h3>
            <p class="text-lg text-primary">
              {{ instructor.role }}
            </p>
          </div>

          <!-- Bio -->
          <p class="text-gray-700 dark:text-gray-300">
            {{ instructor.bio || instructor.description }}
          </p>

          <!-- Specialties -->
          <div v-if="instructor.specialties && instructor.specialties.length > 0">
            <p class="mb-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
              Especialidades:
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(specialty, index) in instructor.specialties"
                :key="index"
                class="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary dark:bg-primary/20"
              >
                {{ specialty }}
              </span>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="flex flex-wrap gap-4 border-t border-gray-200 pt-4 dark:border-gray-700">
            <a
              v-if="instructor.email"
              :href="`mailto:${instructor.email}`"
              class="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            >
              <MaterialIcon name="email" class-name="text-lg" />
              <span>{{ instructor.email }}</span>
            </a>
            <a
              v-if="instructor.phone"
              :href="`tel:${instructor.phone}`"
              class="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            >
              <MaterialIcon name="phone" class-name="text-lg" />
              <span>{{ instructor.phone }}</span>
            </a>
          </div>
        </div>
      </div>
    </Card>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import SectionTitle from '../common/SectionTitle.vue'
import Card from '../common/Card.vue'
import MaterialIcon from '../common/MaterialIcon.vue'
import { useTeam } from '../../composables/useTeam'

const props = defineProps({
  course: {
    type: Object,
    required: true,
  },
})

const { getTeamMemberById } = useTeam()

const instructor = computed(() => {
  if (props.course.instructorId) {
    return getTeamMemberById(props.course.instructorId)
  }
  return null
})
</script>
