<template>
  <div class="max-w-4xl mx-auto">
    <!-- Image Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-auto"
      @click="closeModal"
    >
      <div
        class="relative max-w-7xl w-full min-h-full flex items-center justify-center"
      >
        <img
          :src="selectedImage"
          :alt="selectedImage"
          class="w-full h-auto rounded-lg max-h-none"
        />
        <button
          class="absolute top-4 right-4 text-white/80 hover:text-white z-10"
          @click="closeModal"
        >
          <Icon name="mdi:close" class="w-8 h-8" />
        </button>
      </div>
    </div>
    <!-- Project Header -->
    <div class="mb-8">
      <div class="flex items-center gap-4 mb-4">
        <h1 class="text-4xl font-bold text-white">Ebuuhia</h1>
        <span
          class="px-3 py-1 text-sm font-medium rounded-full bg-green-500/20 text-green-500 border border-green-500/30"
        >
          Completed
        </span>
      </div>
      <p class="text-xl text-gray-300 leading-relaxed">
        A delivery and logistics management system built to track storage units,
        monitor product quantities, and manage deliveries in real time. The
        platform provides businesses with a clear overview of their supply chain
        — from warehouse storage to last-mile delivery — helping reduce errors
        and streamline operations.
      </p>
      <p class="text-lg text-primary mt-3 font-medium">
        "Streamlining supply chains, one delivery at a time."
      </p>
    </div>

    <!-- Project Content -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Main Content -->
      <div class="lg:col-span-2 space-y-8">
        <!-- Project Image/Preview -->
        <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 class="text-xl font-semibold text-white mb-4">Project Preview</h3>
          <!-- Main Preview Image -->
          <div
            class="bg-white/5 border border-white/10 rounded-xl h-64 overflow-hidden cursor-pointer hover:border-primary/50 transition-colors duration-200"
            @click="openModal('/images/ebuuhia.jpeg')"
          >
            <img
              src="/images/Ebuuhia.jpeg"
              alt="Ebuuhia"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <!-- Image Gallery -->
        </div>

        <!-- Features -->
        <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 class="text-xl font-semibold text-white mb-4">Key Features</h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
              ></div>
              <div>
                <span class="text-white font-medium"
                  >Storage Unit Tracking</span
                >
                <p class="text-gray-400 text-sm mt-1">
                  Monitors inventory across multiple storage units. Provides a
                  clear view of product locations and quantities. Updates
                  automatically when stock is added, moved, or delivered.
                </p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
              ></div>
              <div>
                <span class="text-white font-medium"
                  >Product Quantity Management</span
                >
                <p class="text-gray-400 text-sm mt-1">
                  Real-time tracking of stock levels to prevent shortages or
                  overstocking. Alerts for low inventory or threshold breaches.
                  Supports efficient restocking and resource planning.
                </p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
              ></div>
              <div>
                <span class="text-white font-medium">Delivery Tracking</span>
                <p class="text-gray-400 text-sm mt-1">
                  Tracks the full delivery process, from warehouse dispatch to
                  customer drop-off. Logs delivery statuses (pending, in
                  progress, completed). Enables accountability by linking
                  products to specific delivery operations.
                </p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div
                class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
              ></div>
              <div>
                <span class="text-white font-medium">Data & Reporting</span>
                <p class="text-gray-400 text-sm mt-1">
                  Generates logs and reports for storage, stock movement, and
                  delivery activity. Helps businesses analyze performance and
                  optimize logistics. Creates transparency across the entire
                  product lifecycle.
                </p>
              </div>
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
              <h4 class="text-lg font-medium text-white mb-2">
                About Beautifully Done
              </h4>
              <p class="text-gray-300">
                Beautifully Done is an AI-powered web application designed to
                transform existing ecommerce sites into visually stunning,
                modern Shopify stores. The system automates store generation,
                branding, and preview deployment, allowing businesses to see a
                polished new store in minutes rather than weeks.
              </p>
            </div>
            <div>
              <h4 class="text-lg font-medium text-white mb-2">
                Why It Stands Out
              </h4>
              <div class="space-y-2">
                <p class="text-gray-300">
                  <span class="text-primary font-medium">Speed:</span> Generates
                  in minutes what typically takes weeks.
                </p>
                <p class="text-gray-300">
                  <span class="text-primary font-medium">Consistency:</span>
                  Ensures brand-aligned copy, design, and imagery.
                </p>
                <p class="text-gray-300">
                  <span class="text-primary font-medium">Scalability:</span> Can
                  transform thousands of ecommerce sites automatically.
                </p>
                <p class="text-gray-300">
                  <span class="text-primary font-medium">Sales-Ready:</span>
                  Each output is not just a demo but a conversion-focused store
                  ready for deployment.
                </p>
              </div>
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
              AI/ML
            </span>
            <span
              class="px-3 py-2 text-sm bg-white/10 text-white/80 rounded-lg border border-white/20"
            >
              Shopify
            </span>
            <span
              class="px-3 py-2 text-sm bg-white/10 text-white/80 rounded-lg border border-white/20"
            >
              Liquid
            </span>
            <span
              class="px-3 py-2 text-sm bg-white/10 text-white/80 rounded-lg border border-white/20"
            >
              Automation
            </span>
            <span
              class="px-3 py-2 text-sm bg-white/10 text-white/80 rounded-lg border border-white/20"
            >
              Ecommerce
            </span>
          </div>
        </div>

        <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 class="text-lg font-semibold text-white mb-4">Project Links</h3>
          <div class="space-y-3">
            <a
              href="https://ebuuhia.mn/"
              target="_blank"
              class="flex items-center gap-3 p-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Icon name="mdi:open-in-new" class="w-5 h-5" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>

        <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 class="text-lg font-semibold text-white mb-4">Project Stats</h3>
          <div class="space-y-3">
            <div class="flex justify-between">
              <span class="text-gray-400">Status</span>
              <span class="text-green-500">Completed</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Type</span>
              <span class="text-white">AI-Powered SaaS</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Target</span>
              <span class="text-white">Ecommerce Stores</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Modal state
const showModal = ref(false);
const selectedImage = ref("");

// Project images
const projectImages = [
  {
    src: "/images/beautifullydone-2.jpeg",
    alt: "Beautifully Done Dashboard",
  },
  {
    src: "/images/beautifullydone-3.jpeg",
    alt: "Store Transformation",
  },
  {
    src: "/images/beautifullydone-4.jpeg",
    alt: "AI Generation Process",
  },
];

// Modal functions
const openModal = (imageSrc) => {
  selectedImage.value = imageSrc;
  showModal.value = true;
  // Prevent body scroll when modal is open
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  showModal.value = false;
  selectedImage.value = "";
  // Restore body scroll
  document.body.style.overflow = "auto";
};
</script>

<style scoped>
/* Optional: Add fade transition for modal */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
