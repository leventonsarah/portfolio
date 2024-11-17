"use client";

import { LocationMarkerIcon } from '@heroicons/react/solid';

import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return <Component {...pageProps} />;
}

export default function Home() {
  const [currentTime, setCurrentTime] = useState(null);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col items-center gap-16 px-8 sm:px-20 py-16 font-[family-name:var(--font-geist-sans)]">
      <header className="text-center">
        <h1 className="text-6xl font-bold mb-4">Sarah Leventon</h1>
        <p className="text-lg text-gray-600 flex items-center justify-center mb-2">
          <LocationMarkerIcon className="w-5 h-5 text-gray-600 mr-2" />
          Montreal, QC
        </p>
        <a
          href="https://github.com/leventonsarah"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
      </header>

      <section className="max-w-prose text-center">
        <p className="text-base font-[family-name:var(--font-geist-mono)]">
          A third-year student in <strong className="font-bold">Computer Science Technology</strong> at LaSalle College
          seeking an internship to apply the skills and knowledge acquired
          throughout her studies.
        </p>
      </section>

      <section className="flex gap-4">
        <a
          href="/Sarah_Leventon_CV.pdf"
          download
          className="px-6 py-2 border rounded-lg bg-gray-900 text-white hover:bg-white hover:text-black transition"
        >
          Download my CV
        </a>
        <a
          href="mailto:leventonsarah@gmail.com"
          className="px-6 py-2 border rounded-lg bg-gray-900 text-white hover:bg-white hover:text-black transition"
        >
          Get in touch
        </a>
      </section>

      <hr className="w-full border-t border-gray-300" />

      <section className="flex flex-col gap-6 w-full max-w-3xl">
        <h2 className="text-4xl font-bold mb-4 text-center">Projects</h2>
        {[
          {
            title: "To-do App",
            description: "A simple and effective task management app.",
            link: "https://github.com/leventonsarah/todo-app",
          },
          {
            title: "LinkedIn Clone",
            description: "A modern clone of LinkedIn's interface.",
            link: "https://github.com/leventonsarah/linkedin-clone",
          },
          {
            title: "Real Estate Site",
            description: "A modern, responsive real estate website built with Next.js and Tailwind CSS.",
            link: "https://github.com/leventonsarah/realtor-website",
          },
        ].map(({ title, description, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg transition bg-white dark:bg-gray-800 hover:bg-gray-900 hover:text-white"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 hover:!text-white">
              {title}
            </h3>
            <p className="text-sm font-[family-name:var(--font-geist-mono)] text-gray-600 dark:text-gray-300 hover:!text-gray-300">
              {description}
            </p>
          </a>
        ))}
      </section>
      <section className="flex flex-col gap-6 w-full max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Languages</h2>
        <div className="grid gap-4">
          {[
            { language: "English", proficiency: "Native" },
            { language: "French", proficiency: "Native" },
            { language: "German", proficiency: "Fluent" },
            { language: "Spanish", proficiency: "Fluent" },
            { language: "Korean", proficiency: "Intermediate" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 px-4 rounded-lg transition bg-white dark:bg-gray-800"
            >
              <span className="text-lg font-medium text-gray-900 dark:text-white">{item.language}</span>
              <div className="flex-1 border-t border-gray-300 dark:border-gray-600 mx-4"></div>
              <span className="text-lg text-gray-500 dark:text-gray-400">{item.proficiency}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6 w-full max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Awards</h2>
        <div className="grid gap-4">
          {[
            {
              award: "Third Place",
              competition: "Elite International Music Competition",
              year: "2023",
            },
            {
              award: "First Place",
              competition: "Concours Inter-Élèves de l’EMVI",
              year: "2021",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 px-4 rounded-lg transition bg-white dark:bg-gray-800"
            >
              <div className="flex items-center">
                <span className="text-lg font-medium text-gray-900 dark:text-white">{item.award}</span>
                <div className="flex-1 border-t border-gray-300 dark:border-gray-600 mx-4"></div>
                <span className="text-lg text-gray-500 dark:text-gray-400">{item.competition}</span>
              </div>
              <div className="flex-1 border-t border-gray-300 dark:border-gray-600 mx-4"></div>
              <span className="text-lg text-gray-500 dark:text-gray-400">{item.year}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col w-full max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Contact</h2>
        <div className="space-y-2">
          {[
            {
              label: "Email",
              link: "mailto:leventonsarah@gmail.com",
              text: "leventonsarah@gmail.com",
            },
            {
              label: "Phone",
              text: "+1 (514) 713-0033",
            },
            {
              label: "LinkedIn",
              link: "http://www.linkedin.com/in/sarah-leventon-57130b330",
              text: "Connect",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-start gap-2 px-2 py-1 rounded-lg transition bg-white dark:bg-gray-800"
            >
              <span className="text-lg font-medium text-gray-900 dark:text-white">{item.label}:</span>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {item.text}
                </a>
              ) : (
                <span className="text-lg text-gray-500 dark:text-gray-400">{item.text}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-white text-center p-4 mt-auto rounded-lg">
        <div className="text-lg font-medium">
          <p>My time:</p>
          <p className="text-4xl font-mono">{currentTime}</p>
          <p className="text-sm">{new Date().toLocaleDateString()}</p>
        </div>
      </footer>
    </div>
  );
}

