<template>
  <div id="app">
    <weather-widget></weather-widget>
  </div>
</template>

<script>
import WeatherWidget from './WeatherWidget.vue';

export default {
  components: {
    WeatherWidget,
  },
}
</script>