<template>
  <section class="SixthBlock">
    <div class="SixthBlock_wrapper block">
      <div class="sixthBlockSection sixthLeft">
        <div>
          Мы заняли 70 строчку
          в ежегодном рейтинге —
          Рейтинг Рунета
        </div>
      </div>
      <div class="sixthBlockSection sixthRight">
        <div>Приглашаем 20 апреля на третий Digital-day на<br> дизайн-завод "Флакон"</div>
      </div>
      <div class="awards events">
        <a href>События</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SixthBlock",
  data() {
    return {};
  }
};
</script>


<style lang="scss">
.SixthBlock_wrapper {
  position: relative;
  display: flex;
  background: #cccccc;
  padding-top: 170px;
  padding-right: 169px;
  padding-bottom: 176px;
  padding-left: 25%;
}
.sixthBlockSection {
  font-weight: normal;
  font-size: 24px;
  max-width: 400px;
  box-sizing: border-box;
}
.sixthRight {
  padding-top: 302px;
}


.events {
  color: #DFFA45;
}
</style>