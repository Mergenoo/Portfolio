<template>
  <section id="project" class="bg-black text-white py-24 px-6">
    <div class="max-w-6xl mx-auto text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">My Work</h2>
      <p class="text-gray-400 text-lg">
        Here are a few projects I've worked on.
      </p>
    </div>

    <!-- Project Cards -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div
        v-for="(project, i) in projects"
        :key="i"
        class="bg-white/5 border border-white/10 rounded-xl p-6 text-left hover:shadow-xl transition"
      >
        <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
        <p class="text-gray-400 text-sm mb-4">{{ project.description }}</p>

        <!-- Tech stack tags -->
        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="text-xs bg-white/10 text-white px-3 py-1 rounded-full"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <!-- Seamless Skill Marquee -->
    <div class="overflow-hidden py-12">
      <div class="relative w-full">
        <div class="flex animate-marquee gap-12 w-max whitespace-nowrap">
          <!-- First row -->
          <div class="flex gap-12">
            <div
              v-for="(icon, index) in logos"
              :key="'first-' + index"
              class="h-10 w-10 flex items-center justify-center shrink-0"
            >
              <Icon
                :name="icon"
                class="h-full w-full"
                :class="icon.includes('react') ? 'scale-110' : ''"
              />
            </div>
          </div>

          <!-- Second row (duplicate for seamless loop) -->
          <div class="flex gap-12">
            <div
              v-for="(icon, index) in logos"
              :key="'second-' + index"
              class="h-10 w-10 flex items-center justify-center shrink-0"
            >
              <Icon
                :name="icon"
                class="h-full w-full"
                :class="icon.includes('react') ? 'scale-110' : ''"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: "Abunai",
    description:
      "AI-powered chatbot in Mongolian, built with React and OpenAI's GPT API.  It understands and responds in Mongolian, offering real-time conversation support with a simple, accessible UI. Integrated with Google APIs for additional context and personalization.",

    tags: ["React", "CSS", "OpenAI API", "Google API"],
  },
  {
    title: "Ebuuhia",
    description:
      "Delivery system platform developed with Next.js and MySQL. Handles order placement, tracking, and management with RESTful APIs and a responsive UI powered by Tailwind CSS. Designed for scalability and efficiency in logistics handling.",
    tags: ["Next.js", "Tailwind", "RESTful API", "MySQL"],
  },
  {
    title: "DDAM",
    description:
      "Client PDF tracker with annotation and sync functionality. Built with Nuxt and RESTful API integration, DDAM allows users to upload, save, and highlight PDF documents. It syncs updates in real time using Google APIs for a seamless client experience.",
    tags: ["Nuxt", "Tailwind", "RESTful API", "Google API"],
  },
];

const logos = [
  "logos:vue",
  "logos:nuxt-icon",
  "logos:tailwindcss",
  "logos:typescript-icon",
  "logos:javascript",
  "logos:github-icon",
  "logos:react",
  "logos:vue",
  "logos:nuxt-icon",
  "logos:tailwindcss",
  "logos:typescript-icon",
  "logos:javascript",
  "logos:github-icon",
  "logos:react",
];
</script>
