<template>
  <section class="hero flex flex-wrap flex-center overflow-hidden border-test">
    <div class="upper w-full m-1 overflow-hidden">
      <img
        class="w-full pointer"
        src="https://playdead.com/css/img/Game3_Banner-poster780.png"
        alt=""
      />
    </div>
    <div class="lower w-full flex">
      <div class="img-container w-full m-1 flex flex-center overflow-hidden">
        <img
          class="w-full pointer"
          src="https://playdead.com/css/img/LIMBO_game_animated.png"
          alt=""
        />
      </div>
      <div class="img-container w-full m-1 flex flex-center overflow-hidden">
        <img
          class="w-full pointer"
          src="https://playdead.com/css/img/LIMBO_game_animated.png"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.hero {
  height: calc(100vh - var(--menuHeight));
  max-height: 900px;
  .upper {
    height: 70%;
  }
  .lower {
    height: 30%;
    .img-container {
      img {
        width: 100%;
        min-width: 100%;
      }
    }
  }
}
</style>
