<template>
  <section class="space-y-4">
    <SectionTitle title="Descripción del Curso" size="lg" />
    
    <Card padding="lg">
      <div class="prose prose-lg max-w-none dark:prose-invert">
        <p class="text-gray-700 dark:text-gray-300">
          {{ course.fullDescription || course.description }}
        </p>
      </div>
    </Card>
  </section>
</template>

<script setup>
import SectionTitle from '../../../components/shared/ui/SectionTitle.vue'
import Card from '../../../components/shared/ui/Card.vue'

defineProps({
  course: {
    type: Object,
    required: true,
  },
})
</script>
