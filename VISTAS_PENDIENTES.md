# 📋 Plan de Vistas Pendientes - Iglesia Bautista

## Estado Actual
✅ **Vista implementada:**
- `HomeView.vue` - Página de inicio con Hero, Visión, Horarios y Cursos

## 🎯 Vistas Pendientes por Implementar

### 1. **Vista Nosotros** (`AboutView.vue`)
**Ruta:** `/nosotros`
**Prioridad:** Alta

#### Secciones necesarias:
- **Hero Section:** Banner con título "Quiénes Somos"
- **Historia:** Timeline o sección narrativa de la historia de la iglesia
- **Misión y Visión:** Cards expandidos con más detalle
- **Valores:** Grid de valores fundamentales con iconos
- **Equipo Pastoral:** Cards con fotos, nombres y roles del equipo
- **Declaración de Fe:** Sección con principios doctrinales

#### Componentes a crear:
```
components/about/
  ├── AboutHero.vue
  ├── HistorySection.vue
  ├── MissionVisionCards.vue
  ├── ValuesGrid.vue
  ├── PastoralTeam.vue
  └── FaithStatement.vue
```

#### Composables necesarios:
- `useTeam.js` - Gestionar datos del equipo pastoral
- `useHistory.js` - Timeline de eventos históricos

---

### 2. **Vista Cursos** (`CoursesView.vue`)
**Ruta:** `/cursos`
**Prioridad:** Alta

#### Secciones necesarias:
- **Hero Section:** Banner con buscador de cursos
- **Filtros:** Por categoría, nivel, duración
- **Grid de Cursos:** Todos los cursos disponibles (no solo 3)
- **Categorías:** Tabs o sidebar con categorías
- **Cursos Destacados:** Carrusel o sección especial
- **CTA Inscripción:** Banner de llamado a acción

#### Componentes a crear:
```
components/courses/
  ├── CoursesHero.vue
  ├── CourseFilters.vue
  ├── CourseGrid.vue
  ├── CourseCategories.vue
  ├── FeaturedCourses.vue
  └── EnrollmentBanner.vue
```

#### Composables a extender:
- `useCourses.js` - Agregar filtrado por categoría y búsqueda
- `useCategories.js` - Gestionar categorías de cursos

---

### 3. **Vista Detalle de Curso** (`CourseDetailView.vue`)
**Ruta:** `/cursos/:id`
**Prioridad:** Alta

#### Secciones necesarias:
- **Header:** Título, instructor, duración, nivel
- **Video/Imagen Principal:** Thumbnail grande o video de intro
- **Descripción:** Texto completo del curso
- **Contenido:** Lista de lecciones/módulos
- **Instructor:** Card con info del maestro
- **Requisitos:** Lista de prerequisitos
- **Materiales:** Recursos descargables
- **Botón Inscripción:** CTA prominente
- **Cursos Relacionados:** Sugerencias al final

#### Componentes a crear:
```
components/course-detail/
  ├── CourseHeader.vue
  ├── CourseVideo.vue
  ├── CourseDescription.vue
  ├── CourseCurriculum.vue
  ├── InstructorCard.vue
  ├── CourseRequirements.vue
  ├── CourseMaterials.vue
  └── RelatedCourses.vue
```

---

### 4. **Vista Ministerios** (`MinistriesView.vue`)
**Ruta:** `/ministerios`
**Prioridad:** Media

#### Secciones necesarias:
- **Hero Section:** Banner "Nuestros Ministerios"
- **Grid de Ministerios:** Cards con diferentes ministerios
  - Ministerio de Jóvenes
  - Ministerio de Niños
  - Ministerio de Mujeres
  - Ministerio de Varones
  - Ministerio de Alabanza
  - Ministerio de Evangelismo
  - Ministerio de Oración
- **Detalle por Ministerio:** Al hacer clic, expandir o navegar
- **Líderes:** Quién lidera cada ministerio
- **Horarios:** Cuándo se reúnen
- **CTA Participación:** Cómo unirse

