<template>
  <div class="taxi_wrapper"></div>
</template>

<script>
export default {
  name: "taxi",
  data() {
    return {
    };
  }
};
</script>


<style lang="scss">
.taxi_wrapper {
  position: absolute;
  top:0;
  z-index: -10;
  width: 100%;
  height: 100%;
  background: url("./assets/taxi.jpg");
  background-size: cover;
}
</style>