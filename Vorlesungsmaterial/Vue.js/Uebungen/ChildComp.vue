<script setup>
// Deklaration der ausgesendeten Ereignisse
const emit = defineEmits(['response'])
// Ereignis mit Argument senden
emit('response', 'hello from child')
</script>

<template>
  <h2>Child component</h2>
</template>