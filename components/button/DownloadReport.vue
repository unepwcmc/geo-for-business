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
      launchDate: '02-03-2021 08:00:00', //MM-DD-YYYY
      title: 'Download Report'
    }
  },

  computed: {
    isDisabled () {
      const current = Date.now()
      
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