import { motion } from "framer-motion";

const orbs = [
  { size: 320, top: "10%", left: "55%", color: "#2d6a4f", opacity: 0.55, duration: 8, delay: 0 },
  { size: 180, top: "55%", left: "75%", color: "#c9a227", opacity: 0.45, duration: 6, delay: 1.5 },
  { size: 120, top: "20%", left: "80%", color: "#40916c", opacity: 0.4, duration: 10, delay: 0.8 },
  { size: 90,  top: "70%", left: "60%", color: "#d4a017", opacity: 0.35, duration: 7, delay: 2 },
  { size: 60,  top: "35%", left: "90%", color: "#1b4332", opacity: 0.5, duration: 9, delay: 0.3 },
];

const rings = [
  { size: 380, top: "15%", left: "52%", border: "2px solid rgba(201,162,39,0.3)", duration: 20, delay: 0 },
  { size: 260, top: "28%", left: "62%", border: "1px solid rgba(64,145,108,0.25)", duration: 15, delay: 2 },
  { size: 500, top: "5%", left: "45%", border: "1px solid rgba(201,162,39,0.12)", duration: 25, delay: 1 },
];

const particles = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  top: `${Math.random() * 90 + 5}%`,
  left: `${Math.random() * 50 + 45}%`,
  duration: Math.random() * 4 + 4,
  delay: Math.random() * 3,
}));

export function ThreeScene() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Rotating rings */}
      {rings.map((ring, i) => (
        <motion.div
          key={`ring-${i}`}
          style={{
            position: "absolute",
            width: ring.size,
            height: ring.size,
            top: ring.top,
            left: ring.left,
            transform: "translate(-50%, -50%)",
            border: ring.border,
            borderRadius: "50%",
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: ring.duration, ease: "linear", delay: ring.delay }}
        />
      ))}

      {/* Glowing orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={`orb-${i}`}
          style={{
            position: "absolute",
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background: `radial-gradient(circle at 35% 35%, ${orb.color}cc, ${orb.color}44)`,
            opacity: orb.opacity,
            filter: "blur(8px)",
            boxShadow: `0 0 60px 20px ${orb.color}33`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: orb.duration,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={`particle-${p.id}`}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            borderRadius: "50%",
            background: "rgba(201, 162, 39, 0.7)",
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: p.duration,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {/* Central glow */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          top: "50%",
          left: "70%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(45,106,79,0.2) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
