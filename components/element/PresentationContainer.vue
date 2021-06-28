<template>
  <section class="flex flex-col lg:flex-row lg:flex-none lg:flex-wrap justify-between lg:items-center">
    <div class="presentation-column">
        <h2 class="py-2 element-container-title">
            <slot name="title"></slot>
        </h2>
        <div class="py-2 lg:py-4 text-body">
            <slot name="description"></slot>
        </div>
    </div>
    <div class="uppercase text-body font-bold py-2 presentation-column">
      <slot name="locations"></slot>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.presentation-column {
    @apply lg:w-1/2 lg:px-8 lg:-mx-8;
}
</style>
