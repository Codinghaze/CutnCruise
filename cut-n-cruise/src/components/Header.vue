<script>
</script>
<template>
    <div class="headerRow">
    <div class="titlebox">Cut n Cruise</div>
    <div class="linkBoxes">Home</div>
        <div class="linkBoxes">About</div>
        <div class="linkBoxes">Services</div>
    </div>
</template>
<style>
    .headerRow {
        @apply w-full flex flex-row items-center justify-start bg-green-500 h-24 px-5 py-2;
    }
    .linkBoxes {
        @apply w-48 flex flex-row items-center justify-center text-3xl hover:underline  h-full px-1 py-1;
    }
    .titlebox{
        @apply flex-1 flex flex-row items-center justify-start text-5xl font-bold;
    }
</style>
