<template>
  <div class="group flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:border-primary/30">
    <div class="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
      <MaterialIcon :name="icon" class-name="text-3xl" />
    </div>
    <div class="flex-1">
      <h3 class="text-lg font-bold text-primary">
        {{ activity }}
      </h3>
      <p class="text-sm text-slate-500">
        {{ day }} • {{ time }}
      </p>
    </div>
    <span
      v-if="tag"
      class="rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
    >
      {{ tag }}
    </span>
  </div>
</template>

<script setup>
import MaterialIcon from '../../../components/shared/ui/MaterialIcon.vue'
/**
 * Componente individual de horario
 * Responsabilidad única: Mostrar un evento del calendario
 */
defineProps({
  day: {
    type: String,
    required: true,
  },
  activity: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: 'event',
  },
  tag: {
    type: String,
    default: '',
  },
})
</script>
