<template>
  <footer>
    <div>
      <h3>Contact Details</h3>
      <img src="https://s3.amazonaws.com/wcmc.logo/UN-Environment-+logo+2017.svg" />
      <img src="https://s3.amazonaws.com/wcmc.logo/UNEP_WCMC_logo.svg" />
    </div>
    <div>
      <h3>Important Links</h3>
      <ul>
        <li v-for="link in links"
          :key="link.title"
        >
          <a :href="link.url" title="link.title">{{ link.url }}</a>
        </li>
      </ul>
    </div>  
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',

  data () {
    return {
      links: [
        {
          title: 'About',
          url: ''
        },
        {
          title: '6 Briefs',
          url: ''
        },
        {
          title: 'Advisory Board',
          url: ''
        },
        {
          title: 'Contact & Resources',
          url: ''
        }

      ]
    }
  }
}
</script>
