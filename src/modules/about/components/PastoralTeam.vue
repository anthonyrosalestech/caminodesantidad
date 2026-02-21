<template>
  <section class="py-12 md:py-20 bg-background-light">
    <div class="max-w-7xl mx-auto px-4">
      <SectionTitle title="Equipo Pastoral" size="xl" class="text-center mb-4" />
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Conoce a los líderes comprometidos que sirven a nuestra congregación
      </p>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <Card
          v-for="member in team"
          :key="member.id"
          padding="lg"
          class="text-center"
        >
          <div class="flex flex-col items-center gap-4">
            <!-- Foto -->
            <div class="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
              <img
                :src="member.image"
                :alt="member.name"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <!-- Info -->
            <div>
              <h3 class="text-lg font-bold text-[#111418] mb-1">
                {{ member.name }}
              </h3>
              <p class="text-sm font-semibold text-primary mb-3">
                {{ member.role }}
              </p>
              <p class="text-sm text-gray-600 mb-4">
                {{ member.description }}
              </p>

              <!-- Contacto -->
              <div class="flex flex-col gap-2 text-xs text-gray-500">
                <a :href="`mailto:${member.email}`" class="hover:text-primary transition-colors flex items-center justify-center gap-1">
                  <MaterialIcon name="email" class-name="text-sm" />
                  <span>{{ member.email }}</span>
                </a>
                <a :href="`tel:${member.phone}`" class="hover:text-primary transition-colors flex items-center justify-center gap-1">
                  <MaterialIcon name="phone" class-name="text-sm" />
                  <span>{{ member.phone }}</span>
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from '../../../components/shared/ui/Card.vue'
import SectionTitle from '../../../components/shared/ui/SectionTitle.vue'
import MaterialIcon from '../../../components/shared/ui/MaterialIcon.vue'
import { useTeam } from '../../../composables/useTeam'

/**
 * Grid del equipo pastoral
 * Responsabilidad: Mostrar miembros del equipo
 */
const { team } = useTeam()
</script>
