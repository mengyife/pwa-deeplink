<template>
<div>
  <h1>Hello 😂😂😂😂😂</h1>
  <button @click="handleGreeting">Reply!</button>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    handleGreeting() {
      alert('hi, bro')
    }
  },
  mounted() {
    if (process.client) {
      const sw = navigator.serviceWorker;
      if (sw) {
        sw.addEventListener('controllerchange', () => {
          // Notify the user about the update
          confirm('A new version of the app is available. Please refresh the page to update.');
        });
      }
    }
  },
}
</script>
