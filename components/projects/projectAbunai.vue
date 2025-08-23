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
        <h1 class="text-4xl font-bold text-white">Abunai</h1>
        <span
          class="px-3 py-1 text-sm font-medium rounded-full bg-green-500/20 text-green-500 border border-green-500/30"
        >
          Completed
        </span>
      </div>
      <p class="text-xl text-gray-300 leading-relaxed">
        A pioneering chatbot system in Mongolia, designed to provide natural
        language interactions for Mongolian users at a time when ChatGPT had no
        native support for the language. Built two years ago, the project
        combined the ChatGPT API with the Google Translation API to create a
        seamless conversational experience in Mongolian, effectively bridging
        the gap between advanced AI and local language accessibility.
      </p>
      <p class="text-lg text-primary mt-3 font-medium">
        "Bridging AI accessibility for Mongolian users."
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
            @click="openModal('/images/localhost_3000.jpeg')"
          >
            <img
              src="/images/localhost_3000.jpeg"
              alt="Abunai"
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
                  >Mongolian Language Support</span
                >
                <p class="text-gray-400 text-sm mt-1">
                  Enabled conversations in Mongolian despite ChatGPT not
                  supporting the language natively at the time. Created a system
                  where user input in Mongolian was translated to English,
                  processed by ChatGPT, and then translated back into Mongolian
                  for the response.
                </p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
              ></div>
              <div>
                <span class="text-white font-medium"
                  >ChatGPT + Google Translation Integration</span
                >
                <p class="text-gray-400 text-sm mt-1">
                  Used ChatGPT API for reasoning, dialogue flow, and
                  intelligence. Integrated Google Translation API to handle
                  back-and-forth translations smoothly. Ensured responses were
                  natural, coherent, and understandable in Mongolian.
                </p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
              ></div>
              <div>
                <span class="text-white font-medium"
                  >Bridging the Language Gap</span
                >
                <p class="text-gray-400 text-sm mt-1">
                  Made cutting-edge AI tools accessible to Mongolian users
                  before official support existed. Expanded the reach of AI
                  chatbots into underrepresented languages. Opened doors for
                  local businesses, students, and everyday users to experiment
                  with AI-driven conversations.
                </p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
              ></div>
              <div>
                <span class="text-white font-medium">Innovation Impact</span>
                <p class="text-gray-400 text-sm mt-1">
                  Served as one of the earliest functional Mongolian chatbot
                  systems powered by modern AI. Demonstrated how API
                  orchestration could overcome language barriers. Showcased
                  practical innovation by solving a real-world accessibility
                  challenge for Mongolia.
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
              <h4 class="text-lg font-medium text-white mb-2">About Abunai</h4>
              <p class="text-gray-300">
                Abunai is a pioneering chatbot system in Mongolia, designed to
                provide natural language interactions for Mongolian users at a
                time when ChatGPT had no native support for the language. Built
                two years ago, the project combined the ChatGPT API with the
                Google Translation API to create a seamless conversational
                experience in Mongolian, effectively bridging the gap between
                advanced AI and local language accessibility.
              </p>
            </div>
            <div>
              <h4 class="text-lg font-medium text-white mb-2">
                Why It Stands Out
              </h4>
              <div class="space-y-2">
                <p class="text-gray-300">
                  <span class="text-primary font-medium"
                    >Ahead of Its Time:</span
                  >
                  Built before ChatGPT had Mongolian support, filling a critical
                  gap.
                </p>
                <p class="text-gray-300">
                  <span class="text-primary font-medium"
                    >Creative Integration:</span
                  >
                  Combined two APIs (ChatGPT + Google Translation) to deliver a
                  working solution.
                </p>
                <p class="text-gray-300">
                  <span class="text-primary font-medium"
                    >Cultural & Linguistic Impact:</span
                  >
                  Helped bring AI-powered conversations to Mongolian users for
                  the first time.
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
              React
            </span>
            <span
              class="px-3 py-2 text-sm bg-white/10 text-white/80 rounded-lg border border-white/20"
            >
              ChatGPT API
            </span>
            <span
              class="px-3 py-2 text-sm bg-white/10 text-white/80 rounded-lg border border-white/20"
            >
              Google Translation API
            </span>
            <span
              class="px-3 py-2 text-sm bg-white/10 text-white/80 rounded-lg border border-white/20"
            >
              Natural Language Processing
            </span>
            <span
              class="px-3 py-2 text-sm bg-white/10 text-white/80 rounded-lg border border-white/20"
            >
              Mongolian Language
            </span>
          </div>
        </div>

        <!-- Project Links -->
        <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 class="text-lg font-semibold text-white mb-4">Project Links</h3>
          <div class="space-y-3">
            <a
              href="#"
              target="_blank"
              class="flex items-center gap-3 p-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Icon name="mdi:open-in-new" class="w-5 h-5" />
              <span>Project Demo</span>
            </a>
          </div>
        </div>

        <!-- Project Stats -->
        <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 class="text-lg font-semibold text-white mb-4">Project Stats</h3>
          <div class="space-y-3">
            <div class="flex justify-between">
              <span class="text-gray-400">Status</span>
              <span class="text-green-500">Completed</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Type</span>
              <span class="text-white">AI Chatbot</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Target</span>
              <span class="text-white">Mongolian Users</span>
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
    src: "/images/localhost_3000.jpeg",
    alt: "Abunai Dashboard",
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
