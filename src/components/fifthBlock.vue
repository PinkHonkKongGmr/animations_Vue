<template>
  <section class="fithBlock">
    <div class="fithBlock_wrapper block">
      <div class="fithBlock_item top_Block">
        <h2>CMS Magazine</h2>
        <span>SEО компании Москвы</span>
        <p>23</p>
        <span>Веб-студии Москвы</span>
        <p>46</p>
      </div>
      <div class="fithBlock_item">
        <h2>Рейтинг Рунета</h2>
        <span>Разработка + SEO компании Москвы</span>
        <p>32</p>
        <span>SEO компании Москвы</span>
        <p>70</p>
      </div>
      <div class="fithBlock_item">
        <h2>AllAdvertising</h2>
        <span>
          Входим в список лучших
          <br>компаний России
        </span>
      </div>
      <div class="awards"><a href="">Награды</a></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "fithBlock",
  data() {
    return {};
  }
};
</script>


<style lang="scss">
.fithBlock_wrapper {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  background: #dffa45;
  padding-top: 138px;
  padding-bottom: 30px;
  padding-left: 25%;
}
.fithBlock_item {
  display: flex;
  flex-direction: column;
  margin-bottom: 111px;
  margin-right: 126px;
}
.top_Block {
  width: 100%;
}
.fithBlock_item h2 {
  font-weight: bold;
  font-size: 40px;
  line-height: 49px;
  margin-bottom: 15px;
}

.fithBlock_item span {
  font-size: 18px;
  line-height: 30px;
}

.fithBlock_item p {
  font-weight: bold;
  font-size: 18px;
  line-height: 30px;
}
.awards {
  position: absolute;
  bottom: 145px;
  left:140px;
  font-weight: bold;
  font-size: 40px;
  line-height: 49px;
  color: #e7001c;
  transform: rotate(-90deg);
}
</style>