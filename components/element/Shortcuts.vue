<template>
    <nav class="text-body">
        <p>{{ $t('mainSection.shortcuts.jumpTo') }}</p>
        <ul>
            <li><a href="#featured-projects">{{ $t('featuredProjectsSection.title') }}</a></li>
            <li><a href="#presentations-and-lectures">{{ $t('presentationsAndLecturesSection.title') }}</a></li>
            <li><a href="#awards">{{ $t('awardsSection.title') }}</a></li>
            <li><a href="#get-in-touch">{{ $t('getInTouchSection.title') }}</a></li>
        </ul>
    </nav>
</template>

<style lang="postcss" scoped>
nav p {
    @apply py-0.5;
}

ul li {
    @apply py-0.5;
}
</style>
