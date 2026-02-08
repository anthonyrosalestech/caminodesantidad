import { ref, computed } from 'vue'

/**
 * Composable para gestionar cursos de la iglesia
 * Responsabilidad: Proporcionar datos de cursos
 * Separa la lógica de datos de la presentación
 * 
 * @returns {Object} Lista de cursos y funciones relacionadas
 */
export function useCourses() {
  // En un proyecto real, estos datos vendrían de una API
  const courses = ref([
    {
      id: 1,
      title: 'Fundamentos de la Fe',
      description: 'Serie de 12 lecciones sobre las bases del cristianismo.',
      fullDescription: 'Este curso está diseñado para nuevos creyentes y aquellos que desean fortalecer sus fundamentos en la fe cristiana. A través de 12 lecciones prácticas y bíblicas, exploraremos las doctrinas esenciales del cristianismo, incluyendo la salvación, la Trinidad, la Biblia, y la vida cristiana práctica. Cada lección incluye estudio bíblico, aplicación práctica y tiempo para preguntas y reflexión.',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIJAaN8jsSEyTXeKF0IqkMZZqYqee1WrvT4HeV4kjiBpmIKjgevmfbORowb9MmeH6itqwz7Q87BvIRU4wa6CcsneJWwuzuGkRgXL6qdFVgeBFT-URNEEwSpbXAa7wsHk4fV_AxO890NWNGWgjqOibqAE70X9lMFNOzuA9U4mYAf1LstbwWF6wregOq7nrqHR7zpMNF7lX8pMeuoRBlUf3X_63tQdAl5NPQUof3l0_JTJCgK_JWLLoahBtO8tBRiLzLT6M6p61KrzI',
      altText: 'Open Bible on a wooden table with soft sunlight',
      category: 'biblical',
      level: 'beginner',
      duration: '12 semanas',
      instructor: 'Pastor Juan Pérez',
      instructorId: 1,
      featured: true,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      requirements: [
        'Deseo de aprender y crecer espiritualmente',
        'Biblia (cualquier versión)',
        'Cuaderno para tomar notas',
        'Asistencia regular a las sesiones',
      ],
      materials: [
        { name: 'Manual del Estudiante', type: 'PDF', size: '2.5 MB', url: '#' },
        { name: 'Guía de Estudio Bíblico', type: 'PDF', size: '1.8 MB', url: '#' },
        { name: 'Versículos para Memorizar', type: 'PDF', size: '500 KB', url: '#' },
      ],
      curriculum: [
        {
          module: 'Módulo 1: Introducción',
          lessons: [
            { title: 'Bienvenida y Orientación', duration: '45 min', type: 'video' },
            { title: '¿Qué es la Fe Cristiana?', duration: '60 min', type: 'video' },
            { title: 'La Biblia: Palabra de Dios', duration: '60 min', type: 'video' },
          ]
        },
        {
          module: 'Módulo 2: Doctrinas Fundamentales',
          lessons: [
            { title: 'Dios: Su Naturaleza y Atributos', duration: '60 min', type: 'video' },
            { title: 'La Trinidad Explicada', duration: '60 min', type: 'video' },
            { title: 'El Pecado y Sus Consecuencias', duration: '60 min', type: 'video' },
          ]
        },
        {
          module: 'Módulo 3: Salvación',
          lessons: [
            { title: 'Jesucristo: El Salvador', duration: '60 min', type: 'video' },
            { title: 'La Gracia de Dios', duration: '60 min', type: 'video' },
            { title: 'Fe y Arrepentimiento', duration: '60 min', type: 'video' },
          ]
        },
        {
          module: 'Módulo 4: Vida Cristiana',
          lessons: [
            { title: 'Crecimiento Espiritual', duration: '60 min', type: 'video' },
            { title: 'La Iglesia: Cuerpo de Cristo', duration: '60 min', type: 'video' },
            { title: 'Viviendo para Cristo', duration: '60 min', type: 'reading' },
          ]
        },
      ],
    },
    {
      id: 2,
      title: 'Estudio de Romanos',
      description: 'Un viaje profundo a través de la epístola del Apóstol Pablo.',
      fullDescription: 'Sumérgete en uno de los libros más profundos y teológicamente ricos del Nuevo Testamento. El libro de Romanos aborda temas fundamentales como la justificación por fe, la santificación, y el plan de Dios para la humanidad. A lo largo de 16 semanas, estudiaremos cada capítulo en detalle, explorando su contexto histórico y aplicación práctica para nuestras vidas hoy.',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNnJNJ8cpKu_qY4UIFdXCqpSVXcrQgiri3t2oTNQl_Knb0SKF1H3DRweTb_sU9X3A1SOpbA-faqgXvbwlo-EFMdL6MiFcATk77mYXzXw41kUIU9jS-OKnDGBC3HeGlT-lEzAsje16spC1lZrEBByrzuMuIlt9JQqSlP6P1O4VpVOQG0rb2mE565GAu-qRTbpC74sI3k1xHf2Gb0tIYxxx5zAXdhdPFLteuYqqCiJrvNH4r9abZa2vRKo8KUwCg2SRB3b0qT8SZPHo',
      altText: 'City landscape at sunset representing mission and community',
      category: 'biblical',
      level: 'intermediate',
      duration: '16 semanas',
      instructor: 'Pastora María González',
      instructorId: 2,
      featured: true,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      requirements: [
        'Haber completado "Fundamentos de la Fe" o equivalente',
        'Conocimiento básico de la Biblia',
        'Biblia con referencias',
        'Compromiso de lectura diaria',
      ],
      materials: [
        { name: 'Comentario de Romanos', type: 'PDF', size: '5.2 MB', url: '#' },
        { name: 'Guía de Estudio Semanal', type: 'PDF', size: '2.1 MB', url: '#' },
        { name: 'Mapas del Imperio Romano', type: 'PDF', size: '1.5 MB', url: '#' },
        { name: 'Tabla de Temas Teológicos', type: 'PDF', size: '800 KB', url: '#' },
      ],
      curriculum: [
        {
          module: 'Módulo 1: Introducción y Contexto',
          lessons: [
            { title: 'Pablo y la Iglesia en Roma', duration: '60 min', type: 'video' },
            { title: 'Romanos 1:1-17 - Introducción', duration: '60 min', type: 'video' },
          ]
        },
        {
          module: 'Módulo 2: La Condición Humana',
          lessons: [
            { title: 'Romanos 1:18-32 - Ira de Dios', duration: '60 min', type: 'video' },
            { title: 'Romanos 2 - El Juicio de Dios', duration: '60 min', type: 'video' },
            { title: 'Romanos 3:1-20 - Todos Han Pecado', duration: '60 min', type: 'video' },
          ]
        },
        {
          module: 'Módulo 3: Justificación por Fe',
          lessons: [
            { title: 'Romanos 3:21-31 - La Justicia de Dios', duration: '60 min', type: 'video' },
            { title: 'Romanos 4 - El Ejemplo de Abraham', duration: '60 min', type: 'video' },
            { title: 'Romanos 5 - Paz con Dios', duration: '60 min', type: 'video' },
          ]
        },
        {
          module: 'Módulo 4: Santificación',
          lessons: [
            { title: 'Romanos 6 - Muertos al Pecado', duration: '60 min', type: 'video' },
            { title: 'Romanos 7 - La Lucha Interior', duration: '60 min', type: 'video' },
            { title: 'Romanos 8 - Vida en el Espíritu', duration: '60 min', type: 'video' },
          ]
        },
        {
          module: 'Módulo 5: El Plan de Dios',
          lessons: [
            { title: 'Romanos 9-11 - Israel y los Gentiles', duration: '90 min', type: 'video' },
            { title: 'Romanos 12-15 - Vida Práctica', duration: '90 min', type: 'video' },
            { title: 'Romanos 16 - Saludos Finales', duration: '45 min', type: 'reading' },
          ]
        },
      ],
    },
    {
      id: 3,
      title: 'Vida de Oración',
      description: 'Cómo desarrollar una comunicación constante con Dios.',
      fullDescription: 'La oración es el fundamento de nuestra relación con Dios. En este curso de 8 semanas, aprenderás principios bíblicos sobre la oración, explorarás diferentes tipos de oración, y desarrollarás una vida de oración vibrante y efectiva. Incluye ejercicios prácticos, tiempos de oración en grupo, y herramientas para superar obstáculos comunes en la vida de oración.',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClnbIkBVZRlMN9pIOtVgEE5JGadB7gBEzxJvBNaSjRtKPUNCk6-TViax84BzFqA92FI8j-xoYaNoZeXer5I5KKFkiPxN1WTYuXYxgEj_0h1zYPXAmRg3q7NasQF_Kk7ccrLIYIDV8LuK9FiIQtgCBH1PZlFkP5_KgLk4UbJ2HI_FGpXRHrNSstjuenfkCVhyYJVaiaP7jTAvIqdbsL1L5dx9IbtdKqR-9ZIwZBQT5_0jgHRaODpVPTnU0ZhJAeI3cToLFMnQbsLO0',
      altText: 'Close up of hands praying',
      category: 'spiritual-life',
      level: 'beginner',
      duration: '8 semanas',
      instructor: 'Pastor Juan Pérez',
      instructorId: 1,
      featured: true,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      requirements: [
        'Corazón dispuesto a buscar a Dios',
        'Tiempo diario para oración personal',
        'Diario de oración (proporcionado)',
      ],
      materials: [
        { name: 'Diario de Oración', type: 'PDF', size: '1.2 MB', url: '#' },
        { name: 'Guía de Oración Semanal', type: 'PDF', size: '900 KB', url: '#' },
        { name: 'Lista de Peticiones', type: 'PDF', size: '400 KB', url: '#' },
      ],
      curriculum: [
        {
          module: 'Módulo 1: Fundamentos',
          lessons: [
            { title: '¿Qué es la Oración?', duration: '60 min', type: 'video' },
            { title: 'El Modelo del Padrenuestro', duration: '60 min', type: 'video' },
          ]
        },
        {
          module: 'Módulo 2: Tipos de Oración',
          lessons: [
            { title: 'Adoración y Alabanza', duration: '60 min', type: 'video' },
            { title: 'Confesión y Arrepentimiento', duration: '60 min', type: 'video' },
            { title: 'Acción de Gracias', duration: '60 min', type: 'video' },
            { title: 'Petición e Intercesión', duration: '60 min', type: 'video' },
          ]
        },
        {
          module: 'Módulo 3: Práctica',
          lessons: [
            { title: 'Desarrollando una Rutina', duration: '60 min', type: 'video' },
            { title: 'Superando Obstáculos', duration: '60 min', type: 'reading' },
          ]
        },
      ],
    },
    {
      id: 4,
      title: 'Teología Sistemática',
      description: 'Estudio completo de las doctrinas cristianas fundamentales.',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIJAaN8jsSEyTXeKF0IqkMZZqYqee1WrvT4HeV4kjiBpmIKjgevmfbORowb9MmeH6itqwz7Q87BvIRU4wa6CcsneJWwuzuGkRgXL6qdFVgeBFT-URNEEwSpbXAa7wsHk4fV_AxO890NWNGWgjqOibqAE70X9lMFNOzuA9U4mYAf1LstbwWF6wregOq7nrqHR7zpMNF7lX8pMeuoRBlUf3X_63tQdAl5NPQUof3l0_JTJCgK_JWLLoahBtO8tBRiLzLT6M6p61KrzI',
      altText: 'Theological books on a shelf',
      category: 'theology',
      level: 'advanced',
      duration: '24 semanas',
      instructor: 'Dr. Roberto Martínez',
      featured: false,
    },
    {
      id: 5,
      title: 'Matrimonio Cristiano',
      description: 'Fortaleciendo el matrimonio según principios bíblicos.',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNnJNJ8cpKu_qY4UIFdXCqpSVXcrQgiri3t2oTNQl_Knb0SKF1H3DRweTb_sU9X3A1SOpbA-faqgXvbwlo-EFMdL6MiFcATk77mYXzXw41kUIU9jS-OKnDGBC3HeGlT-lEzAsje16spC1lZrEBByrzuMuIlt9JQqSlP6P1O4VpVOQG0rb2mE565GAu-qRTbpC74sI3k1xHf2Gb0tIYxxx5zAXdhdPFLteuYqqCiJrvNH4r9abZa2vRKo8KUwCg2SRB3b0qT8SZPHo',
      altText: 'Couple holding hands',
      category: 'family',
      level: 'beginner',
      duration: '6 semanas',
      instructor: 'Pastora María González',
      featured: false,
    },
    {
      id: 6,
      title: 'Crianza con Propósito',
      description: 'Educando a nuestros hijos en los caminos del Señor.',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClnbIkBVZRlMN9pIOtVgEE5JGadB7gBEzxJvBNaSjRtKPUNCk6-TViax84BzFqA92FI8j-xoYaNoZeXer5I5KKFkiPxN1WTYuXYxgEj_0h1zYPXAmRg3q7NasQF_Kk7ccrLIYIDV8LuK9FiIQtgCBH1PZlFkP5_KgLk4UbJ2HI_FGpXRHrNSstjuenfkCVhyYJVaiaP7jTAvIqdbsL1L5dx9IbtdKqR-9ZIwZBQT5_0jgHRaODpVPTnU0ZhJAeI3cToLFMnQbsLO0',
      altText: 'Parent and child reading together',
      category: 'family',
      level: 'intermediate',
      duration: '10 semanas',
      instructor: 'Pastora Ana López',
      featured: false,
    },
    {
      id: 7,
      title: 'Liderazgo Bíblico',
      description: 'Desarrollando líderes según el modelo de Cristo.',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIJAaN8jsSEyTXeKF0IqkMZZqYqee1WrvT4HeV4kjiBpmIKjgevmfbORowb9MmeH6itqwz7Q87BvIRU4wa6CcsneJWwuzuGkRgXL6qdFVgeBFT-URNEEwSpbXAa7wsHk4fV_AxO890NWNGWgjqOibqAE70X9lMFNOzuA9U4mYAf1LstbwWF6wregOq7nrqHR7zpMNF7lX8pMeuoRBlUf3X_63tQdAl5NPQUof3l0_JTJCgK_JWLLoahBtO8tBRiLzLT6M6p61KrzI',
      altText: 'Group of people in leadership discussion',
      category: 'leadership',
      level: 'intermediate',
      duration: '14 semanas',
      instructor: 'Pastor Juan Pérez',
      featured: false,
    },
    {
      id: 8,
      title: 'Evangelismo Efectivo',
      description: 'Compartiendo el evangelio con poder y amor.',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNnJNJ8cpKu_qY4UIFdXCqpSVXcrQgiri3t2oTNQl_Knb0SKF1H3DRweTb_sU9X3A1SOpbA-faqgXvbwlo-EFMdL6MiFcATk77mYXzXw41kUIU9jS-OKnDGBC3HeGlT-lEzAsje16spC1lZrEBByrzuMuIlt9JQqSlP6P1O4VpVOQG0rb2mE565GAu-qRTbpC74sI3k1xHf2Gb0tIYxxx5zAXdhdPFLteuYqqCiJrvNH4r9abZa2vRKo8KUwCg2SRB3b0qT8SZPHo',
      altText: 'People sharing and discussing',
      category: 'evangelism',
      level: 'beginner',
      duration: '6 semanas',
      instructor: 'Pastor David Ramírez',
      featured: false,
    },
    {
      id: 9,
      title: 'Discipulado Cristiano',
      description: 'El llamado a hacer discípulos de todas las naciones.',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClnbIkBVZRlMN9pIOtVgEE5JGadB7gBEzxJvBNaSjRtKPUNCk6-TViax84BzFqA92FI8j-xoYaNoZeXer5I5KKFkiPxN1WTYuXYxgEj_0h1zYPXAmRg3q7NasQF_Kk7ccrLIYIDV8LuK9FiIQtgCBH1PZlFkP5_KgLk4UbJ2HI_FGpXRHrNSstjuenfkCVhyYJVaiaP7jTAvIqdbsL1L5dx9IbtdKqR-9ZIwZBQT5_0jgHRaODpVPTnU0ZhJAeI3cToLFMnQbsLO0',
      altText: 'Mentor teaching student',
      category: 'leadership',
      level: 'intermediate',
      duration: '12 semanas',
      instructor: 'Pastora María González',
      featured: false,
    },
    {
      id: 10,
      title: 'Finanzas Bíblicas',
      description: 'Administrando los recursos según la voluntad de Dios.',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIJAaN8jsSEyTXeKF0IqkMZZqYqee1WrvT4HeV4kjiBpmIKjgevmfbORowb9MmeH6itqwz7Q87BvIRU4wa6CcsneJWwuzuGkRgXL6qdFVgeBFT-URNEEwSpbXAa7wsHk4fV_AxO890NWNGWgjqOibqAE70X9lMFNOzuA9U4mYAf1LstbwWF6wregOq7nrqHR7zpMNF7lX8pMeuoRBlUf3X_63tQdAl5NPQUof3l0_JTJCgK_JWLLoahBtO8tBRiLzLT6M6p61KrzI',
      altText: 'Financial planning and stewardship',
      category: 'spiritual-life',
      level: 'beginner',
      duration: '8 semanas',
      instructor: 'Pastor David Ramírez',
      featured: false,
    },
    {
      id: 11,
      title: 'Profetas del Antiguo Testamento',
      description: 'Explorando los mensajes proféticos y su relevancia hoy.',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNnJNJ8cpKu_qY4UIFdXCqpSVXcrQgiri3t2oTNQl_Knb0SKF1H3DRweTb_sU9X3A1SOpbA-faqgXvbwlo-EFMdL6MiFcATk77mYXzXw41kUIU9jS-OKnDGBC3HeGlT-lEzAsje16spC1lZrEBByrzuMuIlt9JQqSlP6P1O4VpVOQG0rb2mE565GAu-qRTbpC74sI3k1xHf2Gb0tIYxxx5zAXdhdPFLteuYqqCiJrvNH4r9abZa2vRKo8KUwCg2SRB3b0qT8SZPHo',
      altText: 'Ancient scrolls and prophetic texts',
      category: 'biblical',
      level: 'advanced',
      duration: '20 semanas',
      instructor: 'Dr. Roberto Martínez',
      featured: false,
    },
    {
      id: 12,
      title: 'Apologética Cristiana',
      description: 'Defendiendo la fe con razón y gracia.',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClnbIkBVZRlMN9pIOtVgEE5JGadB7gBEzxJvBNaSjRtKPUNCk6-TViax84BzFqA92FI8j-xoYaNoZeXer5I5KKFkiPxN1WTYuXYxgEj_0h1zYPXAmRg3q7NasQF_Kk7ccrLIYIDV8LuK9FiIQtgCBH1PZlFkP5_KgLk4UbJ2HI_FGpXRHrNSstjuenfkCVhyYJVaiaP7jTAvIqdbsL1L5dx9IbtdKqR-9ZIwZBQT5_0jgHRaODpVPTnU0ZhJAeI3cToLFMnQbsLO0',
      altText: 'Books and discussion materials',
      category: 'theology',
      level: 'advanced',
      duration: '16 semanas',
      instructor: 'Dr. Roberto Martínez',
      featured: false,
    },
  ])

  const isLoading = ref(false)
  const error = ref(null)

  // Cursos destacados
  const featuredCourses = computed(() => {
    return courses.value.filter(course => course.featured)
  })

  // Función para cargar cursos desde una API (simulada)
  const fetchCourses = async () => {
    isLoading.value = true
    error.value = null
    
    try {
      // Aquí iría la llamada a la API
      // const response = await fetch('/api/courses')
      // courses.value = await response.json()
      
      // Simulación de delay de red
      await new Promise(resolve => setTimeout(resolve, 500))
    } catch (err) {
      error.value = err.message
    } finally {
      isLoading.value = false
    }
  }

  // Función para obtener un curso por ID
  const getCourseById = (id) => {
    return courses.value.find(course => course.id === parseInt(id))
  }

  // Función para filtrar cursos por búsqueda
  const searchCourses = (searchTerm) => {
    if (!searchTerm) return courses.value
    
    const term = searchTerm.toLowerCase()
    return courses.value.filter(course =>
      course.title.toLowerCase().includes(term) ||
      course.description.toLowerCase().includes(term) ||
      course.instructor.toLowerCase().includes(term)
    )
  }

  // Función para filtrar cursos por categoría
  const filterByCategory = (categoryId) => {
    if (!categoryId || categoryId === 'all') return courses.value
    return courses.value.filter(course => course.category === categoryId)
  }

  // Función para filtrar cursos por nivel
  const filterByLevel = (level) => {
    if (!level || level === 'all') return courses.value
    return courses.value.filter(course => course.level === level)
  }

  // Función para filtrar cursos por duración
  const filterByDuration = (duration) => {
    if (!duration || duration === 'all') return courses.value
    
    return courses.value.filter(course => {
      const weeks = parseInt(course.duration)
      
      switch (duration) {
        case 'short': // Menos de 8 semanas
          return weeks < 8
        case 'medium': // 8-16 semanas
          return weeks >= 8 && weeks <= 16
        case 'long': // Más de 16 semanas
          return weeks > 16
        default:
          return true
      }
    })
  }

  // Función para filtrar cursos con múltiples criterios
  const filterCourses = ({ searchTerm, category, level, duration }) => {
    let filtered = courses.value

    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(term) ||
        course.description.toLowerCase().includes(term) ||
        course.instructor.toLowerCase().includes(term)
      )
    }

    if (category && category !== 'all') {
      filtered = filtered.filter(course => course.category === category)
    }

    if (level && level !== 'all') {
      filtered = filtered.filter(course => course.level === level)
    }

    if (duration && duration !== 'all') {
      filtered = filtered.filter(course => {
        const weeks = parseInt(course.duration)
        
        switch (duration) {
          case 'short':
            return weeks < 8
          case 'medium':
            return weeks >= 8 && weeks <= 16
          case 'long':
            return weeks > 16
          default:
            return true
        }
      })
    }

    return filtered
  }

  return {
    courses,
    featuredCourses,
    isLoading,
    error,
    fetchCourses,
    getCourseById,
    searchCourses,
    filterByCategory,
    filterByLevel,
    filterByDuration,
    filterCourses,
  }
}
