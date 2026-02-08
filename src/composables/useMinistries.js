import { ref } from 'vue'

/**
 * Composable para gestionar ministerios de la iglesia
 * Responsabilidad: Proporcionar datos de ministerios
 * 
 * @returns {Object} Lista de ministerios y funciones relacionadas
 */
export function useMinistries() {
  const ministries = ref([
    {
      id: 1,
      name: 'Ministerio de Jóvenes',
      shortDescription: 'Formando la próxima generación de líderes cristianos.',
      fullDescription: 'El Ministerio de Jóvenes está dedicado a alcanzar, discipular y equipar a la juventud para que vivan vidas radicalmente comprometidas con Cristo. A través de estudios bíblicos dinámicos, actividades recreativas, retiros espirituales y proyectos de servicio, los jóvenes crecen en su fe mientras desarrollan relaciones significativas con sus pares.',
      icon: 'groups_2',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop',
      leader: {
        name: 'Pastor Carlos Ramírez',
        id: 3,
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      },
      schedule: [
        { day: 'Viernes', time: '7:00 PM', activity: 'Reunión de Jóvenes' },
        { day: 'Sábado', time: '10:00 AM', activity: 'Estudio Bíblico' },
      ],
      activities: [
        'Estudios bíblicos semanales',
        'Noches de alabanza y adoración',
        'Retiros espirituales trimestrales',
        'Proyectos de servicio comunitario',
        'Campamentos de verano',
      ],
      ageRange: '13-25 años',
      contact: {
        email: 'jovenes@iglesiabautista.org',
        phone: '+1 (234) 567-8903',
      },
    },
    {
      id: 2,
      name: 'Ministerio de Niños',
      shortDescription: 'Enseñando a los niños el amor de Jesús de manera divertida.',
      fullDescription: 'El Ministerio de Niños proporciona un ambiente seguro, amoroso y divertido donde los niños pueden aprender acerca de Jesús y desarrollar una relación personal con Él. Utilizamos lecciones creativas, música, juegos y manualidades para enseñar verdades bíblicas de manera apropiada para cada edad.',
      icon: 'child_care',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop',
      leader: {
        name: 'Maestra Ana López',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      },
      schedule: [
        { day: 'Domingo', time: '10:00 AM', activity: 'Escuela Dominical' },
        { day: 'Domingo', time: '6:00 PM', activity: 'Culto de Niños' },
        { day: 'Miércoles', time: '7:00 PM', activity: 'Club Bíblico' },
      ],
      activities: [
        'Escuela Dominical por edades',
        'Memorización de versículos',
        'Teatro y presentaciones',
        'Manualidades bíblicas',
        'Eventos especiales (VBS, Navidad)',
      ],
      ageRange: '3-12 años',
      contact: {
        email: 'ninos@iglesiabautista.org',
        phone: '+1 (234) 567-8905',
      },
    },
    {
      id: 3,
      name: 'Ministerio de Mujeres',
      shortDescription: 'Fortaleciendo a las mujeres en su fe y comunidad.',
      fullDescription: 'El Ministerio de Mujeres es un espacio donde las mujeres de todas las edades pueden crecer espiritualmente, desarrollar amistades profundas y descubrir su propósito en Cristo. A través de estudios bíblicos, retiros, mentorías y eventos especiales, las mujeres son equipadas para ser discípulas comprometidas y líderes en sus hogares, iglesia y comunidad.',
      icon: 'female',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop',
      leader: {
        name: 'Pastora María González',
        id: 2,
        photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
      },
      schedule: [
        { day: 'Martes', time: '10:00 AM', activity: 'Estudio Bíblico Matutino' },
        { day: 'Jueves', time: '7:00 PM', activity: 'Grupo de Oración' },
        { day: 'Sábado (1er)', time: '9:00 AM', activity: 'Desayuno de Mujeres' },
      ],
      activities: [
        'Estudios bíblicos semanales',
        'Conferencias de mujeres',
        'Retiros espirituales',
        'Mentorías uno a uno',
        'Proyectos de servicio',
      ],
      ageRange: '18+ años',
      contact: {
        email: 'mujeres@iglesiabautista.org',
        phone: '+1 (234) 567-8902',
      },
    },
    {
      id: 4,
      name: 'Ministerio de Varones',
      shortDescription: 'Equipando hombres para ser líderes piadosos.',
      fullDescription: 'El Ministerio de Varones desafía a los hombres a ser líderes espirituales en sus hogares, trabajos e iglesia. A través de estudios bíblicos enfocados, rendición de cuentas, proyectos de servicio y actividades de compañerismo, los hombres son equipados para vivir vidas de integridad, valentía y propósito según el diseño de Dios.',
      icon: 'male',
      image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&h=600&fit=crop',
      leader: {
        name: 'Pastor Juan Pérez',
        id: 1,
        photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      },
      schedule: [
        { day: 'Sábado', time: '6:30 AM', activity: 'Desayuno de Hombres' },
        { day: 'Jueves', time: '7:00 PM', activity: 'Estudio Bíblico' },
      ],
      activities: [
        'Estudios bíblicos masculinos',
        'Grupos de rendición de cuentas',
        'Proyectos de construcción y servicio',
        'Retiros en la naturaleza',
        'Eventos deportivos',
      ],
      ageRange: '18+ años',
      contact: {
        email: 'varones@iglesiabautista.org',
        phone: '+1 (234) 567-8901',
      },
    },
    {
      id: 5,
      name: 'Ministerio de Alabanza',
      shortDescription: 'Guiando a la congregación en adoración a Dios.',
      fullDescription: 'El Ministerio de Alabanza existe para guiar a la iglesia en adoración auténtica y excelente. Nuestro equipo de músicos, cantantes y técnicos se prepara diligentemente para crear un ambiente donde el Espíritu Santo pueda moverse y donde la congregación pueda conectarse con Dios a través de la música y la adoración.',
      icon: 'music_note',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop',
      leader: {
        name: 'Diácono Roberto Sánchez',
        id: 4,
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      },
      schedule: [
        { day: 'Miércoles', time: '7:00 PM', activity: 'Ensayo General' },
        { day: 'Domingo', time: '9:00 AM', activity: 'Ensayo Pre-Culto' },
        { day: 'Domingo', time: '10:00 AM - 6:00 PM', activity: 'Cultos' },
      ],
      activities: [
        'Ensayos semanales',
        'Capacitación musical',
        'Composición de canciones',
        'Grabación de álbumes',
        'Conciertos especiales',
      ],
      ageRange: 'Todas las edades',
      contact: {
        email: 'alabanza@iglesiabautista.org',
        phone: '+1 (234) 567-8904',
      },
    },
    {
      id: 6,
      name: 'Ministerio de Evangelismo',
      shortDescription: 'Compartiendo el amor de Cristo con nuestra comunidad.',
      fullDescription: 'El Ministerio de Evangelismo está comprometido con la Gran Comisión de llevar el evangelio a toda criatura. A través de evangelismo personal, eventos de alcance, proyectos comunitarios y campañas misioneras, equipamos y movilizamos a la iglesia para compartir activamente las buenas nuevas de Jesucristo con quienes nos rodean.',
      icon: 'campaign',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
      leader: {
        name: 'Pastor David Ramírez',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      },
      schedule: [
        { day: 'Sábado', time: '2:00 PM', activity: 'Alcance Comunitario' },
        { day: 'Martes', time: '7:00 PM', activity: 'Capacitación Evangelística' },
      ],
      activities: [
        'Evangelismo callejero',
        'Distribución de literatura',
        'Eventos de alcance',
        'Capacitación en evangelismo',
        'Misiones locales e internacionales',
      ],
      ageRange: 'Todas las edades',
      contact: {
        email: 'evangelismo@iglesiabautista.org',
        phone: '+1 (234) 567-8906',
      },
    },
    {
      id: 7,
      name: 'Ministerio de Oración',
      shortDescription: 'Intercediendo por las necesidades de la iglesia y la comunidad.',
      fullDescription: 'El Ministerio de Oración es la base espiritual de nuestra iglesia. Nos dedicamos a interceder por las necesidades de nuestra congregación, comunidad y el mundo. A través de cadenas de oración, vigilias, grupos de intercesión y la sala de oración, buscamos el rostro de Dios y vemos Su poder manifestado en respuesta a nuestras oraciones.',
      icon: 'volunteer_activism',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      leader: {
        name: 'Hermana Elena Torres',
        photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
      },
      schedule: [
        { day: 'Lunes - Viernes', time: '6:00 AM', activity: 'Oración Matutina' },
        { day: 'Miércoles', time: '7:00 PM', activity: 'Reunión de Oración' },
        { day: 'Primer Viernes', time: '10:00 PM', activity: 'Vigilia de Oración' },
      ],
      activities: [
        'Reuniones de oración semanales',
        'Cadena de oración 24/7',
        'Vigilias de oración',
        'Intercesión por misioneros',
        'Oración por sanidad',
      ],
      ageRange: 'Todas las edades',
      contact: {
        email: 'oracion@iglesiabautista.org',
        phone: '+1 (234) 567-8907',
      },
    },
  ])

  const getMinistryById = (id) => {
    return ministries.value.find(ministry => ministry.id === parseInt(id))
  }

  const getMinistryByName = (name) => {
    return ministries.value.find(ministry => 
      ministry.name.toLowerCase().includes(name.toLowerCase())
    )
  }

  return {
    ministries,
    getMinistryById,
    getMinistryByName,
  }
}
