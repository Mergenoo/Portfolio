<template>
  <div class="flex min-h-screen bg-black text-white w-full h-full">
    <!-- Sidebar -->
    <ProjectSidebar
      :selectedProject="selectedProject"
      @project-selected="handleProjectSelected"
    />

    <!-- Project Detail -->
    <ProjectDetail :selectedProject="selectedProjectData" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import ProjectSidebar from "@/components/projects/Sidebar.vue";
import ProjectDetail from "@/components/projects/ProjectDetail.vue";

// Set body background to black
onMounted(() => {
  document.body.style.backgroundColor = "black";
  document.body.style.minHeight = "100vh";
});

// Project data
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
    tags: ["Vue", "Nuxt", "Tailwind", "Python", "Machine Learning"],
  },
];

const selectedProject = ref("");

// Computed property to get the full project data
const selectedProjectData = computed(() => {
  if (!selectedProject.value) return null;
  return projects.find((p) => p.title === selectedProject.value);
});

const handleProjectSelected = (projectTitle) => {
  selectedProject.value = projectTitle;
};
</script>
