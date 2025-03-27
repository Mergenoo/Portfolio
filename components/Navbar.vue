<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isMounted = ref(false);

onMounted(() => {
  isMounted.value = true;
  console.log("✅ Navbar mounted");
  console.log("🔍 Current hash:", route.hash);
});

watch(
  () => route.hash,
  (newHash) => {
    console.log("🔄 Hash changed to:", newHash);
  }
);

const getLinkClass = (hash: string) => {
  if (!isMounted.value) return "text-white"; // SSR-safe fallback

  const isActive =
    (hash === "" && (route.hash === "" || route.hash === "#home")) ||
    route.hash === hash;

  return isActive
    ? "text-primary after:absolute after:top-7 after:left-0 after:w-full after:h-[2px] after:bg-primary"
    : "text-white";
};
</script>

<template>
  <div
    class="fixed top-0 left-0 z-50 h-20 w-full font-semibold flex justify-center items-center space-x-16"
  >
    <NuxtLink
      :to="{ path: route.path, hash: '' }"
      class="relative px-2 hover:text-primary"
      :class="getLinkClass('')"
    >
      Home
    </NuxtLink>
    <NuxtLink
      :to="{ path: route.path, hash: '#about' }"
      class="relative px-2 hover:text-primary"
      :class="getLinkClass('#about')"
      id="about"
    >
      About
    </NuxtLink>
    <NuxtLink
      :to="{ path: route.path, hash: '#project' }"
      class="relative px-2 hover:text-primary"
      :class="getLinkClass('#project')"
    >
      Project
    </NuxtLink>
    <NuxtLink
      :to="{ path: route.path, hash: '#resume' }"
      class="relative px-2 hover:text-primary"
      :class="getLinkClass('#resume')"
    >
      Resume
    </NuxtLink>
    <NuxtLink
      :to="{ path: route.path, hash: '#contact' }"
      class="relative px-2 hover:text-primary"
      :class="getLinkClass('#contact')"
    >
      Contact
    </NuxtLink>
  </div>
</template>
