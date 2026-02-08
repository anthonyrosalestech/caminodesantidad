import { ref, computed } from 'vue'

/**
 * Composable para gestionar categorías de cursos
 * Responsabilidad: Proporcionar datos de categorías
 * Separa la lógica de categorías de la presentación
 * 
 * @returns {Object} Lista de categorías y funciones relacionadas
 */
export function useCategories() {
  // Categorías de cursos disponibles
  const categories = ref([
    {
      id: 'all',
      name: 'Todos',
      icon: 'apps',
      description: 'Todos los cursos disponibles',
    },
    {
      id: 'biblical',
      name: 'Estudios Bíblicos',
      icon: 'menu_book',
      description: 'Cursos de estudio profundo de la Biblia',
    },
    {
      id: 'spiritual-life',
      name: 'Vida Espiritual',
      icon: 'self_improvement',
      description: 'Desarrollo personal y crecimiento espiritual',
    },
    {
      id: 'theology',
      name: 'Teología',
      icon: 'school',
      description: 'Estudios teológicos y doctrinales',
    },
    {
      id: 'family',
      name: 'Familia',
      icon: 'family_restroom',
      description: 'Matrimonio, crianza y relaciones familiares',
    },
    {
      id: 'leadership',
      name: 'Liderazgo',
      icon: 'groups',
      description: 'Formación de líderes y servidores',
    },
    {
      id: 'evangelism',
      name: 'Evangelismo',
      icon: 'campaign',
      description: 'Compartir la fe y alcanzar a otros',
    },
  ])

  // Obtener categoría por ID
  const getCategoryById = (id) => {
    return categories.value.find(cat => cat.id === id)
  }

  // Obtener categorías sin "Todos"
  const specificCategories = computed(() => {
    return categories.value.filter(cat => cat.id !== 'all')
  })

  // Contar cursos por categoría
  const countCoursesByCategory = (courses) => {
    const counts = {}
    categories.value.forEach(cat => {
      if (cat.id === 'all') {
        counts[cat.id] = courses.length
      } else {
        counts[cat.id] = courses.filter(course => course.category === cat.id).length
      }
    })
    return counts
  }

  return {
    categories,
    specificCategories,
    getCategoryById,
    countCoursesByCategory,
  }
}
