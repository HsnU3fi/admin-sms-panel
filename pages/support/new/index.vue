<template>
    <section>
        <Slider />
        <Dashboard title="Open Ticket">
            <section class="grid grid-cols-1 md:grid-cols-2 gap-8 sample-form">
                <section class="form-item">
                    <label>Name</label>
                    <el-input v-model="ticket.name" disabled />
                </section>
                <section class="form-item">
                    <label>Email Address</label>
                    <el-input v-model="ticket.email" disabled />
                </section>
                <section class="form-item col-span-full">
                    <label>Subject</label>
                    <el-input v-model="ticket.subject" />
                </section>
                <section class="form-item">
                    <label>Department</label>
                    <el-select v-model="ticket.department">
                        <el-option v-for="item in departmentOptions" :label="item" :value="item"/>
                    </el-select>
                </section>
                <section class="form-item">
                    <label>Priority</label>
                    <el-select v-model="ticket.priority">
                        <el-option v-for="item in priorityOptions" :label="item" :value="item"/>
                    </el-select>
                </section>
                <section class="form-item col-span-full">
                    <label>Message</label>
                    <el-input type="textarea" rows="5" v-model="ticket.message" />
                </section>
                <section class="form-item col-span-full">
                    <label>Attachment</label>
                    <Uploader />
                </section>
                <section class="form-item col-span-full flex justify-center gap-6">
                    <el-buton class="btn px-6 py-3 bg-Success-b3 text-white">Submit</el-buton>
                    <el-buton class="btn px-6 py-3 bg-Error-b3 text-white">Cancel</el-buton>
                </section>
            </section>
        </Dashboard>
    </section>
</template>
<script setup>
import Dashboard from '@/components/Base/Card/Dashboard.vue'
import Uploader from '@/components/Base/Uploader/Uploader.vue'
import Slider from '@/components/TheDashboard/Slider.vue'
definePageMeta({
    layout: 'dashboard'
})
const ticket = reactive({
    name: 'John Doe',
    email: 'John.doe@example.com',
    subject: '',
    department: 'Financial',
    priority: 'Medium',
    message: '',

})
const departmentOptions = ref(['Financial', 'Support', 'Sales'])
const piorityOptions = ref(['Low', 'Medium', 'High'])
</script>