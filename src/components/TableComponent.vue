<template>
  <DataTable
    :value="products"
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
    <Column v-if="actionShow" header="action">
      <template #body="slotProps">
        <i class="pi pi-pencil mr-2" @click="editRow(slotProps.data)"></i>
        <i class="pi pi-trash" @click="deleteRow(slotProps.data)"></i>
      </template>
    </Column>
  </DataTable>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

export default defineComponent({
  name: "TableComponent",
  components: {
    DataTable,
    Column,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
    isAction: {
      type: Boolean,
      default: true,
    },
  },

  emits: ["deleteRow", "editRow"],

  setup(props, context) {
    const deleteRow = (row: unknown) => {
      console.log("component log emit", row);
      context.emit("deleteRow", { row });
    };

    const editRow = (row: unknown) => {
      console.log("component log emit", row);
      context.emit("editRow", { row });
    };

    const actionShow = computed(() => {
      return props.isAction;
    });

    return {
      products: props.data,
      columns: [
        { field: "id", header: "ID" },
        { field: "name", header: "Name" },
        { field: "category", header: "Category" },
        { field: "price", header: "Price", sortable: true },
      ],
      deleteRow,
      editRow,
      actionShow,
    };
  },
});
</script>
