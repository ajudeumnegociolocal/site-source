import Vue from "vue";
import Router from "vue-router";
import Header from "./layout/MainHeader";
import Footer from "./layout/MainFooter";
import Main from "./views/Main.vue";
import Doe from "./views/Doe.vue";
import Sobre from "./views/Sobre.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "main",
      components: {
        header: Header,
        default: Main,
        footer: Footer
      }
    },
    {
      path: "/sobre",
      name: "sobre",
      components: {
        header: Header,
        default: Sobre,
        footer: Footer
      }
    },
    {
      path: "/doe-agora/:id",
      name: "doe",
      components: {
        header: Header,
        default: Doe,
        footer: Footer
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

/*
import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/MainHeader";
import AppFooter from "./layout/MainFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
*/