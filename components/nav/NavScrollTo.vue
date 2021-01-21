<template>
  <nav>
    <ul
      class="links"
    >
      <li v-for="link in nav"
        :key="link.id"
        class="link"
        @click="onClick(link.id)"
      >
        {{ link.title }}
      </li>
    </ul>
  </nav>
</template>

<script>
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { gsap } from "gsap"

gsap.registerPlugin(ScrollToPlugin)

export default {
  name: 'Nav',

  data () {
    return {
      nav: [
        {
          id: 'about',
          title: 'About'
        },
        {
          id: 'briefs',
          title: 'Business Briefs'
        },
        {
          id: 'advisory-committee',
          title: 'Advisory Committee'
        },
        {
          id: 'contact-and-resources',
          title: 'Contact & Resources'
        }

      ]
    }
  },
  
  mounted (){
    this.window = window
  },

  methods: {
    onClick (id) {
      console.log('click')
      const sectionId = `#${id}`
      console.log(sectionId)
      gsap.to(this.window, {
        duration: 1,
        scrollTo: sectionId
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  color: $primary;
  font-weight: bold;
}

.links {
  @include ul-unstyled;
}

.link {
  cursor: pointer;
  font-weight: bold;
  margin: 0 14px; 

  display: inline;
}
</style>