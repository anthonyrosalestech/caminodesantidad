<template>
  <div
    class="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-md transition-all hover:shadow-xl"
    @click="$emit('click', course)"
  >
    <div class="relative h-48 overflow-hidden">
      <img
        :src="course.thumbnail"
        :alt="course.altText || course.title"
        class="h-full w-full object-cover"
        loading="lazy"
      />
      <div v-if="course.badge" class="absolute left-4 top-4">
        <span class="rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
          {{ course.badge }}
        </span>
      </div>
    </div>
    <div class="p-6">
      <h3 class="mb-2 text-xl font-bold text-primary">
        {{ course.title }}
      </h3>
      <p class="mb-6 text-sm leading-relaxed text-slate-600">
        {{ course.description }}
      </p>
      <div class="flex items-center justify-between border-t border-slate-100 pt-4">
        <span class="flex items-center gap-1 text-xs text-slate-500">
          <MaterialIcon name="schedule" class-name="text-sm" />
          {{ course.duration }}
        </span>
        <button
          type="button"
          class="text-sm font-bold text-primary transition-colors hover:text-primary/80"
          @click.stop="$emit('click', course)"
        >
          Más Información
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import MaterialIcon from '../../../components/shared/ui/MaterialIcon.vue'

/**
 * Tarjeta de curso individual
 * Responsabilidad única: Mostrar información de un curso
 */
defineProps({
  course: {
    type: Object,
    required: true,
    validator: (value) => {
      return value.id && value.title && value.description && value.thumbnail
    },
  },
})

defineEmits(['click'])
</script>
