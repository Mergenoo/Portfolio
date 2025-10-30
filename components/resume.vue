<template>
  <section id="resume" class="bg-black text-white py-24 px-6">
    <div class="max-w-4xl mx-auto">
      <!-- Heading -->
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">Resume</h2>

      <!-- Experience Section -->
      <div class="mb-16">
        <h3 class="text-xl font-semibold mb-6 text-primary">Experience</h3>
        <div v-for="(item, i) in experience" :key="i" class="mb-8">
          <h4 class="text-lg font-semibold">
            {{ item.role }} @ {{ item.company }}
          </h4>
          <p class="text-gray-400 text-sm mb-1">{{ item.period }}</p>
          <p class="text-gray-300 text-sm">{{ item.description }}</p>
        </div>
      </div>

      <!-- Education Section -->
      <div class="mb-16">
        <h3 class="text-xl font-semibold mb-6 text-primary">Education</h3>
        <div v-for="(item, i) in education" :key="i" class="mb-8">
          <h4 class="text-lg font-semibold">
            {{ item.degree }} @ {{ item.school }}
          </h4>
          <p class="text-gray-400 text-sm mb-1">{{ item.period }}</p>
          <p class="text-gray-300 text-sm">{{ item.description }}</p>
        </div>
      </div>

      <!-- Download Button -->
      <div class="text-center">
        <a
          href="/images/resume_tavan_bogd.pdf"
          download
          class="inline-block px-6 py-3 border border-white text-white rounded-xl hover:bg-white hover:text-black transition"
        >
          Download My CV
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
    period: "2023 — 2024",
    description:
      "Built AI-powered applications using Next.js and Vertex AI, including a movie recommendation system (10,000+ data points), smart golf mapping app, and marketing strategy analyzer with product similarity detection. Optimized performance with virtual scrolling (1.1s latency reduction) and PDF navigation tracking (40% UX improvement). Served 1,000+ daily users.",
  },
  {
    role: "Software Engineer",
    company: "Nest Education IT School",
    period: "2022 — 2023",
    description:
      "Architected delivery management system with MySQL database processing 2,000+ daily deliveries and RESTful API handling 1,600+ transactions. Built real-time tracking dashboard for logistics operations. Achieved 80% increase in daily deliveries, 40% growth in sales, and 20% market expansion.",
  },
  {
    role: "Software Developer Intern",
    company: "Erxes",
    period: "2021",
    description:
      "Developed ERP system modules for 100+ employees, including personal asset tracking and centralized template library. Improved productivity by 20% through streamlined document management processes.",
  },
];

const education = [
  {
    degree: "High School Diploma in IT",
    school: "Nest Education",
    period: "2021 — 2024",
    description: "Focused on web development, algorithms, and design thinking.",
  },
  {
    degree: "Bachelor of Science in Computer Science  ",
    school: "Butler University",
    period: "2024 — Present",
    description: "Currently studying at Butler university full-time.",
  },
];
</script>
