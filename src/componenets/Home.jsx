import React from "react";
import { motion } from "framer-motion";
import { DiBootstrap, DiCss3, DiHtml5, DiMysql, DiNodejsSmall,DiPhp,DiReact, DiSqllite  } from "react-icons/di";
// import { FaReact, FaAngular, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt } from "react-icons/fa";
// import { SiMongodb, SiTailwindcss, SiJavascript } from "react-icons/si";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { DiAngularSimple, DiJavascript, DiMongodb, DiPython } from "react-icons/di";

export default function Home() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 40 },
            size: { value: 4 },
            move: { enable: true, speed: 1 },
            links: { enable: true, opacity: 0.2 },
          },
        }}
        className="absolute inset-0"
      />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-28">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Hi, I'm <span className="text-yellow-400">Shalini Rathore</span>
        </motion.h1>

        <p className="mt-4 max-w-3xl text-gray-300 text-lg">
          Full Stack Developer & Trainer with 12.5+ years of experience in MERN, MEAN, ASP.NET, PHP and modern web technologies.
          I build scalable applications and mentor future developers.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="/Projects" className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300">View Projects</a>
          <a href="/Resume" className="px-6 py-3 border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black">Download CV</a>
        </div>
      </section>

      {/* Tech Stack Floating Icons */}
      <section className="relative z-10 mt-20">
        <h2 className="text-center text-3xl font-semibold mb-10">Technologies I Work With</h2>
        <div className="flex flex-wrap justify-center gap-10 text-5xl text-yellow-400">
          <DiReact></DiReact>
          <DiNodejsSmall></DiNodejsSmall>
          <DiMongodb></DiMongodb>
          <DiAngularSimple></DiAngularSimple>
          <DiPython></DiPython>
          <DiJavascript></DiJavascript>
          <DiBootstrap></DiBootstrap>
          <DiHtml5></DiHtml5>
          <DiSqllite></DiSqllite>
          <DiMysql></DiMysql>
          <DiCss3></DiCss3>
          <DiPhp></DiPhp>
          {/* <FaReact />
          <FaAngular />
          <FaNodeJs />
          <SiMongodb />
          <SiJavascript />
          <FaHtml5 />
          <FaCss3Alt />
          <SiTailwindcss />
          <FaDatabase /> */}
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative z-10 mt-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Professional Summary</h2>
        <ul className="space-y-4 text-gray-300 list-disc list-inside">
          <li>12.5+ years of IT exp erience as Full Stack Developer & Corporate Trainer</li>
          <li>Trainer at Promise Academy, Ahmedabad</li>
          <li>Conducted trainings for IBM, TCS iON, APTECH, AISECT and international learners</li>
          <li>Developed enterprise-level web and software solutions</li>
        </ul>
      </section>

      {/* Footer CTA */}
      <section className="relative z-10 mt-24 pb-20 text-center">
        <h2 className="text-3xl font-semibold">Let's Build Something Amazing</h2>
        <p className="text-gray-400 mt-2">Available for training, consulting and development projects</p>
      </section>
    </div>
  );
}
