<template>
  <div class="h-screen overflow-y-scroll">
    <Home />
    <About />
    <Project />
    <Resume />
    <Contact />
  </div>
</template>

<script setup>
import Home from "~/components/home.vue";
import About from "~/components/about.vue";
import Project from "~/components/project.vue";
import Resume from "~/components/resume.vue";
import Contact from "~/components/contact.vue";
</script>
