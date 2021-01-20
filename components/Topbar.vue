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
import NavScrollTo from '../components/NavScrollTo'

export default {
  name: 'TopBar',
  
  components: { NavScrollTo }
}
</script>

<style lang="scss" scoped>
.topbar {
  border-bottom: solid 2px $primary;
  width: 100%; height: 74px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>