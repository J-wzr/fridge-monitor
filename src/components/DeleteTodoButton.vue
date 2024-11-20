<template>
  <q-btn @click="HandleDelete"></q-btn>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup() {
    return {};
  },
  methods: {
    HandleDelete() {
      this.$q
        .dialog({
          title: "Delete Confirmation",
          prompt: {
            model: "",
            type: "textarea",
          },
        })
        .onOk(this.DeleteTodo)
        .onCancel(
          this.$q.notify({
            message: "Fake deleted todo item",
            icon: "mdi-check",
            color: "negative",
          })
        );
    },
  },
};
</script>
