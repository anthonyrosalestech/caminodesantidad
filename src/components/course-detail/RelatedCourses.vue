<template>
  <section v-if="relatedCourses.length > 0" class="space-y-4">
    <div class="flex items-center justify-between">
      <SectionTitle title="Cursos Relacionados" size="lg" />
      <router-link
        to="/cursos"
        class="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
      >
        Ver todos
        <MaterialIcon name="arrow_forward" class-name="text-lg" />
      </router-link>
    </div>
    
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <CourseCard
        v-for="course in relatedCourses"
        :key="course.id"
        :course="course"
      />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import SectionTitle from '../common/SectionTitle.vue'
import CourseCard from '../home/CourseCard.vue'
import MaterialIcon from '../common/MaterialIcon.vue'
import { useCourses } from '../../composables/useCourses'

const props = defineProps({
  currentCourse: {
    type: Object,
    required: true,
  },
  maxResults: {
    type: Number,
    default: 3,
  },
})

const { courses } = useCourses()

const relatedCourses = computed(() => {
  // Filter courses by same category, excluding current course
  const related = courses.value.filter(course => 
    course.id !== props.currentCourse.id && 
    course.category === props.currentCourse.category
  )
  
  // Limit results
  return related.slice(0, props.maxResults)
})
</script>
