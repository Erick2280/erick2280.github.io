<template>
  <section>
    <h2 class="py-2 element-container-title">
        <slot name="title"></slot>
    </h2>
    <div class="py-1 uppercase text-body">
      <slot name="subtitle"></slot>
    </div>
    <div class="py-4 text-body">
      <slot name="description"></slot>
    </div>
  </section>
</template>
