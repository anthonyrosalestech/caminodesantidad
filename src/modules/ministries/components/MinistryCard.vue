<template>
  <Card 
    padding="none"
    clickable
    class="group overflow-hidden transition-all duration-300 hover:shadow-2xl"
  >
    <!-- Image -->
    <div class="relative h-48 w-full overflow-hidden bg-gray-200">
      <img
        :src="ministry.image"
        :alt="ministry.name"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <!-- Overlay Gradient -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      
      <!-- Icon Badge -->
      <div class="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm">
        <MaterialIcon :name="ministry.icon" class-name="text-2xl text-primary" />
      </div>

      <!-- Age Range Badge -->
      <div v-if="ministry.ageRange" class="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur-sm">
        {{ ministry.ageRange }}
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <!-- Title -->
      <h3 class="mb-2 text-xl font-bold text-[#111418]">
        {{ ministry.name }}
      </h3>

      <!-- Short Description -->
      <p class="mb-4 line-clamp-2 text-sm text-gray-600">
        {{ ministry.shortDescription }}
      </p>

      <!-- Leader Info -->
      <div class="mb-4 flex items-center gap-3 border-t border-gray-100 pt-4">
        <div class="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
          <img
            v-if="ministry.leader.photo"
            :src="ministry.leader.photo"
            :alt="ministry.leader.name"
            class="h-full w-full object-cover"
          />
        </div>
        <div class="flex-1">
          <p class="text-xs text-gray-500">Líder</p>
          <p class="text-sm font-medium text-[#111418]">
            {{ ministry.leader.name }}
          </p>
        </div>
      </div>

      <!-- Schedule Preview -->
      <div v-if="ministry.schedule && ministry.schedule.length > 0" class="mb-4">
        <div class="flex items-center gap-2 text-sm text-gray-600">
          <MaterialIcon name="schedule" class-name="text-lg" />
          <span>{{ ministry.schedule[0].day }} • {{ ministry.schedule[0].time }}</span>
        </div>
      </div>

      <!-- View Details Button -->
      <button
        @click="$emit('view-details', ministry)"
        class="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-primary/90"
      >
        <span>Ver Detalles</span>
        <MaterialIcon name="arrow_forward" class-name="text-lg transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  </Card>
</template>

<script setup>
import Card from '../../../components/shared/ui/Card.vue'
import MaterialIcon from '../../../components/shared/ui/MaterialIcon.vue'

defineProps({
  ministry: {
    type: Object,
    required: true,
  },
})

defineEmits(['view-details'])
</script>
