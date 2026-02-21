import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Inicio - Iglesia Bíblica Camino de Santidad',
      description: 'Bienvenidos a la Iglesia Bíblica Camino de Santidad. Un lugar para crecer en fe, esperanza y amor.',
    },
  },
  {
    path: '/nosotros',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'Nosotros - Iglesia Bíblica Camino de Santidad',
      description: 'Conoce nuestra historia, misión, visión y equipo pastoral.',
    },
  },
  {
    path: '/cursos',
    name: 'Courses',
    component: () => import('../views/CoursesView.vue'),
    meta: {
      title: 'Cursos - Iglesia Bíblica Camino de Santidad',
      description: 'Explora nuestros cursos bíblicos y de formación cristiana.',
    },
  },
  {
    path: '/cursos/:id',
    name: 'CourseDetail',
    component: () => import('../views/CourseDetailView.vue'),
    meta: {
      title: 'Curso - Iglesia Bíblica Camino de Santidad',
    },
  },
  {
    path: '/ministerios',
    name: 'Ministries',
    component: () => import('../views/MinistriesView.vue'),
    meta: {
      title: 'Ministerios - Iglesia Bíblica Camino de Santidad',
      description: 'Descubre los diferentes ministerios y cómo puedes participar.',
    },
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Contacto - Iglesia Bíblica Camino de Santidad',
      description: 'Ponte en contacto con nosotros.',
    },
  },
  {
    path: '/ubicacion',
    name: 'Location',
    component: () => import('../views/LocationView.vue'),
    meta: {
      title: 'Ubicación - Iglesia Bíblica Camino de Santidad',
    },
  },
  {
    path: '/donar',
    name: 'Donate',
    component: () => import('../views/DonateView.vue'),
    meta: {
      title: 'Donar - Iglesia Bíblica Camino de Santidad',
    },
  },
  {
    path: '/en-vivo',
    name: 'LiveStream',
    component: () => import('../views/LiveStreamView.vue'),
    meta: {
      title: 'Transmisión en Vivo - Iglesia Bíblica Camino de Santidad',
    },
  },
  {
    path: '/eventos',
    name: 'Events',
    component: () => import('../views/EventsView.vue'),
    meta: {
      title: 'Eventos - Iglesia Bíblica Camino de Santidad',
    },
  },
  {
    path: '/privacidad',
    name: 'Privacy',
    component: () => import('../views/LegalView.vue'),
    props: { type: 'privacy' },
    meta: {
      title: 'Política de Privacidad - Iglesia Bíblica Camino de Santidad',
    },
  },
  {
    path: '/terminos',
    name: 'Terms',
    component: () => import('../views/LegalView.vue'),
    props: { type: 'terms' },
    meta: {
      title: 'Términos de Uso - Iglesia Bíblica Camino de Santidad',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue'),
    meta: {
      title: '404 - Página no encontrada',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

// Actualizar título de la página
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Iglesia Bíblica Camino de Santidad'
  next()
})

export default router
