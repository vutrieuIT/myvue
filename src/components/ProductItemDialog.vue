<template>
  <Dialog
    v-model:visible="isVisible"
    modal
    :closable="false"
    :header="productItem.id ? 'Edit Product' : 'Create Product'"
  >
    <span class="p-text-secondary block mb-5">Update your information.</span>
    <div class="flex align-items-center gap-3 mb-3">
      <label for="username" class="font-semibold w-6rem">Username</label>
      <InputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex align-items-center gap-3 mb-5">
      <label for="email" class="font-semibold w-6rem">Email</label>
      <InputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-content-end gap-2">
      <Button
        type="button"
        label="Cancel"
        severity="secondary"
        @click="closeDialog"
      ></Button>
      <Button type="button" label="Save" @click="closeDialog"></Button>
    </div>
  </Dialog>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import { ProductDto } from "@/dto/productDto";
import { PropType } from "vue";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

export default defineComponent({
  name: "ProductItemDialog",
  components: {
    Dialog,
    Button,
    InputText,
  },
  emits: ["update:visible", "close"],
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      default: "create",
      values: ["create", "edit"],
    },
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
  setup(props, context) {
    const productItem = reactive<ProductDto>(props.product);
    const isVisible = computed({
      get: () => props.visible,
      set: (updateVisible) => {
        context.emit("update:visible", updateVisible);
      },
    });
    const closeDialog = () => {
      context.emit("close");
    };
    return { productItem, isVisible, closeDialog };
  },
});
</script>
