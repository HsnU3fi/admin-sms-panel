<template>
  <section>
    <client-only>
      <section class="animate__animated animate__zoomIn">
        <h2 class="text-sm lg:text-base text-Gray-b3 font-normal">Voip Users</h2>
        <apexchart :options="options" type="line" :series="options.series" height="280px"/>
      </section>
    </client-only>
  </section>
</template>

<script setup>
const options = ref({
  labels: ['users'],
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  chart: {
    height: '100px'
  },
  series: [{
    data: [
      { x: "1999", y: 50 },
      { x: "2000", y: 60 },
      { x: "2001", y: 70 },
      { x: "2002", y: 85 },
      { x: "2003", y: 100 },
      { x: "2004", y: 140 },
      { x: "2005", y: 200 },
      { x: "2006", y: 300 },
      { x: "2007", y: 500 },
    ]
  }]
})
</script>

<style scoped>

</style>