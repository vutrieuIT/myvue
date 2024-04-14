<template>
  <div class="flex justify-content-center h-full">
    <div class="form-container flex flex-column bg-primary m-2">
      <p class="text-4xl mt-2 mb-5">đăng ký</p>
      <form class="flex-grow-1 relative">
        <div class="field">
          <label class="w-full text-left" for="username">Username</label>
          <InputText class="w-full" />
        </div>
        <div class="field">
          <label class="w-full text-left" for="password">Password</label>
          <Password
            class="w-full"
            id="password-input"
            :feedback="false"
            toggleMask
          />
        </div>
        <button class="absolute bottom-0 right-0 mr-4 mb-2">Đăng ký</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Password from "primevue/password";
import InputText from "primevue/inputtext";

export default defineComponent({
  name: "ProductItemView",
  components: {
    Password,
    InputText,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.form-container {
  max-width: 400px;
  min-height: 500px;
}
</style>
