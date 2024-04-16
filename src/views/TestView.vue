<template>
  <div>
    <div class="grid h-6rem align-items-center">
      <p class="col-10 text-3xl">Test View</p>
      <Button class="h-3rem p-1" @click="createItem"> + Create </Button>
    </div>
    <table-component
      :data="mydata"
      @delete-row="onDeleteRow"
      @edit-row="onEditRow"
    />
    <product-item-dialog
      :visible="showDialog"
      @close="
        () => {
          showDialog = false;
        }
      "
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// import Password from "primevue/password";
import TableComponent from "@/components/TableComponent.vue";
import Button from "primevue/button";
import { useRouter } from "vue-router";
import ProductItemDialog from "@/components/ProductItemDialog.vue";

interface TestForm {
  username: string;
  password: string;
}

export default defineComponent({
  name: "TestView",
  components: {
    // Password,
    TableComponent,
    Button,
    ProductItemDialog,
  },
  watch: {
    registerDto: {
      handler(val) {
        console.log(val);
      },
      deep: true,
    },
  },
  setup() {
    const router = useRouter();
    const showDialog = ref(false);

    const mydata = [
      { id: 1, name: "Apple", category: "Fruit", price: 1 },
      { id: 2, name: "Banana", category: "Fruit", price: 2 },
      { id: 3, name: "Orange", category: "Fruit", price: 3 },
      { id: 4, name: "Mango", category: "Fruit", price: 4 },
      { id: 5, name: "Kiwi", category: "Fruit", price: 5 },
    ];

    const registerDto = ref<TestForm>({
      username: "",
      password: "",
    });

    const onDeleteRow = (row: unknown) => {
      console.log("view log emit", row);
      alert("Delete row" + JSON.stringify(row));
    };

    const onEditRow = (row: unknown) => {
      console.log("view log emit", row);
      alert("Edit row" + JSON.stringify(row));
      showDialog.value = true;
    };

    const createItem = () => {
      router.push({
        path: "/test/create",
      });
      console.log("create item");
    };

    return {
      registerDto,
      mydata,
      onDeleteRow,
      onEditRow,
      createItem,
      showDialog,
    };
  },
});
</script>

<style></style>
