<script setup>
import BottomCont from "./BottomCont.vue";
</script>

<template>
  <div class="w-full flex-1 flex flex-col items-center justify-center">
    <div class="GroupBox">
      <div class="ImgBox">
        <img class="object-cover w-full h-full" src="../assets/tree.jpeg" />
      </div>
      <BottomCont>
        <template v-slot:header>Landscaping Care </template>
        <template v-slot:content>
          With trained horticulture specialists we guarentee our landscaping
          layout system will transform your yard into something to be proud of!
          <br />
          We only plant wisconsin's finest!
        </template></BottomCont
      >
    </div>
  </div>

  <div class="GroupBox">
    <BottomCont>
      <template v-slot:header>Scheduled Care </template>
      <template v-slot:content>
        We will ensure that your yard is in peak condition!
        <br />
        We will come out to you on an individualized scheudle that makes sense.
        <br />
        these schedles allow us to provide your land with the best care!
      </template>
    </BottomCont>
    <div class="ImgBox">
      <img class="object-cover w-full h-full" src="../assets/seed.jpeg" />
    </div>
  </div>

  <div class="w-full flex-1 flex flex-col items-center justify-center">
    <div class="GroupBox">
      <div class="ImgBox">
        <img class="object-cover w-full h-full" src="../assets/snow.jpeg" />
      </div>
      <BottomCont>
        <template v-slot:header>Seasonal Care </template>
        <template v-slot:content>
          Whether you are looking for the typical Cut N Cruise lawn touchup
          <br />
          or someone to prep your plants for Winter, We are always willing to go
          the extra mile to ensure your yard is looking flawless!
        </template></BottomCont
      >
    </div>
  </div>
</template>

<style scoped>
.ImgBox {
  @apply -order-1 md:order-none w-full lg:w-1/2 h-full rounded-2xl;
}
.GroupBox {
  @apply flex-col mt-5 w-full  px-10 md:h-96 flex md:flex-row items-start justify-start;
}
</style>
