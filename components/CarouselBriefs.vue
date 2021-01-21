<template>
  <section 
    id="briefs" 
    class="section"
  >
    <div class="section__content">
      <h2>{{ title }}</h2>

      <flickity
        class="carousel"
        :options="carouselOptions"
      >
        <div v-for="(slide, index) in carouselSlides"
          :key="index"
          class="carousel-cell" 
        >
          <div class="slide">
            <span class="slide__index">{{ index + 1 }}</span>
            <h3 class="slide__title">{{ slide.title }}</h3>
            <span class="slide__text">{{ slide.text }}</span>

            <a
              v-if="slide.reportUrl"
              class="slide__button"
              :href="slide.reportUrl"
            >
              Download Report
            </a>
          </div>
        </div>
      </flickity>
    </div>
  </section>
</template>

<script>
import Flickity from 'vue-flickity'

export default {
  name: 'CarouselBriefs',

  components: { Flickity },

  data () {
    return {
      title: 'GEO for Business Briefs: Agenda for 2021',
      carouselOptions: {
        cellAlign: 'left',
        pageDots: false
      },
      carouselSlides: [
        {
          reportUrl: 'test',
          text: "An overarching introductory brief which covers the call from GEO-6 for transformational change – what will businesses need to do in response to the science?",
          title: 'Adapt to Survive: Business transformation in a time of uncertainty',
        },
        {
          reportUrl: '',
          text: 'Addressing resource efficiency, waste and supply chains in a cross-cutting brief which explores circular economy as a means to achieve the SDGs, and the implications for business. This report links to the analysis from the Ellen McArthur Foundation.',
          title: 'Moving from linear to circular economies and what this means for business:',
          
        },
        {
          reportUrl: '',
          text: 'Producing environmentally-sustainable food, in the right place and at the right time to meet poverty and food-related SDGs. This is a sector /system specific brief which addresses food and agriculture and links to the recent analysis in the World Resources Institute ‘food gap’ report.',
          title: "The changing role of business in transforming food systems:",
        },
        {
          reportUrl: '',
          text: 'text',
          title: "Title",
        },
        {
          reportUrl: '',
          text: 'text',
          title: "Title",
        },
        {
          reportUrl: '',
          text: 'text',
          title: "Title",
        }
      ]
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

.carousel-cell {
  @include breakpoint($small) {
    width: 50%;
  }

  @include breakpoint($medium) {
    width: 33%; height: 521px;
  }
}

.slide {
  border: solid 2px $orange;
  border-radius: $global-radius;
  margin: 0 10px;
  padding: 20px;
  height: 100%;
  
  &__index {
    border-top-left-radius: $global-radius;
    border-bottom-right-radius: $global-radius;
    color: white;
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 20px;
    width: 110px; height: 110px;

    align-items: center;
    display: flex;
    justify-content: center;

    &:nth-child(1){ background-color: $orange; }
  }

  &__title {
    margin-bottom: 14px;
  }

  &__button {
    @include button-accent;
    margin-right: auto;
    width: fit-content;
  }
}
</style>