<template>
  <div>
    <div class="grid h-6rem align-items-center">
      <p class="col-10 text-3xl">Test View</p>
      <Button class="h-3rem p-1" @click="createItem"> + Create </Button>
    </div>
    <DataTable
      :value="mydataJson"
      paginator
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      tableStyle="min-width: 50rem"
    >
      <Column
        v-for="col of columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
        :sortable="col.sortable"
      ></Column>
      <Column header="action">
        <template #body="slotProps">
          <i class="pi pi-pencil mr-2" @click="onEditRow(slotProps.data)"></i>
          <i class="pi pi-trash" @click="onDeleteRow(slotProps.data)"></i>
        </template>
      </Column>
    </DataTable>
    <product-item-dialog
      :product="itemSelected"
      :visible="showDialog"
      @close="
        () => {
          showDialog = false;
        }
      "
      @save="onSave"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import ProductItemDialog from "@/components/ProductItemDialog.vue";
import Button from "primevue/button";
import { ProductDto } from "@/dto/productDto";
import { ApiUtils } from "@/utils/apiUtils";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

export default defineComponent({
  name: "TestView",
  components: {
    Button,
    ProductItemDialog,
    DataTable,
    Column,
  },

  setup() {
    const showDialog = ref(false);

    const itemSelected = ref<ProductDto>({
      id: 0,
      name: "",
      price: 0,
      description: "",
      category: "",
    });

    const mydataJson = ref([] as ProductDto[]);

    const onDeleteRow = (row: unknown) => {
      // todo: add process to delete row
    };

    const onEditRow = (row: ProductDto) => {
      itemSelected.value = row;
      showDialog.value = true;
    };

    const createItem = () => {
      itemSelected.value = {
        id: 0,
        name: "",
        price: 0,
        description: "",
        category: "",
      };
      showDialog.value = true;
    };

    const onSave = (product: ProductDto) => {
      itemSelected.value = product;
      showDialog.value = false;
      alert("Save" + JSON.stringify(itemSelected));
    };

    onMounted(() => {
      ApiUtils.get("http://localhost:3000/products")
        .then((res) => {
          mydataJson.value = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    });

    return {
      mydataJson,
      itemSelected,
      showDialog,
      onDeleteRow,
      onEditRow,
      createItem,
      onSave,
      //

      columns: [
        { field: "id", header: "ID" },
        { field: "name", header: "Name" },
        { field: "category", header: "Category" },
        { field: "price", header: "Price", sortable: true },
      ],
    };
  },
});
</script>

<style></style>
