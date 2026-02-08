<template>
  <section class="px-4 py-8 md:py-16 bg-white dark:bg-background-dark">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-center justify-between mb-6 md:mb-8">
        <h2 class="text-[#111418] dark:text-white text-[22px] md:text-3xl font-bold leading-tight tracking-[-0.015em]">
          Cursos Recientes
        </h2>
        <a
          href="#"
          class="text-primary font-bold text-sm md:text-base hover:text-primary/80 transition-colors"
        >
          Ver todo
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CourseCard
          v-for="course in courses"
          :key="course.id"
          :course="course"
          @click="handleCourseClick"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import CourseCard from './CourseCard.vue'
import { useCourses } from '../../composables/useCourses'

/**
 * Sección de cursos recientes
 * Responsabilidad: Mostrar lista de cursos disponibles
 * Depende de useCourses (Dependency Injection)
 */
const { courses } = useCourses()

const handleCourseClick = (course) => {
  console.log('Curso seleccionado:', course)
  // Aquí se podría navegar a la página del curso o abrir un modal
}
</script>
