<template>
  <div>
    <SectionMain />
    <SectionFeaturedProjects />
    <SectionPresentationsAndLectures />
    <SectionAwards />
    <SectionGetInTouch />
    <SectionFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="postcss">
html {
  scroll-behavior: smooth;
}

@media screen and (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
</style>
