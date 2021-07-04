<template>
  <nav class="navigation">
    <div class="content h-full flex flex-center mx-auto">
      <div class="w-full h-full flex flex items-center">
        <a
          v-for="(item, index) in menuData.itemsLeft"
          :key="index"
          class="menu-item m-2 flex items-center"
          :href="item.link"
          >{{ item.text }}</a
        >
        <span class="spacer w-full flex items-center"></span>
        <a
          v-for="(item, index) in menuData.itemsRight"
          :key="index + 10"
          class="menu-item m-2 flex items-center"
          :href="item.link"
          >{{ item.text }}</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
import mainData from "./../mainData.json";

export default {
  data() {
    return {
      menuData: mainData.menuData,
    };
  },
};
</script>
<style lang="scss">
nav.navigation {
  width: 100vw;
  overflow-x: hidden;
  height: var(--menuHeight);
  background: var(--black);
  position: sticky;
  top: 0;
  left: 0;
  .menu-item {
    color: var(--off-white);
    transition: color 0.2s ease-in-out;
    &:hover {
      color: var(--white);
    }
  }
}
</style>
