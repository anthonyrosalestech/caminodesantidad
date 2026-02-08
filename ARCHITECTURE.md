# Arquitectura del Proyecto - Iglesia Bautista

## Estructura de Carpetas

```
src/
├── components/
│   ├── common/          # Componentes reutilizables (botones, iconos)
│   ├── layout/          # Componentes de estructura (navbar, footer)
│   └── home/            # Componentes específicos de la vista Home
├── composables/         # Lógica reutilizable (hooks de Vue)
├── views/               # Vistas/páginas principales
├── assets/              # Recursos estáticos
├── App.vue              # Componente raíz
├── main.js              # Punto de entrada
└── style.css            # Estilos globales con Tailwind
```

## Principios SOLID Aplicados

### 1. **Single Responsibility Principle (SRP)**
Cada componente tiene una única responsabilidad:
- `MaterialIcon.vue` - Solo renderiza iconos
- `AppButton.vue` - Solo maneja botones
- `ScheduleItem.vue` - Solo muestra un evento del horario
- `CourseCard.vue` - Solo muestra información de un curso

### 2. **Open/Closed Principle (OCP)**
Los componentes están abiertos a extensión pero cerrados a modificación:
- `AppButton.vue` acepta variantes (`primary`, `secondary`, `ghost`) sin modificar el código base
- Los composables permiten extender funcionalidad sin cambiar la lógica existente

### 3. **Liskov Substitution Principle (LSP)**
Los componentes pueden ser reemplazados por versiones alternativas sin romper la aplicación:
- Cualquier componente de sección puede ser reemplazado mientras mantenga la misma interfaz de props/emits

### 4. **Interface Segregation Principle (ISP)**
Los componentes reciben solo las props que necesitan:
- `ScheduleItem` solo recibe `day`, `activity`, `time`
- `CourseCard` solo recibe el objeto `course`

### 5. **Dependency Inversion Principle (DIP)**
Los componentes dependen de abstracciones (composables) no de implementaciones concretas:
- `ScheduleSection` depende de `useSchedule()` composable
- `CoursesSection` depende de `useCourses()` composable
- Esto permite cambiar la fuente de datos sin modificar los componentes

## Composables (Lógica Reutilizable)

### `useDarkMode.js`
- Gestiona el tema oscuro/claro
- Persiste preferencia en localStorage
- Sincroniza con preferencias del sistema

### `useSchedule.js`
- Provee datos de horarios
- Funciones CRUD para eventos
- Preparado para conectar con API

### `useCourses.js`
- Provee datos de cursos
- Maneja estado de carga y errores
- Funciones de filtrado y búsqueda

## Componentes

### Common (Reutilizables)
- **MaterialIcon**: Wrapper para iconos de Material Symbols
- **AppButton**: Botón con variantes y estados

### Layout (Estructura)
- **NavBar**: Barra de navegación sticky
- **FooterSection**: Footer con links y copyright
- **FloatingLocationButton**: Botón flotante de ubicación

### Home (Específicos)
- **HeroSection**: Banner principal con CTA
- **VisionSection**: Sección de visión/misión
- **ScheduleSection**: Lista de horarios semanales
- **ScheduleItem**: Item individual de horario
- **CoursesSection**: Lista de cursos
- **CourseCard**: Tarjeta de curso individual

## Mobile-First

Todos los componentes están diseñados primero para móvil:
- Uso de Tailwind CSS con clases responsive
- Breakpoints: `@[480px]`, `sm:`, `md:`, `lg:`
- Container queries con `@container`
- Diseño flexible con Grid y Flexbox

## Tecnologías

- **Vue 3**: Composition API
- **Vite**: Build tool rápido
- **Tailwind CSS**: Estilos utility-first
- **Material Symbols**: Iconos
- **Lexend Font**: Tipografía moderna

## Próximos Pasos

1. Agregar Vue Router para navegación entre páginas
2. Conectar composables con API real
3. Agregar Pinia para estado global si es necesario
4. Implementar tests unitarios con Vitest
5. Agregar animaciones con Vue Transition
