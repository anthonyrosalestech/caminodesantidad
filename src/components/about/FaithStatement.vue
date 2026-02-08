<template>
  <section class="py-12 md:py-20 bg-white dark:bg-background-dark">
    <div class="max-w-4xl mx-auto px-4">
      <SectionTitle title="Declaración de Fe" size="xl" class="text-center mb-4" />
      <p class="text-center text-gray-600 dark:text-gray-300 mb-12">
        Las verdades bíblicas que creemos y confesamos
      </p>

      <div class="space-y-6">
        <Card
          v-for="statement in faithStatements"
          :key="statement.id"
          padding="lg"
        >
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                <MaterialIcon :name="statement.icon" class-name="text-2xl" />
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold text-[#111418] dark:text-white mb-2">
                {{ statement.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ statement.description }}
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
import Card from '../common/Card.vue'
import SectionTitle from '../common/SectionTitle.vue'
import MaterialIcon from '../common/MaterialIcon.vue'

/**
 * Declaración de fe
 * Responsabilidad: Mostrar principios doctrinales
 */
const faithStatements = ref([
  {
    id: 1,
    title: 'La Biblia',
    description: 'Creemos que la Biblia es la Palabra de Dios, inspirada e infalible, y es nuestra única regla de fe y conducta.',
    icon: 'menu_book',
  },
  {
    id: 2,
    title: 'La Trinidad',
    description: 'Creemos en un solo Dios que existe eternamente en tres personas: Padre, Hijo y Espíritu Santo.',
    icon: 'account_balance',
  },
  {
    id: 3,
    title: 'Jesucristo',
    description: 'Creemos que Jesucristo es el Hijo de Dios, totalmente Dios y totalmente hombre, quien murió por nuestros pecados y resucitó al tercer día.',
    icon: 'church',
  },
  {
    id: 4,
    title: 'La Salvación',
    description: 'Creemos que la salvación es por gracia mediante la fe en Jesucristo, no por obras, y está disponible para todos.',
    icon: 'favorite',
  },
  {
    id: 5,
    title: 'El Espíritu Santo',
    description: 'Creemos en el Espíritu Santo quien convence, regenera, habita, guía, enseña y capacita al creyente para vivir una vida santa.',
    icon: 'air',
  },
  {
    id: 6,
    title: 'La Iglesia',
    description: 'Creemos que la iglesia es el cuerpo de Cristo, compuesta por todos los creyentes, llamada a adorar, edificar y evangelizar.',
    icon: 'groups',
  },
  {
    id: 7,
    title: 'El Bautismo y la Cena del Señor',
    description: 'Creemos en la práctica del bautismo por inmersión de creyentes y la celebración de la Cena del Señor como ordenanzas dadas por Cristo.',
    icon: 'water_drop',
  },
  {
    id: 8,
    title: 'El Regreso de Cristo',
    description: 'Creemos en el regreso personal y visible de Jesucristo para juzgar al mundo y establecer su reino eterno.',
    icon: 'wb_twilight',
  },
])
</script>
