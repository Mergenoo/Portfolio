<script setup lang="ts">
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
<template>
  <section id="about" class="bg-black text-white py-24 px-6">
    <div
      class="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center"
    >
      <!-- Left: SVG Horse or image -->
      <div class="w-full md:w-1/2 flex justify-center">
        <img
          src="/images/horse.svg"
          alt="horse"
          class="w-72 md:w-80 hover:scale-105 transition-transform duration-300"
        />
      </div>

      <!-- Right: Text content -->
      <div class="w-full md:w-1/2">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p class="text-gray-300 mb-4 leading-relaxed">
          I'm Mergen Ochirsukh — a frontend developer with a passion for
          crafting smooth, responsive, and visually engaging interfaces. I love
          clean code, subtle animations, and making things feel just right.
        </p>
        <p class="text-gray-300 mb-4 leading-relaxed">
          I work mostly with <span class="text-primary">Vue</span>,
          <span class="text-primary">Nuxt</span>,
          <span class="text-primary">Tailwind CSS</span>.
        </p>
        <p class="text-gray-300 leading-relaxed">
          Outside of code, I sketch goofy stick figures (you’ve seen the horse
          🐴), binge dev podcasts, and explore creative coding just for fun.
        </p>

        <div class="mt-6">
          <button
            @click="scrollToSection('project')"
            class="inline-block px-6 py-3 bg-primary text-white rounded-xl font-medium hover:opacity-90 transition"
          >
            See My Work →
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
