<template>
  <section class="centered-container">
    <a name="awards"></a>
    <h1 class="section-title">{{ $t('awardsSection.title') }}</h1>

    <div class="flex flex-col lg:flex-row lg:flex-none lg:flex-wrap lg:justify-between">
      <ElementAwardContainer class="award-container">
        <template #title>
          {{ $t('awardsSection.campusMobile2020.title') }}
        </template>
        <template #subtitle>
          <p class="font-bold">{{ $t('awardsSection.campusMobile2020.subtitle.name') }}</p>
          <p>{{ $t('awardsSection.campusMobile2020.subtitle.issuer') }}</p>
        </template>
        <template #description>
          <p>{{ $t('awardsSection.campusMobile2020.description') }}</p>
        </template>
      </ElementAwardContainer>
      <ElementAwardContainer class="award-container">
        <template #title>
          {{ $t('awardsSection.campusPartyNatal2019.title') }}
        </template>
        <template #subtitle>
          <p class="font-bold">{{ $t('awardsSection.campusPartyNatal2019.subtitle.name') }}</p>
          <p>{{ $t('awardsSection.campusPartyNatal2019.subtitle.issuer') }}</p>
        </template>
        <template #description>
          <p>{{ $t('awardsSection.campusPartyNatal2019.description') }}</p>
        </template>
      </ElementAwardContainer>
      <ElementAwardContainer class="award-container">
        <template #title>
          {{ $t('awardsSection.campusPartyBrasil2019.title') }}
        </template>
        <template #subtitle>
          <p class="font-bold">{{ $t('awardsSection.campusPartyBrasil2019.subtitle.name') }}</p>
          <p>{{ $t('awardsSection.campusPartyBrasil2019.subtitle.issuer') }}</p>
        </template>
        <template #description>
          <p>{{ $t('awardsSection.campusPartyBrasil2019.description') }}</p>
        </template>
      </ElementAwardContainer>
      <ElementAwardContainer class="award-container">
        <template #title>
          {{ $t('awardsSection.outstandingFreshman.title') }}
        </template>
        <template #subtitle>
          <i18n class="font-bold" path="awardsSection.outstandingFreshman.subtitle.issuer.name" tag="p">
            <template #fullName>
              <span class="font-normal">{{ $t('awardsSection.outstandingFreshman.subtitle.issuer.fullName') }}</span>
            </template>
          </i18n>
        </template>
        <template #description>
        </template>
      </ElementAwardContainer>
      <ElementAwardContainer class="award-container">
        <template #title>
          {{ $t('awardsSection.campusPartyBrasilia2018.title') }}
        </template>
        <template #subtitle>
          <p class="font-bold">{{ $t('awardsSection.campusPartyBrasilia2018.subtitle.name') }}</p>
          <p>{{ $t('awardsSection.campusPartyBrasilia2018.subtitle.issuer') }}</p>
        </template>
        <template #description>
          <p>{{ $t('awardsSection.campusPartyBrasilia2018.description') }}</p>
        </template>
      </ElementAwardContainer>
      <ElementAwardContainer class="award-container">
        <template #title>
          {{ $t('awardsSection.campusPartyBahia2018.title') }}
        </template>
        <template #subtitle>
          <p class="font-bold">{{ $t('awardsSection.campusPartyBahia2018.subtitle.name') }}</p>
          <p>{{ $t('awardsSection.campusPartyBahia2018.subtitle.issuer') }}</p>
        </template>
        <template #description>
          <p>{{ $t('awardsSection.campusPartyBahia2018.description') }}</p>
        </template>
      </ElementAwardContainer>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.award-container {
   @apply w-full lg:w-1/2 py-2 lg:py-4 lg:px-8 lg:-mx-8;
}
</style>
