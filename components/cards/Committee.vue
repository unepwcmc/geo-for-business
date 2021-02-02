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
        <span 
          class="card__image" 
          :style="`background-image: url('${require('~/assets/images/profiles/' + card.image + '.png')}');`"
        />
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
          image: 'maria-mendiluce',
          jobTitle: 'CEO, We Mean Business Coalition',
          location: 'Switzerland',
          name: 'María Mendiluce (Co-chair)'
        },
        {
          image: 'paul-dickinson',
          jobTitle: 'Executive Chair, Carbon Disclosure Project',
          location: 'UK',
          name: 'Paul Dickinson'
        },
        {
          image: 'li-zhang',
          jobTitle: 'Board Member & Secretary General, Society of Entrepreneurs for Ecology',
          location: 'China',
          name: 'Li (Aster) Zhang'
        },
        {
          image: 'paul-ekins',
          jobTitle: 'Director, UCL Institute for Sustainable Resources, Professor of Resources and Environmental Policy, University College London',
          location: 'UK',
          name: 'Paul Ekins (Co-chair)'
        },
        {
          image: 'majda-dabaghi',
          jobTitle: 'Director, Inclusive and Green Growth International Chamber of Commerce',
          location: 'France',
          name: 'Majda Dabaghi'
        },
        {
          image: 'richard-welford',
          jobTitle: 'Chairman CSR Asia',
          location: 'Hong Kong',
          name: 'Richard Welford'
        },
        {
          image: 'antonia-gawel',
          jobTitle: 'Head, Circular Economy & Innovation World Economic Forum',
          location: 'Switzerland',
          name: 'Antonia Gawel'
        },
        {
          image: 'rodolfo-lacy-tamayo',
          jobTitle: 'Director, Environment Directorate Organisation for Economic Cooperation and Development',
          location: 'France',
          name: 'Rodolfo Lacy Tamayo'
        },
        {
          image: 'ifeoma-malo',
          jobTitle: 'Chief Executive Officer, Clean Technology Hub',
          location: 'Nigeria',
          name: 'Ifeoma Malo'
        },
        {
          image: 'aik-hoe-lim',
          jobTitle: 'Director, Trade and Environment World Trade Organization',
          location: 'Switzerland',
          name: 'Aik Hoe Lim'
        },
        {
          image: 'yannick-beaudoin',
          jobTitle: 'Director General, Ontario and Northern Canada David Suzuki Foundation',
          location: 'Canada',
          name: 'Yannick Beaudoin'
        },
        {
          image: 'jorge-caceres',
          jobTitle: 'Director, Ejecutivo Centro de Medioambiente y Energía, Federation of Chilean Industry',
          location: 'Chile',
          name: 'Jorge Càceres'
        },
        {
          image: 'jake-reynolds',
          jobTitle: 'Executive Director, Sustainable Economy University of Cambridge Institute for Sustainability',
          location: 'UK',
          name: 'Jake Reynolds'
        },
        {
          image: 'liesel-van-ast',
          jobTitle: 'Membership and Regional Coordination Manager, UNEP Finance Initiative',
          location: 'Switzerland',
          name: 'Liesel Van Ast'
        },
        {
          image: 'denise-delaney',
          jobTitle: 'Partner, Corporate Sustainability Lead, Northern Europe ERM',
          location: 'UK',
          name: 'Denise Delaney'
        },
        {
          image: 'james-donovan',
          jobTitle: 'Chair, UNEP Business and Industry Major Group',
          location: 'UK',
          name: 'James Donovan'
        },
        {
          image: 'dominik-kummerle',
          jobTitle: 'Policy Manager, Business at OECD',
          location: 'France',
          name: 'Dominik Kümmerle'
        },
        {
          image: 'tim-nixon',
          jobTitle: 'Principal, Constellation Research Thomson-Reuters',
          location: 'United States',
          name: 'Tim Nixon'
        },
        {
          image: 'moustapha-kamal-gueye',
          jobTitle: 'Coordinator, Green Jobs Program International Labour Organization, also Green Economy Coalition',
          location: 'Switzerland',
          name: 'Moustapha Kamal Gueye'
        },
        {
          image: 'sean-gilbert',
          jobTitle: 'Director, Member Engagement Global Impact Investor Network',
          location: 'United States',
          name: 'Sean Gilbert'
        },
        {
          image: 'martin-koehring',
          jobTitle: 'Head, World Ocean Initiative The Economist Group',
          location: 'UK',
          name: 'Martin Koehring'
        },
        {
          image: 'heidi-huusko',
          jobTitle: 'Senior Manager, Environment and Climate UN Global Compact',
          location: 'United States',
          name: 'Heidi Huusko'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$image-width: 139px;

.section {
  @include container;
  @include spacer-large-bottom;
  @include spacer-medium-top;
}

.cards {
  @include ul-unstyled;
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
  color: white;
  
  display: grid;
  grid-template-columns: $image-width 1fr;

  &__image {
    background-size: cover;
    border-top-left-radius: $global-radius;
    border-bottom-left-radius: $global-radius;
    min-height: 170px;
    width: $image-width;
  }

  &__text {
    background-color: $primary;
    border-top-right-radius: $global-radius;
    border-bottom-right-radius: $global-radius;
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
