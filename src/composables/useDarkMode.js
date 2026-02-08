import { ref, onMounted } from 'vue'

/**
 * Composable para manejar el tema oscuro/claro
 * Responsabilidad: Gestionar el estado del tema y persistirlo
 * 
 * @returns {Object} Estado y funciones del tema
 */
export function useDarkMode() {
  const isDark = ref(false)

  // Inicializar tema desde localStorage o preferencia del sistema
  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: light)').matches

    isDark.value = savedTheme === 'dark' || (!savedTheme && prefersDark)
    applyTheme()
  }

  // Aplicar tema al HTML
  const applyTheme = () => {
    const html = document.documentElement
    if (isDark.value) {
      html.classList.add('dark')
      html.classList.remove('light')
    } else {
      html.classList.add('light')
      html.classList.remove('dark')
    }
  }

  // Toggle tema
  const toggleTheme = () => {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    applyTheme()
  }

  onMounted(() => {
    initTheme()
  })

  return {
    isDark,
    toggleTheme,
  }
}
