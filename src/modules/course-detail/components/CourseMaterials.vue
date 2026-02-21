<template>
  <section v-if="course.materials && course.materials.length > 0" class="space-y-4">
    <SectionTitle title="Materiales del Curso" size="lg" />
    
    <Card padding="lg">
      <div class="space-y-3">
        <a
          v-for="(material, index) in course.materials"
          :key="index"
          :href="material.url"
          :download="material.name"
          class="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition-all hover:border-primary hover:bg-gray-50"
        >
          <div class="flex items-center gap-4">
            <!-- File Icon -->
            <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <MaterialIcon 
                :name="getFileIcon(material.type)"
                class-name="text-2xl text-primary"
              />
            </div>

            <!-- File Info -->
            <div>
              <h4 class="font-semibold text-[#111418]">
                {{ material.name }}
              </h4>
              <p class="text-sm text-gray-500">
                {{ material.type }} • {{ material.size }}
              </p>
            </div>
          </div>

          <!-- Download Button -->
          <button
            class="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-transform hover:scale-110"
            :aria-label="`Descargar ${material.name}`"
          >
            <MaterialIcon name="download" class-name="text-xl" />
          </button>
        </a>
      </div>

      <!-- Info Banner -->
      <div class="mt-6 rounded-lg bg-green-50 p-4">
        <div class="flex gap-3">
          <MaterialIcon name="verified" class-name="text-xl text-green-600" />
          <div class="flex-1">
            <p class="text-sm font-semibold text-green-900">
              Acceso gratuito a todos los materiales
            </p>
            <p class="mt-1 text-sm text-green-700">
              Todos los recursos están disponibles para descargar sin costo alguno. 
              Podrás acceder a ellos en cualquier momento, incluso después de completar el curso.
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

const getFileIcon = (type) => {
  const icons = {
    PDF: 'picture_as_pdf',
    DOC: 'description',
    DOCX: 'description',
    XLS: 'table_chart',
    XLSX: 'table_chart',
    PPT: 'slideshow',
    PPTX: 'slideshow',
    ZIP: 'folder_zip',
    MP4: 'videocam',
    MP3: 'audiotrack',
  }
  return icons[type.toUpperCase()] || 'insert_drive_file'
}
</script>
