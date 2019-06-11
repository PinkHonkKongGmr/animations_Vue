<template>
  <div class="logomenu_wrapper">
    <div class="logobox">
      <div class="outSide" v-scroll="handleScroll"></div>
      <img src="./assets/logo_inside.png" alt>
      <p>
        арт-
        <br>дизайн
      </p>
    </div>
    <nav class="pointMenu">
      <ul>
        <li>
          <a class="menu_a" href>Кейсы</a>
        </li>
        <li>
          <a class="menu_a" href>Услуги</a>
        </li>
        <li>
          <a class="menu_a" href>Студия</a>
        </li>
        <li>
          <a class="menu_a" href>События</a>
        </li>
        <li>
          <a class="menu_a" href>Контакты</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  methods: {
    addClassToElements: function(sel, add) {
      const elementsToChange = document.querySelectorAll(sel);
      for (let el of elementsToChange) {
        el.classList.add(add);
      }
    },
    removeClassToElements: function(sel, remove) {
      const elementsToChange = document.querySelectorAll(sel);
      for (let el of elementsToChange) {
        el.classList.remove(remove);
      }
    },
    handleScroll: function(evt, el) {
      window.onscroll = () => {
        const htmL = document.documentElement;
        document.querySelector(".runner").style.top =
          (window.innerHeight * 0.225 * htmL.scrollTop) / htmL.scrollHeight +
          "px";
          
          

        if (window.scrollY < 450) {
          el.classList.remove("empty");
        }
        if (window.scrollY > 450 && window.scrollY < 1300) {
          el.classList.add("empty");
          el.classList.remove("white");
        }
        if (window.scrollY > 1300 && window.scrollY < 2100) {
          el.classList.add("white");
          el.classList.remove("grey");
          this.removeClassToElements(".pointMenu li", "darkTheme");
          this.removeClassToElements(".menu_a", "reverse");
          this.removeClassToElements(".scrollLine", "darkThemeScroll");
          this.removeClassToElements(".runner", "darkRunner");
        }
        if (window.scrollY > 2100 && window.scrollY < 2850) {
          el.classList.add("grey");
          el.classList.remove("anotherYellow");
          this.addClassToElements(".pointMenu li", "darkTheme");
          this.addClassToElements(".menu_a", "reverse");
          this.addClassToElements(".scrollLine", "darkThemeScroll");
          this.addClassToElements(".runner", "darkRunner");
        }
        if (window.scrollY > 2850 && window.scrollY < 3650) {
          el.classList.add("anotherYellow");
          el.classList.remove("grey");
        }
        if (window.scrollY > 3650) {
          el.classList.remove("anotherYellow");
        }
      };
    }
  }
};
</script>

<style lang="scss">
.logomenu_wrapper {
  position: fixed;
  left: 90px;
  top: 84px;
  z-index: 10000;
  width: 1186px;
  display: flex;
  justify-content: space-between;
}
.pointMenu li {
  margin-left: 12px;
  transition: 0.4s;
  height: 40px;
  width: 40px;
}


.menu_a {
  border-radius: 50%;
  background: white;
  width: 10px;
  height: 10px;
  opacity: 1;
  color:white;
  transition: 0.4s;
  font-size: 2px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}

.darkThemeNoPd {
  background: black;
  color: white;
}

.pointMenu li:hover .menu_a {
  opacity: 1;
  transform: scale(6.2, 6.2);
  color: black;
}

.logobox {
  position: relative;
}
.outSide {
  position: absolute;
  z-index: -5;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #defa46;
  top: -10px;
  left: -6px;
  transition: 0.6s;
}

.empty {
  background: none;
  transition: 0.6s;
}

.white {
  background: white;
  transition: 0.6s;
}
.grey {
  background: grey;
  transition: 0.6s;
}
.anotherYellow {
  background: #def946;
  transition: 0.6s;
}
.empty2 {
  background: none;
  transition: 0.6s;
}
.logobox p {
  margin-top: 10px;
}

.reverse{
  transition: 0.4s;
  background: black;
  color:black;
}

.pointMenu li:hover .reverse {
  opacity: 1;
  transform: scale(6.2, 6.2);
  color:white;
}
</style>