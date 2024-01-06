<template>
    <Head title="My app">
        <meta
            type="description"
            content="Information about my app"
            head-key="description"
        />
    </Head>
    <section class="py-6 px-8 bg-gray-200">
        <header class="flex justify-between">
            <div>
                <h1 class="font-bold text-lg">My app</h1>
                <p>Welcome back, {{ username }}</p>
            </div>
            <Nav />
        </header>
    </section>

    <section class="py-6 px-8">
        <div class="max-w-3xl mx-auto">
            <slot />
        </div>
    </section>
</template>

<script>
import Nav from "./Nav.vue";
import { Head } from "@inertiajs/vue3";
export default {
    components: { Nav, Head },
    computed: {
        username() {
            return this.$page.props.auth.user.username;
        },
    },
};
</script>

<style></style>
