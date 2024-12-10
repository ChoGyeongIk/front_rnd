<template>
    <v-app>
        <v-app-bar>
            <v-toolbar-title><img src="@/assets/smallLogo.png" alt="" @click="$router.push('/')" /></v-toolbar-title>
            <v-spacer />
            <v-btn to="/" variant="text">Home</v-btn>
            <v-btn to="/list">List</v-btn>
            <v-btn :to="'/user/' + state.idx">user</v-btn>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn color="primary" v-bind="props">dropMenu</v-btn>
                </template>
                <v-list>
                    <v-list-item @click="test(1)">
                        <v-list-item-media>1</v-list-item-media>
                    </v-list-item>
                    <v-list-item @click="test(2)"><v-list-item-title>2</v-list-item-title></v-list-item>
                    <v-list-item @click="test(3)"><v-list-item-title>3</v-list-item-title></v-list-item>
                    <v-list-item @click="test(4)"><v-list-item-title>4</v-list-item-title></v-list-item>
                </v-list>
            </v-menu>
            <v-btn @click="themeChange()"><v-icon icon="mdi-theme-light-dark"></v-icon></v-btn>
        </v-app-bar>

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script lang="ts">
    import { onMounted, reactive } from "vue";
    import { useTheme } from "vuetify";
    export default {
        setup() {
            const theme = useTheme();
            const state = reactive({
                idx: 1 as number,
            });

            onMounted(() => {
                // setInterval(() => {
                //     state.idx = Math.floor(Math.random());
                //     console.log(state.idx);
                // }, 1000);
            });
            const themeChange = () => {
                if (theme.global.name.value === "light") {
                    theme.global.name.value = "dark";
                } else {
                    theme.global.name.value = "light";
                }
            };
            const test = (idx: number) => {
                console.log(idx);
            };

            return { state, themeChange, test };
        },
    };
</script>
