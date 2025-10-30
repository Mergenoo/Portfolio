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
      "AI-powered Mongolian chatbot using React and OpenAI GPT API with real-time conversation support and Google API integration for contextual responses.",
    tags: ["React", "CSS", "OpenAI API", "Google API"],
  },
  {
    title: "Ebuuhia",
    status: "Completed",
    description:
      "Scalable delivery management platform with Next.js and MySQL. Features order tracking, RESTful APIs, and responsive Tailwind UI for efficient logistics operations.",
    tags: ["Next.js", "Tailwind", "RESTful API", "MySQL"],
  },
  {
    title: "DDAM",
    status: "Completed",
    description:
      "PDF collaboration tool with real-time annotation and sync. Built with Nuxt and Google APIs for seamless document management and highlighting.",
    tags: ["Nuxt", "Tailwind", "RESTful API", "Google API"],
  },
  {
    title: "Beautifully Done",
    status: "On process",
    description:
      "AI-powered tool that transforms existing ecommerce sites into modern, visually stunning Shopify stores with automated design optimization.",
    tags: ["Nuxt", "Tailwind", "AI/ML", "Shopify", "Automation"],
  },
  {
    title: "Alzheimer Project",
    status: "Upcoming",
    description:
      "Smart assistive healthcare system using face recognition to help Alzheimer's patients identify and remember people they encounter.",
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
