<template>
  <section
    id="home"
    class="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-32 bg-black text-white relative overflow-hidden"
  >
    <!-- Background Glow -->
    <div class="absolute inset-0 pointer-events-none"></div>

    <!-- Logo -->
    <img src="/images/Logo.svg" alt="Logo" class="h-20 mb-12 z-10" />

    <!-- Availability Badge -->
    <p
      class="inline-flex items-center text-sm font-medium border border-white/20 text-white bg-white/5 rounded-full px-4 py-1 mb-8 backdrop-blur-sm z-10"
    >
      <span class="relative flex h-2 w-2 mr-2">
        <span
          class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
        ></span>
        <span
          class="relative inline-flex rounded-full h-2 w-2 bg-primary"
        ></span>
      </span>
      Available for work
    </p>

    <!-- Heading -->
    <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-6 z-10">
      Hey there,<br />
      I am Mergen Ochirsukh,<br />
      a frontend developer.
    </h1>

    <!-- Subtext -->
    <p class="text-gray-400 max-w-xl mx-auto text-lg mb-10 z-10">
      I bring ideas to life through clean code, creative interaction, and a
      passion for frontend. Let’s build something unforgettable.
    </p>

    <!-- CTA Buttons -->
    <div class="flex flex-wrap justify-center gap-4 z-10">
      <a
        href="mailto:mergenoo.dev@gmail.com"
        class="inline-block px-6 py-3 bg-primary text-white rounded-xl font-medium text-lg hover:opacity-90 transition"
      >
        Let's work together
      </a>
      <NuxtLink
        to="/resume"
        class="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-black transition"
      >
        My CV
      </NuxtLink>
    </div>
  </section>
</template>
