<template>
  <div class="scrollLine" v-on:click="scrollControl">
    <div class="runner"></div>
  </div>
</template>
<script>
export default {
  methods: {
    scrollControl: function() {
      let scrollHere =
        ((event.clientY - event.target.getBoundingClientRect().top) *
          document.body.offsetHeight) /
        event.target.offsetHeight;
      window.scrollTo({
        top: scrollHere
      });
    }
  }
};
</script>

<style lang="scss">
.scrollLine {
  border-radius: 4px;
  width: 4px;
  height: 152px;
  position: fixed;
  top: 34%;
  right: 120px;
  background: rgba(255, 255, 255, 0.5);
  z-index: 99512;
}
.darkThemeScroll {
  background: rgba(0, 0, 0, 0.5);
}
.runner {
  position: absolute;
  top: 0;
  left: 1px;
  border-radius: 4px;
  width: 3px;
  height: 16px;
  background: white;
}

.darkRunner {
  background: black;
}
</style>