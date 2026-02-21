<template>
  <section class="py-12 md:py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <SectionTitle title="Nuestros Valores" size="xl" class="text-center mb-4" />
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Los principios fundamentales que guían nuestro servicio y ministerio
      </p>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <Card
          v-for="value in values"
          :key="value.id"
          padding="lg"
          class="text-center hover:border-primary/50 transition-colors"
        >
          <div class="flex flex-col items-center gap-4">
            <div class="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary">
              <MaterialIcon :name="value.icon" class-name="text-4xl" />
            </div>
            <div>
              <h3 class="text-xl font-bold text-[#111418] mb-2">
                {{ value.title }}
              </h3>
              <p class="text-gray-600">
                {{ value.description }}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Card from '../../../components/shared/ui/Card.vue'
import SectionTitle from '../../../components/shared/ui/SectionTitle.vue'
import MaterialIcon from '../../../components/shared/ui/MaterialIcon.vue'

/**
 * Grid de valores fundamentales
 * Responsabilidad: Mostrar los valores de la iglesia
 */
const values = ref([
  {
    id: 1,
    title: 'Fe',
    description: 'Confiamos plenamente en Dios y su Palabra como fundamento de nuestra vida.',
    icon: 'workspace_premium',
  },
  {
    id: 2,
    title: 'Amor',
    description: 'Amamos a Dios sobre todas las cosas y a nuestro prójimo como a nosotros mismos.',
    icon: 'favorite',
  },
  {
    id: 3,
    title: 'Servicio',
    description: 'Servimos con humildad y generosidad, siguiendo el ejemplo de Cristo.',
    icon: 'volunteer_activism',
  },
  {
    id: 4,
    title: 'Comunidad',
    description: 'Valoramos las relaciones auténticas y el crecimiento juntos en familia.',
    icon: 'diversity_3',
  },
  {
    id: 5,
    title: 'Excelencia',
    description: 'Hacemos todo con excelencia, dando lo mejor para la gloria de Dios.',
    icon: 'star',
  },
  {
    id: 6,
    title: 'Integridad',
    description: 'Vivimos con transparencia, honestidad y coherencia entre fe y práctica.',
    icon: 'verified',
  },
])
</script>