#### Componentes a crear:
```
components/ministries/
  ├── MinistriesHero.vue
  ├── MinistryCard.vue
  ├── MinistriesGrid.vue
  ├── MinistryDetail.vue
  └── JoinMinistryBanner.vue
```

#### Composables necesarios:
- `useMinistries.js` - Gestionar datos de ministerios

---

### 5. **Vista Contacto** (`ContactView.vue`)
**Ruta:** `/contacto`
**Prioridad:** Media

#### Secciones necesarias:
- **Hero Section:** Banner "Contáctanos"
- **Información de Contacto:** Dirección, teléfono, email, horarios
- **Mapa:** Google Maps embebido
- **Formulario de Contacto:** Nombre, email, asunto, mensaje
- **Redes Sociales:** Links a todas las redes
- **FAQ:** Preguntas frecuentes
- **Horarios de Oficina:** Cuándo están disponibles

#### Componentes a crear:
```
components/contact/
  ├── ContactHero.vue
  ├── ContactInfo.vue
  ├── ContactMap.vue
  ├── ContactForm.vue
  ├── SocialLinks.vue
  ├── FAQ.vue
  └── OfficeHours.vue
```

#### Composables necesarios:
- `useContactForm.js` - Validación y envío de formulario

---

### 6. **Vista Ubicación** (`LocationView.vue`)
**Ruta:** `/ubicacion`
**Prioridad:** Baja

#### Secciones necesarias:
- **Mapa Grande:** Full-screen o prominente
- **Dirección Completa:** Con instrucciones de cómo llegar
- **Transporte Público:** Opciones de llegada
- **Estacionamiento:** Información de parking
- **Fotos del Lugar:** Galería de fotos del edificio
- **Horarios de Servicios:** Cuándo visitar

#### Componentes a crear:
```
components/location/
  ├── LocationMap.vue
  ├── DirectionCard.vue
  ├── TransportOptions.vue
  ├── ParkingInfo.vue
  └── BuildingGallery.vue
```

---

### 7. **Vista Donaciones** (`DonateView.vue`)
**Ruta:** `/donar`
**Prioridad:** Media

#### Secciones necesarias:
- **Hero Section:** Mensaje motivacional
- **¿Por qué donar?:** Impacto de las donaciones
- **Métodos de Donación:** 
  - En línea (Stripe/PayPal)
  - Transferencia bancaria
  - Efectivo/Cheque
- **Montos Sugeridos:** Botones rápidos
- **Transparencia:** Cómo se usan los fondos
- **Recurrente vs One-time:** Opciones de donación
- **Comprobante:** Sistema de recibos

#### Componentes a crear:
```
components/donate/
  ├── DonateHero.vue
  ├── ImpactSection.vue
  ├── DonationForm.vue
  ├── PaymentMethods.vue
  ├── QuickAmounts.vue
  └── TransparencySection.vue
```

#### Composables necesarios:
- `useDonations.js` - Gestionar proceso de donación
- `usePayment.js` - Integración con pasarela de pago

---

### 8. **Vista Transmisión en Vivo** (`LiveStreamView.vue`)
**Ruta:** `/en-vivo`
**Prioridad:** Alta

#### Secciones necesarias:
- **Player de Video:** YouTube/Vimeo embebido
- **Estado:** "En vivo ahora" o "Próximo servicio: [fecha]"
- **Chat en Vivo:** (opcional) Durante transmisión
- **Horarios:** Cuándo transmiten
- **Videos Anteriores:** Archivo de transmisiones pasadas
- **Botón Suscribirse:** A notificaciones de live

#### Componentes a crear:
```
components/live/
  ├── LivePlayer.vue
  ├── LiveStatus.vue
  ├── LiveChat.vue
  ├── UpcomingServices.vue
  └── PastStreams.vue
```

#### Composables necesarios:
- `useLiveStream.js` - Estado de la transmisión
- `useYouTube.js` - Integración con YouTube API

---

### 9. **Vista Eventos** (`EventsView.vue`)
**Ruta:** `/eventos`
**Prioridad:** Media

