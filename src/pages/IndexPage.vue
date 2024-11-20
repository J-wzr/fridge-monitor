<template>
  <q-page class="row">
    <q-card class="col-10">
      <q-toolbar>
        <q-input
          dense
          :model-value="search"
          borderless
          class="full-width"
          label="Search"
          type="text"
        >
          <template #append>
            <q-icon name="mdi-magnify" size="xs"></q-icon>
          </template>
        </q-input>
      </q-toolbar>

      <TodosList bordered> </TodosList>
    </q-card>

    <div class="col-xs-2">
      <q-toolbar class="bg-primary">
        <CreateTodoButton
          fab
          color="secondary"
          icon="mdi-plus"
          class="q-ml-lg"
          style="margin-bottom: -42px"
        ></CreateTodoButton>
      </q-toolbar>
    </div>
  </q-page>
</template>

<script setup>
import CreateTodoButton from "components/CreateTodoButton.vue";
import TodosList from "src/components/TodosList.vue";

defineOptions({
  name: "IndexPage",
  components: {
    CreateTodoButton,
    TodosList,
  },
  data() {
    return {
      selected: null,
    };
  },
});
</script>
