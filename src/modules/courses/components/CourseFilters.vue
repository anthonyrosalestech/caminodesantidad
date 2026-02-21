<template>
  <div class="space-y-4 md:space-y-0 md:flex md:gap-4 md:items-end">
    <!-- Category Filter -->
    <div class="flex-1">
      <label class="mb-2 block text-sm font-medium text-gray-700">
        Categoría
      </label>
      <div class="relative">
        <MaterialIcon 
          name="category" 
          class-name="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-400" 
        />
        <select
          :value="modelValue.category"
          @change="$emit('update:modelValue', { ...modelValue, category: $event.target.value })"
          class="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-10 text-[#111418] shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <option value="all">Todas las categorías</option>
          <option value="biblical">Estudios Bíblicos</option>
          <option value="spiritual-life">Vida Espiritual</option>
          <option value="theology">Teología</option>
          <option value="family">Familia</option>
          <option value="leadership">Liderazgo</option>
          <option value="evangelism">Evangelismo</option>
        </select>
        <MaterialIcon 
          name="expand_more" 
          class-name="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-400 pointer-events-none" 
        />
      </div>
    </div>

    <!-- Level Filter -->
    <div class="flex-1">
      <label class="mb-2 block text-sm font-medium text-gray-700">
        Nivel
      </label>
      <div class="relative">
        <MaterialIcon 
          name="signal_cellular_alt" 
          class-name="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-400" 
        />
        <select
          :value="modelValue.level"
          @change="$emit('update:modelValue', { ...modelValue, level: $event.target.value })"
          class="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-10 text-[#111418] shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <option value="all">Todos los niveles</option>
          <option value="beginner">Principiante</option>
          <option value="intermediate">Intermedio</option>
          <option value="advanced">Avanzado</option>
        </select>
        <MaterialIcon 
          name="expand_more" 
          class-name="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-400 pointer-events-none" 
        />
      </div>
    </div>

    <!-- Duration Filter -->
    <div class="flex-1">
      <label class="mb-2 block text-sm font-medium text-gray-700">
        Duración
      </label>
      <div class="relative">
        <MaterialIcon 
          name="schedule" 
          class-name="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-400" 
        />
        <select
          :value="modelValue.duration"
          @change="$emit('update:modelValue', { ...modelValue, duration: $event.target.value })"
          class="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-10 text-[#111418] shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <option value="all">Todas las duraciones</option>
          <option value="short">Corto (menos de 8 semanas)</option>
          <option value="medium">Medio (8-16 semanas)</option>
          <option value="long">Largo (más de 16 semanas)</option>
        </select>
        <MaterialIcon 
          name="expand_more" 
          class-name="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-400 pointer-events-none" 
        />
      </div>
    </div>

    <!-- Clear Filters Button -->
    <button
      v-if="hasActiveFilters"
      @click="$emit('clear')"
      class="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
    >
      <MaterialIcon name="filter_alt_off" class-name="text-lg" />
      <span class="hidden sm:inline">Limpiar</span>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import MaterialIcon from '../../../components/shared/ui/MaterialIcon.vue'

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
})

defineEmits(['update:modelValue', 'clear'])

const hasActiveFilters = computed(() => {
  return props.modelValue.category !== 'all' || 
         props.modelValue.level !== 'all' || 
         props.modelValue.duration !== 'all'
})
</script>
