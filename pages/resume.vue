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
          :alt="selectedImage"
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
      <!-- 📸 Resume as Image -->
      <div class="w-full">
        <img
          src="/images/resume_tavan_bogd.jpg"
          alt="My Resume"
          class="w-full rounded-lg shadow-lg border border-white/10 cursor-pointer hover:scale-105 transition-transform duration-300"
          @click="openModal('/images/resume.jpg')"
        />
      </div>

      <!-- 📌 Extra Experience -->
      <div class="space-y-12">
        <h2 class="text-2xl font-bold text-primary">More About Me</h2>

        <div v-for="(item, i) in experiences" :key="i" class="space-y-2">
          <h3 class="text-lg font-semibold">{{ item.title }}</h3>
          <p class="text-sm text-gray-400">{{ item.period }}</p>
          <p class="text-sm text-gray-300">{{ item.description }}</p>
        </div>
        <NuxtLink
          to="/"
          download
          class="inline-block mt-6 px-6 py-3 border bg-primary border-primary rounded-xl hover:opacity-9 transition mr-4"
        >
          Home
        </NuxtLink>

        <a
          href="/images/resume_tavan_bogd.pdf"
          download
          class="inline-block mt-6 px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
        >
          Download My CV
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Modal state
const showModal = ref(false);
const selectedImage = ref("");

// Modal functions
const openModal = (imageSrc: string) => {
  selectedImage.value = imageSrc;
  showModal.value = true;
  // Prevent body scroll when modal is open
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  showModal.value = false;
  selectedImage.value = "";
  // Restore body scroll
  document.body.style.overflow = "auto";
};

const experiences = [
  {
    title: "Software Engineer",
    company: "Dentsu Data Artist Mongolia",
    period: "2023 — 2024",
    description:
      "Built AI-powered applications using Next.js and Vertex AI, including a movie recommendation system (10,000+ data points), smart golf mapping app, and marketing strategy analyzer with product similarity detection. Optimized performance with virtual scrolling (1.1s latency reduction) and PDF navigation tracking (40% UX improvement). Served 1,000+ daily users.",
  },
  {
    title: "Software Engineer",
    company: "Nest Education IT School",
    period: "2022 — 2023",
    description:
      "Architected delivery management system with MySQL database processing 2,000+ daily deliveries and RESTful API handling 1,600+ transactions. Built real-time tracking dashboard for logistics operations. Achieved 80% increase in daily deliveries, 40% growth in sales, and 20% market expansion.",
  },
  {
    title: "Software Developer Intern",
    company: "Erxes",
    period: "2021",
    description:
      "Developed ERP system modules for 100+ employees, including personal asset tracking and centralized template library. Improved productivity by 20% through streamlined document management processes.",
  },
];
</script>

<style scoped>
/* Optional: Add fade transition for modal */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
