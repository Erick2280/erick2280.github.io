<template>
  <section :aria-label="projectName" class="flex flex-col">
    <h2>
      <div class="py-2">
        <slot name="icon"></slot>
      </div>
      <div class="h-9 flex flex-row items-center my-2 lg:my-4">
        <slot name="logo"></slot>
      </div>
    </h2>
    <div class="text-body py-2 lg:mb-auto">
      <slot name="body"></slot>
    </div>
    <div class="uppercase flex flex-row py-4 tracking-normal">
      <slot name="links"></slot>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    projectName: {
      type: String,
      required: true,
    }
  }
})

</script>
