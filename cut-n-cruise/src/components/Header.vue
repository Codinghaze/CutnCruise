<script>
export default {
  methods: {
    scrollTo: () => {},
  },
};
</script>
<template>
  <div class="headerRow">
    <div class="titlebox">
      <img class="lg:w-48 h-48 mr-5 mt-2" src="../assets/Logo.png" />
    </div>
    <!-- <div class="linkBoxes" @click="scrollTo">Home</div>
    <div class="linkBoxes">About</div>
    <div class="linkBoxes">Services</div> -->
  </div>
</template>
<style>
.headerRow {
  @apply w-full flex flex-col lg:flex-row items-center font-bold justify-start text-black bg-white  lg:h-48 px-5 py-2;
}

.linkBoxes {
  @apply hidden lg:flex lg:w-36 lg:h-full lg:text-5xl border lg:border-0 w-full    text-3xl  flex-row lg:items-end items-center flex  pb-5 justify-center hover:underline select-none h-12;
}

.titlebox {
  @apply flex-1 flex flex-row items-center lg:justify-start justify-center text-5xl font-bold;
}
</style>
