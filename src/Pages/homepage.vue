<template>
  <div class="w-full flex flex-col border-test h-screen">
    <accordion
      :accordionData="mainData.accordionData.exampleData.items"
    ></accordion>
  </div>
</template>

<script>
import accordion from "@/components/Accordion/accordion";
import mainData from "./../mainData.json";

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
