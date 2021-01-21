<template>
  <div class="container">
    <div>
      <Hero />
      <ContentAbout />
      <CarouselBriefs />
      <CarouselMessages />
      <CardsCommittee />
    </div>
  </div>
</template>

<script>
import ContentAbout from '../components/ContentAbout.vue'
import CarouselBriefs from '../components/CarouselBriefs.vue'
import CarouselMessages from '../components/CarouselMessages.vue'
import CardsCommittee from '../components/CardsCommittee.vue'
import Hero from '../components/Hero'

export default {
  name: 'Index',

  components: { 
    ContentAbout,
    CarouselBriefs, 
    CarouselMessages,
    CardsCommittee, 
    Hero 
  }
}
</script>

<style>
.container {
  
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
