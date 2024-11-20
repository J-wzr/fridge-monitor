<template>
  <q-page padding class="flex flex-center">
    <!-- content -->
    <div class="full-width" style="max-width: 300px">
      <h5 class="q-my-md text-center">Login</h5>

      <q-form ref="form" @submit="submit">
        <q-card-section>
          <q-input
            filled
            placeholder="email@email.com"
            label="email"
            name="email"
            v-model="user.email"
          ></q-input>
        </q-card-section>

        <q-card-section>
          <q-input
            filled
            type="password"
            label="password"
            v-model="user.password"
          ></q-input>
        </q-card-section>

        <q-checkbox :model-value="true" label="remember me"></q-checkbox>

        <q-btn
          class="full-width"
          color="primary"
          label="Login"
          type="submit"
        ></q-btn>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { Notify } from "quasar";
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const user = reactive({
  password: null,
  email: null,
});

const form = ref(null);

const submit = async () => {
  if (form.value.validate()) {
    try {
      Notify.create({
        type: "positive",
        message: "Fake Login detected!",
      });
    } catch (error) {
      Notify.create({
        type: "Negative",
        message: `Error: ${error}`,
      });
    }
  }
};
</script>
