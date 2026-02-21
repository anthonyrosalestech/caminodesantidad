<template>
  <div class="w-full">
    <!-- Mobile: Dropdown -->
    <div class="md:hidden">
      <div class="relative">
        <MaterialIcon 
          name="category" 
          class-name="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-400 z-10" 
        />
        <select
          :value="modelValue"
          @change="$emit('update:modelValue', $event.target.value)"
          class="w-full appearance-none rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-10 text-[#111418] shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <option 
            v-for="category in categories" 
            :key="category.id" 
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </select>
        <MaterialIcon 
          name="expand_more" 
          class-name="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-400 pointer-events-none" 
        />
      </div>
    </div>

    <!-- Desktop: Tabs -->
    <div class="hidden md:block">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex gap-2 overflow-x-auto" aria-label="Categorías">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="$emit('update:modelValue', category.id)"
            :class="[
              'group inline-flex items-center gap-2 whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium transition-all',
              modelValue === category.id
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            ]"
          >
            <MaterialIcon 
              :name="category.icon" 
              :class-name="[
                'text-xl transition-all',
                modelValue === category.id
                  ? 'text-primary'
                  : 'text-gray-400 group-hover:text-gray-600'
              ]"
            />
            <span>{{ category.name }}</span>
            <span 
              v-if="courseCounts && courseCounts[category.id] !== undefined"
              :class="[
                'ml-1 rounded-full px-2 py-0.5 text-xs font-medium',
                modelValue === category.id
                  ? 'bg-primary/10 text-primary'
                  : 'bg-gray-100 text-gray-600'
              ]"
            >
              {{ courseCounts[category.id] }}
            </span>
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import MaterialIcon from '../../../components/shared/ui/MaterialIcon.vue'
import { useCategories } from '../../../composables/useCategories'

defineProps({
  modelValue: {
    type: String,
    default: 'all',
  },
  courseCounts: {
    type: Object,
    default: null,
  },
})

defineEmits(['update:modelValue'])

const { categories } = useCategories()
</script>
