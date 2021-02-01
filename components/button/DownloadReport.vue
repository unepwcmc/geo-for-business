<template>
  <a
    :class="['button', { 'disabled': isDisabled }]"
    :href="url"
    target="_blank"
    :title="title"
  >
    {{ title }}
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String
    }
  },

  data () {
    return {
      launchDate: 'Feb 03 2021 14:00:00 GMT+0000',
      title: 'Download Report'
    }
  },

  computed: {
    isDisabled () {
      const current = new Date(Date.now())
      
      return current < new Date(this.launchDate)
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  @include button-download;
}
</style>