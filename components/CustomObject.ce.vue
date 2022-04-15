<template>
  <p>{{ userData.name }}</p>
  <p>{{ userData.age }}</p>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  user: {
    type: String,
    default: () => ({}),
  },
});
const userData = computed(() => JSON.parse(props.user))
</script>
