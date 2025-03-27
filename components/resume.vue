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
          href="/images/Mergen_resume.pdf"
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
    role: "Frontend Developer",
    company: "Dentsu Data Artist Mongolia",
    period: "2024 — Present",
    description:
      "Building interactive web apps with Nuxt, Vue, and Tailwind. Collaborating on design systems and micro-interactions.",
  },
  {
    role: "Frontend Intern",
    company: "Erxes",
    period: "2024",
    description:
      "Contributed to the erxes open-source codebase. Worked on UI components, fixed bugs, and supported performance improvements within a collaborative team.",
  },
  {
    role: "Algorithm Assistant Teacher, Homeroom Teacher",
    company: "Nest Education IT School",
    period: "2023 — 2025",
    description:
      "Taught JavaScript and C++ to high school students through project-based learning and real-world examples.",
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
