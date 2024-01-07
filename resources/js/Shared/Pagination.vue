<template>
    <!-- paginator -->
    <div>
        <component
            :is="link.url ? 'Link' : 'span'"
            v-for="link in links"
            :href="link.url"
            v-html="link.label"
            class="px-2"
            :class="{
                'text-gray-400': !link.url,
                'font-bold bg-lime-200': link.active,
            }"
        />
        <!-- <Link
            v-for="link in users.links"
            :href="link.url"
            v-html="link.label"
        ></Link> -->
    </div>
</template>

<script>
export default {
    props: {
        links: Array,
    },
};
</script>

<style></style>
