import { ref } from 'vue'

/**
 * Composable para gestionar el equipo pastoral
 * Responsabilidad: Proporcionar datos del equipo
 * 
 * @returns {Object} Lista de miembros del equipo
 */
export function useTeam() {
  const team = ref([
    {
      id: 1,
      name: 'Pastor Juan Pérez',
      role: 'Pastor Principal',
      description: 'Líder espiritual con más de 20 años de experiencia sirviendo a la comunidad.',
      bio: 'Pastor Juan Pérez ha servido fielmente en el ministerio por más de 20 años. Graduado del Seminario Teológico Bautista con maestría en Teología Pastoral, ha dedicado su vida a enseñar la Palabra de Dios y pastorear a la congregación. Es autor de varios libros sobre discipulado y liderazgo cristiano. Está casado con Ana y tienen tres hijos.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      email: 'juan.perez@iglesiabautista.org',
      phone: '+1 (234) 567-8901',
      specialties: ['Predicación Expositiva', 'Discipulado', 'Consejería Pastoral'],
    },
    {
      id: 2,
      name: 'Pastora María González',
      role: 'Pastora Asociada',
      description: 'Especializada en ministerio de mujeres y consejería familiar.',
      bio: 'Pastora María González es una líder apasionada con un corazón especial para el ministerio de mujeres y familias. Con una licenciatura en Consejería Bíblica y más de 15 años de experiencia ministerial, ha ayudado a cientos de familias a encontrar restauración y sanidad a través del evangelio. Lidera varios grupos de estudio bíblico para mujeres y coordina el ministerio de consejería de la iglesia.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
      email: 'maria.gonzalez@iglesiabautista.org',
      phone: '+1 (234) 567-8902',
      specialties: ['Ministerio Femenil', 'Consejería Familiar', 'Enseñanza Bíblica'],
    },
    {
      id: 3,
      name: 'Pastor Carlos Ramírez',
      role: 'Pastor de Jóvenes',
      description: 'Apasionado por alcanzar a la nueva generación con el mensaje del evangelio.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      email: 'carlos.ramirez@iglesiabautista.org',
      phone: '+1 (234) 567-8903',
    },
    {
      id: 4,
      name: 'Diácono Roberto Sánchez',
      role: 'Líder de Alabanza',
      description: 'Músico y adorador comprometido con la excelencia en la música congregacional.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      email: 'roberto.sanchez@iglesiabautista.org',
      phone: '+1 (234) 567-8904',
    },
  ])

  const getTeamMemberById = (id) => {
    return team.value.find(member => member.id === id)
  }

  return {
    team,
    getTeamMemberById,
  }
}
