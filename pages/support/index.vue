<template>
    <section>
        <Slider />
        <Dashboard title="Open Ticket">
            <section class="grid grid-cols-1 md:grid-cols-3 gap-5">
                <nuxt-link to="/support/new" v-for="part in parts" class="flex items-start gap-3 text-base font-normal">
                    <i class="isax isax-message text-xl" />
                    {{  part }}
                </nuxt-link>
            </section>
        </Dashboard>
    </section>
</template>
<script setup>
import Dashboard from '@/components/Base/Card/Dashboard.vue'
import Slider from '@/components/TheDashboard/Slider.vue'
definePageMeta({
    layout: 'dashboard'
})
const parts = ref([ 'Financial', 'Support', 'Sales'])
</script>