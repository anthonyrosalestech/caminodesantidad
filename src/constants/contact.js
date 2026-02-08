export const contactInfo = {
  address: {
    street: 'Calle Principal 123',
    city: 'Ciudad',
    state: 'Estado',
    zipCode: '00000',
    country: 'País',
  },
  phone: '+1 (234) 567-8900',
  email: 'info@iglesiabautista.org',
  officeHours: {
    weekdays: 'Lunes a Viernes: 9:00 AM - 5:00 PM',
    saturday: 'Sábado: 10:00 AM - 2:00 PM',
    sunday: 'Domingo: Cerrado (Servicios religiosos)',
  },
  serviceHours: {
    sunday: 'Domingo: 10:00 AM',
    wednesday: 'Miércoles: 7:00 PM',
    friday: 'Viernes: 7:30 PM',
  },
  location: {
    lat: 40.7128,
    lng: -74.0060,
  },
}

export const formatAddress = () => {
  const { street, city, state, zipCode, country } = contactInfo.address
  return `${street}, ${city}, ${state} ${zipCode}, ${country}`
}
