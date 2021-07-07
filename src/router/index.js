import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const routerMap = [
  {
    path: "/",
    name: "main",
    redirect: "/publishing",
    // redirect: "sample",
    // component: () => import("@/publishing/layout/BasicLayout.vue"),
    // children: [
    //   {
    //     path: "sample",
    //     name: "sample",
    //     component: () => import("@/pages/sample.vue"),
    //   },
    // ],
  },
  {
    path: "*",
    component: () => import("@/publishing/common/error.vue"),
    // component: ()=>{
    //   return { template: "<div>none Page</div>", };
    // },
  },

  {
    path: "/publishing",
    component: () => import("@/publishing/layout/PubLayout.vue"),
    redirect: "/publishing/list",
    name: "publishing",
    children: [
      {
        path: "list",
        name: "publishing-list",
        component: () => import("@/publishing/publishingList.vue"),
      },
      {
        path: "content",
        name: "content-base",
        component: () => import("@/publishing/common/content.vue"),
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
      },
      {
        path: "myform",
        name: "my-form-base",
        component: () => import("@/publishing/common/myForm.vue"),
      },
      {
        path: "table",
        name: "table-base",
        component: () => import("@/publishing/common/table.vue"),
      },
      {
        path: "ui",
        name: "comp-ui",
        component: () => import("@/publishing/common/compUI.vue"),
      },
      {
        path: "popup",
        name: "boot-popup",
        component: () => import("@/publishing/common/Popups.vue"),
      },
      {
        path: "detail_template",
        name: "detail_template",
        component: () => import("@/publishing/layout/TemplateDetail.vue"),
      },
      {
        path: "Schema",
        name: "Schema_layout",
        component: () => import("@/publishing/layout/SchemaLayout.vue"),
      },
    ],
  },
  {
    path: "/test",
    name: "test",
    props: (route) => ({
      id: route.params.pageTitle + ":::test",
    }),
    component: () => import("@/publishing/common/error.vue"),
  },
];

let router = new VueRouter({
  mode: "history",
  routes: routerMap,
});

export default router;
