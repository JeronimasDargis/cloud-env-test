<template>
  <div>
    <p>Secret key 11- {{ config.MY_SECRET_KEY }}</p>
    <NuxtWelcome />
  </div>
</template>

<script setup>
let config = useState("config", () => null);
config = useRuntimeConfig();
console.log("config:", config.MY_SECRET_KEY);
</script>
