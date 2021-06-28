<template>
  <div class="text-xs lg:text-sm text-right -mx-2">
    <i18n path="languageSwitcher.current" class="px-2">
      <template #localeName>
        <strong>{{ currentLocale.name }}</strong>
      </template>
    </i18n>
    <nuxt-link class="px-2 whitespace-nowrap"
      v-for="locale in availableLocales"
      :key="locale.code"
      :lang="locale.code"
      :to="switchLocalePath(locale.code)">
      {{ $t('languageSwitcher.linkToSwitch', locale.code, {localeName: locale.name}) }}
    </nuxt-link>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
    },
    currentLocale () {
      return this.$i18n.locales.find(locale => locale.code === this.$i18n.locale)
    }
  }
})

</script>
