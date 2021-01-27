<template>
  <section class="section">
    <img 
      alt="Front cover of the Brief"
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
  margin-top: 40px;
  margin-bottom: 40px;
  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  @include breakpoint($small) {
    margin-top: 0;
    margin-bottom: 0;
  }
}

.h2 { 
  font-size: 25px; 

  &--color { color: $blue; }
}

.content {
  margin-top: 40px;

  grid-column: 1 / 6;

  @include breakpoint($small) { 
    margin-left: 20px;

    align-self: center;
    grid-column: 3 / 6; 
  }

  @include breakpoint($medium) { grid-column: 3 / span 2; }
}

.image {
  width: 50%;
  
  grid-column: 1 / 6;
  justify-self: center;

  @include breakpoint($small) { 
    width: 100%;

    grid-column: 2 / 3;

    transform: translateY(20%);
  }
}

.link {
  @include button-accent;
  width: fit-content;
}

.subtitle {
  color: $primary;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 18px;
}
</style>