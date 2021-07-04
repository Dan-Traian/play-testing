<template>
  <div class="accordion w-full flex flex-col m-2 p-4">
    <accordionPanel
      :key="index"
      v-for="(item, index) in accordionData"
      :panel-data="item"
    ></accordionPanel>
  </div>
</template>

<script>
import accordionPanel from "@/components/Accordion/accordionPanel";
export default {
  components: {
    accordionPanel: accordionPanel,
  },
  props: {
    accordionData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
