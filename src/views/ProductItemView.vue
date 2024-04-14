<template>
  <div class="flex justify-content-center h-full">
    <div class="form-container flex flex-column bg-primary p-2 m-2">
      <p class="text-4xl mt-2 mb-5">đăng ký</p>
      <form class="flex-grow-1 relative">
        <div class="field">
          <label class="w-full text-left" for="name">name</label>
          <InputText class="w-full" />
        </div>

        <div class="field">
          <label class="w-full text-left" for="price">price</label>
          <InputText class="w-full" />
        </div>

        <div class="field">
          <label class="w-full text-left" for="category">Category</label>
          <InputText class="w-full" />
        </div>

        <div class="field">
          <label class="w-full text-left" for="description">description</label>
          <InputText class="w-full" />
        </div>
        <button class="absolute bottom-0 right-0 mr-4 mb-2">tạo</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
// import Password from "primevue/password";
import InputText from "primevue/inputtext";
import { ProductDto } from "@/dto/ProductDto";
import { PropType } from "vue";

export default defineComponent({
  name: "ProductItemView",
  components: {
    // Password,
    InputText,
  },
  props: {
    product: {
      type: Object as PropType<ProductDto>,
      default: () => ({
        id: null,
        name: "",
        price: 0,
        description: "",
        category: "",
      }),
    },
  },
  setup(props) {
    console.log(props.product);

    const productItem = reactive<ProductDto>(props.product);
    return { productItem };
  },
});
</script>

<style scoped>
.form-container {
  max-width: 400px;
  min-height: 500px;
}
</style>
