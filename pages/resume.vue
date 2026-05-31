<template>
  <section class="bg-black text-white py-24 px-6 min-h-screen">
    <!-- Image Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-auto"
      @click="closeModal"
    >
      <div
        class="relative max-w-7xl w-full min-h-full flex items-center justify-center"
      >
        <img
          :src="selectedImage"
          alt="My Resume"
          class="w-full h-auto rounded-lg max-h-none"
        />
        <button
          class="absolute top-4 right-4 text-white/80 hover:text-white z-10"
          @click="closeModal"
        >
          <Icon name="mdi:close" class="w-8 h-8" />
        </button>
      </div>
    </div>

    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
      <!-- Resume as Image -->
      <div class="w-full">
        <img
          src="/images/resume.jpg"
          alt="My Resume"
          class="w-full rounded-lg shadow-lg border border-white/10 cursor-pointer hover:scale-105 transition-transform duration-300"
          @click="openModal('/images/resume.jpg')"
        />
      </div>

      <!-- Experience -->
      <div class="space-y-12">
        <div>
          <h2 class="text-xl font-semibold mb-6 text-primary">Experience</h2>
          <div v-for="(item, i) in experiences" :key="i" class="mb-8">
            <h3 class="text-lg font-semibold text-white">
              {{ item.role }} @ {{ item.company }}
            </h3>
            <p class="text-gray-400 text-sm mb-1">{{ item.period }}</p>
            <p class="text-white text-sm leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>

        <NuxtLink
          to="/"
          class="inline-block mt-6 px-6 py-3 border bg-primary border-primary rounded-xl hover:opacity-90 transition mr-4"
        >
          Home
        </NuxtLink>

        <a
          href="/images/Mergen_resume.pdf"
          download
          class="inline-block mt-6 px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition mr-4"
        >
          Download CV (English)
        </a>

        <a
          href="/images/Mergen_resume_mgl.pdf"
          download
          class="inline-block px-6 py-3 border border-primary text-primary rounded-xl hover:bg-primary hover:text-black transition"
        >
          Татах CV (Монгол)
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showModal = ref(false);
const selectedImage = ref("");

const openModal = (imageSrc: string) => {
  selectedImage.value = imageSrc;
  showModal.value = true;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  showModal.value = false;
  selectedImage.value = "";
  document.body.style.overflow = "auto";
};

const experiences = [
  {
    role: "Software Engineer",
    company: "Dentsu Data Artist Mongolia",
    period: "Aug 2023 — Dec 2024",
    description:
      "Built AI movie recommendations, Next.js interfaces for generative AI, and Vertex AI marketing tools. Improved performance with virtual scrolling and PDF context tracking for thousands of daily users.",
  },
  {
    role: "Software Developer Intern",
    company: "Erxes",
    period: "2021",
    description:
      "Contributed to the erxes open-source codebase. Worked on UI components, fixed bugs, and supported performance improvements within a collaborative team.",
  },
  {
    role: "Software Engineer",
    company: "Nest Educational IT High School",
    period: "Aug 2022 — Aug 2023",
    description:
      "Developed MySQL delivery systems, Node.js REST APIs, and operational dashboards for 2,000+ daily orders. Delivered a delivery management web app that increased daily deliveries by 80%.",
  },
];
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
