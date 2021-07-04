<template>
  <div class="panel w-full" :class="{ maximised: isToggled }">
    <div
      class="trigger w-full flex flex-center pointer"
      @click="isToggled = !isToggled"
    >
      <p class="w-full color-off-white">{{ panelData.text }}</p>
      <ion-icon
        name="caret-down-outline"
        class="icon-holder color-off-white"
      ></ion-icon>
    </div>
    <div class="content flex flex-col">
      <p class="box-text w-full my-2">{{ panelData.subtext }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    panelData: {
      required: true,
    },
  },
  data() {
    return {
      isToggled: false,
    };
  },
};
</script>

<style lang="scss">
.panel {
  max-height: 80px;
  transition: max-height 0.3s ease-in-out;
  overflow: hidden;
  .trigger {
    border: 1px solid var(--off-white);
    height: 80px;
    padding: 18px;
    background: var(--bg-grey);
    p {
      font-size: 18px;
      color: #b4b9be;
    }
    .icon-holder {
      transition: all 0.3s ease-in-out;
      transform: rotate(0deg);
    }
  }
  .content {
    padding: 20px 28px;
    border-width: 0 1px 0 1px;
    border-style: solid;
    border-color: var(--slight-border);
  }
  &.maximised {
    max-height: 500px;
    .icon-holder {
      transform: rotate(180deg);
    }
  }
}
</style>
