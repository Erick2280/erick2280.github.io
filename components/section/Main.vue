<template>
  <main class="centered-container">
    <ElementLanguageSwitcher />
    <img class="h-48 object-scale-down md:h-72 mt-6 mb-2" :title="$t('mainSection.artwork.title')" :alt="$t('mainSection.artwork.alternativeText')" src="~/assets/img/artwork-me.png" />
    <h1 class="main-greeting py-2 md:py-4">{{ $t('mainSection.greeting') }}</h1>
    <i18n path="mainSection.aboutMe.text" tag="p" class="text-sm sm:text-base lg:text-xl py-2 md:py-4">
        <template #name>
            <strong>Erick Almeida</strong>
        </template>
    </i18n>
    <ul class="py-2 md:py-4">
      <li class="presentation-item">
        <IconLaptop />
        <i18n path="mainSection.facts.pursuingBachelorOfScience" tag="p">
          <template #courseName>
            <strong>{{ $t('mainSection.facts.courseName') }}</strong>
          </template>
          <template #universityName>
            <strong>{{ $t('mainSection.facts.universityName') }}</strong>
          </template>
        </i18n>
      </li>
      <li class="presentation-item">
        <IconFruit />
        <i18n path="mainSection.facts.extensionProjectParticipant" tag="p">
          <template #extensionProjectName>
            <a href="https://academy.cin.ufpe.br/">Apple Developer Academy | UFPE</a>
          </template>
        </i18n>
      </li>
      <li class="presentation-item">
        <IconHeart />
        <i18n path="mainSection.facts.softwareDeveloper" tag="p">
          <template #locationName>
            <a href="https://autecla.com.br">Autecla</a>
          </template>
        </i18n>
      </li>
      <li class="presentation-item">
        <IconPeople />
        <i18n path="mainSection.facts.programMember" tag="p">
          <template #programName>
            <a href="https://pet.cin.ufpe.br/">PET-Informática</a>
          </template>
        </i18n>
      </li>
    </ul>
    <ElementShortcuts class="py-2 md:py-4" />
  </main>
</template>

<style lang="postcss" scoped>
.presentation-item {
  @apply flex flex-row items-center py-1;
}

.presentation-item p {
  @apply text-sm lg:text-base pl-4;
}

.presentation-item svg {
  @apply text-green-light flex-shrink-0 w-6 my-1;
}

</style>
