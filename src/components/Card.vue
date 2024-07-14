<script setup lang="ts">
    import { useMouseInElement, templateRef } from '@vueuse/core';
    import ArrowRight from './icons/ArrowRight.vue';

    const { title, link } = defineProps<{ title: string; link: string }>();
    const target = templateRef<HTMLElement | null>('target');

    const { x, y, isOutside } = useMouseInElement(target);

    function resetStyle() {
        if (target.value) target.value.style.removeProperty('transform');
    }

    function handleMouseMove(e) {
        if (!target.value || isOutside.value) return;

        const { left, top, width, height } =
            target.value.getBoundingClientRect();

        const localX = (x.value - left - width / 2) / 20;
        const localY = (y.value - top - height / 2) / 10;

        target.value.style.transform = `rotateY(${localX}deg) rotateX(${localY}deg)`;
    }
</script>

<template>
    <div style="perspective: 1000px">
        <div
            class="p-0.5 rounded bg-none hover:bg-teal-400 transition duration-200 ease-linear transform-gpu group w-full"
            @mouseleave="resetStyle"
            @mousemove="handleMouseMove"
            ref="target"
        >
            <div
                class="rounded p-4 bg-black cursor-default hover:bg-gray-900 text-gray-500 group-hover:text-white"
            >
                <div>
                    <span class="text-xl font-bold block pb-2">{{
                        title
                    }}</span>
                    <p class="text-sm italic">
                        <slot />
                    </p>

                    <a
                        class="text-inherit group-hover:text-teal-500 underline-offset-4 no-underline group-hover:underline group/link"
                        :href="link"
                        ><ArrowRight
                            class="inline-block mr-2 group-hover/link:mr-1 transition-all"
                        />Go there
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
