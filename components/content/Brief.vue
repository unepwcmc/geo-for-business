<template>
  <section class="section">
    <img 
      alt="Front cover of the Brief"
      class="image"
      src="~/assets/images/content/brief.svg"
    >
    <div class="content">
      <h2 class="h2">
        <span class="h2--color">{{ titleColorChange }}</span>
        {{ title }}
      </h2>
      <p class="subtitle">
        {{ subtitle }}
      </p>
      <ButtonDownloadReport class="download" :url="briefUrl" />
    </div>
  </section>
</template>

<script> 
export default {
  props: {
    briefUrl: {
      type: String
    }
  },

  data () {
    return {
      title: ' Adapt to survive',
      titleColorChange: 'Brief 1:',
      subtitle: 'Business transformation in a time of uncertainty',
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
  margin-bottom: 0;

  &--color { color: $blue; }
}

.content {
  margin-top: 40px;

  grid-column: 1 / 6;

  @include breakpoint($small) { 
    margin-left: 20px;

    align-self: center;
    grid-column: 3 / 5; 
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

.subtitle {
  color: $primary;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 18px;
}
</style>