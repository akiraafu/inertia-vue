<template>
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
export default {
    components: { Nav },
    computed: {
        username() {
            return this.$page.props.auth.user.username;
        },
    },
};
</script>

<style></style>
