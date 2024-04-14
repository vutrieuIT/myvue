<template>
    <div class="flex justify-content-center h-full">
        <div class="form-container flex flex-column bg-primary p-2">
        <p class="text-4xl mt-2 mb-5">đăng ký</p>
        <form class="flex-grow-1 relative">
            <div class="field">
            <label class="w-full text-left" for="username">Username</label>
            <InputText class="w-full" v-model="registerDto.username" />
            </div>
            <div class="field">
            <label class="w-full text-left" for="password">Password</label>
            <Password
                class="w-full"
                id="password-input"
                v-model="registerDto.password"
                :feedback="false"
                toggleMask
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
import { defineComponent, reactive } from "vue";
import Password from "primevue/password";
import InputText from "primevue/inputtext";

interface RegisterForm {
  username: string;
  password: string;
}

export default defineComponent({
  name: "RegisterView",
  components: {
    Password,
    InputText,
  },
  setup() {
    const registerDto = reactive<RegisterForm>({
      username: "",
      password: "",
    });

    const submit = (event: Event) => {
      event.preventDefault();
      ApiUtils.post("http://localhost:3000/register", registerDto)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(registerDto);
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
#password-input :nth-child(1) {
  width: 100%;
}
</style>
