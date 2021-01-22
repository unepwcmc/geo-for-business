<template>
  <header class="hero">
    <div class="hero__content">
      <img src="" alt="Logo">
      <h1 class="h1">
        {{ title }}
        <span class="h1--color">{{ titlecolorchange }}</span>
      </h1>

      <div class="box-wrapper">
        <div class="box">
          <h2 class="box__title">The live launch</h2>
          <p>Lorem</p>
          <ul>
            <li>
              <span>Date</span>
            </li>
          </ul>

          <a
            class="box__link" 
            href="" >Link to live launch</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      title: 'The newly launched GEO for Business Brief 1: ',
      titlecolorchange: 'Adapt to Survive: Business transformation in a time of uncertainty'
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  background-image: url('~assets/images/hero.svg');
  background-size: cover;
  height: 826px;
  
  position: relative;
  
  &__content {
    @include container;
    padding-top: 80px;
  }
}

.h1 {
  width: 60%;

  &--color { 
    color: $blue; 
    display: block;
  }
}

.box {
  background-color: $primary;
  color: white;
  padding: 72px 40px 40px 40px;
  width: 416px;

  position: absolute;
  top: 0;
  right: 0;

  &-wrapper {

  }

  &__link {
    @include button-accent('large');
  }

  &__title {
    color: white;
  }
}
</style>