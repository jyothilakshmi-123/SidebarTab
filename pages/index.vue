<template>
  <div class="">
    <div class="flex min-h-screen bg-gray-200">
      <TheSidebar v-model="openTab" v-on:tabToggled="tabToggled" />
      <div class="flex-1">
        <div class="justify-between px-7 pb-5 border-b">
          <Demo1
            v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
          />
          <Demo2
            v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
          />
          <Demo3
            v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
          />
          <Demo4
            v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }"
          />
          <Demo5
            v-bind:class="{ hidden: openTab !== 5, block: openTab === 5 }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheSidebar from "../components/TheSidebar.vue";
export default {
  components: {
    TheSidebar,
  },
  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    tabToggled(tabNumber) {
      this.openTab = tabNumber;
      console.log("tab number", this.openTab);
    },
  },
  mounted() {
    console.log("here is the pointer...");
    console.log("opentab in index page...", this.openTab);
  },
};
</script>

<style lang="scss" scoped></style>
