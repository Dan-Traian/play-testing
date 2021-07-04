<template>
  <div class="w-full flex flex-center border-test h-screen-v">
    <h1 class="big-header color-off-white">SUPPORT</h1>
    <accordion
      :accordionData="mainData.accordionData.exampleData.items"
    ></accordion>
  </div>
</template>

<script>
import mainData from "./../mainData.json";
import accordion from "@/components/Accordion/accordion";
export default {
  components: { accordion: accordion },

  data() {
    return {
      mainData: mainData,
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss"></style>
