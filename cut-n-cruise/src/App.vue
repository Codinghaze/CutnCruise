<script setup>
import Header from "./components/Header.vue";
import "./tailwind.css";
import Hero from "./components/Hero.vue";
import BottomCont from "./components/BottomCont.vue";
import ContactUs from "./components/ContactBox.vue";
import CalltoAction from "./components/CalltoAction.vue";
import AboutBox from "./components/AboutBox.vue";
import ServicesBox from "./components/ServicesBox.vue";
import ContactBox from "./components/ContactBox.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="PageCont">
    <div class="AppCont">
      <Header />
      <CalltoAction />
      <Hero></Hero>
      <AboutBox />
      <ServicesBox ref="services"></ServicesBox>
      <ContactBox></ContactBox>
    </div>
    <Footer />
  </div>
</template>

<style>
.AppCont {
  font-family: "din-condensed", sans-serif;
  font-style: normal;
  font-weight: 300;
  @apply w-screen  flex font-bold flex-col justify-center items-center;
}
.PageCont {
  @apply w-screen min-h-screen  flex  flex-col items-center justify-start;
}
</style>
