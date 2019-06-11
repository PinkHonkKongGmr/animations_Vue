<template>
  <div id="home">
    <logoMenu></logoMenu>
    <scroller></scroller>
    <appThirst_block></appThirst_block>
    <router-link to="/test">
      <appSecond_block></appSecond_block>
    </router-link>
    <appThird_block></appThird_block>
    <appFourth_block></appFourth_block>
    <appFifth_block></appFifth_block>
    <appSixth_block></appSixth_block>
    <appSeventh_block></appSeventh_block>
  </div>
</template>

<script>
import Logomenu from "@/components/logoMenu.vue";
import Scroller from "@/components/scroller.vue";
import Thirst_block from "@/components/thirstBlock.vue";
import Second_block from "@/components/secondBlock.vue";
import Third_block from "@/components/thirdBlock.vue";
import Fourth_block from "@/components/fourthBlock.vue";
import Fifth_block from "@/components/fifthBlock.vue";
import Sixth_block from "@/components/sixthBlock.vue";
import Seventh_block from "@/components/seventhBlock.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    logoMenu: Logomenu,
    scroller: Scroller,
    appThirst_block: Thirst_block,
    appSecond_block: Second_block,
    appThird_block: Third_block,
    appFourth_block: Fourth_block,
    appFifth_block: Fifth_block,
    appSixth_block: Sixth_block,
    appSeventh_block: Seventh_block
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Montserrat";
  scroll-behavior: smooth;
}
html,
body {
  overflow: hidden;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.block {
  padding-bottom: 190px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: inherit;
  text-decoration: none;
}

// .router-anim-enter-active {
//   animation: coming 1s;
//   animation-delay: 0.5s;
//   opacity: 0;
// }
.router-anim-leave-active {
  animation: going 1s;
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
