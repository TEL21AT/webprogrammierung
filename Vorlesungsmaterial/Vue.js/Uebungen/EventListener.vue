<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <!-- make this button work -->
  <button>count is: {{ count }}</button>
</template>