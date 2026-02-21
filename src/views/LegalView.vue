<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
    <NavBar @toggle-menu="handleMenuToggle" />
    
    <PageHero
      :title="pageTitle"
      :subtitle="pageSubtitle"
      icon="policy"
    />

    <div class="max-w-4xl mx-auto px-4 py-12">
      <Card padding="lg">
        <div class="prose prose-lg max-w-none">
          <div v-if="type === 'privacy'">
            <h2 class="text-2xl font-bold mb-4">Política de Privacidad</h2>
            <p class="mb-4 text-gray-600">
              En Iglesia Bautista, nos comprometemos a proteger tu privacidad. Esta política describe cómo recopilamos, usamos y protegemos tu información personal.
            </p>
            <h3 class="text-xl font-bold mb-3 mt-6">Información que Recopilamos</h3>
            <p class="mb-4 text-gray-600">
              Podemos recopilar información personal cuando te registras, donas, o te comunicas con nosotros.
            </p>
            <h3 class="text-xl font-bold mb-3 mt-6">Uso de la Información</h3>
            <p class="mb-4 text-gray-600">
              Utilizamos tu información para proporcionarte servicios, comunicarnos contigo y mejorar nuestra plataforma.
            </p>
            <h3 class="text-xl font-bold mb-3 mt-6">Protección de Datos</h3>
            <p class="mb-4 text-gray-600">
              Implementamos medidas de seguridad para proteger tu información personal contra acceso no autorizado.
            </p>
          </div>

          <div v-else-if="type === 'terms'">
            <h2 class="text-2xl font-bold mb-4">Términos de Uso</h2>
            <p class="mb-4 text-gray-600">
              Al acceder y usar este sitio web, aceptas cumplir con estos términos y condiciones.
            </p>
            <h3 class="text-xl font-bold mb-3 mt-6">Uso del Sitio</h3>
            <p class="mb-4 text-gray-600">
              Este sitio es para uso personal y no comercial. No debes usar el sitio para fines ilegales.
            </p>
            <h3 class="text-xl font-bold mb-3 mt-6">Propiedad Intelectual</h3>
            <p class="mb-4 text-gray-600">
              Todo el contenido del sitio es propiedad de Iglesia Bautista y está protegido por leyes de derechos de autor.
            </p>
            <h3 class="text-xl font-bold mb-3 mt-6">Limitación de Responsabilidad</h3>
            <p class="mb-4 text-gray-600">
              No nos hacemos responsables de daños que puedan surgir del uso de este sitio web.
            </p>
          </div>

          <div class="mt-8 pt-8 border-t border-gray-200">
            <p class="text-sm text-gray-500">
              Última actualización: Febrero 2026
            </p>
          </div>
        </div>
      </Card>
    </div>

    <FooterSection />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import NavBar from '../components/shared/layout/NavBar.vue'
import FooterSection from '../components/shared/layout/FooterSection.vue'
import PageHero from '../components/shared/ui/PageHero.vue'
import Card from '../components/shared/ui/Card.vue'

const props = defineProps({
  type: {
    type: String,
    default: 'privacy',
    validator: (value) => ['privacy', 'terms'].includes(value),
  },
})

const handleMenuToggle = (isOpen) => console.log('Menu toggled:', isOpen)

const pageTitle = computed(() => {
  return props.type === 'privacy' ? 'Política de Privacidad' : 'Términos de Uso'
})

const pageSubtitle = computed(() => {
  return props.type === 'privacy' 
    ? 'Cómo protegemos tu información' 
    : 'Condiciones de uso del sitio web'
})
</script>
