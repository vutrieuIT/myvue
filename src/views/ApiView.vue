<template>
  <div>
    <h1>API</h1>
    <p>API page</p>
  </div>
  <div class="grid">
    <div class="col-3" style="box-sizing: border-box">
      <button class="p-3 border-1" @click="fetchData">Fetch Data</button>
    </div>
    <div class="col-9" style="box-sizing: border-box">
      <div class="p-3 border-1 h-full">{{ data }}</div>
    </div>
  </div>

  <div class="grid">
    <div class="col-2">
      <div class="text-center p-3 border-round-sm bg-primary font-bold">1</div>
    </div>
    <div class="col">
      <div class="text-center p-3 border-round-sm bg-primary font-bold">2</div>
    </div>
    <div class="col">
      <div class="text-center p-3 border-round-sm bg-primary font-bold">3</div>
    </div>
  </div>
</template>

<script lang="ts">
import { ApiUtils } from "@/utils/apiUtils";
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "ApiView",
  setup() {
    const data = ref("");

    const fetchData = () => {
      ApiUtils.get("http://localhost:3000/posts")
        .then((response) => {
          console.log(response);
          data.value = JSON.stringify(response.data);
        })
        .catch((error) => {
          alert(error);
        });
    };

    return { fetchData, data };
  },
});
</script>
