<template>
    <div id="test">
      <button v-on:click="show = !show">Переключить</button>
      <transition name="fade">
        <p v-if="show">привет</p>
      </transition>
      <div ref="box" class="box">
        <div class="figure1 figure"></div>
        <div class="figure2 figure"></div>
      </div>
    </div>
</template>

<script>
import { TimelineLite } from "gsap";
export default {
  name: "test",
  mounted() {
    const { box } = this.$refs;
    const timeline = new TimelineLite();

    timeline.to(box, 1, { x: 1200, rotation: 188090 });
  },

  data() {
    return { show: true };
  }
};
</script>

<style lang="scss">
#test{
  background-color: darkslategray;
  height: 100vh;
}
.box {
  width: 60px;
  height: 60px;
  background: blue;
  position: relative;
}
.figure {
  width: 4px;
  height: 50px;
  background: yellow;
  position: absolute;
}
.figure1 {
  top: 5px;
  left: 25px;
  transform: rotate(0deg);
}
.figure2 {
  top: 5px;
  left: 26px;
  transform: rotate(90deg);
}


.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
// // .router-anim-enter-active {
// //   animation: coming 1s;
// //   animation-delay: 0.5s;
// //   opacity: 0;
// // }
// .router-anim-leave-active {
//   animation: going 1s;
// }

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