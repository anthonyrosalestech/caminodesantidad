<template>
  <section class="py-12 md:py-20 bg-background-light dark:bg-background-dark/50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
        <!-- Misión -->
        <Card padding="lg" class="text-center md:text-left">
          <div class="flex flex-col items-center md:items-start gap-4">
            <div class="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
              <MaterialIcon name="flag" class-name="text-3xl" />
            </div>
            <div>
              <h3 class="text-2xl md:text-3xl font-bold text-[#111418] dark:text-white mb-4">
                {{ missionStatement.title }}
              </h3>
              <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ missionStatement.description }}
              </p>
            </div>
          </div>
        </Card>

        <!-- Visión -->
        <Card padding="lg" class="text-center md:text-left">
          <div class="flex flex-col items-center md:items-start gap-4">
            <div class="flex items-center justify-center w-16 h-16 rounded-full bg-accent-gold/10 text-accent-gold">
              <MaterialIcon name="visibility" class-name="text-3xl" />
            </div>
            <div>
              <h3 class="text-2xl md:text-3xl font-bold text-[#111418] dark:text-white mb-4">
                {{ visionStatement.title }}
              </h3>
              <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ visionStatement.description }}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from '../../../components/shared/ui/Card.vue'
import MaterialIcon from '../../../components/shared/ui/MaterialIcon.vue'
import { useHistory } from '../../../composables/useHistory'

/**
 * Cards de Misión y Visión
 * Responsabilidad: Mostrar declaraciones de misión y visión
 */
const { missionStatement, visionStatement } = useHistory()
</script>
