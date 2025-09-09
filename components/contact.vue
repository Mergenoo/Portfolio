<template>
  <section id="contact" class="bg-black text-white py-24 px-6">
    <div
      class="max-w-6xl mx-auto border-t border-white/10 pt-16 grid grid-cols-1 md:grid-cols-2 gap-12"
    >
      <!-- Left: Heading -->
      <div>
        <h2 class="text-4xl font-bold leading-tight">
          Let's<br />work<br />together
        </h2>
      </div>

      <!-- Right: Message & Email -->
      <div class="flex flex-col justify-between">
        <p class="text-gray-400 text-lg mb-6 leading-relaxed">
          I'm always open to new challenges and collaborations. If you're
          looking for a passionate software developer to bring your ideas to
          life — let's chat and make it happen.
        </p>
        <div class="space-y-4 flex justify-between items-center">
          <a
            href="mailto:mergenoo642@gmail.com"
            class="text-xl font-semibold border-b border-white inline-block w-fit hover:text-primary transition"
          >
            mergenoo642@gmail.com
          </a>

          <div class="flex gap-4">
            <a
              href="https://github.com/mergenoo"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-primary transition-colors duration-300"
            >
              <Icon name="mdi:github" class="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/mergenoo/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-primary transition-colors duration-300"
            >
              <Icon name="mdi:linkedin" class="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
