<template>
  <section class="section">
    <div class="section__content">
      <h2>{{ title }}</h2>
      
      <client-only>
        <Flickity
          class="carousel"
          :options="carouselOptions"
        >
          <div v-for="(slide, index) in carouselSlides"
            :key="index"
            class="carousel-cell slide" 
          >
            <span class="slide__index">{{ index + 1 }} of {{ totalSlides }}</span>
            <h3 class="slide__title">{{ slide.title }}</h3>
            <div class="slide__columns">
              <span class="slide__text">{{ slide.text }}</span>
              <ul class="slide__ul">
                <li v-for="(listItem, index) in slide.list"
                  :key="`list-${index}`"
                  class="slide__li"
                >
                  {{ listItem }}
                </li>
              </ul>
            </div>
          </div>
        </Flickity>
      </client-only>
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
          "list": [
            "Climate change resulting in droughts, floods and devastating fires impacting commerce and daily life.",
            "Environmentally unsustainable food production contributing to 70 per cent of global biodiversity loss.",
            "Mounting urban waste with 7-10 billion tons generated globally each year and many cities lacking safe and environmentally-sound waste management systems.",
            "Emerging zoonotic diseases like COVID-19 show the vulnerabilities of these systems and the need for strengthened global resilience and reduced inequalities including gender inequality"
          ],
          "text": "Business leaders know that economic activity depends on healthy people, resilient and equal societies, productive ecosystems and a stable climate, but business and society today face mounting challenges, including:",
          "title": "The Scale of Global Environmental Challenges Is Unprecedented"
        },
        {
          "list": [
            "Half of all greenhouse gas emissions need to be eliminated globally by 2030 with near zero emissions achieved by 2050. This implies at least an 80 per cent reduction in fossil fuel use by 2050.",
            "To end global hunger by 2050, we must produce 50 per cent more food. Meanwhile, the environmental impact and biodiversity loss of that food production must decrease by two-thirds to protect human and planetary health.",
            "Waste streams like single-use plastics will need to be eliminated to restore the world’s oceans. Other pollution will need to be severely reduced to protect nature and human health. This implies the creation of a near-fully-circular economy by 2050.",
            "To support gender equality in the circular economy and environmental governance, so as to fulfill by 2030 the goal of achieving full and productive employment and decent work for all women and men, including for young people and persons with disabilities."
          ],
          "text": "Because of the scale of the challenge, time is of the essence and business is fundamental to the solution. But business planning needs to align with a nature positive and gender equality mission that uses only renewable energy, restores biodiversity, aims for gender equal employment practices and moves towards a fully circular economy. Given the environmental challenges we face, these are the expected transformations that will need to happen in the next 30 years:",
          "title": "Business Transformation Is Critical and Possible"  
        },
        {
          "list": [
            "Disruption from within - Business leaders must transform themselves to align to this new reality. This means setting transformational goals to achieve success that includes the health and well-being of people and nature.",
            "Setting a nature positive purpose and strategy - Business leaders need to change their core business assumptions to align with this nature positive approach. This includes asking whether the natural and social systems that they depend on are healthy and resilient, while defining their role in the broader global transformation.",
            "Collective Action - Businesses can drive transformation from within, but it is easier when their neighbors and colleagues do so as well. This means engaging with policymakers, other business sectors and consumers.",
            "Coherence of business targets and goals: Targets and goals must be aligned to the ambitious environmental goals we need to achieve, and they must be based on scientific evidence and indicators."
          ],
          "text": "Nature Positive Economic business models that are transformative and regenerative while remaining profitable will require:",
          "title": "The Role of Business in Transforming Food Systems:"
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
  @include flickity-full-height-cells;
  background-color: $primary;
  border-radius: $global-radius;
  color: white;
  margin-right: 10px;
  padding: 32px 24px;
  width: 100%;

  @include breakpoint($small) {
    padding: 38px 64px;
  }
}

.slide {
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

  &__columns {
    @include breakpoint($small) { 
      column-count: 2; 
      column-gap: 40px; 
    }
  }

  &__ul {
    margin-top: 20px;
    padding-left: 18px;
  }
  
  &__li {
    margin-bottom: 20px;
  }
}
</style>