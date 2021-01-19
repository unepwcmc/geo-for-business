<template>
  <div>
    <h2>{{ title }}</h2>

    <ul>
      <li v-for="(card, index) in cards"
        :key="index"
      >
        <img src="" alt="">
        <p>
          <span>{{ card.name }}</span>
          <span>{{ card.jobTitle }}</span>
          <span>{{ card.location }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CardsCommittee',

  data () {
    return {
      title: 'Advisory Committee for GEO for Business',
      cards: [
        {
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

<style lang="scss">

</style>
