<template>
  <section class="px-4 py-8 md:py-16 bg-background-light dark:bg-background-dark/50">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-center justify-between mb-6 md:mb-8">
        <h2 class="text-[#111418] dark:text-white text-[22px] md:text-3xl font-bold leading-tight tracking-[-0.015em]">
          Horarios Semanales
        </h2>
        <MaterialIcon name="calendar_month" class-name="text-primary text-2xl md:text-3xl" />
      </div>

      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ScheduleItem
          v-for="event in scheduleEvents"
          :key="event.id"
          :day="event.day"
          :activity="event.activity"
          :time="event.time"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import MaterialIcon from '../common/MaterialIcon.vue'
import ScheduleItem from './ScheduleItem.vue'
import { useSchedule } from '../../composables/useSchedule'

/**
 * Sección de horarios semanales
 * Responsabilidad: Mostrar lista de eventos de la semana
 * Depende de useSchedule (Dependency Injection)
 */
const { scheduleEvents } = useSchedule()
</script>
