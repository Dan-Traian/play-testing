<template>
  <div id="app">
    <div class="content flex flex-col flex-center mx-auto border-test">
      <Menu></Menu>
      <transition name="page-slide">
        <router-view class="my-1"></router-view>
      </transition>
      <DeBugger />
    </div>
    <footer>
      <div class="footer-content-wrapper color-text-main flex flex-center mt-4">
        © 2021 Playdead. All rights reserved.<br />
        <span class="flex"
          >Copenhagen, Denmark -
          <a href="https://playdead.com/privacypolicy/index.php"
            >Privacy Policy</a
          ></span
        >
      </div>
    </footer>
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

<style>
footer {
  z-index: 1500;
  position: relative;
  color: inherit;
  font-size: 14px;
  margin-bottom: 70px;
  letter-spacing: 0.4px;
}
</style>
