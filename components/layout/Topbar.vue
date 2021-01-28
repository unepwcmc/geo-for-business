<template>
  <div class="topbar">
    <a 
      href="https://www.unep.org/"
      target="_blank"
      title="Visit: UNEP"
    >
      <LogoUnep />
    </a>

    <a 
      class="link"
      href="https://www.unenvironment.org/global-environment-outlook/geo-business"
      target="_blank"
      title="Visit: Geo for Business"
    >
      Geo for Business
    </a>

    <NavBurger :brief-url="briefUrl" />
  </div>
</template>

<script>
export default {
  props: {
    briefUrl: {
      type: String
    }
  },
}
</script>

<style lang="scss" scoped>
.topbar {
  @include gutters;
  border-bottom: solid 2px $primary;
  width: 100%; height: 50px;

  align-items: center;
  display: flex;
  justify-content: space-between;

  @include breakpoint($small) {
    height: 74px;
  }
}

.link {
  color: $primary;
  font-weight: bold;

  @include breakpoint($medium) {
    order: 1;
  }
}

</style>