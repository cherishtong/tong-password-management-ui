<template>
    <div class="w-screen h-screen bg-gradient-to-br from-slate-900 to-slate-100 flex justify-center items-center ">

        <form  class="flex flex-col gap-2">
            <div class="p-float-label">
                <InputText id="value" v-model="user" type="text" />
                <label for="value" style="color: white;">请输入用户名</label>
            </div>
            <div class="p-float-label mt-4">
                <InputText id="value" v-model="user" type="text" />
                <label for="value" style="color: white;">请输入用户名</label>
            </div>
            <Button type="submit" label="Secondary" severity="secondary" />
        </form>
    </div>
</template>
<script setup lang="ts">
import InputNumber from "primevue/InputNumber";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { ref } from "vue";

let user= ref('');
</script>
<style lang="pcss" scoped>
</style>