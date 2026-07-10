"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Compass, MapPin, Plane, Sparkles, Navigation } from "lucide-react";

export default function Hero3DVehicle() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for 3D tilting
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [12, -12]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-500, 500], [-18, 18]), { stiffness: 100, damping: 20 });
  const translateZ = useSpring(useTransform(mouseY, [-300, 300], [20, -10]), { stiffness: 100, damping: 20 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="w-full max-w-5xl mx-auto py-6 px-4 relative perspective-[1200px] select-none pointer-events-none sm:pointer-events-auto">
      {/* 3D Tilt Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          translateZ,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-52 sm:h-64 rounded-3xl overflow-hidden border border-white/20 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-950/90 shadow-2xl backdrop-blur-md transition-all duration-300"
      >
        {/* Glowing Horizon & Stars in 3D Depth */}
        <div 
          className="absolute inset-0 opacity-40" 
          style={{ transform: "translateZ(-80px)" }}
        >
          <div className="absolute top-4 left-1/4 w-2 h-2 rounded-full bg-cyan-300 animate-ping" />
          <div className="absolute top-10 right-1/3 w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
          <div className="absolute top-8 left-2/3 w-2 h-2 rounded-full bg-yellow-300 animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        </div>

        {/* 3D Flying Airplane with Trail in Sky */}
        <motion.div
          animate={{
            x: ["-20%", "120%"],
            y: [20, -15, 10],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transform: "translateZ(-40px)" }}
          className="absolute top-6 left-0 flex items-center gap-1.5 text-cyan-300/80"
        >
          <div className="w-24 sm:w-36 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-cyan-300" />
          <Plane className="h-5 w-5 transform rotate-45 text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
        </motion.div>

        {/* 3D Winding Road Perspective Track */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180%] sm:w-[140%] h-36 bg-gradient-to-t from-slate-950 via-slate-800/90 to-transparent border-t border-slate-700/50 shadow-inner"
          style={{
            transform: "rotateX(72deg) translateZ(-20px)",
            transformOrigin: "bottom center",
          }}
        >
          {/* Moving Lane Dashes (Simulating high speed motion) */}
          <div className="absolute inset-0 flex justify-center overflow-hidden">
            <div className="w-4 h-full border-x-2 border-dashed border-yellow-400/80 animate-road-move" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-2 bg-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
        </div>

        {/* Floating 3D Destination Signboards Passing By */}
        <motion.div
          animate={{ x: ["110%", "-110%"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          style={{ transform: "translateZ(10px)" }}
          className="absolute bottom-16 left-0 flex items-center gap-2 bg-slate-900/90 border border-emerald-500/40 px-3.5 py-1.5 rounded-xl shadow-lg text-xs font-bold text-emerald-300"
        >
          <MapPin className="h-3.5 w-3.5 text-emerald-400 animate-bounce" />
          <span>Next Stop: Kashmir Valley</span>
        </motion.div>

        <motion.div
          animate={{ x: ["110%", "-110%"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear", delay: 4.5 }}
          style={{ transform: "translateZ(10px)" }}
          className="absolute bottom-20 left-0 flex items-center gap-2 bg-slate-900/90 border border-cyan-500/40 px-3.5 py-1.5 rounded-xl shadow-lg text-xs font-bold text-cyan-300"
        >
          <Sparkles className="h-3.5 w-3.5 text-yellow-400 animate-spin-slow" />
          <span>Next Stop: Goa Beaches</span>
        </motion.div>

        {/* Main 3D Interactive Luxury SUV / Tempo Traveller */}
        <motion.div
          animate={{
            y: [0, -3, 0],
            rotateZ: [0, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transform: "translateZ(50px)" }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          {/* Headlights Glow Beams */}
          <div className="absolute -bottom-2 -left-24 w-32 h-12 bg-gradient-to-l from-yellow-200/40 via-yellow-300/10 to-transparent transform -rotate-12 blur-sm rounded-full pointer-events-none" />
          <div className="absolute -bottom-2 -right-24 w-32 h-12 bg-gradient-to-r from-yellow-200/40 via-yellow-300/10 to-transparent transform rotate-12 blur-sm rounded-full pointer-events-none" />

          {/* SUV Car Body SVG */}
          <div className="relative z-10 drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)]">
            <svg viewBox="0 0 240 100" className="w-48 sm:w-60 h-auto overflow-visible">
              {/* Car Shadow under body */}
              <ellipse cx="120" cy="88" rx="95" ry="10" fill="rgba(0,0,0,0.6)" className="blur-md" />
              
              {/* Roof & Cabin */}
              <path
                d="M 45 60 L 65 28 C 72 18, 160 18, 175 32 L 195 60 Z"
                fill="url(#cabinGradient)"
                stroke="#38bdf8"
                strokeWidth="1.5"
              />
              
              {/* Windows Glassmorphism */}
              <path
                d="M 68 34 C 74 24, 118 24, 122 34 L 122 55 L 56 55 Z"
                fill="rgba(14, 165, 233, 0.45)"
                stroke="#67e8f9"
                strokeWidth="1"
              />
              <path
                d="M 128 34 C 132 24, 166 26, 170 36 L 186 55 L 128 55 Z"
                fill="rgba(14, 165, 233, 0.45)"
                stroke="#67e8f9"
                strokeWidth="1"
              />

              {/* Lower Car Body (Luxury SUV) */}
              <path
                d="M 25 60 L 215 60 C 225 60, 230 68, 228 78 C 226 86, 218 88, 205 88 L 35 88 C 22 88, 14 86, 12 78 C 10 68, 15 60, 25 60 Z"
                fill="url(#bodyGradient)"
                stroke="#0284c7"
                strokeWidth="2"
              />

              {/* Maheshwari Brand Stripe on Side */}
              <path d="M 30 72 L 210 72" stroke="#10b981" strokeWidth="3" strokeDasharray="18 6" />

              {/* Headlights & Taillights */}
              <circle cx="222" cy="68" r="5" fill="#fef08a" className="animate-pulse" />
              <circle cx="18" cy="68" r="5" fill="#f87171" />

              {/* Wheels (Rotating with animation) */}
              <g className="animate-spin-fast origin-[60px_86px]">
                <circle cx="60" cy="86" r="16" fill="#1e293b" stroke="#94a3b8" strokeWidth="4" />
                <circle cx="60" cy="86" r="6" fill="#38bdf8" />
                <line x1="60" y1="70" x2="60" y2="102" stroke="#64748b" strokeWidth="2" />
                <line x1="44" y1="86" x2="76" y2="86" stroke="#64748b" strokeWidth="2" />
              </g>

              <g className="animate-spin-fast origin-[180px_86px]">
                <circle cx="180" cy="86" r="16" fill="#1e293b" stroke="#94a3b8" strokeWidth="4" />
                <circle cx="180" cy="86" r="6" fill="#38bdf8" />
                <line x1="180" y1="70" x2="180" y2="102" stroke="#64748b" strokeWidth="2" />
                <line x1="164" y1="86" x2="196" y2="86" stroke="#64748b" strokeWidth="2" />
              </g>

              {/* Gradients definition */}
              <defs>
                <linearGradient id="bodyGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="50%" stopColor="#1e3a8a" />
                  <stop offset="100%" stopColor="#0369a1" />
                </linearGradient>
                <linearGradient id="cabinGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Badge under car */}
          <div className="mt-1 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-[11px] font-bold text-white shadow-lg">
            <Navigation className="h-3 w-3 text-emerald-400 animate-pulse" />
            <span>Interactive 3D Travel Cruiser</span>
            <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded uppercase">Live</span>
          </div>
        </motion.div>

        {/* Corner Compass HUD Overlay */}
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-slate-900/80 border border-white/10 px-3 py-1.5 rounded-full text-[10px] font-bold text-slate-300 backdrop-blur-md">
          <Compass className="h-4 w-4 text-cyan-400 animate-spin-slow" />
          <span>Move cursor to tilt 3D view</span>
        </div>
      </motion.div>
    </div>
  );
}
