<template>
  <section>
    <client-only>
      <section class="animate__animated animate__zoomIn">
        <h2 class="text-sm lg:text-base text-Gray-b3 font-normal">User panel Users</h2>
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
      { x: "1999", y: 90 },
      { x: "2000", y: 80 },
      { x: "2001", y: 80 },
      { x: "2002", y: 80 },
      { x: "2003", y: 90 },
      { x: "2004", y: 110 },
      { x: "2005", y: 700 },
      { x: "2006", y: 750 },
      { x: "2007", y: 800 },
    ]
  }]
})
</script>

<style scoped>

</style>