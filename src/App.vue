<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Greet from "./components/Greet.vue";
import InputNumber  from "primevue/InputNumber";
import InputText from "primevue/inputtext";
</script>

<template>
 <p>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </p>
<router-view></router-view>
<br/>
<br/>
  <div class="container bg-slate-400">
    <div class="p-inputgroup flex-1">
    <span class="p-inputgroup-addon">
        <i class="pi pi-user"></i>
    </span>
    <InputText placeholder="Username" />
</div>

<div class="p-inputgroup flex-1">
    <span class="p-inputgroup-addon">$</span>
    <InputNumber placeholder="Price" />
    <span class="p-inputgroup-addon">.00</span>
</div>

<div class="p-inputgroup flex-1">
    <span class="p-inputgroup-addon">www</span>
    <InputText placeholder="Website" />
</div>
  </div>
</template>

<style scoped>
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}
</style>
