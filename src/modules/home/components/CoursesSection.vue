<template>
  <section class="bg-background-light px-4 py-24">
    <div class="mx-auto max-w-7xl">
      <div class="mb-12 flex items-end justify-between">
        <div>
          <h2 class="mb-2 text-3xl font-black text-primary">
            Cursos Recientes
          </h2>
          <p class="text-slate-600">
            Profundiza en tu conocimiento de las Escrituras
          </p>
        </div>
        <a
          href="#"
          class="flex items-center gap-2 font-bold text-primary hover:underline"
        >
          Ver todos los cursos
          <MaterialIcon name="arrow_forward" class-name="text-sm" />
        </a>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <CourseCard
          v-for="course in recentCourses"
          :key="course.id"
          :course="course"
          @click="handleCourseClick"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import CourseCard from '../../courses/components/CourseCard.vue'
import MaterialIcon from '../../../components/shared/ui/MaterialIcon.vue'

/**
 * Sección de cursos recientes
 * Responsabilidad: Mostrar lista de cursos disponibles
 * Depende de useCourses (Dependency Injection)
 */
const recentCourses = [
  {
    id: 1,
    title: 'Fundamentos de la Fe',
    description: 'Un recorrido por las verdades esenciales del cristianismo para nuevos creyentes.',
    duration: '8 Semanas',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnAMT3ragAdtfC9snSd-6D9CgSeIB0zVEj3JTzLTqXZUC06ejoK3mupRco79hAzzxYlM0XU9BhHfknNG8UBfPQ9qMdUwtEWwyibNRAu9OdiPCbuoUn_7blVPIPl1qHVxHI6qo_CjEGSE2Mn55PVAnAGEz4-nefUD_Y8NoY3rkJS071O54ILLIKU2MBhVsE9Oqh12UEwPk5OOaZFnIzHHsaXHWH6xY4-Q6WvoDqWMDmcA_MZD_x_ZuuTdK50boZ168d6OTgMILopgOM',
    altText: 'Biblia abierta sobre una mesa rústica con luz suave',
    badge: 'Inscripciones Abiertas',
  },
  {
    id: 2,
    title: 'Estudio de Romanos',
    description: 'Profundizando en la teología de la gracia y la justicia de Dios según Pablo.',
    duration: '12 Semanas',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUPjAl-nNsLgltQKWVMRm3MRaLab71VYpzd0WHNYd-pK-8EJRCdCXj-I8qII3qG3EAUuUsCfa6tGspsNwbev2OmTbLaJK0tLA7ez9gB-aHKbKkA-zZICKsSxcuE1TN0NN-edOng6o_m6nbLNcY0HzLTxUEBXOf5ron-K_BdqCRNOAukT0iv3F-Jh0Z1z3TEpvK3-pWcF8UDsr6Fim8zP53G4T1_DqZMKyUeYxn9sqaruVO9sc6AUzdXtIYQ0mILSn5ZpruTBI98UlP',
    altText: 'Manuscrito antiguo con pergaminos e tinta',
  },
  {
    id: 3,
    title: 'Vida de Oración',
    description: 'Descubre el poder y la disciplina de una comunicación constante con el Padre.',
    duration: '6 Semanas',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvwts3rnTM1d-aMohDHs4CBTt-0BaxG75PMy1YeXVd6H8jRQhxls0HTK14dGeX0uZj1oWTpsCTSpPwiimcxHYOUM5-bFhMbWC8Bbu3fjpcczmskBKYyTazrEf9-4a_AEDwZwtSPFSvk9n9mOF3VNG3t-rUIfEF_7iRzGP0AwJpB304Th15DGjeNY_6ZwZVRzHpnAya7iDty02BUtbc7zNjUX3bhn9OQ221JuTj3H3LlKgAHAvFLbwqTJgcu2bxWvUoH6-eBO60Vx-f',
    altText: 'Persona orando en un bosque por la mañana',
  },
]

const handleCourseClick = (course) => {
  console.log('Curso seleccionado:', course)
  // Aquí se podría navegar a la página del curso o abrir un modal
}
</script>
