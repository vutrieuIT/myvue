import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import ApiView from "@/views/ApiView.vue";
// import RegisterView from "@/views/RegisterView.vue";
import TestView from "@/views/ProductListView.vue";
import BaseView from "@/views/BaseView.vue";
import ProductItemView from "@/views/ProductItemView.vue";

const baseViewChild = [
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/api",
    name: "api",
    component: ApiView,
  },
  {
    path: "/test",
    name: "test",
    component: TestView,
  },
  {
    path: "/test/create",
    name: "test-create",
    component: ProductItemView,
  },
];

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: BaseView,
    children: baseViewChild,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
