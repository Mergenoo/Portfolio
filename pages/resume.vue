<template>
  <section class="bg-black text-white py-24 px-6 min-h-screen">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
      <!-- 📸 Resume as Image -->
      <div class="w-full">
        <img
          src="/images/resume.jpg"
          alt="My Resume"
          class="w-full rounded-lg shadow-lg border border-white/10"
        />
      </div>

      <!-- 📌 Extra Experience -->
      <div class="space-y-12">
        <h2 class="text-2xl font-bold text-primary">More About Me</h2>

        <div v-for="(item, i) in experiences" :key="i" class="space-y-2">
          <h3 class="text-lg font-semibold">{{ item.title }}</h3>
          <p class="text-sm text-gray-400">{{ item.period }}</p>
          <p class="text-sm text-gray-300">{{ item.description }}</p>
        </div>
        <NuxtLink
          to="/"
          download
          class="inline-block mt-6 px-6 py-3 border bg-primary border-primary rounded-xl hover:opacity-9 transition mr-4"
        >
          Home
        </NuxtLink>

        <a
          href="/images/Mergen_resume.pdf"
          download
          class="inline-block mt-6 px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
        >
          Download My CV
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const experiences = [
  {
    title: "Software Developer",
    company: "Dentsu Data Artist Mongolia",
    period: "2024 — Present",
    description:
      "Building interactive web applications using Nuxt, Vue, and Tailwind. Collaborating on design systems, micro-interactions, and contributing to scalable front-end architecture.",
  },
  {
    title: "Software Developer Intern",
    company: "Erxes",
    period: "2024",
    description:
      "Contributed to the open-source erxes platform. Focused on UI development, component design, bug fixing, and improving user experience in a collaborative agile environment.",
  },
  {
    title: "Algorithm Assistant Teacher & Homeroom Teacher",
    company: "Nest Education IT School",
    period: "2023 — 2025",
    description:
      "Mentored high school students in JavaScript and C++, using real-world projects and hands-on problem solving to teach algorithmic thinking and web fundamentals.",
  },
];
</script>
