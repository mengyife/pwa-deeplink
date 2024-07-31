<template>
  <div>
    <h1>Deep Link Page</h1>
    <p>Link ID: {{ id }}</p>
  </div>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;
</script>
