<template>
  <button
    :class="computedClasses"
    @click="handleClick"
    :disabled="disabled"
  >
    <slot>
      {{ text }}
    </slot>
  </button>
</template>

<script setup>
import { computed } from 'vue'

/**
 * Botón reutilizable con variantes
 * Siguiendo principio de Open/Closed (OCP)
 */
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'ghost'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['click'])

const variantClasses = {
  primary: 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90',
  secondary: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20',
  ghost: 'bg-transparent text-primary hover:bg-primary/10',
}

const sizeClasses = {
  sm: 'h-10 text-sm',
  md: 'h-12 text-base',
  lg: 'h-14 text-lg',
}

const computedClasses = computed(() => [
  'flex cursor-pointer items-center justify-center rounded-xl font-bold leading-normal tracking-[0.015em] transition-all duration-200',
  variantClasses[props.variant],
  sizeClasses[props.size],
  props.fullWidth ? 'w-full' : '',
  props.disabled ? 'opacity-50 cursor-not-allowed' : '',
])

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>
