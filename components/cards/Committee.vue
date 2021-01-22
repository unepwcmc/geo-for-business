<template>
  <section 
    id="advisory-committee"
    class="section"
  >
    <h2>{{ title }}</h2>

    <ul class="cards">
      <li v-for="(card, index) in cards"
        :key="index"
        class="card"
      >
        <img 
          v-if="card.image"
          :src="require(`~/assets/images/profiles/${card.image}`)" 
          alt=""
        >
        <p class="card__text">
          <span class="card__name">{{ card.name }}</span>
          <span>{{ card.jobTitle }}</span>
          <span class="card__location">{{ card.location }}</span>
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: 'Advisory Committee for GEO for Business',
      cards: [
        {
          image: 'maria-mendiluce.png',
          jobTitle: 'CEO, We Mean Business Coalition',
          location: 'Switzerland',
          name: 'María Mendiluce (Co-chair)'
        },
        {
          jobTitle: 'Executive Chair, Carbon Disclosure Project',
          location: 'UK',
          name: 'Paul Dickinson'
        },
        {
          jobTitle: 'Board Member & Secretary General Society of Entrepreneurs for Ecology',
          location: 'China',
          name: 'Li (Aster) Zhang'
        },
        {
          jobTitle: 'Director, UCL Institute for Sustainable Resources, Professor of Resources and Environmental Policy University College London',
          location: 'UK',
          name: 'Paul Ekins (Co-chair)'
        },
        {
          jobTitle: 'Director, Inclusive and Green GrowthInternational Chamber of Commerce',
          location: 'France',
          name: 'Majda Dabaghi'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  @include container;
  @include spacer-large-bottom;
  @include spacer-medium-top;
}

.cards {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;

  @include breakpoint($small) {
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }

  @include breakpoint($medium) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.card {
  background-color: $primary;
  border-radius: $global-radius;
  color: white;
  
  display: grid;
  grid-template-columns: 1fr 2fr;

  &__text {
    padding: 22px 20px;

    display: flex;
    flex-direction: column;
  }

  &__name {
    font-weight: bold;

    display: block;
  }

  &__location {
    font-weight: bold;
    margin-top: auto;
  }
}
</style>
