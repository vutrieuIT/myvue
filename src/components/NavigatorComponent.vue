<template>
  <aside class="flex flex-column">
    <div
      class="flex w-full bg-blue-500 text-white p-2 my-2"
      v-for="(route, idx) in routes"
      :key="idx"
    >
      <router-link class="text-left no-underline flex-grow-1" :to="route.path">
        {{ route.name }}
      </router-link>
      <i class="pi pi-angle-right"></i>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { RouteDto } from "@/dto/routesDto";

export default defineComponent({
  name: "NavigatorComponent",
  props: {
    routeList: {
      type: Array as PropType<RouteDto[]>,
      required: true,
    },
  },
  setup(props) {
    const routes = computed(() => props.routeList || []);
    return { routes };
  },
});
</script>
@/dto/routesDto
