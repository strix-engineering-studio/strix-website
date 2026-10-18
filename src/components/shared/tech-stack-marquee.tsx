
"use client";

import { useEffect, useState } from "react";
import {
  SiDart,
  SiDocker,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenid,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Technology = {
  name: string;
  icon: IconType;
  category: string;
};

const techRows: Technology[][] = [
  [
    { name: "Flutter", icon: SiFlutter, category: "Mobile" },
    { name: "Dart", icon: SiDart, category: "Mobile" },
    { name: "React", icon: SiReact, category: "Frontend" },
    { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
    { name: "TypeScript", icon: SiTypescript, category: "Language" },
    { name: "JavaScript", icon: SiJavascript, category: "Language" },
    { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
  ],
  [
    { name: "Node.js", icon: SiNodedotjs, category: "Backend" },
    { name: "NestJS", icon: SiNestjs, category: "Backend" },
    { name: "Firebase", icon: SiFirebase, category: "Cloud" },
    { name: "Google Cloud", icon: SiGooglecloud, category: "Cloud" },
    { name: "MongoDB", icon: SiMongodb, category: "Database" },
    { name: "PostgreSQL", icon: SiPostgresql, category: "Database" },
    { name: "Prisma", icon: SiPrisma, category: "ORM" },
  ],
  [
    { name: "Python", icon: SiPython, category: "AI & Backend" },
    { name: "OpenAI", icon: SiOpenid, category: "AI" },
    { name: "Git", icon: SiGit, category: "Development" },
    { name: "GitHub", icon: SiGithub, category: "Development" },
    { name: "Docker", icon: SiDocker, category: "Infrastructure" },
  ],
];

function TechnologyCard({ technology }: { technology: Technology }) {
  const Icon = technology.icon;

  return (
    <div
      className="group flex p-2 shrink-0 items-center gap-3 rounded-none border border-border/80 bg-background/80  transition-colors duration-200 hover:border-primary/50 hover:bg-muted  sm:px-6"
      title={`${technology.name} — ${technology.category}`}
    >
      <Icon
        aria-hidden="true"
        className="h-5 w-5 shrink-0 text-foreground/65 transition-colors group-hover:text-primary sm:h-6 sm:w-6"
      />

      <div className="min-w-0">
        <p className="whitespace-nowrap text-sm font-medium tracking-tight">
          {technology.name}
        </p>
        
      </div>
    </div>
  );
}

export function TechStackMarquee() {
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionPreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  return (
    <section
      aria-labelledby="tech-stack-heading"
      className="overflow-hidden border-y border-border/70 py-16 sm:py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="mx-auto mb-9 max-w-7xl px-5 sm:px-8 lg:px-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
          Engineering toolkit
        </p>

        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="tech-stack-heading"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Technology behind our work.
          </h2>

          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            A selection of technologies used to build mobile applications,
            web platforms, backend systems, and cloud infrastructure.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {techRows.map((technologies, rowIndex) => {
          const direction = rowIndex === 1 ? "reverse" : "normal";

          return (
            <div
              key={rowIndex}
              className="relative overflow-hidden"
              aria-label={`Technology row ${rowIndex + 1}`}
            >
              <div
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent sm:w-16 lg:w-24"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent sm:w-16 lg:w-24"
                aria-hidden="true"
              />

              <div
                className="flex w-max gap-3 pr-3 motion-safe:animate-tech-marquee"
                style={{
                  animationDirection: direction,
                  animationDuration: `${Math.max(24, technologies.length * 5)}s`,
                  animationPlayState:
                    paused || reducedMotion ? "paused" : "running",
                }}
              >
                {[0, 1, 2, 3].map((copy) =>
                  technologies.map((technology) => (
                    <div
                      key={`${copy}-${technology.name}`}
                      aria-hidden={copy > 0 ? true : undefined}
                    >
                      <TechnologyCard technology={technology} />
                    </div>
                  )),
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
