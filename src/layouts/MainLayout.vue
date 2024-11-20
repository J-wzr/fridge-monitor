<template>
  <q-layout view="hHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="mdi-menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> My TODO </q-toolbar-title>

        <div>
          <q-btn
            flat
            round
            padding="2px 10px 4px 4px"
            icon="mdi-logout"
            @click="logout"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-toolbar class="bg-primary"> </q-toolbar>

      <q-item class="bg-grey-3">
        <q-item-section>Lists</q-item-section>
        <q-item-section side>
          <CreateTodoListButton icon="mdi-plus" flat round size="sm" />
        </q-item-section>
      </q-item>

      <TodoListsList />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signOut } from "firebase/auth";
import { Notify } from "quasar";
import CreateTodoListButton from "src/components/CreateTodoListButton.vue";
import TodoListsList from "src/components/TodoListsList.vue";

// Reactive state for drawer
const leftDrawerOpen = ref(false);

// Router instance for navigation
const router = useRouter();

// Toggle the left drawer
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

// Logout function to sign out the user
const logout = async () => {
  const auth = getAuth();
  try {
    await signOut(auth); // Firebase signOut
    Notify.create({
      type: "positive",
      message: "You have successfully logged out!",
    });
    router.push("/new-auth/new-login"); // Redirect to login page
  } catch (error) {
    Notify.create({
      type: "negative",
      message: `Logout failed: ${error.message}`,
    });
  }
};
</script>
