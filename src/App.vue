<template>
  <router-view />
</template>

<script setup>
import { useDarkMode } from './composables/useDarkMode'

/**
 * Componente raíz de la aplicación
 * Responsabilidad: Inicializar la aplicación y configuración global
 */

// Inicializar modo oscuro
const { isDark } = useDarkMode()
</script>
