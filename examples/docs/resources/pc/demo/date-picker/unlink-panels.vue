<template>
  <tiny-date-picker v-model="value" type="daterange" unlink-panels></tiny-date-picker>
</template>

<script lang="jsx">
import { DatePicker } from '@opentiny/vue'

export default {
  components: {
    TinyDatePicker: DatePicker
  },
  data() {
    return {
      value: []
    }
  }
}
</script>
