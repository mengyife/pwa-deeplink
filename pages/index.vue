<template>
<div>
  <h1>Hello Developer! 😂😂😂😂😂</h1>
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
  }
}
</script>
