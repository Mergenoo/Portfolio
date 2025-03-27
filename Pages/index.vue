<template>
  <div class="h-screen overflow-y-scroll">
    <section id="about" class="h-screen border-4 border-dashed border-blue-400">
      <div class="flex justify-center items-center h-full">
        <h4 class="text-xl font-semibold">HELLO I am HOME</h4>
      </div>
    </section>
    <About />
    <Project />
    <Resume />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import About from "~/components/about.vue";
import Project from "~/components/project.vue";
import Resume from "~/components/resume.vue";
import Contact from "~/components/contact.vue";
import Footer from "~/components/Footer.vue";
</script>
