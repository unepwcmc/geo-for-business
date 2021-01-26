<template>
  <div class="topbar">
    <a 
      href=""
      title=""
    >
      <LogoUnep />
    </a>

    <a 
      class="link"
      href=""
      title=""
    >
      Geo for Business
    </a>

    <NavBurger />
  </div>
</template>

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