vue
<template>
  <div class="weather-widget">
    <h1>{{ city }}</h1>
    <p>Temperature: {{ temperature }}°C</p>
    <p>Description: {{ description }}</p>
    <img :src="icon" :alt="city + '-icon'">
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: 'Moscow',
      temperature: '',
      description: '',
      icon: '',
    };
  },
  created() {
    // Здесь вы должны получить данные о погоде с помощью API.
    // Замените 'YOUR_API_KEY' на ваш настоящий ключ API.
    fetch(https,//api.example.com/weather?city=${this.city}&apiKey=121324141)
      then((response) => response.json())
      .then((data) => {
        this.temperature = data.temperature;
        this.description = data.description;
        this.icon = data.icon;
      })
  ,

</script>

<style scoped>
.weather-widget {
  text-align: center;
}
</style>