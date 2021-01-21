export default {
  data () {
    return {
      windowWidth: 0,
      currentBreakpoint: '',
      breakpoints: {
        small: 767, // MUST MATCH VARIABLES IN /assets/css/abstracts/_variables
        medium: 1024,
        large: 1300
      }
    }
  },

  created () {
    this.$nuxt.$on('windowResized', this.updateWindowSize)
  },

  mounted () {
    this.window = window
    this.updateWindowSize()

    // allow for multiple functions to be called on window resize
    this.window.addEventListener('resize', () => this.$nuxt.$emit('windowResized'))
  },

  methods: {
    updateWindowSize () {
      this.windowWidth = this.window.innerWidth

      if(this.isSmall()) { this.currentBreakpoint = 'small' }
      if(this.isMedium()) { this.currentBreakpoint = 'medium' }
      if(this.isLarge()) { this.currentBreakpoint = 'large' }
      if(this.isXLarge()) { this.currentBreakpoint = 'xlarge' }
    },

    isSmall () {
      return this.windowWidth <= this.breakpoints.small
    },

    isMedium () {
      return this.windowWidth > this.breakpoints.small && this.windowWidth <= this.breakpoints.medium
    },

    isLarge () {
      return this.windowWidth > this.breakpoints.medium && this.windowWidth <= this.breakpoints.large
    },

    isXLarge () {
      return this.windowWidth > this.breakpoints.large
    },

    getCurrentBreakpoint () {
      return this.currentBreakpoint
    }
  }
}
