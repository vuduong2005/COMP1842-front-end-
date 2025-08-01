// src/stores/messageStore.js
import { ref } from 'vue'

export const message = ref('')
export function setMessage(newMsg) {
  message.value = newMsg
}
