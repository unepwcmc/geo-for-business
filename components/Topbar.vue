<template>
  <div class="topbar">
    <a 
      href=""
      title=""
    >
      unep
    </a>

    <nav-scroll-to />

    <a 
      href=""
      title=""
    >
      geo for business
    </a>
  </div>
</template>

<script>
import NavBurger from '../components/nav/NavBurger'

export default {
  name: 'TopBar',
  
  components: { NavBurger }
}
</script>

<style lang="scss" scoped>
.topbar {
  border-bottom: solid 2px $primary;
  width: 100%; height: 74px;

  align-items: center;
  display: flex;
  justify-content: space-between;
}
</style>