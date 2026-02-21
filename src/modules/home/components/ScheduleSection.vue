<template>
  <section class="px-4 py-16 sm:py-20 lg:py-24">
    <div class="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
      <div class="flex-1">
        <h2 class="text-3xl font-black text-primary sm:text-4xl">
          Horarios Semanales
        </h2>
        <p class="mt-4 max-w-md text-base text-slate-600 sm:text-lg">
          Acompáñanos en nuestras reuniones semanales para adorar, aprender y convivir como familia.
        </p>

        <div class="mt-8 space-y-4">
          <ScheduleItem
            v-for="event in decoratedSchedule"
            :key="event.id"
            :day="event.day"
            :activity="event.activity"
            :time="event.time"
            :icon="event.icon"
            :tag="event.tag"
          />
        </div>
      </div>

      <div class="w-full flex-1">
        <div class="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
          <img
            :src="imageSrc"
            :alt="imageAlt"
            class="h-full w-full object-cover"
            loading="lazy"
          />
          <div class="absolute inset-0 flex items-end bg-gradient-to-t from-primary/60 to-transparent p-6 sm:p-8">
            <p class="text-base font-medium italic text-white sm:text-lg">
              "Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ScheduleItem from './ScheduleItem.vue'
import { useSchedule } from '../../../composables/useSchedule'
import { computed } from 'vue'

/**
 * Sección de horarios semanales
 * Responsabilidad: Mostrar lista de eventos de la semana
 * Depende de useSchedule (Dependency Injection)
 */
const { scheduleEvents } = useSchedule()

const decoratedSchedule = computed(() =>
  scheduleEvents.value.map((event) => {
    const activity = event.activity.toLowerCase()
    const isStudy = activity.includes('estudio')
    const isYouth = activity.includes('jóvenes')
    return {
      ...event,
      icon: isStudy ? 'menu_book' : isYouth ? 'groups' : 'event',
      tag: isStudy ? 'Híbrido' : 'Presencial',
    }
  })
)

const imageSrc = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO0DT_qlT_4PQANLtlc9dH0lHSXHAMi9PTdygnqNZc0CQyY8VKhn3ous-B3gVBeOTuQa_Tb3ONccmbgMNCnvEbufYNeyoRbmBJKo3CZabkbSSnmMcpG8zo38Drwz4xO1fse2QzMoPrV-7dRRY7we6ThL483IgueTci98ndGDp3LR_WTJZT1Ni1G9cNrDN3LedKeX2117x__xJ9O-uYztsGQLhaiBof1HgYZCxLesSZNghBU5cf_LHCxYDxQ7uz40fhUggPkv180NEq'
const imageAlt = 'Reunión comunitaria en la iglesia'
</script>
