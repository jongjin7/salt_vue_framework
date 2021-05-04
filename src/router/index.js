import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const routerMap = [
  {
    path: "/",
    name: "main",
    redirect: "/publishing",
  },
  {
    path: "*",
    component: () => import("@/publishing/common/test.vue"),
    // component: ()=>{
    //   return { template: "<div>none Page</div>", };
    // },
  },

  {
    path: "/publishing",
    component: () => import("@/publishing/layout.vue"),
    redirect: "/publishing/list",
    name: "publishing",
    children: [
      {
        path: "list",
        name: "publishing-list",
        component: () => import("@/publishing/publishingList.vue"),
      },
      {
        path: "base",
        name: "ui-base",
        component: () => import("@/publishing/common/base.vue"),
      },
      {
        path: "form",
        name: "form-base",
        component: () => import("@/publishing/common/form.vue"),
      }
    ],
  }
];

let router = new VueRouter({
  mode: "history",
  routes: routerMap,
});

export default router;
