<template>
  <div class="max-w-4xl mx-auto">
    <!-- Project Header -->
    <div class="mb-8">
      <div class="flex items-center gap-4 mb-4">
        <h1 class="text-4xl font-bold text-white">Project DDAM</h1>
        <span
          class="px-3 py-1 text-sm font-medium rounded-full bg-green-500/20 text-green-400 border border-green-500/30"
        >
          Completed
        </span>
      </div>
      <p class="text-xl text-gray-300 leading-relaxed">
        A web application that uses machine learning to detect Alzheimer's
        disease from MRI images.
      </p>
    </div>

    <!-- Project Content -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Main Content -->
      <div class="lg:col-span-2 space-y-8">
        <!-- Project Image/Preview -->
        <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 class="text-xl font-semibold text-white mb-4">Project Preview</h3>
          <div
            class="bg-white/5 border border-white/10 rounded-xl h-64 flex items-center justify-center"
          >
            <p class="text-gray-400">DDAM Project Screenshot</p>
          </div>
        </div>

        <!-- Features -->
        <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 class="text-xl font-semibold text-white mb-4">Key Features</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
              ></div>
              <span class="text-gray-300"
                >Machine learning model for disease detection</span
              >
            </li>
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
              ></div>
              <span class="text-gray-300">Real-time image processing</span>
            </li>
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
              ></div>
              <span class="text-gray-300"
                >User-friendly interface for medical professionals</span
              >
            </li>
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
              ></div>
              <span class="text-gray-300">Comprehensive reporting system</span>
            </li>
          </ul>
        </div>

        <!-- Project Details -->
        <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 class="text-xl font-semibold text-white mb-4">
            Project Overview
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="text-lg font-medium text-white mb-2">About DDAM</h4>
              <p class="text-gray-300">
                DDAM is an innovative medical imaging application that leverages
                advanced machine learning algorithms to assist healthcare
                professionals in early detection of Alzheimer's disease. The
                system processes MRI scans and provides accurate diagnostic
                predictions with high confidence levels.
              </p>
            </div>
            <div>
              <h4 class="text-lg font-medium text-white mb-2">Impact</h4>
              <p class="text-gray-300">
                This project has the potential to significantly improve early
                diagnosis rates, leading to better treatment outcomes and
                improved quality of life for patients and their families.
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
              class="px-3 py-2 text-sm bg-white/10 text-white/80 rounded-lg border border-white/20"
            >
              Nuxt
            </span>
            <span
              class="px-3 py-2 text-sm bg-white/10 text-white/80 rounded-lg border border-white/20"
            >
              Tailwind
            </span>
            <span
              class="px-3 py-2 text-sm bg-white/10 text-white/80 rounded-lg border border-white/20"
            >
              Generative AI
            </span>
            <span
              class="px-3 py-2 text-sm bg-white/10 text-white/80 rounded-lg border border-white/20"
            >
              OpenAI API
            </span>
          </div>
        </div>

        <!-- Project Links -->
        <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 class="text-lg font-semibold text-white mb-4">Project Links</h3>
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

        <!-- Project Stats -->
        <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 class="text-lg font-semibold text-white mb-4">Project Stats</h3>
          <div class="space-y-3">
            <div class="flex justify-between">
              <span class="text-gray-400">Status</span>
              <span class="text-green-400">Completed</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Duration</span>
              <span class="text-white">3 months</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Team Size</span>
              <span class="text-white">3 developers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
