<script setup>
import { ref } from 'vue'

const titleClass = ref('title')
</script>

<template>
  <h1 :class="titleClass">Make me red</h1>
</template>

<style>
.title {
  color: red;
}
</style>

<button @click="increment">{{ count }}</button>

<script setup>
import { ref } from 'vue'
const count = ref(0)

function increment() {
  // update component state
  count.value++
}
</script>