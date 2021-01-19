<template>
  <header class="hero">
    <div>
      logo
      <h1>{{ title }}</h1>
      <p>{{ tagline }}</p>
      <p>Lorem ipsum</p>
    </div>

    <div>
      <p>The live launch</p>
      <p>Lorem</p>
      <ul>
        <li>
          <span>Date</span>
        </li>
      </ul>

      <a href="" >Link to live launch</a>
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