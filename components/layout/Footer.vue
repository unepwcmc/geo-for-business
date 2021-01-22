<template>
  <footer id="contact-and-resources" class="footer">
    <div class="footer__content">
      <div>
        <h2>Contact Details</h2>
        <span class="footer__text">Email address</span>
        <a 
          class="footer__link"
          href="mailto:unep-science-geoforbusiness@un.org"
          title="Send an email to UNEP Science GEO for Busines"
        >
          unep-science-geoforbusiness@un.org
        </a>
        <img 
          class="footer__logo"
          src="https://s3.amazonaws.com/wcmc.logo/UN-Environment-+logo+2017.svg" />
        <img 
          class="footer__logo"
          src="https://s3.amazonaws.com/wcmc.logo/UNEP_WCMC_logo.svg" />
      </div>
      <div class="footer__links">
        <h2>Important Links</h2>
        <ul class="footer__ul">
          <li v-for="link in links"
            :key="link.title"
          >
            <a 
              class="footer__link-external"
              :href="link.url" 
              :title="`Visit: ${link.title}`"
            >
              {{ link.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>  
  </footer>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          title: 'GEO for Business',
          url: ''
        },
        {
          title: 'UN Environment Programme’s Strategy for Private Sector Engagement',
          url: ''
        },
        {
          title: 'Global Environment Outlook – GEO-6: Healthy Planet, Healthy People',
          url: ''
        },
        {
          title: 'Global Environment Outlook –GEO-6: Summary for Policymakers',
          url: ''
        }

      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  @include spacer-medium-top;
  background-image: url('~assets/images/hero.svg');
  background-position: center bottom;
  background-size: cover;
  border-bottom: solid 30px $primary;
  padding-bottom: 220px;
  
  @include breakpoint($small) {
    padding-bottom: 375px;
  }

  &__content {
    @include container;
    
    @include breakpoint($small) {
      display: grid;
      grid-template-columns: 300px 1fr;
    }
  }

  &__logo {
    margin: 24px 0;
    height: 50px;

    display: block;
  }

  &__text {
    font-weight: bold;
  }

  &__links {
    @include breakpoint ($small) { 
      border-left: solid 1px $primary; 
      padding-left: 60px;
    }
    
    @include breakpoint ($small) { padding-left: 40px; }
    @include breakpoint ($medium) { padding-left: 100px; }
  }

  &__ul {
    @include ul-unstyled;
  }

  &__link {
    display: block;

    &-external {
      @include button-link-external;
      margin-bottom: 18px;
    
      display: block;
    }
  }
}
</style>