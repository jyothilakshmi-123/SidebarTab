<template>
  <div class="wrapper">
    <div class="align-top">
      <div class="logo">
        <a href="">
          <h1 class="text-2xl font-bold uppercase text-pink-500">SidebarTab</h1>
        </a>
      </div>
      <ul class="mb-0 list-none pb-3">
        <li
          class="-mb-px mr-2 last:mr-0 text-xs text-left px-5 py-3 rounded block hover:bg-pink-50 hover:text-pink-500"
          v-bind:class="{
            'text-gray-500 bg-white': openTab !== 1,
            'text-white bg-pink-500': openTab === 1,
          }"
        >
          <a class="text-sm" v-on:click="toggleTabs(1)">Dashboard</a>
        </li>
        <li
          class="-mb-px mr-2 last:mr-0 text-xs text-left px-5 py-3 rounded block hover:bg-pink-50 hover:text-pink-500"
          v-bind:class="{
            'text-gray-500 bg-white': openTab !== 2,
            'text-white bg-pink-500': openTab === 2,
          }"
        >
          <a class="text-sm" v-on:click="toggleTabs(2)">Products</a>
        </li>
        <li
          class="-mb-px mr-2 last:mr-0 text-xs text-left px-5 py-3 rounded block hover:bg-pink-50 hover:text-pink-500"
          v-bind:class="{
            'text-gray-500 bg-white': openTab !== 3,
            'text-white bg-pink-500': openTab === 3,
          }"
        >
          <a class="text-sm" v-on:click="toggleTabs(3)">Sales</a>
        </li>
        <li
          class="-mb-px mr-2 last:mr-0 text-xs text-left px-5 py-3 rounded block hover:bg-pink-50 hover:text-pink-500"
          v-bind:class="{
            'text-gray-500 bg-white': openTab !== 4,
            'text-white bg-pink-500': openTab === 4,
          }"
        >
          <a class="text-sm" v-on:click="toggleTabs(4)">Get Help</a>
        </li>
        <li
          class="-mb-px mr-2 last:mr-0 text-xs text-left px-5 py-3 rounded block hover:bg-pink-50 hover:text-pink-500"
          v-bind:class="{
            'text-gray-500 bg-white': openTab !== 5,
            'text-white bg-pink-500': openTab === 5,
          }"
        >
          <a class="text-sm" v-on:click="toggleTabs(5)">Account</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSidebar",

  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    toggleTabs(tabNumber) {
      console.log("opentab is ...", this.openTab);
      this.openTab = tabNumber;
      this.$emit("tabToggled", tabNumber);
    },
  },
};
</script>

<style scoped>
.wrapper {
  @apply w-64 bg-white border-r border-gray-200 grid  text-center px-5 pb-5;
}
.logo {
  @apply py-3.5  px-6 mb-10 border-b;
}
</style>
