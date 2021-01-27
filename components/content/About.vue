<template>
  <section 
    id="about" 
    class="section"
  >
    <div class="section__content">
      <img 
        class="image"
        src="~/assets/images/content/about.svg"  
        alt="Generic image"
      >

      <div class="info">
        <h2>{{ title }}</h2>
        <p class="text">{{ text }}</p>
        <a 
          class="link"
          :href="link.url"
          title="link.title"
        >{{ link.text }}</a>
      </div>
    </div>
  </section>
</template>

<script> 
export default {
  data () {
    return {
      link: {
        text: 'GEO for Business Brochure',
        title: '',
        url: ''
      },
      text: 'Welcome to the first edition of the GEO for Business briefs. The United Nations Environment Programme [UNEP] and its global partners are proud to offer this series of stimulating briefs about the environmental challenges and business opportunities that demand transformational change at a global scale. New installments of GEO for Business will appear every few months to provide guidance on a range of issues relevant to the future of business in a changing world.',
      title: 'About GEO for Business'
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

    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

.image {
  width: 60%;

  grid-column: start / end;
  justify-self: center;

  @include breakpoint($small) {
    width: 80%;

    grid-column: 2 / end;
    justify-self: end;
  }
}

.info {
  margin-top: 40px;

  grid-column: start / end;

  @include breakpoint($small) {
    margin-top: 0;

    align-self: center;
    grid-column: 1 / 2;
    order: -1;
  }
}

.link {
  font-size: 16px;
}

.text {
  font-size: 18px;
  margin-bottom: 20px;

  @include breakpoint($small) { font-size: 20px; }
}
</style>