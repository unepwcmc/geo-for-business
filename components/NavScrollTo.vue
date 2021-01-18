<template>
  <nav>
    <ul>
      <li v-for="link in nav"
        :key="link.id"
      >
        {{ link.title }}
      </li>
    </ul>
  </nav>
</template>

<script>
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
          title: '6 Briefs'
        },
        {
          id: 'advisory-board',
          title: 'Advisory Board'
        },
        {
          id: 'contact-and-resources',
          title: 'Contact & Resources'
        }

      ]
    }
  }
}
</script>
