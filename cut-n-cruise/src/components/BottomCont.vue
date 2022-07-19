<script></script>

<!-- This contains the textbox and title -->
<template>
  <div class="ContentBox">
    <div class="text-4xl text-black">
      <slot name="header"> </slot>
    </div>
    <div class="w-2/3 mt-5 flex flex-row items-start justify-start text-left">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<style scoped>
strong {
  @apply text-xl font-bold;
}
.ContentBox {
  @apply mt-10 lg:mt-0 mx-2 ml-10 w-full  lg:w-1/2 h-96  text-black text-2xl font-bold text-center flex flex-col  items-start justify-center;
}
.TitleBox {
  @apply underline mt-2 mb-10;
}
.ContentText {
  @apply text-lg;
}
</style>
