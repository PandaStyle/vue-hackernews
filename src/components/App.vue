<template>
      <div class="navbar">
          <div class="logo">
              <img src="../img/theCuratist-logo.png" alt=""/>
          </div>
          <ul class="menu">
              <li><a v-link="{ path: '/feed/design' }">Design</a></li>
              <li><a v-link="{ path: '/feed/technology' }">Tech</a></li>
              <li ng-class="{ active: isActive('/feed/business')}"><a class=""  href="#/feed/business">Business</a></li>
              <li ng-class="{ active: isActive('/tumblr')}"><a class="" href="#/tumblr">Inspiration</a></li>
          </ul>
          <div class="hamburger button_container" id="toggle">
              <span class="top"></span>
              <span class="middle"></span>
              <span class="bottom"></span>
          </div>
      </div>
      <menu>
          <ul>
              <li>
                  <a class="bordered" href="">Layouts</a>
              </li>
              <li>
                  <a class="bordered" href="">Suggest a feed</a>
                  <input class="suggest" type="text"/>
              </li>
              <li>
                  <a class="bordered" href="">About</a>
              </li>
          </ul>
      </menu>
    <!-- main view -->
    <router-view
      class="view">
    </router-view>
</template>



<style lang="sass">
  @import "../styles/index.scss";
</style>
