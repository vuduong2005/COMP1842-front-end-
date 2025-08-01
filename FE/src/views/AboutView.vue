<template>
  <div class="ui container" style="margin-top: 0.5rem;">
    <h1 class="ui header">About This Coursework</h1>

    <div class="ui info message" v-if="message">
      <div class="header">Last Action Result:</div>
      <p>{{ message }}</p>
    </div>

    <div class="ui segment">
      <p>👋 Hello! My name is <strong>Duong Trieu Vu</strong> and this is my <strong>COMP1842 Web Programming 2 coursework</strong>.</p>
      <p>This project is built using the <strong>MEVN stack</strong>, with Vue.js as the front-end framework.</p>
      <p>
        <strong>Vue.js</strong> is a progressive JavaScript framework used for building interactive user interfaces. 
        It allows developers to create dynamic web applications using reusable components and reactive data binding.
      </p>
      <p>
        The purpose of this project is to demonstrate CRUD operations using modern JavaScript technologies in a full-stack environment.
      </p>
    </div>
  </div>
</template>

<script setup>
</script>
