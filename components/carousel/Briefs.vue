<template>
  <section 
    id="briefs" 
    class="section"
  >
    <div class="section__content">
      <h2>{{ title }}</h2>
      <p class="section__info">{{ info }}</p>

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
            <p class="slide__text" v-html="slide.text" />
            <a
              v-if="slide.reportUrl"
              class="slide__button"
              :href="slide.reportUrl"
            >
              Download Report
            </a>
            <img 
              v-if="slide.image"
              alt=""
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
        </div>
      </flickity>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: 'GEO for Business Briefs: Agenda for 2021',
      carouselOptions: {
        cellAlign: 'left',
        pageDots: false
      },
      carouselSlides: [
        {
          image: 'building',
          reportUrl: 'test',
          text: "An overarching introductory brief which covers the call from <a href'https://www.unenvironment.org/resources/global-environment-outlook-6' title='View the Global Environment Outlook 6' target='_blank'>GEO-6</a> for transformational change – what will businesses need to do in response to the science?",
          title: 'Adapt to Survive: Business transformation in a time of uncertainty',
        },
        {
          reportUrl: undefined,
          text: 'Addressing resource efficiency, waste and supply chains in a cross-cutting brief which explores circular economy as a means to achieve the SDGs, and the implications for business. This report links to the analysis from the Ellen McArthur Foundation.',
          title: 'Moving from linear to circular economies and what this means for business:',
          
        },
        {
          reportUrl: undefined,
          text: 'Producing environmentally-sustainable food, in the right place and at the right time to meet poverty and food-related SDGs. This is a sector /system specific brief which addresses food and agriculture and links to the recent analysis in the World Resources Institute ‘food gap’ report.',
          title: 'The changing role of business in transforming food systems:',
        },
        {
          reportUrl: undefined,
          text: 'A sector/system specific brief which addresses the transformation of how we produce and consume energy to meet climate challenges. This brief links to the recent analysis in UNEP’s Emissions Gap Report.',
          title: 'How business can manage the transformation towards deep decarbonization and full electrification:',
        },
        {
          reportUrl: undefined,
          text: 'Sector/system specific brief which addresses climate-proofing current and future infrastructure investments. Focusing on the scope and scale of projected infrastructure investment to 2050, including the questions over how this can be delivered in line with the environmental dimension of the SDGs and a move towards nature-based solutions. This brief links to the on-going work of GEO for Cities.',
          title: 'Future-proofing infrastructure for climate resilience:',
        },
        {
          reportUrl: undefined,
          text: 'The brief will address how financial services can be realigned to play a transformational role in achieving the environmental dimensions of the SDGs and related international agreements. It aims to inform, challenge and enable action on global environmental challenges by the financial sector.',
          title: 'Changing finance, financing change:',
        }
      ],
      info: 'The six themes to be covered in the GEO for Business briefs are:'
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

  &__info {
    margin-bottom: 20px;
  }
}

::v-deep .flickity-prev-next-button {
  @include flickity-buttons;
}

.carousel {
  margin-top: 60px;

  &-cell {
    width: 100%; 
    
    @include breakpoint($small) {
      width: 50%;
    }

    @include breakpoint($medium) {
      width: 33%;
    }


    &:nth-child(3n+1){ 
      .slide { border-color: $orange; }
      .slide__banner,
      .slide__index { background-color: $orange; }
    }
    &:nth-child(3n+2){ 
      .slide { border-color: $purple; }
      .slide__banner,
      .slide__index { background-color: $purple; }
    }
    &:nth-child(3n+3){ 
      .slide { border-color: $blue; }
      .slide__banner,
      .slide__index { background-color: $blue; }
    }
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
    font-size: 30px;
    font-weight: bold;
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
    @include button-accent;
    margin-right: auto;
    width: fit-content;
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
    border-top-left-radius: $global-radius;
    border-bottom-right-radius: $global-radius;
    color: white;
    font-size: 18px;
    font-weight: bold;
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