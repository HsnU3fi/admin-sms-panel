<template>
  <section>
  <client-only>
    <section class="animate__animated animate__rollIn">
      <h2 class="text-sm lg:text-base text-Gray-b3 font-normal">Amount</h2>
      <apexchart :options="options" type="bar" :series="options.series" height="280px"/>
    </section>
  </client-only>
  </section>
</template>

<script setup>
const options = ref({
  labels: ['Sms panel', 'Voip', 'Cloud', 'Builder'],
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  chart: {
    height: '100px'
  },
  series: [{
    data: [{
      x: 'Sms panel',
      y: 10
    }, {
      x: 'Voip',
      y: 18
    }, {
      x: 'Cloud',
      y: 13
    }, {
      x: 'Builder',
      y: 25
    }]
  }]
})
</script>

<style scoped>

</style>