import Vue from "vue";
import VueRouter from "vue-router";

import mainData from "./../mainData.json";
Vue.use(VueRouter);

import homepage from "@/Pages/homepage";
import gamePage from "@/Pages/gamePage";
import company from "@/Pages/company";
import support from "@/Pages/support";
import job from "@/Pages/job";
import contact from "@/Pages/contact";
import shop from "@/Pages/shop";

const routes = [
  { path: "/", component: homepage },
  {
    path: "/inside",
    component: gamePage,
    props: {
      pageData: mainData.games.inside,
    },
  },
  {
    path: "/limbo",
    component: gamePage,
    props: {
      pageData: mainData.games.limbo,
    },
  },

  { path: "/company", component: company },
  { path: "/support", component: support },
  { path: "/job", component: job },
  { path: "/contact", component: contact },
  { path: "/shop", component: shop },
];

let router = new VueRouter({
  routes, // short for `routes: routes`,
  linkExactActiveClass: "active",
  mode: "history",
});

export default router;
