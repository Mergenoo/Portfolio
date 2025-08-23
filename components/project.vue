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
        v-for="(project, i) in displayedProjects"
        :key="i"
        class="bg-white/5 border border-white/10 rounded-xl p-6 text-left hover:shadow-xl transition"
      >
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-xl font-semibold">{{ project.title }}</h3>
        </div>
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

    <!-- View More Button -->
    <div class="text-center mt-12">
      <button
        @click="router.push('/projects')"
        class="bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-full shadow-lg transition-all duration-300 flex items-center gap-3 mx-auto"
      >
        <Icon
          :name="showAllProjects ? 'mdi:eye-off' : 'mdi:eye'"
          class="w-5 h-5"
        />
        {{ showAllProjects ? "Show Completed Only" : "View All Projects" }}
      </button>
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
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const showAllProjects = ref(false);

const projects = [
  {
    title: "Abunai",
    status: "Completed",
    description:
      "AI-powered chatbot in Mongolian, built with React and OpenAI's GPT API.  It understands and responds in Mongolian, offering real-time conversation support with a simple, accessible UI. Integrated with Google APIs for additional context and personalization.",
    tags: ["React", "CSS", "OpenAI API", "Google API"],
  },
  {
    title: "Ebuuhia",
    status: "Completed",
    description:
      "Delivery system platform developed with Next.js and MySQL. Handles order placement, tracking, and management with RESTful APIs and a responsive UI powered by Tailwind CSS. Designed for scalability and efficiency in logistics handling.",
    tags: ["Next.js", "Tailwind", "RESTful API", "MySQL"],
  },
  {
    title: "DDAM",
    status: "Completed",
    description:
      "Client PDF tracker with annotation and sync functionality. Built with Nuxt and RESTful API integration, DDAM allows users to upload, save, and highlight PDF documents. It syncs updates in real time using Google APIs for a seamless client experience.",
    tags: ["Nuxt", "Tailwind", "RESTful API", "Google API"],
  },
  {
    title: "Beautifully Done",
    status: "On process",
    description:
      "An AI-powered web application designed to transform existing ecommerce sites into visually stunning, modern Shopify stores.",
    tags: ["Nuxt", "Tailwind", "AI/ML", "Shopify", "Automation"],
  },
  {
    title: "Alzheimer Project",
    status: "Upcoming",
    description:
      "A smart assistive system that uses face recognition technology to help individuals with Alzheimer's disease remember people they meet.",
    tags: ["Vue", "Nuxt", "Computer Vision", "AI/ML", "Healthcare"],
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

// Filter projects based on status
const completedProjects = computed(() => {
  return projects.filter((p) => p.status === "Completed");
});

const displayedProjects = computed(() => {
  return showAllProjects.value ? projects : completedProjects.value;
});

const toggleShowAll = () => {
  showAllProjects.value = !showAllProjects.value;
};
</script>
