/*
 * SPDX-License-Identifier: MIT
 *
 * (c) 2025 blubitz
 */

function batsim(imgsrc, count = 10, boundEl = document.body, scale, random = true) {
    for (let i = 0; i < count; i++) {
        const r = Math.random, d = document, w = window;
        const img = d.createElement('img');
        const container = d.createElement('div');
        const cs = container.style;

        const { width, height } = boundEl.getBoundingClientRect()
        let x = width * r();
        let y = height * r();
        let size = (scale ?? 48);
        if (random) size += Math.floor(r() * 32); // random size variation

        cs.position = "fixed";
        cs.left = 0;
        cs.top = 0;
        cs.opacity = 0;
        container.appendChild(img);
        img.src = imgsrc ?? 'data:image/gif;base64,R0lGODlhMAAwAJECAAAAAEJCQv///////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJAQACACwAAAAAMAAwAAACdpSPqcvtD6NcYNpbr4Z5ewV0UvhRohOe5UE+6cq0carCgpzQuM3ut16zvRBAH+/XKQ6PvaQyCFs+mbnWlEq0FrGi15XZJSmxP8OTRj4DyWY1lKdmV8fyLL3eXOPn6D3f6BcoOEhYaHiImKi4yNjo+AgZKTl5WAAAIfkECQEAAgAsAAAAADAAMAAAAnyUj6nL7Q+jdCDWicF9G1vdeWICao05ciUVpkrZIqjLwCdI16s+5wfck+F8JOBiR/zZZAJk0mAsDp/KIHRKvVqb2KxTu/Vdvt/nGFs2V5Bpta3tBcKp8m5WWL/z5PpbtH/0B/iyNGh4iJiouMjY6PgIGSk5SVlpeYmZqVkAACH5BAkBAAIALAAAAAAwADAAAAJhlI+py+0Po5y02ouz3rz7D4biSJbmiabq6gCs4B5AvM7GTKv4buby7vsAbT9gZ4h0JYmZpXO4YEKeVCk0QkVUlw+uYovE8ibgaVBSLm1Pa3W194rL5/S6/Y7P6/f8vp9SAAAh+QQJAQACACwAAAAAMAAwAAACZZSPqcvtD6OctNqLs968+w+G4kiW5omm6ooALeCusAHHclyzQs3rOz9jAXuqIRFlPJ6SQWRSaIQOpUBqtfjEZpfMJqmrHIFtpbGze2ZywWu0aUwWEbfiZvQdD4sXuWUj7gPos1EAACH5BAkBAAIALAAAAAAwADAAAAJrlI+py+0Po5y02ouz3rz7D4ZiCIxUaU4Amjrr+rDg+7ojXTdyh+e7kPP0egjabGg0EIVImHLJa6KaUam1aqVynNNsUvPTQjO/J84cFA3RzlaJO2495TF63Y7P6/f8vv8PGCg4SFhoeIg4UQAAIfkEBQEAAgAsAAAAADAAMAAAAnaUj6nL7Q+jXGDaW6+GeXsFdFL4UaITnuVBPunKtHGqwoKc0LjN7rdes70QQB/v1ykOj72kMghbPpm51pRKtBaxoteV2SUpsT/Dk0Y+A8lmNZSnZlfH8iy93lzj5+g93+gXKDhIWGh4iJiouMjY6PgIGSk5eVgAADs=';
        img.width = size;
        img.height = size;
        boundEl.appendChild(container);

        let init = true

        function move() {
            const { width, height } = boundEl.getBoundingClientRect()
            const nx = Math.max(Math.min(x + (r() - 0.5) * 400, width - 50), 50);
            const ny = Math.max(Math.min(y + (r() - 0.5) * 400, height - 50), 50);
            const dx = nx - x;
            const dy = ny - y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Faster movement: base speed + random factor
            const minSpeed = 200; // pixels per second
            const maxSpeed = 300;
            const speed = minSpeed + r() * (maxSpeed - minSpeed);
            const duration = dist / speed; // duration in seconds

            if (!init) {
                cs.transition = `transform ${duration}s linear`;
            } else {
                cs.transition = `opacity 0.5s`;
                init = false
            }

            cs.transform  = `translate(calc(${nx}px - 50%), calc(${ny}px - 50%))`;
            img.style.transform = `scaleX(${dx < 0 ? -1 : 1})`;
            cs.opacity = 1;

            x = nx;
            y = ny;

            setTimeout(move, duration * 1000);
        }

        setTimeout(move, r() * 1000);
    }
}
