<template>
  <section id="resume" class="bg-black text-white py-24 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">Resume</h2>

      <div class="mb-16">
        <h3 class="text-xl font-semibold mb-6 text-primary">Experience</h3>
        <div v-for="(item, i) in experience" :key="i" class="mb-8">
          <h4 class="text-lg font-semibold text-white">
            {{ item.role }} @ {{ item.company }}
          </h4>
          <p class="text-gray-400 text-sm mb-1">{{ item.period }}</p>
          <p class="text-white text-sm leading-relaxed">{{ item.description }}</p>
        </div>
      </div>

      <div class="mb-16">
        <h3 class="text-xl font-semibold mb-6 text-primary">Education</h3>
        <div v-for="(item, i) in education" :key="i" class="mb-8">
          <h4 class="text-lg font-semibold text-white">
            {{ item.degree }} @ {{ item.school }}
          </h4>
          <p class="text-gray-400 text-sm mb-1">{{ item.period }}</p>
          <p class="text-white text-sm leading-relaxed">{{ item.description }}</p>
        </div>
      </div>

      <div
        class="text-center flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <a
          href="/images/Mergen_resume.pdf"
          download
          class="inline-block px-6 py-3 border border-white text-white rounded-xl hover:bg-white hover:text-black transition"
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
const experience = [
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

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Butler University",
    period: "2024 — Present",
    description:
      "GPA 3.8. Relevant coursework: CS 142, CS 151, MA 106, MA 107.",
  },
  {
    degree: "High School Diploma in IT",
    school: "Nest Education",
    period: "June 2024",
    description: "GPA 3.6. SAT 1300.",
  },
];
</script>
