<template>
  <section 
    id="briefs" 
    class="section"
  >
    <div class="section__content">
      <h2 class="section__h2">{{ title }}</h2>
      <p class="section__info">{{ info }}</p>

      <client-only>
        <flickity
          class="carousel"
          :options="carouselOptions"
        >
          <div v-for="(slide, index) in carouselSlides"
            :key="index"
            class="carousel-cell slide" 
          >
            <span class="slide__index">{{ index + 1 }}</span>
            <h3 class="slide__title">{{ slide.title }}</h3>
            <p class="slide__text" v-html="slide.text" />
            <ButtonDownloadReport 
              v-if="slide.reportUrl"
              class="slide__button"
              :url="slide.reportUrl"
            />
            <img 
              v-if="slide.image"
              alt="Generic image"
              class="slide__image"
              :src="require(`~/assets/images/content/${slide.image}.svg`)" 
            >
            <span 
              v-if="!slide.reportUrl"
              class="slide__banner"
            >
              Coming Soon
            </span>
          </div>
        </flickity>
      </client-only>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    carouselSlides: {
      type: Array
    }
  },

  data () {
    return {
      title: 'GEO for Business Briefs: Agenda for 2021',
      carouselOptions: {
        cellAlign: 'left',
        pageDots: false
      },
      info: 'The six themes to be covered in the GEO for Business briefs are:'
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin slide-design-detail {
  border-top-left-radius: $global-radius;
  border-bottom-right-radius: $global-radius;
  color: white;
  font-weight: bold;
}

.section {
  @include spacer-medium-top;
  @include spacer-medium-bottom;
  background-color: $blue-light;

  &__h2 { 
    margin-bottom: 0.1em; 
  }

  &__content {
    @include container;
  }

  &__info {
    @include breakpoint($small) { font-size: 18px; }
  }
}

::v-deep .flickity-prev-next-button {
  @include flickity-buttons;
}

.carousel {
  margin-top: 60px;

  &-cell {
    @include flickity-full-height-cells;
    border: solid 2px $orange;
    border-radius: $global-radius;
    margin-right: 20px;
    padding: 20px;
    width: 100%;

    @include breakpoint($small) {
      margin-right: 20px;
      width: calc(50% - 10px); 
    }

    @include breakpoint($medium) {
      width: calc((100% - 40px)/3); 
    }

    &:nth-child(3n+1){ 
      border-color: $orange;
      .slide__banner,
      .slide__index { background-color: $orange; }
    }
    &:nth-child(3n+2){ 
      border-color: $purple;
      .slide__banner,
      .slide__index { background-color: $purple; }
    }
    &:nth-child(3n+3){ 
      border-color: $blue;
      .slide__banner,
      .slide__index { background-color: $blue; }
    }
  }
}

.slide {
  &__index {
    @include slide-design-detail;
    font-size: 30px;
    margin-bottom: 20px;
    width: 60px; height: 60px;

    align-items: center;
    display: flex;
    justify-content: center;

    @include breakpoint($small) {
      font-size: 50px;
      width: 110px; height: 110px;
    }
  }

  &__title {
    margin-bottom: 14px;
  }

  &__text {
    margin-bottom: 18px;
  }

  &__button {
    margin-right: auto;
  }

  &__image {
    margin-top: 20px;
    margin-left: auto;
    width: 100px; height: 100px;

    display: block;

    @include breakpoint($small) {
      margin-top: 0;
      width: 177px; height: 177px;
    }
  }

  &__banner {
    @include slide-design-detail;
    font-size: 18px;
    margin-top: auto;
    margin-left: auto;
    padding: 10px 20px;
    width: fit-content;

    display: block;

    @include breakpoint($small) {
      font-size: 20px;
      padding: 14px 28px;
    }
  }
}
</style>