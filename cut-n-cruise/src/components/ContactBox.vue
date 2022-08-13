<script setup>
import ContactUs from "./ContactUs.vue";
</script>
<template>
  <div
    class="w-full h-fit mt-10 py-5 px-10 flex flex-col items-start justify-start bg-black text-white"
  >
    <div
      class="w-full mb-5 h-12 text-white text-6xl mt-5 flex flex-row items-center justify-center"
    >
      Contact Us
    </div>
    <div
      class="w-full flex flex-col lg:flex-row items-center mt-10 justify-center"
    >
      <div
        class="w-full flex flex-row items-center justify-center lg:w-1/2 h-full text-3xl"
      >
        <div
          class="w-2/3 h-full -mt-10 flex flex-row items-start justify-center text-2xl text-center"
        >
          Give Jacob a call at
          <br />
          920-944-5693
          <br />
          <br />
          Or use the form and get a quote <br />
          sent directly to you ASAP!
        </div>
      </div>

      <div
        class="w-full mt-10 lg:w-1/2 h-full flex flex-row items-center justify-center"
      >
        <ContactUs></ContactUs>
      </div>
    </div>
  </div>
</template>
