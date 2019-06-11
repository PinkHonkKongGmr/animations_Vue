<template>
  <section class="thirdBlock block">
    <div class="thirdBlock_wrapper">
      <div class="thirdBlock_item">
        <div class="z_box">
          <div class="z_box_image">
            <img src="./assets/z.png" alt="none">
          </div>
          <div>
            <h2>ащита</h2>
          </div>
        </div>
        <p>
          Новая айдентика и
          комуникация в
          сети
        </p>
      </div>
    </div>
    <div class="bg"></div>
  </section>
</template>

<script>
export default {
  name: "thirdBlock",
  data() {
    return {};
  }
};
</script>


<style lang="scss">
.thirdBlock {
  background: #0000ff;
  display: flex;
  position: relative;
}
.bg {
 position: absolute;
 width: 60%;
 right: 0;
 height: 100%;
 background-image: url("./assets/pattern.png");
  
}
.thirdBlock_wrapper {
  margin-right: 40px;
}
.thirdBlock_item {
  padding-top: 343px;
  margin-left: 90px;
  color: #fff;
  margin-right: 54px;
}
.z_box {
  display: flex;
  align-items: baseline;
}
.z_box h2 {
  font-size: 40px;
  font-weight: bold;
  line-height: 55px;
  text-transform: uppercase;
  letter-spacing: 20px;
  margin-bottom: 54px;
}
.thirdBlock_item p {
  font-size: 40px;
  font-weight: bold;
  line-height: 55px;
  width: 418px;
}
.z_box_image img {
  height: 29px;
  margin-right: 20px;
}
</style>