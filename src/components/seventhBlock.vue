<template>
  <section class="seventhBlock">
    <div class="seventhBlock_wrapper block">
      <div class="seventhBlock_item withStar">
        Москва,
        <br>ул. Большая Новодмитровская,
        <br>36
        <div class="star">
          <img src="./assets/star.png" alt>
        </div>
      </div>
      <div class="seventhBlock_item">+7 495 585-48-00</div>
      <div class="seventhBlock_item">hi@art-design.studio</div>
      <div class="itsbetter">
        Лучше,
        <br>отправлю заявку
      </div>
      <div class="awards connection">
        <a href>Связь</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "seventhBlock",
  data() {
    return {};
  }
};
</script>


<style lang="scss">
.seventhBlock_wrapper {
  position: relative;
  background: #fff;
  padding-top: 160px;
  padding-bottom: 176px;
  padding-left: 30%;
}
.seventhBlock_item {
  font-weight: bold;
  font-size: 30px;
  line-height: 45px;
  margin-bottom: 68px;
  margin-left: 50px;
}
.withStar {
  position: relative;
}
.star {
  position: absolute;
  top: -10px;
  left: -70px;
}
.itsbetter {
  position: absolute;
  right: 140px;
  bottom: 140px;
  font-size: 30px;
  line-height: 45px;
}
.itsbetter::after
{
    position: absolute;
    content: "";
    border-top:2px solid #000000;
    width: 40px;
    right:-49px;
    bottom: 20px;
}
.connection {
  color: #ccc;
  bottom: 181px;
}
</style>