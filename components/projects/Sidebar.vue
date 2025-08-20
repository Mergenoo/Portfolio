<template>
  <div class="sticky top-0 left-0 h-screen w-16 bg-black">
    <div v-for="project in projects" :key="project.title">
      <div class="flex items-center justify-center">
        <Icon name="mdi:github" class="w-6 h-6" />
      </div>
    </div>
  </div>
</template>

<script setup>
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
    title: "project DDAM",
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
    title: "Alzheimer's Disease Detection",
    status: "Upcoming",
    description:
      "A web application that uses machine learning to detect Alzheimer's disease from MRI images.",
    tags: ["Vue", "Nuxt", "Tailwind", "Python", "Machine Learning"],
  },
];
</script>
