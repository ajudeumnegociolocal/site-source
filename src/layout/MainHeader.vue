<template>
    <header class="header-global">
        <base-nav class="navbar-main"  type="" effect="dark" expand>
            <router-link slot="brand" class="" to="/">
               <h1 class="display-3  text-white">
                   <img width="300px" src="img/logo-m.png" class="d-lg-none" alt="Ajude um Negocio Local">
                    <img width="600px" src="img/logo.png" class="d-none d-lg-block" alt="Ajude um Negocio Local">

                                </h1>
            </router-link>
            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-10 collapse-brand">
                    <a href="/">
                        #AJUDEUMNEGOCIOLOCAL
                    </a>
                </div>
                <div class="col-2 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>
            <ul class="navbar-nav ml-lg-auto">
                
                <li class="nav-item">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd5pfwlBez8PG-RyqCzqWyR3Sncb8pUyf0-ZKlyRsWImd7wXA/viewform" target="blank" class="nav-link">Cadastre seu Negócio</a>
                </li>
                <li class="nav-item">
                    <router-link to="sobre" class="nav-link">Sobre</router-link>
                </li>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
               <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/ajudeumnegociolocal"
                       target="_blank" data-toggle="tooltip" title="Follow us on Instagram">
                        <i class="fa fa-instagram"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li>
                
            </ul>
        </base-nav>
        
    </header>
    
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton
  }
};
</script>
<style>
</style>
