<template>
  <q-btn @click="handleButtonClicked"></q-btn>
</template>

<script>
export default {
  methods: {
    handleButtonClicked() {
      this.$q
        .dialog({
          title: "Create Todo",
          prompt: {
            model: "",
            type: "text",
          },
        })
        .onOk((data) => this.CreateTodo(data)); // Pass `data` to `CreateTodo`
    },
    CreateTodo(data) {
      this.$q.notify({
        message: `Todo Created: ${data}`, // Display the data in the message
        icon: "mdi-check",
        color: "positive",
      });
    },
  },
};
</script>
