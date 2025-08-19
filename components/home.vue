<template>
  <section
    id="home"
    class="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-32 bg-black text-white relative overflow-hidden"
  >
    <!-- Background Glow -->
    <div class="absolute inset-0 pointer-events-none"></div>

    <!-- Logo -->
    <img src="/images/Logo.svg" alt="Logo" class="h-20 mb-12 z-10" />

    <!-- Availability Badge -->
    <p
      class="inline-flex items-center text-sm font-medium border border-white/20 text-white bg-white/5 rounded-full px-4 py-1 mb-8 backdrop-blur-sm z-10"
    >
      <span class="relative flex h-2 w-2 mr-2">
        <span
          class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
        ></span>
        <span
          class="relative inline-flex rounded-full h-2 w-2 bg-primary"
        ></span>
      </span>
      Available for work
    </p>

    <!-- Heading -->
    <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-6 z-10">
      Hey there,<br />
      I am Mergen Ochirsukh,<br />
      a frontend developer.
    </h1>

    <!-- Subtext -->
    <p class="text-gray-400 max-w-xl mx-auto text-lg mb-10 z-10">
      I bring ideas to life through clean code, creative interaction, and a
      passion for frontend. Let’s build something unforgettable.
    </p>

    <div
      class="flex items-center justify-center gap-3 my-6 mx-2 w-full max-w-md"
    >
      <div class="relative flex-1 group">
        <textarea
          v-model="message"
          placeholder="Ask me anything..."
          class="w-full py-5 px-8 border border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 resize-none rounded-full outline-none transition-all duration-300 focus:border-primary/50 focus:bg-white/10 focus:ring-2 focus:ring-primary/20 group-hover:border-white/30 group-hover:bg-white/8 whitespace-nowrap overflow-hidden"
          rows="1"
          @keydown.enter.prevent="sendMessage"
          style="line-height: 1.5; text-indent: 4px"
        ></textarea>
        <div
          class="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        ></div>
      </div>
      <button
        class="cursor-pointer bg-primary hover:bg-primary/90 text-white p-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-black group flex-shrink-0"
      >
        <svg
          class="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>

    <!-- CTA Buttons -->
    <div class="flex flex-wrap justify-center gap-4 z-10">
      <a
        href="mailto:mergenoo.dev@gmail.com"
        class="inline-block px-6 py-3 bg-primary text-white rounded-xl font-medium text-lg hover:opacity-90 transition"
      >
        Let's work together
      </a>
      <NuxtLink
        to="/resume"
        class="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-black transition"
      >
        My CV
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { chatgen } from "~/utils/chat";

const message = ref("");

const sendMessage = async () => {
  const response = await chatgen(message.value);
  console.log(response);
};
</script>
