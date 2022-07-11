<script></script>
<template>
  <div class="headerRow">
    <div class="titlebox">
      <img class="w-48 h-48 mr-5 mt-2 absolute" src="../assets/Logo.png" />
    </div>
    <div class="linkBoxes">Home</div>
    <div class="linkBoxes">About</div>
    <div class="linkBoxes">Services</div>
  </div>
</template>
<style>
.headerRow {
  font-family: "din-condensed", sans-serif;
  font-style: normal;
  font-weight: 300;
  @apply w-full flex flex-row items-center font-bold justify-start text-black bg-white  h-48 px-5 py-2;
}

.linkBoxes {
  @apply w-48    text-5xl flex flex-row items-end pb-5 justify-center hover:underline select-none h-full px-1 py-1;
}

.titlebox {
  @apply flex-1 flex flex-row items-center justify-start text-5xl font-bold;
}
</style>
