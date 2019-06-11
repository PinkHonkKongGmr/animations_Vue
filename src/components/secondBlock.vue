<template>
  <section class="secondBlock">
    <div class="secondBlock_wrapper">
      <div class="secondBlock_item block">
        <div class="imgBox">
          <img src="./assets/logo-taxi-klass.png" alt>
        </div>
        <p>Увеличили конверсию на 30% за счет нового фирменного стиля и сайта</p>
      </div>
      <taxi></taxi>
    </div>
  </section>
</template>

<script>
import Taxi from "@/components/taxi.vue";
export default {
  name: "secondBlock",
  data() {
    return {};
  },
  components: {
    taxi: Taxi
  }
};
</script>


<style lang="scss">
.secondBlock_wrapper {
  position: relative;
  display: flex;
}
.secondBlock_item {
  width: 300px;
  background: #6329bd;
  margin-left: 40%;
  width: 60%;
  padding-top: 230px;
  padding-left: 120px;
}
.secondBlock_item p {
  margin-top: 40px;
  font-weight: bold;
  font-size: 40px;
  line-height: 55px;
  width: 75%;
  max-width: 8000px;
  color: #ffffff;
}
</style>