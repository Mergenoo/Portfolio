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
        <h1 class="text-4xl font-bold text-white">Alzheimer Project</h1>
        <span
          class="px-3 py-1 text-sm font-medium rounded-full bg-blue-500/20 text-blue-500 border border-blue-500/30"
        >
          Upcoming
        </span>
      </div>
      <p class="text-xl text-gray-300 leading-relaxed">
        A smart assistive system that uses face recognition technology to help
        individuals with Alzheimer's disease remember people they meet. By
        detecting human faces, storing their names, and recalling them later,
        the system provides real-time reminders that ease social interactions
        and reduce memory-related challenges.
      </p>
      <p class="text-lg text-primary mt-3 font-medium">
        "Empowering memories, one face at a time."
      </p>
    </div>

    <!-- Project Content -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Main Content -->
      <div class="lg:col-span-2 space-y-8">
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
                  >Face Detection & Recognition</span
                >
                <p class="text-gray-400 text-sm mt-1">
                  Detects human faces through camera input. Creates a profile by
                  associating the face with a name when introduced. Stores the
                  information securely for future recognition.
                </p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
              ></div>
              <div>
                <span class="text-white font-medium">Memory Recall</span>
                <p class="text-gray-400 text-sm mt-1">
                  When the same person is seen again, the system automatically
                  retrieves and displays their name. Provides real-time prompts
                  to assist the user during conversations. Acts as a "memory
                  companion", bridging cognitive gaps.
                </p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
              ></div>
              <div>
                <span class="text-white font-medium"
                  >User-Friendly Introduction Workflow</span
                >
                <p class="text-gray-400 text-sm mt-1">
                  New faces can be introduced verbally or through a caregiver
                  prompt. Example: "Hi, I'm Alex" → system logs the face as
                  Alex. Ensures quick and seamless data entry without technical
                  complexity.
                </p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
              ></div>
              <div>
                <span class="text-white font-medium"
                  >Assistive Design for Alzheimer's Patients</span
                >
                <p class="text-gray-400 text-sm mt-1">
                  Reduces the stress of forgetting familiar people. Improves
                  social confidence and quality of life. Supports caregivers by
                  lowering repetitive reminders.
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
                About Beautifully Done
              </h4>
              <p class="text-gray-300">
                Beautifully Done is an AI-powered web application designed to
                transform existing ecommerce sites into visually stunning,
                modern Shopify stores. The system automates store generation,
                branding, and preview deployment, allowing businesses to see a
                polished new store in minutes rather than weeks.
              </p>
            </div>
            <div>
              <h4 class="text-lg font-medium text-white mb-2">
                Why It Stands Out
              </h4>
              <div class="space-y-2">
                <p class="text-gray-300">
                  <span class="text-primary font-medium">Speed:</span> Generates
                  in minutes what typically takes weeks.
                </p>
                <p class="text-gray-300">
                  <span class="text-primary font-medium">Consistency:</span>
                  Ensures brand-aligned copy, design, and imagery.
                </p>
                <p class="text-gray-300">
                  <span class="text-primary font-medium">Scalability:</span> Can
                  transform thousands of ecommerce sites automatically.
                </p>
                <p class="text-gray-300">
                  <span class="text-primary font-medium">Sales-Ready:</span>
                  Each output is not just a demo but a conversion-focused store
                  ready for deployment.
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
              Computer Vision
            </span>
            <span
              class="px-3 py-2 text-sm bg-white/10 text-white/80 rounded-lg border border-white/20"
            >
              Face Recognition
            </span>
            <span
              class="px-3 py-2 text-sm bg-white/10 text-white/80 rounded-lg border border-white/20"
            >
              AI/ML
            </span>
            <span
              class="px-3 py-2 text-sm bg-white/10 text-white/80 rounded-lg border border-white/20"
            >
              Assistive Technology
            </span>
            <span
              class="px-3 py-2 text-sm bg-white/10 text-white/80 rounded-lg border border-white/20"
            >
              Healthcare
            </span>
          </div>
        </div>

        <!-- Project Stats -->
        <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 class="text-lg font-semibold text-white mb-4">Project Stats</h3>
          <div class="space-y-3">
            <div class="flex justify-between">
              <span class="text-gray-400">Status</span>
              <span class="text-blue-400">Upcoming</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Type</span>
              <span class="text-white">Assistive Technology</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Target</span>
              <span class="text-white">Alzheimer's Patients</span>
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
    src: "/images/beautifullydone-2.jpeg",
    alt: "Beautifully Done Dashboard",
  },
  {
    src: "/images/beautifullydone-3.jpeg",
    alt: "Store Transformation",
  },
  {
    src: "/images/beautifullydone-4.jpeg",
    alt: "AI Generation Process",
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
