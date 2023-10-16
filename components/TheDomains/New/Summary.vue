<template>
  <section class="p-3 rounded-lg border border-Gray-b7">
    <h1 class="text-center text-lg text-Gray-b2">Order Summary</h1>
    <section class="mt-4 border border-Gray-b7 rounded-lg">
      <section class="p-3">
        <section class="flex items-center gap-1">
          <h2 class="text-base text-Gray-b3">Alibaba.com</h2>
          <el-button class="btn" text>
            <i class="isax isax-trash"/>
          </el-button>
          <p class="ml-auto text-Gray-b6 font-medium text-base">$12.99</p>
        </section>
        <p class="mt-2 font-medium text-sm"><b>1-year</b> transfer</p>
        <section class="flex items-center gap-1 mt-2">
          <h2 class="text-base text-Gray-b3">Domain privacy</h2>
          <p class="ml-auto text-Gray-b6 font-medium text-base">$9.99</p>
        </section>
      </section>
      <section class="p-3 bg-Gray-b8 border-t border-b border-Gray-b7">
        <h2 class="underline text-Gray-b3 text-base">Have a coupon code?</h2>
      </section>
      <section class="p-3">
        <section class="flex items-center gap-1">
          <h2 class="text-base text-Gray-b3">HST @ 13%</h2>
          <p class="ml-auto text-Gray-b6 font-medium text-base">$2.99</p>
        </section>
      </section>
      <section class="p-3 border-t border-Gray-b7">
        <section class="flex items-center gap-1">
          <h2 class="text-base text-Gray-b3">Total</h2>
          <p class="ml-auto text-Gray-b2 font-bold text-lg">$25.74</p>
        </section>
      </section>
    </section>
    <section class="mt-4 flex items-center gap-1 justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
           id="Layer_1" x="0px" y="0px" viewBox="0 0 55.2 38.4" style="enable-background:new 0 0 55.2 38.4" width="40px"
           xml:space="preserve">
                  <g><path class="st0" d="M3.03,0h49.13c1.67,0,3.03,1.36,3.03,3.03v32.33c0,1.67-1.36,3.03-3.03,3.03H3.03C1.36,38.4,0,37.04,0,35.37 V3.03C0,1.36,1.36,0,3.03,0L3.03,0z"/>
                    <polygon class="st1" points="8.4,0 46.8,0 46.8,38.4 8.4,38.4 8.4,0"/>
                    <path class="st0"
                          d="M27.6,3.6l-2.62,4.89c-0.3,0.53-0.83,0.48-1.37,0.18l-1.9-0.98l1.41,7.5c0.3,1.37-0.66,1.37-1.13,0.78 l-3.31-3.7l-0.53,1.88c-0.06,0.25-0.33,0.51-0.74,0.45l-4.18-0.88l1.1,4c0.24,0.89,0.42,1.26-0.24,1.49l-1.49,0.7l7.21,5.85 c0.29,0.22,0.43,0.62,0.32,0.98l-0.63,2.07c2.48-0.29,4.71-0.72,7.19-0.98c0.22-0.02,0.58,0.33,0.58,0.59L26.95,36h1.2l-0.19-7.56 c0-0.26,0.33-0.63,0.55-0.61c2.48,0.27,4.71,0.7,7.19,0.98l-0.64-2.08c-0.11-0.36,0.04-0.75,0.32-0.98l7.21-5.85l-1.49-0.7 c-0.66-0.24-0.48-0.6-0.24-1.49l1.1-4l-4.18,0.88c-0.41,0.06-0.68-0.2-0.74-0.45l-0.53-1.88l-3.31,3.7 c-0.47,0.59-1.42,0.59-1.13-0.78l1.41-7.5l-1.9,0.98c-0.53,0.3-1.07,0.34-1.37-0.18L27.6,3.6L27.6,3.6L27.6,3.6z M27.6,3.6 L27.6,3.6L27.6,3.6L27.6,3.6L27.6,3.6z"/></g>
                </svg>
      <h2 class="text-base text-Gray-b4">All prices are in CAD</h2>
    </section>
    <el-button class="btn btn-primary w-full py-4 mt-6">Checkout now</el-button>
  </section>
</template>

<script>
</script>

<style scoped>

.st0 {
  fill: #FF0000;
}
.st1 {
  fill: #FFFFFF;
}
</style>