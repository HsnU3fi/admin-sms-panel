<template>
  <section class="sample-form grid items-end grid-cols-1 gap-10 md:grid-cols-2 py-4">
    <section class="form-item">
      <label>Name on credit card</label>
      <el-input v-model="credit.name" />
    </section>
    <section class="form-item">
      <label>Credit card number</label>
      <el-input v-model="credit.number" type="number" />
    </section>
    <section class="form-item grid grid-cols-2 gap-3">
      <label class="col-span-full text-Gray-b2">Expire date</label>
      <section>
      <label>Month</label>
      <el-input v-model="credit.expireMonth" type="number" min="1" max="12" />
      </section>
      <section>
      <label>Year</label>
      <el-input v-model="credit.expireYear" type="number" min="1999" />
      </section>
    </section>
    <section class="form-item">
      <label>Cvv</label>
      <el-input v-model="credit.cvv" type="number" />
    </section>
    <section class="form-item">
      <label>Country</label>
      <el-select v-model="credit.country" >
        <el-option v-for="item in countries" :label="item" :value="item" />
      </el-select>
    </section>
    <section class="form-item">
      <label>Street address</label>
      <el-input v-model="credit.street" type="number" />
    </section>
    <section class="form-item">
      <label>Postal code</label>
      <el-input v-model="credit.postal" type="number" />
    </section>
    <section class="col-span-full flex justify-start">
      <el-button class="btn btn-primary w-32">
        Add card
      </el-button>
    </section>
  </section>
</template>

<script setup>
const credit = reactive({
  name: '',
  number: '',
  expireMonth: '',
  expireYear: '',
  cvv: '',
  country: '',
  street: '',
  postal: ''
})
const countries = ['USA', 'Germany', 'Italia', 'Russia']
</script>

<style scoped>

</style>