<template>
    <div v-html="htmlContent"></div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        htmlContent: ''
      };
    },
    mounted() {
      this.loadHtmlContent();
    },
    methods: {
      loadHtmlContent() {
        axios.get('/html/MainPage/MainPageAfterLogin/index.html')
          .then(response => {
            this.htmlContent = response.data;
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
  </script>
  