<template>
  <header class="hero">
    <div class="hero__container">
      <div class="hero__content">
        <img 
          alt="GEO for Business Logo"
          class="logo"
          src="~/assets/images/logos/geo-for-business.svg" 
        >
        <h1 class="h1">
          {{ title }}
          <span class="h1--color">{{ titleColorChange }}</span>
        </h1>

        <div 
          v-if="!eventEnded"
          class="box-wrapper"
        >
          <div class="box">
            <h2 class="box__title">The Live Launch!</h2>
            <ul class="box__ul">
              <li 
                v-for="(detail, index) in details"
                :key="`detail-${index}`"
                class="box__li"
              >
                <i :class="['box__icon', `icon--${detail.icon}`]" />
                <p>
                  <span class="box__label">{{ detail.label }}</span>
                  <span>{{ detail.value }}</span>
                </p>
              </li>
            </ul>

            <a
              class="box__link" 
              :href="eventUrl"
              target="_blank"
              title="Go to the Live Launch"
            >
              Link to Live Launch
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      dateEventEnd: '10-07-2021 23:59:00', //MM-DD-YYYY
      details: [
        {
          icon: 'calendar',
          label: 'Date',
          value: '7 Oct 2021'
        },
        {
          icon: 'clock',
          label: 'Time',
          value: '13:00 - 14:30 BST'
        },
        {
          icon: 'sandtimer',
          label: 'Duration',
          value: '90 minutes'
        },
      ],
      eventUrl: 'https://www.youtube.com/watch?v=a-hNSkpqoAk',
      title: 'The Newly Launched GEO for Business Brief 2:',
      titleColorChange: 'The Role of Business in Moving from Linear to Circular economies',
    }
  },

  computed: {
    eventEnded () {
      const current = Date.now()
      
      return current > new Date(this.dateEventEnd)
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  background-image: url('~assets/images/hero.svg');
  background-size: cover;
  
  @include breakpoint($medium) { height: 826px; }

  &__container { @include container; }
  
  &__content {
    @include spacer-large-top;
    @include spacer-small-bottom;
    position: relative;
  }
}

.logo {
  width: 160px;
  
  @include breakpoint($small) { width: 202px; }
}

.h1 {
  margin-top: 20px;
  margin-bottom: 20px;
  
  @include breakpoint($medium) { width: 60%; }

  &--color { 
    color: $blue; 
    display: block;
  }
}

.box {
  background-color: $primary;
  color: white;
  padding: 40px 30px 30px 30px;
  

  @include breakpoint($small) {
    padding: 70px 40px 40px 40px;
  }

  @include breakpoint($medium) {
    width: 416px;

    position: absolute;
    top: 0;
    right: 0;
  }

  &__icon { 
    @include icon-basic; 
    margin-right: 8px;

    transform: translateY(3px);
  }

  &__label {
    font-size: 18px;
    font-weight: bold;

    display: block;

    @include breakpoint($small) { font-size: 20px; }
  }

  &__li {
    margin-bottom: 14px;

    display: grid;
    grid-template-columns: fit-content(25%) 1fr;
  }

  &__link {
    @include button-accent('large');
  }

  &__title {
    color: white;
  }

  &__ul {
    @include ul-unstyled;
    margin-bottom: 40px;

    @include breakpoint($small) { margin-bottom: 80px; }
  }
}

.icon {
  &--calendar { background-image: url('~assets/images/icons/calendar.svg'); }
  &--clock { background-image: url('~assets/images/icons/clock.svg'); }
  &--sandtimer { background-image: url('~assets/images/icons/sandtimer.svg'); }
}

</style>