<template>
  <section class="w-full bg-gradient-to-br from-accent-gold/5 to-white py-12 md:py-16">
    <div class="mx-auto max-w-7xl px-4">
      <!-- Section Header -->
      <div class="mb-8 text-center md:mb-12">
        <div class="mb-4 flex justify-center">
          <div class="flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold/20">
            <MaterialIcon name="stars" class-name="text-2xl text-accent-gold" />
          </div>
        </div>
        <SectionTitle title="Cursos Destacados" size="lg" />
        <p class="mt-4 text-gray-600">
          Los cursos más populares para tu crecimiento espiritual
        </p>
      </div>

      <!-- Featured Courses Grid -->
      <div 
        v-if="featuredCourses.length > 0"
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <CourseCard 
          v-for="course in featuredCourses" 
          :key="course.id"
          :course="course"
        />
      </div>

      <!-- Empty State -->
      <div 
        v-else
        class="flex flex-col items-center justify-center py-12 text-center"
      >
        <MaterialIcon name="school" class-name="mb-4 text-6xl text-gray-300" />
        <p class="text-gray-500">
          No hay cursos destacados disponibles en este momento
        </p>
      </div>

      <!-- View All Button -->
      <div class="mt-8 flex justify-center md:mt-12">
        <AppButton 
          variant="secondary" 
          @click="$emit('view-all')"
        >
          <MaterialIcon name="apps" class-name="mr-2 text-xl" />
          Ver todos los cursos
        </AppButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import CourseCard from './CourseCard.vue'
import MaterialIcon from '../../../components/shared/ui/MaterialIcon.vue'
import SectionTitle from '../../../components/shared/ui/SectionTitle.vue'
import AppButton from '../../../components/shared/ui/AppButton.vue'
import { useCourses } from '../../../composables/useCourses'

defineEmits(['view-all'])

const { featuredCourses } = useCourses()
</script>
