<template>
  <section class="py-12 md:py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <SectionTitle title="Nuestra Historia" size="xl" class="text-center mb-12" />

      <div class="relative">
        <!-- Línea vertical del timeline (desktop) -->
        <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

        <div class="space-y-12">
          <div
            v-for="(event, index) in historyEvents"
            :key="event.id"
            class="relative"
          >
            <!-- Contenedor del evento -->
            <div
              class="flex flex-col md:flex-row gap-8 items-center"
              :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
            >
              <!-- Año -->
              <div class="md:w-5/12 text-center md:text-right" :class="index % 2 === 0 ? 'md:text-right' : 'md:text-left'">
                <span class="inline-block text-4xl md:text-5xl font-black text-primary">
                  {{ event.year }}
                </span>
              </div>

              <!-- Punto central -->
              <div class="hidden md:flex w-2/12 justify-center">
                <div class="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white shadow-lg">
                  <MaterialIcon :name="event.icon" class-name="text-2xl" />
                </div>
              </div>

              <!-- Contenido -->
              <Card class="md:w-5/12" padding="lg">
                <div class="flex items-start gap-4">
                  <div class="flex md:hidden items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <MaterialIcon :name="event.icon" />
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-bold text-[#111418] mb-2">
                      {{ event.title }}
                    </h3>
                    <p class="text-gray-600">
                      {{ event.description }}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from '../../../components/shared/ui/Card.vue'
import SectionTitle from '../../../components/shared/ui/SectionTitle.vue'
import MaterialIcon from '../../../components/shared/ui/MaterialIcon.vue'
import { useHistory } from '../../../composables/useHistory'

/**
 * Sección de historia con timeline
 * Responsabilidad: Mostrar cronología de la iglesia
 */
const { historyEvents } = useHistory()
</script>
