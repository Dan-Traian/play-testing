<template>
  <div id="app">
    <div class="content flex flex-col flex-center mx-auto border-test">
      <Menu></Menu>
      <transition name="page-slide">
        <router-view></router-view>
      </transition>
      <DeBugger />
    </div>
  </div>
</template>
<script>
import menu from "@/components/menu";
import DeBugger from "@/components/DeBugger";
export default {
  name: "App",
  components: {
    DeBugger: DeBugger,
    Menu: menu,
  },
  data() {
    return {};
  },
  created() {},
};
</script>

<style></style>
