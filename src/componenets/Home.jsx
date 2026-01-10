import React from "react";
import { motion } from "framer-motion";
import {
  DiBootstrap, DiCss3, DiHtml5, DiMysql, DiNodejsSmall,
  DiPhp, DiReact, DiSqllite, DiAngularSimple,
  DiJavascript, DiMongodb, DiPython
} from "react-icons/di";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Home() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-slate-100 overflow-hidden">

      {/* Particles */}
      <Particles
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 35 },
            size: { value: 3 },
            move: { enable: true, speed: 0.6 },
            opacity: { value: 0.3 },
            links: { enable: true, opacity: 0.15 },
          },
        }}
        className="absolute inset-0"
      />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-28">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Hi, I'm{" "}
          <span className="text-indigo-400">Shalini Rathore</span>
        </motion.h1>

        <p className="mt-5 max-w-3xl text-slate-300 text-lg leading-relaxed">
          Full Stack Developer & Trainer with <strong>12.5+ years</strong> of experience in
          MERN, MEAN, ASP.NET, PHP, and modern web technologies.
          I build scalable systems and mentor future developers.
        </p>

        <div className="mt-10 flex gap-5">
          <a
            href="/Projects"
            className="px-7 py-3 rounded-lg bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 transition"
          >
            View Projects
          </a>
          <a
            href="/Resume"
            className="px-7 py-3 rounded-lg border border-indigo-400 text-indigo-300 hover:bg-indigo-400 hover:text-slate-900 transition"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative z-10 mt-24">
        <h2 className="text-center text-3xl font-semibold mb-12 text-slate-200">
          Technologies I Work With
        </h2>

        <div className="flex flex-wrap justify-center gap-12 text-5xl text-indigo-300">
          {[DiReact, DiAngularSimple, DiNodejsSmall, DiMongodb, DiPython,
            DiJavascript, DiBootstrap, DiHtml5, DiCss3, DiMysql, DiSqllite, DiPhp]
            .map((Icon, i) => (
              <Icon
                key={i}
                className="hover:text-amber-400 transition transform hover:scale-110"
              />
            ))}
        </div>
      </section>

      {/* Summary */}
      <section className="relative z-10 mt-28 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-slate-200">
          Professional Summary
        </h2>
        <ul className="space-y-4 text-slate-300 list-disc list-inside">
          <li>12.5+ years of IT experience as Full Stack Developer & Corporate Trainer</li>
          <li>Currently working as Full Stack Trainer at Promise Academy, Ahmedabad</li>
          <li>Conducted trainings for IBM, TCS iON, APTECH, AISECT & global learners</li>
          <li>Designed and delivered enterprise-grade web & software solutions</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="relative z-10 mt-28 pb-20 text-center">
        <h2 className="text-3xl font-semibold text-slate-200">
          Let’s Build Something Impactful
        </h2>
        <p className="text-slate-400 mt-3">
          Available for training, consulting, and full-stack development
        </p>
      </section>

    </div>
  );
}