#### Secciones necesarias:
- **Hero Section:** Banner "Próximos Eventos"
- **Calendario:** Vista de calendario interactivo
- **Lista de Eventos:** Cards de eventos próximos
- **Filtros:** Por tipo de evento, fecha
- **Eventos Pasados:** Galería de fotos de eventos anteriores
- **Inscripción:** Formulario para eventos especiales

#### Componentes a crear:
```
components/events/
  ├── EventsHero.vue
  ├── EventCalendar.vue
  ├── EventCard.vue
  ├── EventFilters.vue
  ├── PastEvents.vue
  └── EventRegistration.vue
```

#### Composables necesarios:
- `useEvents.js` - Gestionar eventos
- `useCalendar.js` - Lógica del calendario

---

### 10. **Vista Privacidad y Términos** (`LegalView.vue`)
**Ruta:** `/privacidad`, `/terminos`
**Prioridad:** Baja

#### Secciones necesarias:
- **Política de Privacidad**
- **Términos de Uso**
- **Cookies**
- **Última actualización**

#### Componentes a crear:
```
components/legal/
  ├── PrivacyPolicy.vue
  └── TermsOfService.vue
```

---

## 🛠️ Tareas Técnicas Previas

### 1. Instalar y Configurar Vue Router
```bash
npm install vue-router@4
```

Crear:
- `src/router/index.js` - Configuración de rutas
- Actualizar `App.vue` para usar `<router-view>`
- Actualizar `NavBar.vue` para usar `<router-link>`

### 2. Crear Layout Base
```
components/layout/
  └── BaseLayout.vue  # Layout wrapper para todas las vistas
```

### 3. Configuración Global
- `src/constants/navigation.js` - Links de navegación centralizados
- `src/constants/social.js` - URLs de redes sociales
- `src/constants/contact.js` - Información de contacto

---

## 📊 Orden Sugerido de Implementación

1. **Fase 1 - Configuración Base (1-2 horas)**
   - Instalar Vue Router
   - Crear BaseLayout
   - Configurar rutas básicas
   - Actualizar navegación

2. **Fase 2 - Vistas Principales (6-8 horas)**
   - LiveStreamView (alta prioridad)
   - CoursesView + CourseDetailView
   - AboutView
   - MinistriesView

3. **Fase 3 - Vistas Secundarias (4-6 horas)**
   - ContactView
   - DonateView
   - EventsView

4. **Fase 4 - Vistas Complementarias (2-3 horas)**
   - LocationView
   - LegalView

---

## 🎨 Componentes Comunes Adicionales Necesarios

```
components/common/
  ├── PageHero.vue         # Hero reutilizable para todas las vistas
  ├── SectionTitle.vue     # Títulos de sección consistentes
  ├── Card.vue             # Card base reutilizable
  ├── Modal.vue            # Modal genérico
  ├── Tabs.vue             # Sistema de tabs
  ├── Accordion.vue        # Acordeón
  ├── Breadcrumbs.vue      # Navegación de migas
  ├── Pagination.vue       # Paginación
  ├── SearchBar.vue        # Barra de búsqueda
  ├── LoadingSpinner.vue   # Indicador de carga
  └── ErrorMessage.vue     # Mensaje de error
```

---

## 📝 Notas Importantes

- **Mantener Mobile-First:** Todas las vistas deben ser responsive
- **Reutilización:** Usar componentes comunes donde sea posible
- **SOLID:** Mantener principios de arquitectura limpia
- **Composables:** Separar lógica de presentación
- **Accesibilidad:** Etiquetas ARIA, navegación por teclado
- **SEO:** Meta tags apropiados por vista
- **Performance:** Lazy loading de vistas, optimización de imágenes

---

## 🚀 Siguiente Paso

**¿Por dónde empezar?**
1. Instalar Vue Router
2. Crear sistema de rutas
3. Implementar LiveStreamView (más demandada)
4. Luego seguir con CoursesView y AboutView
