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
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>