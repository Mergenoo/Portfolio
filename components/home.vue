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

    <!-- Welcome Message (shown when no chat history) -->
    <div v-if="chatHistory.length === 0" class="text-center mb-8 z-10">
      <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-6">
        Hey there,<br />
        I am Mergen Ochirsukh,<br />
        a software developer.
      </h1>
      <p class="text-xl text-gray-300 mb-4">
        Ask me anything about my work, skills, or experience!
      </p>
    </div>

    <!-- Chat Container Box (only shown when there's chat history) -->
    <div v-if="chatHistory.length > 0" class="w-full max-w-2xl mb-8 z-10">
      <div
        class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl transform transition-all duration-500 ease-out"
        :class="
          chatHistory.length > 0 ? 'animate-in slide-in-from-bottom-4' : ''
        "
      >
        <!-- Chat Messages -->
        <div
          ref="chatMessages"
          class="space-y-6 text-left mb-8 min-h-[200px] max-h-[400px] overflow-y-auto scrollbar-hide"
        >
          <div
            v-for="(message, index) in chatHistory"
            :key="index"
            class="flex gap-4 animate-in slide-in-from-bottom-2"
            :style="{ animationDelay: `${index * 100}ms` }"
            :class="message.role === 'user' ? 'justify-end' : 'justify-start'"
          >
            <div
              class="max-w-[80%] p-4 rounded-2xl backdrop-blur-sm relative transform transition-all duration-300 hover:scale-[1.02]"
              :class="
                message.role === 'user'
                  ? 'bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 text-white shadow-lg shadow-primary/10'
                  : 'bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-white shadow-lg'
              "
            >
              <div
                class="text-sm leading-relaxed"
                v-html="formatMessage(message.content)"
              ></div>
            </div>
          </div>

          <!-- Typing Indicator -->
          <div
            v-if="isTyping"
            class="flex gap-4 justify-start animate-in slide-in-from-bottom-2"
          >
            <div
              class="max-w-[80%] p-4 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-white shadow-lg"
            >
              <div class="flex items-center gap-2">
                <div
                  class="w-2 h-2 bg-primary rounded-full animate-pulse"
                ></div>
                <div
                  class="w-2 h-2 bg-primary rounded-full animate-pulse"
                  style="animation-delay: 0.2s"
                ></div>
                <div
                  class="w-2 h-2 bg-primary rounded-full animate-pulse"
                  style="animation-delay: 0.4s"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Input Area -->
        <div class="flex items-center gap-3">
          <div class="relative flex-1 group">
            <input
              v-model="message"
              placeholder="Ask me anything..."
              class="w-full py-4 px-6 border rounded-2xl border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-primary/50 focus:bg-white/10 focus:ring-2 focus:ring-primary/20 group-hover:border-white/30 group-hover:bg-white/8"
              @keydown.enter.prevent="sendMessage"
              style="caret-color: white"
            />
            <div
              class="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            ></div>
          </div>
          <button
            @click="sendMessage"
            class="cursor-pointer rounded-full bg-primary hover:bg-primary/90 text-white p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-black group flex-shrink-0"
          >
            <svg
              class="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Chat Input Area (always visible) -->
    <div
      v-else
      class="flex items-center justify-center gap-3 my-6 mx-2 w-full max-w-md z-10"
    >
      <div class="relative flex-1 group">
        <textarea
          v-model="message"
          placeholder="Ask me anything..."
          class="w-full py-4 px-6 border rounded-full border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 resize-none outline-none transition-all duration-300 focus:border-primary/50 focus:bg-white/10 focus:ring-2 focus:ring-primary/20 group-hover:border-white/30 group-hover:bg-white/8"
          rows="1"
          @keydown.enter.prevent="sendMessage"
          style="line-height: 1.5; caret-color: white"
        ></textarea>
        <div
          class="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        ></div>
      </div>
      <button
        @click="sendMessage"
        class="cursor-pointer rounded-full bg-primary hover:bg-primary/90 text-white p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-black group flex-shrink-0"
      >
        <svg
          class="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>

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

<script setup lang="ts">
import { ref, nextTick } from "vue";
import { chatgen } from "~/utils/chat";

const message = ref("");
const chatHistory = ref<Array<{ role: "user" | "assistant"; content: string }>>(
  []
);
const chatMessages = ref<HTMLElement | null>(null);
const isTyping = ref(false);

const formatMessage = (content: string) => {
  // Convert markdown-style links to HTML links
  return content.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-primary hover:text-primary/80 underline transition-colors">$1</a>'
  );
};

const sendMessage = async () => {
  if (!message.value.trim()) return;

  // Add user message to chat
  const userMessage = message.value.trim();
  chatHistory.value.push({ role: "user", content: userMessage });

  // Clear input
  message.value = "";

  // Scroll to bottom after adding user message
  await nextTick();
  if (chatMessages.value) {
    chatMessages.value.scrollTop = chatMessages.value.scrollHeight;
  }

  // Show typing indicator
  isTyping.value = true;

  // Scroll to show typing indicator
  await nextTick();
  if (chatMessages.value) {
    chatMessages.value.scrollTop = chatMessages.value.scrollHeight;
  }

  try {
    // Get AI response
    const response = await chatgen(userMessage);

    // Add AI response to chat
    if (response) {
      chatHistory.value.push({ role: "assistant", content: response });
    } else {
      chatHistory.value.push({
        role: "assistant",
        content: "I'm sorry, I didn't get a response. Please try asking again.",
      });
    }

    // Hide typing indicator
    isTyping.value = false;

    // Scroll to bottom after adding response
    await nextTick();
    if (chatMessages.value) {
      chatMessages.value.scrollTop = chatMessages.value.scrollHeight;
    }
  } catch (error) {
    // Handle error gracefully
    chatHistory.value.push({
      role: "assistant",
      content:
        "Sorry, I'm having trouble responding right now. Please try again later.",
    });

    // Hide typing indicator
    isTyping.value = false;

    // Scroll to bottom after error response
    await nextTick();
    if (chatMessages.value) {
      chatMessages.value.scrollTop = chatMessages.value.scrollHeight;
    }
  }
};
</script>

<style scoped>
/* Custom scrollbar */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Animation classes */
@keyframes slideInFromBottom {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: slideInFromBottom 0.5s ease-out forwards;
}

.slide-in-from-bottom-2 {
  animation-delay: 0.1s;
}

.slide-in-from-bottom-4 {
  animation-delay: 0.2s;
}

/* Smooth transitions for all interactive elements */
* {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
