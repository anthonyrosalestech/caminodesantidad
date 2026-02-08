import { ref } from 'vue'

/**
 * Composable para gestionar horarios de la iglesia
 * Responsabilidad: Proporcionar datos de eventos semanales
 * Separa la lógica de datos de la presentación
 * 
 * @returns {Object} Lista de eventos del horario
 */
export function useSchedule() {
  // En un proyecto real, estos datos vendrían de una API
  const scheduleEvents = ref([
    {
      id: 1,
      day: 'Domingo',
      activity: 'Servicio General',
      time: '10:00 AM',
    },
    {
      id: 2,
      day: 'Miércoles',
      activity: 'Estudio Bíblico',
      time: '7:00 PM',
    },
    {
      id: 3,
      day: 'Viernes',
      activity: 'Reunión de Jóvenes',
      time: '7:30 PM',
    },
  ])

  // Función para agregar un nuevo evento (ejemplo de extensibilidad)
  const addEvent = (event) => {
    scheduleEvents.value.push({
      id: Date.now(),
      ...event,
    })
  }

  // Función para actualizar un evento
  const updateEvent = (id, updatedEvent) => {
    const index = scheduleEvents.value.findIndex(e => e.id === id)
    if (index !== -1) {
      scheduleEvents.value[index] = { ...scheduleEvents.value[index], ...updatedEvent }
    }
  }

  // Función para eliminar un evento
  const removeEvent = (id) => {
    scheduleEvents.value = scheduleEvents.value.filter(e => e.id !== id)
  }

  return {
    scheduleEvents,
    addEvent,
    updateEvent,
    removeEvent,
  }
}
