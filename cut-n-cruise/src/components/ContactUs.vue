<script>
export default {
  data() {
    return {
      phone: "",
      email: "",
      name: "",
    };
  },
  methods: {
    SubmitBtn() {
      alert("Sent A Notice to CutNCruise");
    },
  },
};
</script>

<!-- This contains the textbox and title -->
<template>
  <div class="ContactUs">
    <div class="InputBox">
      <div class="ThirdInput">Name:</div>
      <div class="FillInput">
        <input v-model="name" placeholder="Name" class="TextBox" />
      </div>
      <!-- title div contains: name of field -->
      <!-- input div contain: actual input -->
    </div>
    <div class="InputBox">
      <div class="ThirdInput">Email:</div>
      <div class="FillInput">
        <input placeholder="Email" class="TextBox" v-model="email" />
      </div>
    </div>
    <div class="InputBox">
      <div class="ThirdInput">Phone:</div>
      <div class="FillInput">
        <input placeholder="Phone" class="TextBox" v-model="phone" />
      </div>
    </div>

    <div class="InputBox">
      <button
        @click="SubmitBtn"
        class="w-36 hover:bg-gray-500 active:bg-gray-400 rounded-xl h-full bg-black text-white"
      >
        Submit
      </button>
    </div>
  </div>
</template>
<style scoped>
.ContactUs {
  @apply w-full flex flex-col items-center text-center justify-center text-3xl font-bold;
}

.InputBox {
  @apply w-full h-24 my-2  flex flex-col lg:flex-row items-center justify-center;
}

.ThirdInput {
  @apply w-1/3 text-2xl flex flex-row items-center justify-center;
}
.FillInput {
  @apply w-full lg:flex-1 border-b h-full text-lg flex flex-row items-center justify-center;
}

.TextBox {
  @apply w-full h-full p-4 text-center text-slate-700 text-2xl;
}
</style>
