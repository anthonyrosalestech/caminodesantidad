import { ref } from 'vue'

/**
 * Composable para gestionar la historia de la iglesia
 * Responsabilidad: Proporcionar timeline histórico
 * 
 * @returns {Object} Lista de eventos históricos
 */
export function useHistory() {
  const historyEvents = ref([
    {
      id: 1,
      year: '1990',
      title: 'Fundación',
      description: 'Inicio de la iglesia con un pequeño grupo de 15 familias comprometidas con la visión de impactar la comunidad.',
      icon: 'foundation',
    },
    {
      id: 2,
      year: '1995',
      title: 'Primer Edificio',
      description: 'Adquisición del primer edificio propio, permitiendo expandir los ministerios y servicios.',
      icon: 'home_work',
    },
    {
      id: 3,
      year: '2005',
      title: 'Expansión',
      description: 'Ampliación de instalaciones y crecimiento a más de 500 miembros activos.',
      icon: 'trending_up',
    },
    {
      id: 4,
      year: '2010',
      title: 'Ministerios Múltiples',
      description: 'Establecimiento de ministerios especializados: jóvenes, niños, mujeres y evangelismo.',
      icon: 'diversity_3',
    },
    {
      id: 5,
      year: '2015',
      title: 'Transmisiones en Vivo',
      description: 'Inicio de transmisiones en línea, alcanzando a personas en todo el mundo.',
      icon: 'live_tv',
    },
    {
      id: 6,
      year: '2020',
      title: 'Comunidad Digital',
      description: 'Fortalecimiento de la presencia digital y desarrollo de plataforma de cursos en línea.',
      icon: 'language',
    },
    {
      id: 7,
      year: '2025',
      title: 'Presente',
      description: 'Continuamos creciendo y sirviendo a más de 1,000 familias, con visión de expansión internacional.',
      icon: 'celebration',
    },
  ])

  const missionStatement = ref({
    title: 'Nuestra Misión',
    description: 'Hacer discípulos de Cristo que transformen sus comunidades a través del amor, la enseñanza bíblica y el servicio comprometido.',
  })

  const visionStatement = ref({
    title: 'Nuestra Visión',
    description: 'Ser una iglesia que refleja el amor de Cristo, equipando a cada creyente para vivir su fe de manera práctica y efectiva, impactando nuestra ciudad y el mundo.',
  })

  return {
    historyEvents,
    missionStatement,
    visionStatement,
  }
}
