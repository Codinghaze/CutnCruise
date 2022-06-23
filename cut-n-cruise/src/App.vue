<script setup>
import Header from './components/Header.vue';
import "./tailwind.css";
import Hero from './components/Hero.vue';
import BottomCont from './components/BottomCont.vue'
import ContactUs from './components/ContactUs.vue'
</script>

<template>
  <Header />
  <Hero></Hero>
  <div class="w-full h-full flex flex-row items-start justify-start">
<BottomCont></BottomCont> 
  <ContactUs></ContactUs>
    
  </div>
  
</template>

<style>

</style>
