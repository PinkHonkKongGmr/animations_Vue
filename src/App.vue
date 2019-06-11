<template>
  <div id="app">
   
    <transition name="router-anim">
      <router-view/>
    </transition>
  </div>
</template>

<style>

.router-anim-enter-active {
 
  animation: coming 1s;
  animation-delay: .5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 1s;
   position: fixed;
  width: inherit;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
