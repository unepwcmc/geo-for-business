<template>
  <section class="section">
    <div class="section__content">
      <h2>{{ title }}</h2>

      <Flickity
        class="carousel"
        :options="carouselOptions"
      >
        <div v-for="(slide, index) in carouselSlides"
          :key="index"
          class="carousel-cell" 
        >
          <div class="slide">
            <span class="slide__index">{{ index + 1 }} of {{ totalSlides }}</span>
            <h3 class="slide__title">{{ slide.title }}</h3>
            <span class="slide__text">{{ slide.text }}</span>
          </div>
        </div>
      </Flickity>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: 'Key Messages',
      carouselOptions: {
        cellAlign: 'center',
        pageDots: false
      },
      carouselSlides: [
        {
          text: "Business leaders know that economic activity depends on healthy people, resilient and equal societies, productive ecosystems and a stable climate, but business and society today face mounting challenges, including: • Climate change resulting in droughts, floods and devastating fires impacting commerce and daily life. • Environmentally unsustainable food production contributing to 70 per cent of global biodiversity loss.",
          title: 'The scale of global environmental challenges is unprecedented',
        },
        {
          text: 'Addressing resource efficiency, waste and supply chains in a cross-cutting brief which explores circular economy as a means to achieve the SDGs, and the implications for business. This report links to the analysis from the Ellen McArthur Foundation.',
          title: 'Business transformation is critical and possible',
          
        },
        {
          text: 'Producing environmentally-sustainable food, in the right place and at the right time to meet poverty and food-related SDGs. This is a sector /system specific brief which addresses food and agriculture and links to the recent analysis in the World Resources Institute ‘food gap’ report.',
          title: "The changing role of business in transforming food systems:",
        }
      ]
    }
  },

  computed: {
    totalSlides () {
      return this.carouselSlides.length
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  @include spacer-medium-top;
  @include spacer-medium-bottom;
  background-color: $blue-light;

  &__content {
    @include container;
  }
}

::v-deep .flickity-prev-next-button {
  @include flickity-buttons;
}

.carousel-cell {
  margin-right: 10px;
  width: 100%; 
  // height: 100%;
}

.slide {
  background-color: $primary;
  border-radius: $global-radius;
  color: white;
  padding: 32px 24px;
  width: 100%; height: 100%;

  @include breakpoint($small) {
    padding: 38px 64px;
  }
  
  &__index {
    color: $blue;
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  &__title {
    color: white;
    margin-bottom: 24px;
  }
}
</style>