<template>
  <div class="text-left main w-screen h-screen bg-no-repeat bg-cover">
      <section class="p-6 my-7">
      <h1 class="text-6xl tracking-in-contract-bck text-white my-4 py-3">Dragon's Terror</h1>
      <p class="text-white swing-in-top-fwd">The lands of Nimrasea, a once peaceful land</p>
      </section>




  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.main{
  background-image:url('~assets/event/dragon/banner.jpg');
}
.swing-in-top-fwd{-webkit-animation:swing-in-top-fwd 1s cubic-bezier(.175,.885,.32,1.275) 1s both;animation:swing-in-top-fwd 1s cubic-bezier(.175,.885,.32,1.275) 1s both}
@-webkit-keyframes swing-in-top-fwd{0%{-webkit-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;transform-origin:top;opacity:0}100%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;transform-origin:top;opacity:1}}@keyframes swing-in-top-fwd{0%{-webkit-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;transform-origin:top;opacity:0}100%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;transform-origin:top;opacity:1}}
.tracking-in-contract-bck{-webkit-animation:tracking-in-contract-bck 1s cubic-bezier(.215,.61,.355,1.000) both;animation:tracking-in-contract-bck 1s cubic-bezier(.215,.61,.355,1.000) both}
@-webkit-keyframes tracking-in-contract-bck{0%{letter-spacing:1em;-webkit-transform:translateZ(400px);transform:translateZ(400px);opacity:0}40%{opacity:.6}100%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes tracking-in-contract-bck{0%{letter-spacing:1em;-webkit-transform:translateZ(400px);transform:translateZ(400px);opacity:0}40%{opacity:.6}100%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}
</style>