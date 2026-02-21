<template>
  <section v-if="course.requirements && course.requirements.length > 0" class="space-y-4">
    <SectionTitle title="Requisitos" size="lg" />
    
    <Card padding="lg">
      <ul class="space-y-3">
        <li
          v-for="(requirement, index) in course.requirements"
          :key="index"
          class="flex items-start gap-3"
        >
          <div class="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
            <MaterialIcon name="check" class-name="text-sm text-primary" />
          </div>
          <span class="flex-1 text-gray-700">
            {{ requirement }}
          </span>
        </li>
      </ul>

      <!-- Additional Note -->
      <div class="mt-6 rounded-lg bg-blue-50 p-4">
        <div class="flex gap-3">
          <MaterialIcon name="info" class-name="text-xl text-blue-600" />
          <div class="flex-1">
            <p class="text-sm font-semibold text-blue-900">
              Nota importante
            </p>
            <p class="mt-1 text-sm text-blue-700">
              Si tienes dudas sobre si cumples con los requisitos, no dudes en contactar al instructor. 
              Estamos aquí para ayudarte en tu crecimiento espiritual.
            </p>
          </div>
        </div>
      </div>
    </Card>
  </section>
</template>

<script setup>
import SectionTitle from '../../../components/shared/ui/SectionTitle.vue'
import Card from '../../../components/shared/ui/Card.vue'
import MaterialIcon from '../../../components/shared/ui/MaterialIcon.vue'

defineProps({
  course: {
    type: Object,
    required: true,
  },
})
</script>
