<template>
  <div class="ui container" style="margin-top: 0.5rem;">
    <h2 class="ui header">Test Page</h2>
    <div class="ui info message" v-if="message">
      <div class="header">Last Action Result:</div>
      <p>{{ message }}</p>
    </div>
    <p>This page is for testing actions from the Language Manager.</p>
  </div>
</template>

<script setup>
import { message } from '@/stores/messageStore'
</script>
