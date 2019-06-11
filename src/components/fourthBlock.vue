<template>
  <section class="fourthBlock">
    <div class="fourthBlock_wrapper">
      <div class="fourthBlock_item block">
        <p>Создали новый бренд: придумали имя, разработали айдентику и запустили сайт!</p>
      </div>
      <div class="bg_fourth"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "fourthBlock",
  data() {
    return {};
  }
};
</script>


<style lang="scss">
.fourthBlock_wrapper {
  position: relative;
  display: flex;
}
.fourthBlock_item {
  width: 300px;
  background: #001a75;
  margin-left: 50%;
  width: 50%;
  padding-top: 245px;
  padding-left: 120px;
}
.fourthBlock_item p {
  margin-top: 40px;
  font-weight: bold;
  font-size: 40px;
  line-height: 55px;
  width: 75%;
  max-width: 8000px;
  color: #b0ffec;
}
.bg_fourth {
  position: absolute;
  top: 0;
  z-index: -10;
  width: 100%;
  height: 100%;
  background: url("./assets/man.png");
}
</style>