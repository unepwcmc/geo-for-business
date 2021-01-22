<template>
  <section class="section">
    <img 
      alt=""
      class="image"
      src="~/assets/images/content/brief-1.png"
    >
    <div class="content">
      <h2 class="h2">
        <span class="h2--color">{{ titleColorChange }}</span>
        {{ title }}
      </h2>
      <p class="subtitle">{{ subtitle }}</p>
      <a 
        class="link"
        :href="link.url"
        title="link.title"
      >{{ link.text }}</a>
    </div>
  </section>
</template>

<script> 
export default {
  data () {
    return {
      link: {
        text: 'Download Report',
        title: '',
        url: ''
      },
      title: ' Adapt to survive',
      titleColorChange: 'Brief 1:',
      subtitle: 'Business Transformation in a Time of Uncertainty',
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  @include container;
  @include spacer-medium-top;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.h2 { 
  font-size: 25px; 

  &--color { color: $blue; }
}

.content {
  grid-column: first / end;

  @include breakpoint($small) { grid-column: 3 / end; }
  @include breakpoint($medium) { grid-column: 3 / span 2; }
}

.image {
  grid-column: first / end;

  // @include breakpoint($small) { grid-column: first / span 2; }
  @include breakpoint($medium) { grid-column: 2 / 3; }
}

.link {
  @include button-accent;
  width: fit-content;
}

.subtitle {
  color: $primary;
  font-size: 18px;
  font-weight: bold;
}
</style>