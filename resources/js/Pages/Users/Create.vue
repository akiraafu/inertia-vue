<template>
    <Head title="Create User" />

    <h1 class="text-3xl">Create a new user</h1>
    <form @submit.prevent="submit" class="max-w-sm mx-auto mt-8">
        <div class="mb-5">
            <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your name</label
            >
            <input
                v-model="form.name"
                type="text"
                id="name"
                name="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John Doe"
            />
            <div
                class="text-red-500 mt-1"
                v-if="errors.name"
                v-text="errors.name"
            ></div>
        </div>
        <div class="mb-5">
            <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label
            >
            <input
                v-model="form.email"
                type="email"
                id="email"
                name="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
            />
            <div
                class="text-red-500 mt-1"
                v-if="errors.email"
                v-text="errors.email"
            ></div>
        </div>
        <div class="mb-5">
            <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your password</label
            >
            <input
                v-model="form.password"
                type="password"
                name="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <div
                class="text-red-500 mt-1"
                v-if="errors.password"
                v-text="errors.password"
            ></div>
        </div>
        <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
            Submit
        </button>
    </form>
</template>

<script setup>
import { reactive } from "vue";
import { router } from "@inertiajs/vue3";

defineProps({
    errors: Object,
});

let form = reactive({
    name: "",
    email: "",
    password: "",
});

let submit = () => {
    router.post("/users", form);
};
</script>

<style></style>
