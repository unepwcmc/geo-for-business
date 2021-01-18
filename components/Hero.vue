<template>
  <header class="hero">
    <div>
      logo
      <h1>{{ title }}</h1>
      <p>{{ tagline }}</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Hero',

  data () {
    return {
      tagline: 'Adapt to survive',
      title: 'The newly '
    }
  }
}
</script>

<style lang="scss" scoped>

</style>