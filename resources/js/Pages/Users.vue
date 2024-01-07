<template>
    <Head title="Users" />

    <div class="flex justify-between mb-6">
        <h1 class="text-4xl font-bold">Users</h1>

        <input
            v-model="search"
            type="text"
            placeholder="Search"
            class="rounded-lg border-gray-200"
        />
    </div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
            <tbody>
                <tr
                    v-for="user in users.data"
                    :key="user.id"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                    <th
                        scope="row"
                        class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        <div class="ps-3">
                            <div class="text-base font-semibold">
                                {{ user.name }}
                            </div>
                        </div>
                    </th>
                    <td class="px-6 py-4">
                        <a
                            href="`/users/${user.id}/edit`"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >Edit</a
                        >
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <Pagination :links="users.links" class="mt-6" />
</template>

<script setup>
import { ref, watch } from "vue";
import Pagination from "../Shared/Pagination.vue";
import { router } from "@inertiajs/vue3";
let props = defineProps({
    users: Object,
    filters: Object,
});

let search = ref(props.filters.search);

watch(search, (value) => {
    router.get(
        "/users",
        {
            search: value,
        },
        { preserveState: true, replace: true }
    );
});
</script>
