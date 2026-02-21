<template>
  <footer class="bg-[#111418] text-white p-8 md:p-12 pt-4">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row md:justify-between gap-8 md:gap-12">
        <!-- Branding -->
        <div class="flex flex-col gap-4 md:max-w-md">
          <div class="flex items-center gap-2">
            <MaterialIcon name="church" class-name="text-accent-gold text-3xl" />
            <h3 class="text-xl md:text-2xl font-bold">Iglesia Bautista</h3>
          </div>
          <p class="text-gray-400 text-sm md:text-base">
            Conectando personas con Dios y su propósito eterno.
          </p>
        </div>

        <!-- Links -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="flex flex-col gap-3">
            <h4 class="font-bold text-white">Enlaces</h4>
            <component
              v-for="link in footerLinks.main"
              :key="link.text"
              :is="link.path ? 'router-link' : 'a'"
              :to="link.path"
              :href="link.href"
              :target="link.href ? '_blank' : undefined"
              class="text-gray-400 text-sm hover:text-white transition-colors"
            >
              {{ link.text }}
            </component>
          </div>

          <div class="flex flex-col gap-3">
            <h4 class="font-bold text-white">Contacto</h4>
            <component
              v-for="link in footerLinks.contact"
              :key="link.text"
              :is="link.path ? 'router-link' : 'a'"
              :to="link.path"
              :href="link.href"
              :target="link.href ? '_blank' : undefined"
              class="text-gray-400 text-sm hover:text-white transition-colors"
            >
              {{ link.text }}
            </component>
          </div>

          <div class="flex flex-col gap-3">
            <h4 class="font-bold text-white">Redes</h4>
            <a
              v-for="link in footerLinks.social"
              :key="link.text"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 text-sm hover:text-white transition-colors"
            >
              {{ link.text }}
            </a>
          </div>

          <div class="flex flex-col gap-3">
            <h4 class="font-bold text-white">Legal</h4>
            <router-link
              v-for="link in footerLinks.legal"
              :key="link.text"
              :to="link.path"
              class="text-gray-400 text-sm hover:text-white transition-colors"
            >
              {{ link.text }}
            </router-link>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-8 mt-8 border-t border-gray-800 text-center text-gray-500 text-xs md:text-sm">
        <p>© {{ currentYear }} Iglesia Bautista. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import MaterialIcon from '../ui/MaterialIcon.vue'
import { footerLinks } from '../../../constants/navigation'

/**
 * Footer del sitio
 * Responsabilidad: Links de navegación y copyright
 */
const currentYear = computed(() => new Date().getFullYear())
</script>
