<template>
  <div
    class="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
    :class="[paddingClass, clickableClass]"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

/**
 * Card base reutilizable
 * Responsabilidad: Contenedor con estilo consistente
 */
const props = defineProps({
  padding: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'none'].includes(value),
  },
  clickable: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])

const paddingClass = computed(() => {
  const paddings = {
    none: '',
    sm: 'p-3',
    md: 'p-4 md:p-6',
    lg: 'p-6 md:p-8',
  }
  return paddings[props.padding]
})

const clickableClass = computed(() => 
  props.clickable ? 'cursor-pointer hover:scale-[1.02]' : ''
)

const handleClick = () => {
  if (props.clickable) {
    emit('click')
  }
}
</script>
