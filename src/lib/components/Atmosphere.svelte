<script lang="ts">
  import { onMount } from 'svelte';

  interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
  }

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const supportsFinePointer = window.matchMedia('(pointer: fine)');

    if (prefersReducedMotion.matches || !supportsFinePointer.matches) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let frameId = 0;

    const syncCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    syncCanvasSize();

    const particles: Particle[] = [];
    const particleCount = width < 768 ? 16 : 35;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.3 + 0.1
      });
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 148, 58, ${p.opacity})`;
        ctx.fill();
      });

      frameId = requestAnimationFrame(animate);
    }

    const startAnimation = () => {
      if (frameId !== 0) return;
      animate();
    };

    const stopAnimation = () => {
      if (frameId === 0) return;
      cancelAnimationFrame(frameId);
      frameId = 0;
    };

    startAnimation();

    const handleResize = () => {
      syncCanvasSize();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        startAnimation();
      } else {
        stopAnimation();
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stopAnimation();
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  });
</script>

<canvas
  bind:this={canvas}
  class="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-40"
></canvas>

<div class="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
  <!-- Saturated Light Leaks -->
  <div class="absolute -top-[10%] -left-[10%] h-[50%] w-[50%] animate-pulse rounded-full bg-slate-blue/15 blur-[120px]" style="animation-duration: 8s"></div>
  <div class="absolute top-[30%] -right-[5%] h-[40%] w-[40%] animate-pulse rounded-full bg-prestige-gold/10 blur-[100px]" style="animation-delay: 2s; animation-duration: 10s"></div>
  <div class="absolute -bottom-[10%] left-[15%] h-[45%] w-[45%] animate-pulse rounded-full bg-slate-blue/8 blur-[140px]" style="animation-delay: 4s; animation-duration: 12s"></div>
</div>

<style>
  @media (prefers-reduced-motion: reduce) {
    canvas, .animate-pulse {
      display: none;
    }
  }
</style>
