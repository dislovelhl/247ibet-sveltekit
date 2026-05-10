<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  let canvas: HTMLCanvasElement;
  let animationFrame: number;

  onMount(() => {
    if (!browser) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: any[] = [];
    const particleCount = 20; // Reduced count for luxury, minimal CPU load

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.2 + 0.05,
        blur: Math.random() > 0.8 ? 2 : 0 // Depth effect
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
        if (p.blur > 0) {
          ctx.filter = `blur(${p.blur}px)`;
        } else {
          ctx.filter = 'none';
        }
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 148, 58, ${p.opacity})`;
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrame);
    };
  });
</script>

<canvas
  bind:this={canvas}
  class="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-30"
></canvas>

<div class="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
  <div class="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] animate-pulse rounded-full bg-prestige-gold/5 blur-[120px]"></div>
  <div class="absolute top-[40%] -right-[5%] h-[30%] w-[30%] animate-pulse rounded-full bg-slate-blue/5 blur-[100px]" style="animation-delay: 2s"></div>
  <div class="absolute -bottom-[5%] left-[20%] h-[35%] w-[35%] animate-pulse rounded-full bg-prestige-gold/3 blur-[140px]" style="animation-delay: 4s"></div>
</div>

<style>
  @media (prefers-reduced-motion: reduce) {
    canvas, .animate-pulse {
      display: none !important;
    }
  }
</style>
