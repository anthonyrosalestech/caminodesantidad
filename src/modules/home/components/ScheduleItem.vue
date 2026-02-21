<template>
  <div
    class="flex items-center justify-between p-4 bg-white dark:bg-background-dark rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
  >
    <div class="flex flex-col">
      <span class="text-sm font-bold text-primary uppercase tracking-wider">
        {{ day }}
      </span>
      <span class="text-[#111418] dark:text-white font-medium">
        {{ activity }}
      </span>
    </div>
    <div class="text-right">
      <span class="text-[#111418] dark:text-white font-bold">
        {{ time }}
      </span>
    </div>
  </div>
</template>

<script setup>
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
})
</script>
