<template>
  <footer class="bg-primary px-4 py-16 text-white sm:py-20">
    <div class="mx-auto max-w-7xl">
      <div class="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        <!-- Brand -->
        <div class="space-y-6">
          <div class="flex items-center gap-3">
            <MaterialIcon name="church" class-name="text-3xl" />
            <h2 class="text-2xl font-bold tracking-tight">Iglesia Bautista</h2>
          </div>
          <p class="text-sm leading-relaxed text-slate-300">
            Una comunidad unida por el amor de Cristo, dedicada a glorificar a Dios y bendecir a nuestra ciudad.
          </p>
          <div class="flex gap-3">
            <a
              v-for="link in footerLinks.social"
              :key="link.text"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-white/20"
            >
              <MaterialIcon name="social_leaderboard" class-name="text-xl" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="mb-6 text-lg font-bold">Enlaces Rápidos</h3>
          <ul class="space-y-3 text-sm text-slate-300">
            <li v-for="link in footerLinks.main" :key="link.text">
              <component
                :is="link.path ? 'router-link' : 'a'"
                :to="link.path"
                :href="link.href"
                :target="link.href ? '_blank' : undefined"
                class="transition-colors hover:text-white"
              >
                {{ link.text }}
              </component>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="mb-6 text-lg font-bold">Contáctanos</h3>
          <ul class="space-y-3 text-sm text-slate-300">
            <li v-for="link in footerLinks.contact" :key="link.text" class="flex gap-2">
              <MaterialIcon name="location_on" class-name="text-base text-white/70" />
              <component
                :is="link.path ? 'router-link' : 'a'"
                :to="link.path"
                :href="link.href"
                :target="link.href ? '_blank' : undefined"
                class="transition-colors hover:text-white"
              >
                {{ link.text }}
              </component>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="mb-6 text-lg font-bold">Mantente Informado</h3>
          <p class="mb-4 text-sm text-slate-300">Suscríbete para recibir noticias y actualizaciones mensuales.</p>
          <div class="flex gap-2">
            <input
              type="email"
              placeholder="Tu email"
              class="h-10 flex-1 rounded-lg border-transparent bg-white/10 px-3 text-sm text-white placeholder:text-slate-300 focus:border-white focus:ring-0"
            />
            <button class="rounded-lg bg-white px-4 text-sm font-bold text-primary transition-colors hover:bg-slate-100">
              OK
            </button>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-300 md:flex-row">
        <p>© {{ currentYear }} Iglesia Bautista. Todos los derechos reservados.</p>
        <div class="flex gap-6">
          <router-link
            v-for="link in footerLinks.legal"
            :key="link.text"
            :to="link.path"
            class="transition-colors hover:text-white"
          >
            {{ link.text }}
          </router-link>
        </div>
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
