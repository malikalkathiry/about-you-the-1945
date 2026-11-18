(() => {
  const canvas = document.getElementById("dust");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const isFine = window.matchMedia("(pointer: fine)").matches;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const COLOR = "253,224,71";
  const LIFE = 550;
  const MAX_WIDTH = 6;
  const MIN_DIST = 2;

  let w = 0, h = 0, dpr = 1;
  const points = [];
  const cursor = { x: -9999, y: -9999, radius: 4, targetR: 4, active: false };

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  window.addEventListener("pointermove", (e) => {
    const x = e.clientX, y = e.clientY;
    cursor.active = true;
    cursor.x = x;
    cursor.y = y;

    if (reduceMotion) return;
    const last = points[points.length - 1];
    if (last && Math.hypot(x - last.x, y - last.y) < MIN_DIST) return;
    points.push({ x, y, t: performance.now() });
  }, { passive: true });

  window.addEventListener("pointerdown", () => { cursor.targetR = 2.5; }, { passive: true });
  window.addEventListener("pointerup", () => { cursor.targetR = 4; }, { passive: true });
  window.addEventListener("pointerleave", () => { cursor.active = false; });
  window.addEventListener("resize", resize);

  function tick() {
    const now = performance.now();
    ctx.clearRect(0, 0, w, h);

    while (points.length && now - points[0].t > LIFE) {
      points.shift();
    }

    if (points.length > 1) {
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (let i = 1; i < points.length; i++) {
        const p0 = points[i - 1];
        const p1 = points[i];
        const age = now - p1.t;
        const lifeRatio = Math.max(0, 1 - age / LIFE);
        const mx = (p0.x + p1.x) * 0.5;
        const my = (p0.y + p1.y) * 0.5;
        const prevMx = i === 1 ? p0.x : (points[i - 2].x + p0.x) * 0.5;
        const prevMy = i === 1 ? p0.y : (points[i - 2].y + p0.y) * 0.5;

        ctx.beginPath();
        ctx.moveTo(prevMx, prevMy);
        ctx.quadraticCurveTo(p0.x, p0.y, mx, my);
        ctx.lineWidth = 0.8 + MAX_WIDTH * lifeRatio;
        ctx.strokeStyle = `rgba(${COLOR},${(0.8 * lifeRatio).toFixed(3)})`;
        ctx.stroke();
      }
    }

    if (isFine && cursor.active) {
      cursor.radius += (cursor.targetR - cursor.radius) * 0.25;

      ctx.beginPath();
      ctx.arc(cursor.x, cursor.y, cursor.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${COLOR},0.95)`;
      ctx.fill();
    }

    requestAnimationFrame(tick);
  }

  resize();
  requestAnimationFrame(tick);
})();
