<template>
  <div class="flex-1 p-8 overflow-y-auto">
    <!-- Loading State -->
    <div
      v-if="!selectedProject"
      class="flex items-center justify-center h-full"
    >
      <div class="text-center flex flex-col items-center justify-center">
        <img src="/images/Logo.svg" alt="logo" class="w-20 h-20 mb-4" />
        <p class="text-white/60 text-lg">Select a project to view details</p>
      </div>
    </div>

    <!-- Project Components -->
    <div v-else>
      <!-- Beautifull Done -->
      <projectBeautifullDone
        v-if="selectedProject.title === 'Beautifull Done'"
      />

      <!-- Project DDAM -->
      <projectDDAM v-else-if="selectedProject.title === 'Project DDAM'" />

      <!-- Ebuuhia -->
      <projectEbuuhia v-else-if="selectedProject.title === 'Ebuuhia'" />

      <!-- Abunai -->
      <projectAbunai v-else-if="selectedProject.title === 'Abunai'" />

      <!-- Project Alzheimer -->
      <projectAlzheimer
        v-else-if="selectedProject.title === 'Project Alzheimer'"
      />
      <!-- Project Syllaby -->
      <projectSyllaby v-else-if="selectedProject.title === 'Syllaby'" />

      <!-- Fallback for unknown projects -->
      <div v-else class="max-w-4xl mx-auto">
        <div class="mb-8">
          <div class="flex items-center gap-4 mb-4">
            <h1 class="text-4xl font-bold text-white">
              {{ selectedProject.title }}
            </h1>
            <span
              class="px-3 py-1 text-sm font-medium rounded-full"
              :class="getStatusClass(selectedProject.status)"
            >
              {{ selectedProject.status }}
            </span>
          </div>
          <p class="text-xl text-gray-300 leading-relaxed">
            {{ selectedProject.description }}
          </p>
        </div>

        <!-- Project Content -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Main Content -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Project Image/Preview -->
            <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 class="text-xl font-semibold text-white mb-4">
                Project Preview
              </h3>
              <div
                class="bg-white/5 border border-white/10 rounded-xl h-64 flex items-center justify-center"
              >
                <p class="text-gray-400">Project preview image coming soon</p>
              </div>
            </div>

            <!-- Features -->
            <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 class="text-xl font-semibold text-white mb-4">
                Key Features
              </h3>
              <ul class="space-y-3">
                <li
                  v-for="feature in getProjectFeatures(selectedProject.title)"
                  :key="feature"
                  class="flex items-start gap-3"
                >
                  <div
                    class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                  ></div>
                  <span class="text-gray-300">{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- Challenges & Solutions -->
            <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 class="text-xl font-semibold text-white mb-4">
                Challenges & Solutions
              </h3>
              <div class="space-y-4">
                <div>
                  <h4 class="text-lg font-medium text-white mb-2">
                    Challenges
                  </h4>
                  <p class="text-gray-300">
                    Technical challenges and obstacles faced during development.
                  </p>
                </div>
                <div>
                  <h4 class="text-lg font-medium text-white mb-2">Solutions</h4>
                  <p class="text-gray-300">
                    Innovative approaches and solutions implemented to overcome
                    challenges.
                  </p>
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
                  v-for="tag in selectedProject.tags"
                  :key="tag"
                  class="px-3 py-2 text-sm bg-white/10 text-white/80 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Project Links -->
            <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 class="text-lg font-semibold text-white mb-4">
                Project Links
              </h3>
              <div class="space-y-3">
                <a
                  href="#"
                  class="flex items-center gap-3 p-3 bg-primary/20 text-primary border border-primary/30 rounded-lg hover:bg-primary/30 transition-colors"
                >
                  <Icon name="mdi:github" class="w-5 h-5" />
                  <span>View on GitHub</span>
                </a>
                <a
                  href="#"
                  class="flex items-center gap-3 p-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Icon name="mdi:open-in-new" class="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import projectBeautifullDone from "./projectBeautifullDone.vue";
import projectDDAM from "./projectDDAM.vue";
import projectEbuuhia from "./projectEbuuhia.vue";
import projectAbunai from "./projectAbunai.vue";
import projectAlzheimer from "./upcoming/projectAlzheimer.vue";
import projectSyllaby from "./projectSyllaby.vue";

const props = defineProps({
  selectedProject: {
    type: Object,
    default: null,
  },
});

const getStatusClass = (status) => {
  switch (status?.toLowerCase()) {
    case "completed":
      return "bg-green-500/20 text-green-400 border border-green-500/30";
    case "on process":
      return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30";
    case "upcoming":
      return "bg-blue-500/20 text-blue-400 border border-blue-500/30";
    default:
      return "bg-gray-500/20 text-gray-400 border border-gray-500/30";
  }
};

const getProjectFeatures = (projectTitle) => {
  // This would typically come from your project data
  const features = {
    "Beautifull Done": [
      "E-commerce platform with ML-powered recommendations",
      "Advanced search and filtering capabilities",
      "Secure payment processing",
      "Responsive design for all devices",
    ],
    "Project DDAM": [
      "Machine learning model for disease detection",
      "Real-time image processing",
      "User-friendly interface for medical professionals",
      "Comprehensive reporting system",
    ],
    Ebuuhia: [
      "Modern web application architecture",
      "Performance optimization",
      "Cross-platform compatibility",
      "Scalable backend infrastructure",
    ],
    Abunai: [
      "Mongolian language support",
      "ChatGPT API integration",
      "Google Translation API",
      "Natural language processing",
    ],
    "Project Alzheimer": [
      "AI-powered diagnostic tools",
      "Medical image analysis",
      "Clinical decision support",
      "Research collaboration features",
    ],
    "Project Syllaby": [
      "AI-powered calendar generator",
      "Syllabus parsing",
      "Calendar visualization",
      "User-friendly interface",
    ],
  };

  return features[projectTitle] || ["Feature 1", "Feature 2", "Feature 3"];
};
</script>
