<template>
    <v-container>
        <h1>User Page</h1>
        <p>User ID: {{ userId }}</p>
    </v-container>
</template>

<script lang="ts">
    import { defineComponent, onMounted, ref } from "vue";
    import { useRoute } from "vue-router";

    export default defineComponent({
        name: "User",
        setup() {
            const route = useRoute();
            const userId = ref(route.params.id);

            onMounted(() => {
                console.log(`User ID: ${userId.value}`);
            });

            return { userId };
        },
    });
</script>
