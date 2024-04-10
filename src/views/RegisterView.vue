<template>
  <div class="flex justify-content-center h-full">
    <div class="form-container flex flex-column bg-primary p-2">
      <p class="text-4xl mt-2 mb-5">đăng ký</p>
      <form class="flex-grow-1 relative">
        <div class="field">
          <label class="w-full text-left" for="username">Username</label>
          <input
            class="w-full"
            type="text"
            id="username"
            name="username"
            v-model="registerDto.username"
          />
        </div>
        <div class="field">
          <label class="w-full text-left" for="password">Password</label>
          <input
            class="w-full"
            type="password"
            id="password"
            name="password"
            v-model="registerDto.password"
          />
        </div>
        <button class="absolute bottom-0 right-0 mr-4 mb-2" @click="submit">
          Đăng ký
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { ApiUtils } from "@/utils/apiUtils";
import { defineComponent } from "vue";

interface RegisterForm {
  username: string;
  password: string;
}

export default defineComponent({
  name: "RegisterView",
  setup() {
    const registerDto: RegisterForm = {
      username: "",
      password: "",
    };

    const submit = (event: Event) => {
      event.preventDefault();
      ApiUtils.post("http://localhost:3000/register", registerDto)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return { submit, registerDto };
  },
});
</script>

<style scoped>
.form-container {
  max-width: 400px;
  min-height: 500px;
}
</style>
