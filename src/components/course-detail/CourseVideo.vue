<template>
  <div class="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-900 shadow-2xl">
    <!-- Video Player (if videoUrl exists) -->
    <iframe
      v-if="course.videoUrl"
      :src="course.videoUrl"
      :title="`Video de ${course.title}`"
      class="h-full w-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <!-- Thumbnail Fallback -->
    <div
      v-else
      class="relative h-full w-full"
    >
      <img
        :src="course.thumbnail"
        :alt="course.altText || course.title"
        class="h-full w-full object-cover"
      />
      
      <!-- Play Button Overlay -->
      <div class="absolute inset-0 flex items-center justify-center bg-black/30 transition-all hover:bg-black/40">
        <button
          @click="$emit('play')"
          class="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-xl transition-all hover:scale-110 hover:bg-white"
          aria-label="Reproducir video"
        >
          <MaterialIcon name="play_arrow" class-name="text-5xl text-primary" />
        </button>
      </div>
    </div>

    <!-- Course Badge (Featured) -->
    <div
      v-if="course.featured"
      class="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-accent-gold px-3 py-1.5 text-sm font-semibold text-white shadow-lg"
    >
      <MaterialIcon name="stars" class-name="text-lg" />
      <span>Destacado</span>
    </div>
  </div>
</template>

<script setup>
import MaterialIcon from '../common/MaterialIcon.vue'

defineProps({
  course: {
    type: Object,
    required: true,
  },
})

defineEmits(['play'])
</script>
