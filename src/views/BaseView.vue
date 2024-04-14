<template>
  <header-component />
  <div class="grid">
    <div class="col-2">
      <navigator-component :route-list="routeList" />
    </div>
    <div class="col-10">
      <router-view />
    </div>
  </div>
  <footer></footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigatorComponent from "@/components/NavigatorComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import { RouteDto } from "@/dto/routesDto";

export default defineComponent({
  name: "BaseView",
  components: {
    NavigatorComponent,
    HeaderComponent,
  },
  setup() {
    const routeList = [
      { name: "home", path: "/" },
      { name: "about", path: "/about" },
      { name: "api", path: "/api" },
      { name: "test", path: "/test" },
    ] as RouteDto[];
    return { routeList };
  },
});
</script>
