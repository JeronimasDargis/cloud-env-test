<template>
  <div>
    <p>TEST 123</p>
    <NuxtWelcome />
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const config = useRuntimeConfig();
    console.log("config:", config.MY_SECRET_KEY);
  },
});
</script>
