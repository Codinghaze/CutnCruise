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
    CheckEmail() {
      if (this.email.includes("@")) {
        return true;
      }
      return false;
    },
    CheckPhoneLengthIsLongEnough() {
      if (this.phone.length >= 10) {
        return true;
      }
      return false;
    },
    CheckForSpaceinName() {
      if (this.name.includes(" ")) {
        return true;
      }
      return false;
    },
    async SubmitBtn() {
      try {
        if (this.CheckPhoneLengthIsLongEnough() == false) {
          alert("Phone Number too short");
        } else if (this.CheckEmail() == false) {
          alert("Bad Email");
        } else if (this.CheckForSpaceinName() == false) {
          alert("Please enter first and last name");
        } else {
          await fetch(
            `http://159.65.172.156:3000/?name=${this.name}&phone=${this.phone}`
          );

          alert("Request Submitted! A contact will reachout within 24 hours");
        }
      } catch (e) {
        alert("An error has occured");
      }
    },
  },
};
</script>

<!-- This contains the textbox and title -->
<template>
  <div class="ContactUs">
    Contact Us
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
        class="w-36 hover:bg-green-500 active:bg-green-400 rounded-xl h-full bg-black text-white"
      >
        Submit
      </button>
    </div>
  </div>
</template>
<style scoped>
.ContactUs {
  @apply w-96 h-96 rounded-2xl mr-2 border p-4 border-black flex flex-col items-center text-center justify-start text-3xl font-bold;
}

.InputBox {
  @apply w-full h-12 my-2 border border-black  flex flex-row items-center justify-center;
}

.ThirdInput {
  @apply w-1/3 h-full text-lg flex flex-row items-center justify-center;
}
.FillInput {
  @apply flex-1 h-full text-lg flex flex-row items-center justify-center;
}

.TextBox {
  @apply w-full h-full p-4;
}
</style>
