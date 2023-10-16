<template>
  <section>
    <Dashboard>
      <template #header>
    <h1 class="font-bold text-lg text-center lg:text-xl text-Primary">FREQUENTLY ASKED DOMAIN NAMES;</h1>
      </template>
    <section class="grid grid-cols-1 gap-6">
      <el-collapse v-model="activeItem" accordion>
      <el-collapse-item v-for="faq in faqs" :title="faq.question">
        <p class="mt-3 text-xs lg:text-sm text-Gray-b2">{{ faq.answer }}</p>
      </el-collapse-item>
      </el-collapse>
    </section>
    </Dashboard>
  </section>
</template>

<script setup>
import Dashboard from '@/components/Base/Card/Dashboard'
const activeItem = ref('')
const faqs = ref([
  { question: 'What is a domain and how can I register a domain?', answer: 'Domains are unique names that help users easily access your site. In fact, the domain name is the address of your website that people type in the browser\'s URL bar to visit your website. To fully understand what a domain is and how it works, read the article What is the domain and how to register a domain in a Softhost Blog'},
  { question: 'Can I unsubscribe from my domain?', answer: 'Some domain registrars allow you to unsubscribe from your domain at any time. If you cancel your registration, registration will be available to others.\n' +
        'Other domain name registrars allow you to simply unsubscribe from your domain.\n' +
        'In most cases, you will not receive a refund for domain registration.\n' +
        'However, some domain registrars have repayment policies that you can talk to before canceling your registration.\n' +
        'If you do not turn on the auto-renew feature, your domain name will simply expire after the registration period for which you paid.'},
  { question: 'Can I move my website to another domain name?', answer: 'Yes you can. You can transfer your domain name to your hosting server.\n' +
        'You can also point both domains to the same website. However, search engines recognize it as duplicate content, and this affects your search rankings.\n' +
        'We have a step-by-step guide on how to change your site domain name and redirect settings, so do not harm your SEO.'},
  { question: 'Can I sell a domain name?', answer: 'Yes, you can sell your domain name.\n' +
        'Domain names are like real estate for the web. There is a huge demand for custom domain letters with a good brand.\n' +
        'Domain name transactions are a multi-million dollar industry.\n' +
        'Because domain names are so cheap, smart entrepreneurs are always looking for great domain name ideas to make a profit from.\n' +
        'If you want to sell your domain name, there are many marketing websites like Sedo, GoDaddy and other websites where you can put your domain up for sale.\n' +
        'Popular registrars like Domain.com also allow you to purchase award-winning domains directly from the domain search feature.'},
  { question: 'What is domain privacy? Do I need it?', answer: 'ICANN requires domain registrars to make public an email, physical address, telephone number and other personal information.\n' +
        'Domain privacy is a separate add-on service sold by domain registrars. This service enables you to enter proxy information instead of your actual personal information.\n' +
        'You do not have to buy domain privacy if you do not want to. But if you are worried about your privacy, you can buy these services for a small fee.'},
  { question: 'Can I purchase more than one domain name?', answer: 'Yes, you can buy as many domain names as you like.\n'},
  { question: 'Where can I find out more about building a website?', answer: 'SoftWeb Company offers a package of dedicated site design, semi-dedicated site design, site builder and store builder and various digital marketing plans. Also, to buy the right host for your site, contact our partners in the technical support unit.\n'},

])
</script>

<style scoped>

</style>