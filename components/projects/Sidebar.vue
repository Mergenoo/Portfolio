<template>
  <!-- Toggle Button (outside sidebar) -->
  <div
    class="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-300"
    :class="{
      'left-64': !isCollapsed || isHovered,
      'left-0': isCollapsed && !isHovered,
    }"
  >
    <button
      @click="toggleSidebar"
      class="bg-black/90 backdrop-blur-sm border border-white/20 rounded-r-lg px-2 py-4 hover:bg-white/10 transition-all duration-200 group text-center flex justify-center items-center border-l-0"
    >
      <Icon
        :name="isCollapsed ? 'mdi:chevron-right' : 'mdi:chevron-left'"
        class="w-4 h-4 text-white/60 group-hover:text-white transition-colors"
      />
    </button>
  </div>

  <!-- Sidebar -->
  <div
    class="sticky top-0 left-0 h-screen bg-black/95 backdrop-blur-sm border-r border-white/20 py-6 px-4 overflow-hidden transition-all duration-300 ease-in-out"
    :class="{
      'w-64': !isCollapsed || isHovered,
      'w-16': isCollapsed && !isHovered,
    }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- Header -->
    <div
      class="mb-8 transition-all duration-300"
      :class="{ 'opacity-0': isCollapsed && !isHovered }"
    >
      <h2 class="text-white text-2xl font-bold text-left whitespace-nowrap">
        Projects
      </h2>
      <p class="text-gray-400 text-sm mt-2 whitespace-nowrap">
        Select a project to view details
      </p>
    </div>

    <!-- Projects List -->
    <div class="overflow-auto h-[calc(100vh-140px)] pr-2">
      <div
        v-for="project in projects"
        :key="project.title"
        class="group cursor-pointer transition-all duration-200 py-3 px-2 border-l-2 border-transparent hover:border-primary/50"
        :class="{
          'border-l-primary bg-white/5':
            selectedProject === project.title && !isCollapsed,
        }"
        @click="selectProject(project.title)"
      >
        <!-- Project Item -->
        <div class="flex flex-col">
          <h3
            class="text-white/90 font-medium text-base group-hover:text-white transition-colors duration-200 whitespace-nowrap overflow-hidden"
            :class="{ 'opacity-0': isCollapsed && !isHovered }"
          >
            {{ project.title }}
          </h3>

          <!-- Enter Arrow -->
          <div class="flex justify-end mt-1">
            <Icon
              name="mdi:keyboard-return"
              class="w-6 h-6 text-white/40 group-hover:text-primary transition-all duration-200 group-hover:translate-x-0.5"
              :class="{ 'opacity-0': isCollapsed && !isHovered }"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Collapsed State Icons -->
    <div v-if="isCollapsed && !isHovered" class="space-y-4 mt-8">
      <div
        v-for="(project, index) in projects"
        :key="project.title"
        class="group cursor-pointer transition-all duration-200 p-2 rounded-lg hover:bg-white/10"
        :class="{
          'bg-white/10': selectedProject === project.title,
        }"
        @click="selectProject(project.title)"
        :title="project.title"
      >
        <div
          class="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center"
        >
          <span class="text-primary font-bold text-sm">{{ index + 1 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  selectedProject: {
    type: String,
    default: "",
  },
});

const isCollapsed = ref(false);
const isHovered = ref(false);

const projects = [
  {
    title: "Beautifull Done",
    status: "On process",
    description:
      "A web application that uses machine learning to detect Alzheimer's disease from MRI images.",
    tags: [
      "Nuxt",
      "Tailwind",
      "Python",
      "Machine Learning",
      "Generative AI",
      "Ecommerce",
    ],
  },
  {
    title: "Project DDAM",
    status: "Completed",
    description:
      "A web application that uses machine learning to detect Alzheimer's disease from MRI images.",
    tags: ["Nuxt", "Tailwind", "Generative AI", "OpenAI API"],
  },
  {
    title: "Ebuuhia",
    status: "Completed",
    description:
      "A web application that uses machine learning to detect Alzheimer's disease from MRI images.",
    tags: ["Next.js", "Tailwind", "Python"],
  },
  {
    title: "Project Alzheimer",
    status: "Upcoming",
    description:
      "A web application that uses machine learning to detect Alzheimer's disease from MRI images.",
    tags: ["Python", "Machine Learning"],
  },
];

const selectProject = (projectTitle) => {
  // Emit event to parent component
  emit("project-selected", projectTitle);
};

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};

const handleMouseEnter = () => {
  if (isCollapsed.value) {
    isHovered.value = true;
  }
};

const handleMouseLeave = () => {
  if (isCollapsed.value) {
    isHovered.value = false;
  }
};

const emit = defineEmits(["project-selected"]);
</script>
