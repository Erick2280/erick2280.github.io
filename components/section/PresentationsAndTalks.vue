<template>
  <section class="centered-container" id="presentations-and-talks">
    <h1 class="section-title">{{ $t('presentationsAndTalksSection.title') }}</h1>

    <div class="flex flex-col">
    <ElementPresentationContainer class="presentation-container">
      <template #title>
        {{ $t('presentationsAndTalksSection.webForEveryone.title') }}
      </template>
      <template #description>
        <p>{{ $t('presentationsAndTalksSection.webForEveryone.description') }}</p>
      </template>
      <template #locations>
        <ul>
          <li>The Developer's Conference Recife 2020</li>
        </ul>
      </template>
    </ElementPresentationContainer>
    <ElementPresentationContainer class="presentation-container">
      <template #title>
        {{ $t('presentationsAndTalksSection.developingWithAccessibilityInMind.title') }}
      </template>
      <template #description>
        <p>{{ $t('presentationsAndTalksSection.developingWithAccessibilityInMind.description') }}</p>
      </template>
      <template #locations>
        <ul>
          <li class="py-1 md:py-2">Campus Party Brasília 2019</li>
          <li class="py-1 md:py-2">Shawee Community Day Recife</li>
          <li class="py-1 md:py-2">UHULL Connect Natal 2019</li>
        </ul>
      </template>
    </ElementPresentationContainer>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.presentation-container {
   @apply w-full py-2 lg:py-4;
}
</style>
