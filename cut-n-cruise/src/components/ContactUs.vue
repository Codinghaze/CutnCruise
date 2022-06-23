<script>
export default {
  data() {
    return {
        phone: "",
        email: "",
        name: "",
    }
  },
  methods: {
    CheckEmail() {
        if(this.email.includes("@") )
        {
            return true
        }
        return false   
    },
    CheckPhoneLength(){
        if(this.phone.length == 10 )
        {
            return true
        }
        return false   
    },
    CheckForSpaceinName() {
         if(this.name.includes(" ") )
        {
            return true
        }
        return false  
    },
    SubmitBtn(){
       if(this.CheckPhoneLength() == false){
        alert("Phone Number too short")
       }

       if(this.CheckEmail() == false){
        alert("Bad Email")
       }

        if(this.CheckForSpaceinName() == false){
        alert("Please enter first and last name")
       }
    }
  }
}
</script>

<!-- This contains the textbox and title -->
<template>
<div class="ContactUs">
    Contact Us 
    <div class="InputBox">
        <div class="HalfInput">Name:</div>
        <div class="HalfInput"> <input v-model="name" class="TextBox" /></div>
        <!-- title div contains: name of field -->
        <!-- input div contain: actual input -->
    </div>
    <div class="InputBox"> 
        <div class="HalfInput">Email:</div>
        <div class="HalfInput"> <input class="TextBox" v-model="email" /></div></div>
    <div class="InputBox">
         <div class="HalfInput">Phone:</div>
        <div class="HalfInput"> <input class="TextBox" v-model="phone" /></div></div>
    
    <div class="InputBox"><button @click="SubmitBtn" class="w-36 hover:bg-green-500 active:bg-green-400 rounded-xl h-full bg-green-700 text-white "> Submit</button></div>
</div>
</template>
<style scoped> 
.ContactUs{
    @apply w-96 h-96 border p-4 border-black flex flex-col items-center text-center justify-start text-3xl font-bold ;
}
.InputBox{
    @apply w-full h-12 border my-2 border-black flex flex-row items-center justify-center;
}
.HalfInput {
@apply w-1/2 border border-black h-full text-lg flex flex-row items-center justify-center;
}
.TextBox {
    @apply w-full h-full p-4
    
}
</style> 