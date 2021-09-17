<template>
  <section class="centered-container" id="get-in-touch">
    <h1 class="section-title">{{ $t('getInTouchSection.title') }}</h1>
    
    <ul class="contact-list py-2 lg:py-4">
      <li>
        <a href="mailto:eusou@erickalmeida.com.br" :title="$t('getInTouchSection.linkToMail', { mailAddress: 'eusou@erickalmeida.com.br' })">
          <IconEmail />
          <span>eusou@erickalmeida.com.br</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/Erick2280" :title="$t('getInTouchSection.linkToGitHub')">
          <IconGitHub />
          <span>GitHub</span>
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/risodev" :title="$t('getInTouchSection.linkToLinkedin')">
          <IconLinkedin />
          <span class="font-bold">Linkedin</span>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/its_quinho" :title="$t('getInTouchSection.linkToTwitter')">
          <IconTwitter />
          <span class="font-bold">Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://t.me/Erick2280" :title="$t('getInTouchSection.linkToTelegram')">
          <IconTelegram />
          <span class="font-bold">Telegram</span>
        </a>
      </li>
      <li>
        <a href="https://discordapp.com/users/306920588801343488/" :title="$t('getInTouchSection.linkToDiscord')">
          <IconDiscord />
          <span class="font-bold">Discord</span>
        </a>
      </li>
      <li>
        <a href="https://play.google.com/store/apps/dev?id=6615611233941473559" :title="$t('getInTouchSection.linkToGooglePlay')">
          <IconGooglePlay />
          <span>Google Play</span>
        </a>
      </li>
      <li>
        <a href="https://apps.apple.com/br/developer/erick-almeida/id1520503458" :title="$t('getInTouchSection.linkToAppStore')">
          <IconFruit />
          <span>App Store</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<style lang="postcss" scoped>

.contact-list li {
  @apply py-1 lg:py-2;
}

.contact-list a {
  @apply flex flex-row items-center w-fit;
}

.contact-list a span {
  @apply text-sm lg:text-base pl-2;
}

.contact-list svg {
  @apply flex-shrink-0 w-6 my-1;
}

</style>
