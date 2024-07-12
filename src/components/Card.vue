<script setup lang="ts">
    import { computed, ref, onMounted, watch } from 'vue';
    import { useMouseInElement, templateRef } from '@vueuse/core';

    const { title } = defineProps<{ title: string }>();
    const target = templateRef<HTMLElement | null>('target');

    const { x, y, isOutside } = useMouseInElement(target);

    function resetStyle(e) {
        e.target.style = '';
    }

    function handleMouseMove(e) {
        if (!target.value || isOutside.value) return;

        const { left, top, width, height } =
            target.value.getBoundingClientRect();

        const localX = (x.value - left - width / 2) / 25;
        const localY = (y.value - top - height / 2) / 25;

        e.target.style.transform = `rotateY(${localX}deg) rotateX(${localY}deg)`;
    }
</script>

<template>
    <div style="perspective: 300px" class="group">
        <div
            class="p-0.5 rounded bg-none hover:bg-teal-400 transition duration-300 ease-linear transform-gpu"
            @mouseleave="resetStyle"
            @mousemove="handleMouseMove"
            ref="target"
        >
            <div
                class="rounded p-4 bg-black cursor-default hover:bg-gray-900 text-gray-500 group-hover:text-white"
            >
                <div>
                    <span class="text-xl font-bold">{{ title }}</span>
                    <p class="text-sm">
                        <slot />
                    </p>

                    <a
                        href="#goto"
                        class="text-inherit group-hover:text-teal-500 underline-offset-4 no-underline group-hover:underline"
                        >Go there</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .bg-circle-gradient {
        background: radial-gradient(
            circle,
            rgba(242, 255, 126, 1) 0%,
            rgba(255, 255, 255, 1) 35%,
            rgba(127, 188, 242, 1) 68%,
            rgba(139, 92, 246, 1) 92%
        );
    }
</style>
