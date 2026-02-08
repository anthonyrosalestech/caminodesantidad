<template>
  <div class="flex flex-col gap-3 group cursor-pointer" @click="$emit('click', course)">
    <!-- Video Thumbnail -->
    <div class="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
      <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
        <MaterialIcon name="play_circle" class-name="text-white text-5xl" />
      </div>
      <div
        class="h-full w-full bg-cover bg-center"
        :style="{ backgroundImage: `url(${course.thumbnail})` }"
        :data-alt="course.altText"
      ></div>
    </div>

    <!-- Course Info -->
    <div class="flex flex-col gap-1">
      <h3 class="text-[#111418] dark:text-white font-bold text-lg">
        {{ course.title }}
      </h3>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        {{ course.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import MaterialIcon from '../common/MaterialIcon.vue'

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
