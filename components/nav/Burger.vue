<template>
  <div class="nav">
    <div :id="mixinModalId" class="nav__pane" :class="isActive">

      <button id="close-nav-pane" class="nav__close" v-show="isBurgerNav" @click="closeNavPane"></button>

      <NavScrollTo 
        v-on:click:nav-link="checkCloseNavPane"
      />

      <ButtonDownloadReport class="download" :url="briefUrl" />
    </div>

    <button :id="mixinTriggerId" class="nav__burger" v-show="isBurgerNav" @click="openNavPane"></button>
  </div>
</template>

<script>
import mixinResponsive from "~/mixins/mixin-responsive"

export default {
  mixins: [
    mixinResponsive
  ],

  props: {
    briefUrl: {
      type: String
    }
  },

  data () {
    return {
      isNavPaneActiveData: false,
      selectedDropdownId: null,
      mixinModalId: 'nav-pane',
      mixinTriggerId: 'open-nav-pane'
    }
  },

  computed: {
    isBurgerNav () {
      return this.isAlwaysBurger || !this.isLarge()
    },

    isActive () {
      return { 
        'active': this.isNavPaneActive
      }
    },

    isNavPaneActive () {
      return this.isNavPaneActiveData && this.isBurgerNav
    }
  },

  methods: {
    openNavPane () {
      this.isNavPaneActiveData = true
    },
    
    closeNavPane () {
      this.isNavPaneActiveData = false
    },

    checkCloseNavPane () {
      if(this.isBurgerNav) { this.closeNavPane() }
    }
  }
}
</script>

<style lang="scss" scoped>
.download {
  margin-top: 20px;
  
  display: inline-block;

  @include breakpoint($medium) {
    order: -1;
    margin-top: 0;
    margin-right: 20px;
  }
}

.nav {
  &__burger {
    @include button-plain;
    background-image: url('~assets/images/icons/burger.svg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 35px; height: 22px;
    
    display: block;

    @include breakpoint($medium) { display: none; }
  }

  &__close {
    @include button-plain;
    background-image: url('~assets/images/icons/cross.svg');
    background-repeat: no-repeat;
    background-size: contain;
    margin-bottom: 20px;
    margin-left: auto;
    width: 24px; height: 24px;
    
    display: block;

    @include breakpoint($medium) { display: none; }
  }

  &__pane {
    background-color: white;
    padding: 24px 30px;
    width: 100vw; height: 100vh;

    display: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    @include breakpoint($medium) {
      padding: 0;
      width: auto; height: auto;
      
      align-items: center;
      display: flex;
      position: initial;
    }

    &.active { 
      @include breakpoint-down($medium) { display: block; }
    }
  }
}
</style>