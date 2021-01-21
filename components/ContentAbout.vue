<template>
  <section class="section">
    <div class="section__content">
      <div>
        <h2>{{ title }}</h2>
        <p class="text">{{ text }}</p>
        <a 
          class="link"
          :href="link.url"
          title="link.title"
        >{{ link.text }}</a>
      </div>
      <img src="~/assets/images/content/about.svg"  alt="">
    </div>
  </section>
</template>

<script> 
export default {
  name: 'ContentAbout',

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
  background-color: $blue-light;

  &__content {
    @include container;

    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

.link {
  font-size: 18px;
}

.text {
  font-size: 20px;
}

</style>