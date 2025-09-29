<template>
  <div class="max-w-4xl mx-auto">
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
    <!-- Project Header -->
    <div class="mb-8">
      <div class="flex items-center gap-4 mb-4">
        <h1 class="text-4xl font-bold text-white">Law Bandit</h1>
        <span
          class="px-3 py-1 text-sm font-medium rounded-full bg-green-500/20 text-green-500 border border-green-500/30"
        >
          Completed
        </span>
      </div>
      <p class="text-xl text-gray-300 leading-relaxed">
        A modern Next.js application designed to help law students manage their
        academic schedules by processing syllabus PDFs and automatically
        creating comprehensive calendars. Law Bandit integrates with Google
        Calendar to sync assignments, exams, and deadlines, making academic
        planning effortless.
      </p>
      <p class="text-lg text-primary mt-3 font-medium">
        "Transforming syllabi into organized academic calendars."
      </p>
    </div>

    <!-- Project Content -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Main Content -->
      <div class="lg:col-span-2 space-y-8">
        <!-- Project Image/Preview -->
        <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 class="text-xl font-semibold text-white mb-4">Project Preview</h3>
          <!-- Main Preview Image -->
          <div
            class="bg-white/5 border border-white/10 rounded-xl h-64 overflow-hidden cursor-pointer hover:border-primary/50 transition-colors duration-200"
            @click="openModal('/images/syllabys.jpeg')"
          >
            <img
              src="/images/syllabys.jpeg"
              alt="Law Bandit"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <!-- Image Gallery -->
        </div>

        <!-- Features -->
        <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 class="text-xl font-semibold text-white mb-4">Key Features</h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
              ></div>
              <div>
                <span class="text-white font-medium"
                  >AI Syllabus Processing</span
                >
                <p class="text-gray-400 text-sm mt-1">
                  Automatically extracts assignments, exams, deadlines, and
                  important dates from uploaded PDF syllabi using advanced AI
                  processing. Handles various syllabus formats and structures to
                  ensure accurate event extraction.
                </p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
              ></div>
              <div>
                <span class="text-white font-medium"
                  >Google Calendar Integration</span
                >
                <p class="text-gray-400 text-sm mt-1">
                  Seamlessly syncs with Google Calendar for bidirectional event
                  management. Import existing calendar events and export
                  extracted syllabus events to maintain a unified academic
                  schedule across platforms.
                </p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
              ></div>
              <div>
                <span class="text-white font-medium">Class Management</span>
                <p class="text-gray-400 text-sm mt-1">
                  Create and manage multiple law school classes with individual
                  calendars. Upload syllabi for each class and track
                  assignments, exams, and deadlines in an organized,
                  easy-to-navigate interface.
                </p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
              ></div>
              <div>
                <span class="text-white font-medium"
                  >Protected Authentication</span
                >
                <p class="text-gray-400 text-sm mt-1">
                  Secure user authentication with Supabase integration.
                  Protected routes ensure only authenticated users can access
                  their academic data and maintain privacy across all class
                  information.
                </p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
              ></div>
              <div>
                <span class="text-white font-medium">Event Types Support</span>
                <p class="text-gray-400 text-sm mt-1">
                  Intelligently categorizes different types of academic events
                  including assignments, exams, quizzes, project deadlines,
                  reading assignments, and class presentations for comprehensive
                  academic planning.
                </p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
              ></div>
              <div>
                <span class="text-white font-medium">Modern Dashboard</span>
                <p class="text-gray-400 text-sm mt-1">
                  Clean, responsive interface built with Next.js and Tailwind
                  CSS. Real-time updates, loading states, and intuitive
                  navigation make managing academic schedules simple and
                  efficient.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Project Details -->
        <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 class="text-xl font-semibold text-white mb-4">
            Project Overview
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="text-lg font-medium text-white mb-2">
                About Law Bandit
              </h4>
              <p class="text-gray-300">
                Law Bandit addresses the common challenge law students face when
                managing multiple course syllabi and academic deadlines. By
                leveraging AI-powered PDF processing and seamless Google
                Calendar integration, it transforms complex syllabus documents
                into organized, actionable academic calendars.
              </p>
            </div>
            <div>
              <h4 class="text-lg font-medium text-white mb-2">
                Why It Stands Out
              </h4>
              <div class="space-y-2">
                <p class="text-gray-300">
                  <span class="text-primary font-medium"
                    >AI-Powered Processing:</span
                  >
                  Uses advanced AI to intelligently extract events from various
                  syllabus formats.
                </p>
                <p class="text-gray-300">
                  <span class="text-primary font-medium"
                    >Calendar Integration:</span
                  >
                  Bidirectional sync with Google Calendar for unified academic
                  planning.
                </p>
                <p class="text-gray-300">
                  <span class="text-primary font-medium"
                    >Law School Focused:</span
                  >
                  Specifically designed for the unique needs and challenges of
                  law school academics.
                </p>
                <p class="text-gray-300">
                  <span class="text-primary font-medium">Time-Saving:</span>
                  Transforms hours of manual calendar entry into minutes of
                  automated processing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="space-y-6">
        <!-- Technologies -->
        <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 class="text-lg font-semibold text-white mb-4">
            Technologies Used
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              class="px-3 py-2 text-sm bg-white/10 text-white/80 rounded-lg border border-white/20"
            >
              Next.js
            </span>
            <span
              class="px-3 py-2 text-sm bg-white/10 text-white/80 rounded-lg border border-white/20"
            >
              Supabase
            </span>
            <span
              class="px-3 py-2 text-sm bg-white/10 text-white/80 rounded-lg border border-white/20"
            >
              Google Calendar API
            </span>
            <span
              class="px-3 py-2 text-sm bg-white/10 text-white/80 rounded-lg border border-white/20"
            >
              AI/ML
            </span>
            <span
              class="px-3 py-2 text-sm bg-white/10 text-white/80 rounded-lg border border-white/20"
            >
              TypeScript
            </span>
            <span
              class="px-3 py-2 text-sm bg-white/10 text-white/80 rounded-lg border border-white/20"
            >
              Tailwind CSS
            </span>
          </div>
        </div>

        <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 class="text-lg font-semibold text-white mb-4">Project Links</h3>
          <div class="space-y-3">
            <a
              href="https://law-bandit-front.vercel.app"
              target="_blank"
              class="flex items-center gap-3 p-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Icon name="mdi:open-in-new" class="w-5 h-5" />
              <span>Live Demo</span>
            </a>
            <a
              href="https://github.com/Mergenoo/law-bandit-front"
              target="_blank"
              class="flex items-center gap-3 p-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Icon name="mdi:github" class="w-5 h-5" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>

        <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 class="text-lg font-semibold text-white mb-4">Project Stats</h3>
          <div class="space-y-3">
            <div class="flex justify-between">
              <span class="text-gray-400">Status</span>
              <span class="text-green-500">Completed</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Type</span>
              <span class="text-white">Academic Management Tool</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Target</span>
              <span class="text-white">Law Students</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Platform</span>
              <span class="text-white">Web Application</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Modal state
const showModal = ref(false);
const selectedImage = ref("");

// Project images
const projectImages = [
  {
    src: "/images/syllaby.png",
    alt: "Law Bandit Dashboard",
  },
];

// Modal functions
const openModal = (imageSrc) => {
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
