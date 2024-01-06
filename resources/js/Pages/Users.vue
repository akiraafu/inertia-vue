<template>
    <Head title="Users" />

    <h1 class="text-4xl font-bold">Users</h1>

    <!-- <div style="margin-top: 500px">
        <p>The current time is {{ time }}.</p>
        <Link href="/users" class="text-blue-500" preserve-scroll>
            Refresh
        </Link>
    </div> -->

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
            <tbody>
                <tr
                    v-for="user in users"
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
</template>

<script setup>
defineProps({
    users: Array,
});
</script>
