<template>
    <footer class="centered-container">
        <p class="text-body font-bold pb-8">
            <img class="h-4 lg:h-6 my-4" src="~/assets/svg/logo.svg" alt="riso.dev">
            <i18n path="footer.note.text">
                <template #emoticon>
                    <span :aria-label="$t('footer.note.emoticon.altText')" role="img">{{ $t('footer.note.emoticon.text') }}</span>
                </template>
            </i18n>
            <a href="https://github.com/Erick2280/erick2280.github.io/">{{ $t('footer.openSourceNotice') }}</a>
        </p>
    </footer>
</template>
