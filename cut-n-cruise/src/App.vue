<script setup>
import Header from "./components/Header.vue";
import "./tailwind.css";
import Hero from "./components/Hero.vue";
import BottomCont from "./components/BottomCont.vue";
import ContactUs from "./components/ContactUs.vue";
</script>

<template>
  <div class="PageCont">
    <div class="AppCont">
      <div
        class="w-full h-18 text-3xl flex flex-row items-center justify-center"
      >
        Call Jacob at
        <div class="underline ml-4 text-lime-900">920-944-5693</div>
      </div>
      <Header />
      <Hero></Hero>
      <div
        class="w-full bg-stone-600 text-black flex flex-col items-center justify-center h-96 text-6xl"
      >
        <div class="max-w-3xl h-64 flex flex-col items-start justify-start">
          Offering the most reliable lawn care!
          <div
            class="w-full flex flex-row items-center justify-start text-3xl mt-4 text-white"
          >
            Our professinal landscaping experts are here to work!
            <br />

            We are proud of our work and we like to show it off!
            <br />

            Let us bring your yard to the next level with our expert approved,
            throughly tested lawn care regiment.
            <br />
            We will make your neighbors turn away with blush when they see how
            nice your grass is!
          </div>
        </div>
      </div>
      <div class="w-full flex flex-1 flex-row items-start justify-start">
        <BottomCont></BottomCont>
        <ContactUs></ContactUs>
      </div>
    </div>
  </div>
</template>

<style>
.AppCont {
  font-family: "din-condensed", sans-serif;
  font-style: normal;
  font-weight: 300;
  @apply w-screen  flex font-bold flex-col justify-start items-start bg-slate-300;
}
.PageCont {
  @apply w-screen min-h-screen  flex  flex-col items-center justify-start  bg-slate-400;
}
</style>
