<template>
  <header class="grid h-4rem">
    <div
      class="logo col-2 bg-green-300 text-2xl flex justify-content-center align-items-center"
    >
      LOGO
    </div>
    <div class="search-box col-7 bg-red-400 flex">
      <input type="text" class="w-full" />
      <div class="flex w-4rem justify-content-center align-items-center">
        <i class="pi pi-search"></i>
      </div>
    </div>
    <div class="user flex col-3 bg-blue-200">
      <p>{{ user.name }}</p>
      <img :src="user.image" alt="avatar" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { UserDto } from "@/dto/userDto";

export default defineComponent({
  name: "HeaderComponent",
  setup() {
    const user = {
      name: "John Doe",
      image: "",
      email: "",
    } as UserDto;
    return { user };
  },
});
</script>
