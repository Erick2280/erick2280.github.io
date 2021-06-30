<template>
  <section class="centered-container">
    <a id="featured-projects"></a>
    <h1 class="section-title">{{ $t('featuredProjectsSection.title') }}</h1>

    <div class="flex flex-col lg:flex-row lg:flex-none lg:flex-wrap lg:justify-between">
    <ElementProjectContainer class="project-container" project-name="Cordscrobbler">
      <template #icon>
        <img class="h-20" src="~/assets/svg/cordscrobbler-icon.svg" alt="">
      </template>
      <template #logo>
        <img class="h-5" src="~/assets/svg/cordscrobbler-logo.svg" alt="Cordscrobbler">
      </template>
      <template #body>
        <p class="text-thematic-cordscrobbler-dark">{{ $t('featuredProjectsSection.cordscrobbler.description') }}</p>
      </template>
      <template #links>
        <a class="text-thematic-cordscrobbler-light hover:text-thematic-cordscrobbler-dark mr-8" href="https://top.gg/bot/739266400476201061" :title="$t('featuredProjectsSection.linkToTopgg', { projectName: 'Cordscrobbler' })">
          Top.gg
        </a>
        <a class="text-thematic-cordscrobbler-light hover:text-thematic-cordscrobbler-dark mr-8" href="https://github.com/Erick2280/cordscrobbler/" :title="$t('featuredProjectsSection.linkToGitHub', { projectName: 'Cordscrobbler' })">
          GitHub
        </a>
      </template>
    </ElementProjectContainer>
    <ElementProjectContainer class="project-container" project-name="Gera">
      <template #icon>
        <img class="h-20" src="~/assets/svg/gera-icon.svg" alt="">
      </template>
      <template #logo>
        <img class="h-8" src="~/assets/svg/gera-logo.svg" alt="Gera">
      </template>
      <template #body>
        <p class="text-thematic-gera-dark">{{ $t('featuredProjectsSection.gera.description') }}</p>
      </template>
      <template #links>
        <a class="text-thematic-gera-light hover:text-thematic-gera-dark mr-8" href="https://apps.apple.com/br/app/gera-gerador-de-cobran%C3%A7as/id1530482711" :title="$t('featuredProjectsSection.linkToAppStore', { projectName: 'Gera' })">
          App Store
        </a>
        <a class="text-thematic-gera-light hover:text-thematic-gera-dark mr-8" href="https://www.instagram.com/gera.app/" :title="$t('featuredProjectsSection.linkToInstagram', { projectName: 'Gera' })">
          Instagram
        </a>
      </template>
    </ElementProjectContainer>
    <ElementProjectContainer class="project-container" project-name="COVID-19 Municipal">
      <template #icon>
        <img class="h-20" src="~/assets/svg/covidmunicipal-icon.svg" alt="">
      </template>
      <template #logo>
        <img class="h-full" src="~/assets/svg/covidmunicipal-logo.svg" alt="COVID-19 Municipal">
      </template>
      <template #body>
        <p class="text-thematic-covidmunicipal-dark">{{ $t('featuredProjectsSection.covidmunicipal.description') }}</p>
      </template>
      <template #links>
        <a class="text-thematic-covidmunicipal-light hover:text-thematic-covidmunicipal-dark mr-8" href="https://irara.covidmunicipal.live/" :title="$t('featuredProjectsSection.linkToWebApp', { projectName: 'COVID-19 Municipal' })">
          Web App
        </a>
        <a class="text-thematic-covidmunicipal-light hover:text-thematic-covidmunicipal-dark mr-8" href="https://github.com/covidmunicipal/" :title="$t('featuredProjectsSection.linkToGitHub', { projectName: 'COVID-19 Municipal' })">
          GitHub
        </a>
      </template>
    </ElementProjectContainer>
    <ElementProjectContainer class="project-container" project-name="Dinê's Donkey">
      <template #icon>
        <img class="h-20" src="~/assets/svg/dinesdonkey-icon.svg" alt="">
      </template>
      <template #logo>
        <img class="h-full" src="~/assets/svg/dinesdonkey-logo.svg" alt="Dinê's Donkey">
      </template>
      <template #body>
        <p class="text-thematic-dinesdonkey-dark">{{ $t('featuredProjectsSection.dinesdonkey.description') }}</p>
      </template>
      <template #links>
        <a class="text-thematic-dinesdonkey-light hover:text-thematic-dinesdonkey-dark mr-8" href="https://github.com/Erick2280/dines-donkey-playground/" :title="$t('featuredProjectsSection.linkToGitHub', { projectName: `Dinê's Donkey` })">
          GitHub
        </a>
      </template>
    </ElementProjectContainer>
    <ElementProjectContainer class="project-container" project-name="Rusbé">
      <template #icon>
        <img class="h-20" src="~/assets/svg/rusbe-icon.svg" alt="">
      </template>
      <template #logo>
        <img class="h-8" src="~/assets/svg/rusbe-logo.svg" alt="Rusbé">
      </template>
      <template #body>
        <p class="text-thematic-rusbe-dark">{{ $t('featuredProjectsSection.rusbe.description') }}</p>
      </template>
      <template #links>
        <a class="text-thematic-rusbe-light hover:text-thematic-rusbe-dark mr-8" href="https://rusbe.riso.dev/" :title="$t('featuredProjectsSection.linkToWebApp', { projectName: 'Rusbé' })">
          Web App
        </a>
        <a class="text-thematic-rusbe-light hover:text-thematic-rusbe-dark mr-8" href="https://github.com/Erick2280/rusbe-web-client/" :title="$t('featuredProjectsSection.linkToGitHub', { projectName: 'Rusbé' })">
          GitHub
        </a>
      </template>
    </ElementProjectContainer>
    <ElementProjectContainer class="project-container" project-name="Pelejo">
      <template #icon>
        <img class="h-20 rounded-full" src="~/assets/img/pelejo-icon.jpg" alt="">
      </template>
      <template #logo>
        <img class="h-8" src="~/assets/svg/pelejo-logo.svg" alt="Pelejo">
      </template>
      <template #body>
        <i18n path="featuredProjectsSection.pelejo.description" tag="p" class="text-thematic-pelejo-dark">
          <template #bookName>
              <span class="italic">{{ $t('featuredProjectsSection.pelejo.bookName') }}</span>
          </template>
        </i18n>
      </template>
      <template #links>
        <a class="text-thematic-pelejo-light hover:text-thematic-pelejo-dark mr-8" href="https://github.com/codeirosdeoz/Pelejo" :title="$t('featuredProjectsSection.linkToGitHub', { projectName: 'Pelejo' })">
          GitHub
        </a>
      </template>
    </ElementProjectContainer>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.project-container {
   @apply w-full lg:w-1/2 py-4 lg:py-8 lg:px-8 lg:-mx-8;
}
</style>
