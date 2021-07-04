<template>
  <div id="debugger" @click="toggleDebugger">
    <div class="toggle">
      <div class="toggle-bar"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isToggled: false,
    };
  },
  methods: {
    toggleDebugger() {
      let element = document.querySelector("#debugger .toggle .toggle-bar");
      element.classList.toggle("toggled");
      let color = this.isToggled ? "#f00" : "transparent";
      document.querySelector(":root").style.setProperty("--debugger", color);
      this.isToggled = !this.isToggled;
    },
  },
};
</script>
<style lang="scss">
#debugger {
  position: fixed;
  z-index: 9999;
  bottom: 10px;
  right: 10px;
  padding: 10px;
  .toggle {
    width: 40px;
    padding: 3px;
    background: #4119a8;
    border-radius: 100px;
    display: flex;
    align-items: center;
    cursor: pointer;
    .toggle-bar {
      width: 18px;
      height: 18px;
      min-width: 18px;
      min-height: 18px;
      border-radius: 100%;
      background: #7ded9d;
      transition: all 0.3s ease-in-out;
      margin-left: 0;
      &.toggled {
        margin-left: 16px;
      }
    }
  }
}
</style>
