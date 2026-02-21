<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
    <NavBar @toggle-menu="handleMenuToggle" />
    
    <!-- Loading State -->
    <div v-if="isLoading" class="flex min-h-screen items-center justify-center">
      <div class="text-center">
        <MaterialIcon name="hourglass_empty" class-name="mb-4 animate-spin text-6xl text-primary" />
        <p class="text-gray-600">Cargando curso...</p>
      </div>
    </div>

    <!-- Error State (404) -->
    <div v-else-if="!course" class="flex min-h-screen flex-col items-center justify-center p-8">
      <MaterialIcon name="search_off" class-name="mb-4 text-8xl text-gray-300" />
      <h2 class="mb-2 text-2xl font-bold text-[#111418]">
        Curso no encontrado
      </h2>
      <p class="mb-6 text-gray-600">
        El curso que buscas no existe o ha sido eliminado.
      </p>
      <AppButton variant="primary" @click="router.push('/cursos')">
        <MaterialIcon name="arrow_back" class-name="mr-2 text-xl" />
        Ver todos los cursos
      </AppButton>
    </div>

    <!-- Course Content -->
    <div v-else class="flex-1">
      <!-- Course Header -->
      <CourseHeader 
        :course="course"
        @enroll="handleEnroll"
        @contact="handleContact"
      />

      <!-- Main Content Area -->
      <div class="mx-auto max-w-7xl px-4 py-12">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <!-- Left Column: Main Content -->
          <div class="space-y-12 lg:col-span-2">
            <!-- Video Section -->
            <CourseVideo 
              :course="course"
              @play="handlePlayVideo"
            />

            <!-- Description -->
            <CourseDescription :course="course" />

            <!-- Curriculum -->
            <CourseCurriculum :course="course" />

            <!-- Requirements -->
            <CourseRequirements :course="course" />

            <!-- Materials -->
            <CourseMaterials :course="course" />
          </div>

          <!-- Right Column: Sidebar -->
          <div class="space-y-8 lg:col-span-1">
            <!-- Instructor Card -->
            <InstructorCard :course="course" />
          </div>
        </div>

        <!-- Related Courses -->
        <div class="mt-16">
          <RelatedCourses :current-course="course" :max-results="3" />
        </div>
      </div>
    </div>

    <FooterSection />
    <FloatingLocationButton @click="handleLocationClick" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import NavBar from '../components/shared/layout/NavBar.vue'
import FooterSection from '../components/shared/layout/FooterSection.vue'
import FloatingLocationButton from '../components/shared/layout/FloatingLocationButton.vue'
import MaterialIcon from '../components/shared/ui/MaterialIcon.vue'
import AppButton from '../components/shared/ui/AppButton.vue'
import CourseHeader from '../modules/course-detail/components/CourseHeader.vue'
import CourseVideo from '../modules/course-detail/components/CourseVideo.vue'
import CourseDescription from '../modules/course-detail/components/CourseDescription.vue'
import CourseCurriculum from '../modules/course-detail/components/CourseCurriculum.vue'
import InstructorCard from '../modules/course-detail/components/InstructorCard.vue'
import CourseRequirements from '../modules/course-detail/components/CourseRequirements.vue'
import CourseMaterials from '../modules/course-detail/components/CourseMaterials.vue'
import RelatedCourses from '../modules/course-detail/components/RelatedCourses.vue'
import { useCourses } from '../composables/useCourses'

const router = useRouter()
const route = useRoute()

const { getCourseById } = useCourses()

const isLoading = ref(true)
const course = ref(null)

onMounted(async () => {
  // Simulate loading delay
  await new Promise(resolve => setTimeout(resolve, 300))
  
  const courseId = route.params.id
  course.value = getCourseById(courseId)
  
  isLoading.value = false

  // Update page title
  if (course.value) {
    document.title = `${course.value.title} - Cursos - Iglesia Bíblica Camino de Santidad`
  }
})

const handleMenuToggle = (isOpen) => console.log('Menu toggled:', isOpen)
const handleLocationClick = () => router.push('/ubicacion')

const handleEnroll = () => {
  // In a real app, this would open enrollment form or redirect
  router.push('/contacto')
}

const handleContact = () => {
  router.push('/contacto')
}

const handlePlayVideo = () => {
  console.log('Play video clicked')
  // In a real app, this could open a modal with the video player
}
</script>
