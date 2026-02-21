<template>
  <section class="space-y-4">
    <SectionTitle title="Contenido del Curso" size="lg" />
    
    <div v-if="course.curriculum && course.curriculum.length > 0" class="space-y-3">
      <Card
        v-for="(module, index) in course.curriculum"
        :key="index"
        padding="none"
        class="overflow-hidden"
      >
        <!-- Module Header (Clickable) -->
        <button
          @click="toggleModule(index)"
          class="flex w-full items-center justify-between bg-gray-50 p-4 text-left transition-colors hover:bg-gray-100"
        >
          <div class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <MaterialIcon name="folder" class-name="text-xl" />
            </div>
            <div>
              <h3 class="font-semibold text-[#111418]">
                {{ module.module }}
              </h3>
              <p class="text-sm text-gray-500">
                {{ module.lessons.length }} {{ module.lessons.length === 1 ? 'lección' : 'lecciones' }}
              </p>
            </div>
          </div>
          <MaterialIcon 
            :name="expandedModules[index] ? 'expand_less' : 'expand_more'"
            class-name="text-2xl text-gray-400"
          />
        </button>

        <!-- Lessons List (Expandable) -->
        <transition
          enter-active-class="transition-all duration-200 ease-out"
          enter-from-class="max-h-0 opacity-0"
          enter-to-class="max-h-screen opacity-100"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="max-h-screen opacity-100"
          leave-to-class="max-h-0 opacity-0"
        >
          <div v-show="expandedModules[index]" class="border-t border-gray-200">
            <ul class="divide-y divide-gray-100">
              <li
                v-for="(lesson, lessonIndex) in module.lessons"
                :key="lessonIndex"
                class="flex items-center justify-between p-4 transition-colors hover:bg-gray-50"
              >
                <div class="flex items-center gap-3">
                  <MaterialIcon 
                    :name="getLessonIcon(lesson.type)"
                    class-name="text-xl text-gray-400"
                  />
                  <span class="text-sm text-gray-700">
                    {{ lesson.title }}
                  </span>
                </div>
                <span class="text-sm text-gray-500">
                  {{ lesson.duration }}
                </span>
              </li>
            </ul>
          </div>
        </transition>
      </Card>
    </div>

    <!-- Empty State -->
    <Card v-else padding="lg">
      <div class="flex flex-col items-center justify-center py-8 text-center">
        <MaterialIcon name="folder_off" class-name="mb-3 text-5xl text-gray-300" />
        <p class="text-gray-500">
          El contenido del curso estará disponible próximamente
        </p>
      </div>
    </Card>

    <!-- Total Duration -->
    <div v-if="totalDuration" class="flex items-center justify-end gap-2 text-sm text-gray-600">
      <MaterialIcon name="schedule" class-name="text-lg" />
      <span>Duración total: {{ totalDuration }}</span>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import SectionTitle from '../../../components/shared/ui/SectionTitle.vue'
import Card from '../../../components/shared/ui/Card.vue'
import MaterialIcon from '../../../components/shared/ui/MaterialIcon.vue'

const props = defineProps({
  course: {
    type: Object,
    required: true,
  },
})

const expandedModules = ref({})

const toggleModule = (index) => {
  expandedModules.value[index] = !expandedModules.value[index]
}

const getLessonIcon = (type) => {
  const icons = {
    video: 'play_circle',
    reading: 'article',
    quiz: 'quiz',
    assignment: 'assignment',
  }
  return icons[type] || 'circle'
}

const totalDuration = computed(() => {
  if (!props.course.curriculum) return null
  
  let totalMinutes = 0
  props.course.curriculum.forEach(module => {
    module.lessons.forEach(lesson => {
      const match = lesson.duration.match(/(\d+)\s*min/)
      if (match) {
        totalMinutes += parseInt(match[1])
      }
    })
  })
  
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  
  if (hours > 0) {
    return `${hours}h ${minutes}min`
  }
  return `${minutes} minutos`
})
</script>
