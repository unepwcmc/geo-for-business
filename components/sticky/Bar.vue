<template>
  <div class="sticky-bar" v-bind:style="{ height: stickyBarHeight }">
    <div 
      ref="stickyBarWrapper"
      :class="[
        'sticky-bar__wrapper', 
        this.id,
        this.targetElementClass,
        { 'stuck': this.isStuck }
      ]"
    >
      <div class="sticky-bar__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import mixinResponsive from '../../mixins/mixin-responsive.js'

export default {
  name: 'sticky-bar',

  mixins: [ mixinResponsive],

  props: {
    triggerElement: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      id: `js-sticky-${this._uid}`,
      isStuck: false,
      targetElementClass: 'gsap-target-sticky',
      stickyHeight: 0
    }
  },

  computed: {
    stickyBarHeight () {
      return `${this.stickyHeight}px`
    }
  },

  mounted () {
    this.$nuxt.$on('windowResized', this.calculateStickyBarHeight)
    this.calculateStickyBarHeight()
    this.stickyHandler()
  },

  methods: {
    stickyHandler () {
      this.$ScrollTrigger.create({
        trigger: this.triggerElement,
        start: "top top", // when the bottom of the trigger hits the top of the viewport
        onUpdate: self => {
          this.isStuck = self.isActive
        }
      })
    },

    calculateStickyBarHeight () {
      this.stickyHeight = this.$refs.stickyBarWrapper.clientHeight
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes showBar {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

.sticky-bar__wrapper {
  z-index: 1;
}

.stuck {
  width: 100%;
  position: fixed;
  top: 0;

  animation: showBar .4s forwards linear;
}
</style>