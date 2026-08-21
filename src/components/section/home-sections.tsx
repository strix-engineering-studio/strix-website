"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { ContactForm } from "@/components/contact/contact-form";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/heading";
import {
  blogTopics,
  contactCategories,
  featuredProjects,
  heroStats,
  services,
  testimonials,
} from "@/lib/site";

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const faqItems = [
  {
    question: "What kinds of engagements fit best?",
    answer:
      "We work best on product systems, platform upgrades, internal tools, and AI-enabled workflows where the team needs clarity and steady delivery.",
  },
  {
    question: "Do you work with existing products?",
    answer:
      "Yes. A large part of the work is improving what already exists, simplifying the experience, and reducing technical drag.",
  },
  {
    question: "How do you start a project?",
    answer:
      "Most projects begin with a short discovery pass, a practical plan, and a focused delivery path that keeps the scope realistic.",
  },
  {
    question: "Can you support the product after launch?",
    answer:
      "Yes. We often stay involved for iteration, reliability work, and the steady improvements that keep a product healthy over time.",
  },
];

function Surface({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Card
      className={`${className} rounded border border-black/10 dark:border-white/10`}
    >
      {children}
    </Card>
  );
}

function MiniTag({ children }: { children: ReactNode }) {
  return <Badge>{children}</Badge>;
}

export function HeroSection() {
  const focusAreas = [
    "Architecture that stays clear as the product grows",
    "Delivery that is calm, visible, and scoped",
    "Support that continues after launch",
  ];

  const engagementSteps = ["Discovery", "Design", "Delivery"];

  return (
    <section
      className="
        relative
        overflow-hidden
        px-3
        pb-14
        pt-8
        sm:px-4
        sm:pb-16
        lg:px-6
        lg:pb-20
        lg:pt-12
      "
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-16">
          {/* ================================================================ */}
          {/* Left / Primary Message                                            */}
          {/* ================================================================ */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="max-w-4xl"
          >
            {/* Eyebrow */}
            <motion.div variants={fade} className="flex items-center gap-3">
              <span className="h-px w-7 bg-primary" />

              <p
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.32em]
                  text-primary
                "
              >
                STRIX · Engineering Studio
              </p>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={fade}
              className="
                mt-6
                max-w-4xl
                text-balance
                font-sans
                text-[2.7rem]
                font-semibold
                leading-[0.98]
                tracking-[-0.045em]
                text-foreground
                sm:text-5xl
                md:text-6xl
                lg:text-[5.6rem]
                xl:text-[6.2rem]
              "
            >
              Build the{" "}
              <span className="font-display font-normal italic">
                right system
              </span>{" "}
              before building the software.
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fade}
              className="
                mt-7
                max-w-2xl
                text-pretty
                text-base
                leading-8
                text-foreground/65
                sm:text-lg
              "
            >
              We help startups and product teams shape clear systems, ship with
              confidence, and keep building without unnecessary complexity.
            </motion.p>

            {/* Actions */}
            <motion.div variants={fade} className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded
                  bg-primary
                  px-5
                  py-3
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-primary-foreground
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-primary/90
                "
              >
                Start a project
                <ArrowUpRight
                  className="
                    size-4
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>

              <Link
                href="/#selected-systems"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded
                  border
                  border-black/10
                  bg-background/60
                  px-5
                  py-3
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-foreground/70
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-primary/30
                  hover:bg-primary/5
                  hover:text-foreground
                  dark:border-white/10
                "
              >
                Review work
                <ArrowUpRight
                  className="
                    size-4
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>
            </motion.div>

            {/* ============================================================ */}
            {/* System Stats                                                   */}
            {/* ============================================================ */}

            <motion.div
              variants={fade}
              className="
                mt-10
                grid
                max-w-2xl
                grid-cols-3
                border-y
                border-black/10
                dark:border-white/10
              "
            >
              {heroStats.slice(0, 3).map((item, index) => (
                <div
                  key={item.label}
                  className="
                    group
                    relative
                    px-3
                    py-5
                    sm:px-4
                  "
                >
                  {/* Vertical divider */}
                  {index > 0 && (
                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        left-0
                        top-1/2
                        h-8
                        w-px
                        -translate-y-1/2
                        bg-border
                      "
                    />
                  )}

                  {/* Index */}
                  <p
                    className="
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      text-foreground/25
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  {/* Label */}
                  <p
                    className="
                      mt-3
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.22em]
                      text-foreground/40
                    "
                  >
                    {item.label}
                  </p>

                  {/* Value */}
                  <p
                    className="
                      mt-1.5
                      text-xl
                      font-semibold
                      tracking-[-0.02em]
                      text-foreground
                      sm:text-2xl
                    "
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ================================================================ */}
          {/* Right / System Panel                                              */}
          {/* ================================================================ */}

          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            {/* Corner markers */}
            <span
              aria-hidden="true"
              className="
                absolute
                -left-1
                -top-1
                h-5
                w-5
                border-l
                border-t
                border-primary/50
              "
            />

            <span
              aria-hidden="true"
              className="
                absolute
                -right-1
                -top-1
                h-5
                w-5
                border-r
                border-t
                border-primary/50
              "
            />

            <span
              aria-hidden="true"
              className="
                absolute
                -bottom-1
                -left-1
                h-5
                w-5
                border-b
                border-l
                border-primary/50
              "
            />

            <span
              aria-hidden="true"
              className="
                absolute
                -bottom-1
                -right-1
                h-5
                w-5
                border-b
                border-r
                border-primary/50
              "
            />

            <div
              className="
                overflow-hidden
                rounded-[14px]
                border
                border-black/10
                bg-background/60
                dark:border-white/10
              "
            >
              {/* Panel Header */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-black/10
                  px-5
                  py-4
                  dark:border-white/10
                "
              >
                <div className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-primary" />

                  <span
                    className="
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-foreground/45
                    "
                  >
                    System / Architecture
                  </span>
                </div>

                <span
                  className="
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-foreground/25
                  "
                >
                  001
                </span>
              </div>

              {/* Focus */}
              <div className="p-5 sm:p-6">
                <p
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.3em]
                    text-primary
                  "
                >
                  What we focus on
                </p>

                <div className="mt-5">
                  {focusAreas.map((item, index) => (
                    <div
                      key={item}
                      className="
                        group
                        flex
                        gap-4
                        border-b
                        border-black/10
                        py-4
                        last:border-b-0
                        dark:border-white/10
                      "
                    >
                      {/* Number */}
                      <span
                        className="
                          shrink-0
                          pt-0.5
                          font-mono
                          text-[8px]
                          tracking-[0.2em]
                          text-foreground/25
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Line */}
                      <span
                        className="
                          mt-2
                          h-px
                          w-5
                          shrink-0
                          bg-border
                          transition-colors
                          duration-300
                          group-hover:bg-primary
                        "
                      />

                      {/* Text */}
                      <p
                        className="
                          text-sm
                          leading-6
                          text-foreground/65
                          transition-colors
                          duration-300
                          group-hover:text-foreground
                        "
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* ======================================================== */}
                {/* Engagement                                                 */}
                {/* ======================================================== */}

                <div className="mt-6 border-t border-black/10 pt-5 dark:border-white/10">
                  <div className="flex items-center justify-between">
                    <p
                      className="
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.28em]
                        text-foreground/40
                      "
                    >
                      Typical engagement
                    </p>

                    <span
                      className="
                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.2em]
                        text-foreground/20
                      "
                    >
                      03 STAGES
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-3">
                    {engagementSteps.map((step, index) => (
                      <div
                        key={step}
                        className="
                          relative
                          border-r
                          border-black/10
                          px-3
                          py-2
                          first:pl-0
                          last:border-r-0
                          last:pr-0
                          dark:border-white/10
                        "
                      >
                        <span
                          className="
                            block
                            font-mono
                            text-[8px]
                            tracking-[0.2em]
                            text-primary
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className="
                            mt-2
                            block
                            text-[9px]
                            font-medium
                            uppercase
                            tracking-[0.14em]
                            text-foreground/55
                          "
                        >
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Panel Footer */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-t
                  border-black/10
                  bg-foreground/[0.02]
                  px-5
                  py-3
                  dark:border-white/10
                "
              >
                <span
                  className="
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.24em]
                    text-foreground/25
                  "
                >
                  System Before Software
                </span>

                <span
                  className="
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-foreground/20
                  "
                >
                  STRIX / 2026
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export function SystemsStrip() {
  return (
    <section id="systems" className="px-3 py-3 sm:px-4 lg:px-6">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          overflow-hidden
          rounded-[14px]
          border
          border-black/10
          bg-background/50
          dark:border-white/10
        "
      >
        {heroStats.map((item, index) => (
          <div
            key={item.label}
            className="
              group
              relative
              min-h-[108px]
              border-b
              border-black/10
              px-4
              py-5
              transition-colors
              hover:bg-primary/[0.035]
              dark:border-white/10
              sm:px-5
              lg:border-b-0
              lg:border-r
              lg:last:border-r-0
            "
          >
            {/* Technical corner */}
            <span
              aria-hidden="true"
              className="
                absolute
                right-0
                top-0
                h-3
                w-3
                border-r
                border-t
                border-primary/0
                transition-colors
                duration-300
                group-hover:border-primary/50
              "
            />

            {/* Index */}
            <div className="flex items-center justify-between">
              <span
                className="
                  font-mono
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-foreground/25
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-foreground/10
                  transition-colors
                  duration-300
                  group-hover:bg-primary
                "
              />
            </div>

            {/* Label */}
            <p
              className="
                mt-4
                text-[9px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-foreground/45
                transition-colors
                duration-300
                group-hover:text-primary
              "
            >
              {item.label}
            </p>

            {/* Value */}
            <p
              className="
                mt-2
                text-xl
                font-semibold
                tracking-[-0.02em]
                text-foreground
                sm:text-2xl
              "
            >
              {item.value}
            </p>

            {/* Bottom signal */}
            <span
              aria-hidden="true"
              className="
                absolute
                bottom-0
                left-0
                h-px
                w-0
                bg-primary
                transition-all
                duration-500
                group-hover:w-1/2
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export function SelectedSystemsSection() {
  return (
    <section
      id="selected-systems"
      className="px-3 py-16 sm:px-4 lg:px-6 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* ================================================================ */}
        {/* Section Header                                                     */}
        {/* ================================================================ */}

        <SectionHeading
          eyebrow="Selected systems"
          title="Focused work, built for real product needs."
          description="Each engagement stays practical: clear decisions, measurable momentum, and a system that is easier to evolve."
        />

        {/* ================================================================ */}
        {/* Project List                                                       */}
        {/* ================================================================ */}

        <div className="mt-10">
          {featuredProjects.slice(0, 2).map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                group
                relative
                overflow-hidden
                border-t
                border-black/10
                py-8
                dark:border-white/10
                lg:py-10
              "
            >
              {/* ========================================================== */}
              {/* Hover Accent                                                 */}
              {/* ========================================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  left-0
                  w-px
                  bg-primary
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              <div className="grid gap-8 lg:grid-cols-[72px_minmax(0,1fr)_260px] lg:gap-10">
                {/* ======================================================== */}
                {/* Index                                                       */}
                {/* ======================================================== */}

                <div className="hidden lg:block">
                  <span
                    className="
                      font-mono
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.22em]
                      text-foreground/25
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div
                    aria-hidden="true"
                    className="
                      mt-4
                      h-8
                      w-px
                      bg-border
                      transition-colors
                      duration-300
                      group-hover:bg-primary/40
                    "
                  />
                </div>

                {/* ======================================================== */}
                {/* Main Project Content                                        */}
                {/* ======================================================== */}

                <div>
                  {/* Mobile index + category */}
                  <div className="flex items-center gap-3 lg:hidden">
                    <span
                      className="
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.2em]
                        text-foreground/25
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-px w-5 bg-primary/50" />

                    <span
                      className="
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.28em]
                        text-primary
                      "
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Category */}
                  <p
                    className="
                      hidden
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.32em]
                      text-primary
                      lg:block
                    "
                  >
                    {project.category}
                  </p>

                  {/* Title */}
                  <h3
                    className="
                      mt-3
                      max-w-3xl
                      text-3xl
                      font-semibold
                      leading-[1.05]
                      tracking-[-0.035em]
                      text-foreground
                      transition-colors
                      duration-300
                      group-hover:text-primary
                      sm:text-4xl
                      lg:text-5xl
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p
                    className="
                      mt-4
                      max-w-2xl
                      text-sm
                      leading-7
                      text-foreground/65
                      sm:text-base
                    "
                  >
                    {project.summary}
                  </p>

                  {/* Architecture */}
                  <div className="mt-6">
                    <p
                      className="
                        mb-3
                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.25em]
                        text-foreground/30
                      "
                    >
                      Architecture
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.architecture.slice(0, 4).map((item) => (
                        <MiniTag key={item}>{item}</MiniTag>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ======================================================== */}
                {/* Project Metadata                                            */}
                {/* ======================================================== */}

                <div className="lg:border-l lg:border-black/10 lg:pl-8 lg:dark:border-white/10">
                  {/* Timeline */}
                  <div>
                    <p
                      className="
                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.25em]
                        text-foreground/30
                      "
                    >
                      Engagement
                    </p>

                    <p className="mt-2 text-sm font-medium text-foreground">
                      {project.timeline}
                    </p>

                    <p className="mt-1 text-xs text-foreground/50">
                      {project.spotlight}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px bg-border" />

                  {/* Metrics */}
                  <div>
                    <p
                      className="
                        mb-3
                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.25em]
                        text-foreground/30
                      "
                    >
                      System signals
                    </p>

                    <div className="space-y-2">
                      {project.metrics.map((metric, metricIndex) => (
                        <div
                          key={metric}
                          className="
                            flex
                            items-start
                            gap-3
                            text-sm
                            leading-6
                            text-foreground/65
                          "
                        >
                          <span
                            className="
                              mt-2
                              size-1
                              shrink-0
                              rounded-full
                              bg-primary/60
                            "
                          />

                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ========================================================== */}
              {/* Bottom Technical Rail                                        */}
              {/* ========================================================== */}

              <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-4 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <span
                    className="
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.24em]
                      text-foreground/25
                    "
                  >
                    SYSTEM / {String(index + 1).padStart(3, "0")}
                  </span>

                  <span className="h-px w-8 bg-border" />

                  <span
                    className="
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.24em]
                      text-foreground/25
                    "
                  >
                    STRIX ENGINEERING STUDIO
                  </span>
                </div>

                <span
                  aria-hidden="true"
                  className="
                    font-mono
                    text-[10px]
                    text-foreground/20
                    transition-colors
                    duration-300
                    group-hover:text-primary
                  "
                >
                  →
                </span>
              </div>
            </motion.article>
          ))}

          {/* Bottom border */}
          <div className="h-px bg-black/10 dark:bg-white/10" />
        </div>
      </div>
    </section>
  );
}
export function CapabilityMapSection() {
  return (
    <section id="capabilities" className="px-3 py-16 sm:px-4 lg:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* ================================================================ */}
        {/* Section Header                                                     */}
        {/* ================================================================ */}

        <SectionHeading
          eyebrow="Capabilities"
          title="A practical map of the work."
          description="The focus stays on the essentials: clear architecture, strong delivery, and support that lasts beyond launch."
        />

        {/* ================================================================ */}
        {/* Capability Map                                                     */}
        {/* ================================================================ */}

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          {/* ============================================================ */}
          {/* Introduction / Map                                            */}
          {/* ============================================================ */}

          <div className="relative">
            {/* Vertical engineering line */}
            <div
              aria-hidden="true"
              className="
                absolute
                left-0
                top-0
                h-full
                w-px
                bg-border
              "
            />

            <div className="pl-6 sm:pl-8">
              {/* Metadata */}
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-primary" />

                <p
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.28em]
                    text-foreground/40
                  "
                >
                  Delivery map
                </p>
              </div>

              {/* Heading */}
              <h3
                className="
                  mt-5
                  max-w-xl
                  text-3xl
                  font-semibold
                  leading-[1.05]
                  tracking-[-0.035em]
                  text-foreground
                  sm:text-4xl
                "
              >
                The work is modular, but the system still feels cohesive.
              </h3>

              {/* Description */}
              <p
                className="
                  mt-5
                  max-w-lg
                  text-sm
                  leading-7
                  text-foreground/65
                  sm:text-base
                "
              >
                We keep the engagement focused so the team can move quickly
                without losing structure or quality.
              </p>

              {/* Capability tags */}
              <div className="mt-7">
                <p
                  className="
                    mb-3
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.25em]
                    text-foreground/30
                  "
                >
                  Engagement areas
                </p>

                <div className="flex flex-wrap gap-2">
                  {contactCategories.map((item) => (
                    <MiniTag key={item}>{item}</MiniTag>
                  ))}
                </div>
              </div>

              {/* Technical marker */}
              <div className="mt-10 flex items-center gap-3">
                <span
                  className="
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.25em]
                    text-foreground/25
                  "
                >
                  STRIX / CAPABILITY MAP
                </span>

                <span className="h-px w-10 bg-border" />
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* Services                                                       */}
          {/* ============================================================ */}

          <div>
            <div
              className="
                overflow-hidden
                rounded-[14px]
                border
                border-black/10
                dark:border-white/10
              "
            >
              {services.slice(0, 4).map((service, index) => (
                <div
                  key={service.title}
                  className="
                    group
                    relative
                    border-b
                    border-black/10
                    px-5
                    py-6
                    transition-colors
                    duration-300
                    last:border-b-0
                    hover:bg-primary/[0.035]
                    dark:border-white/10
                  "
                >
                  {/* Active accent */}
                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-px
                      bg-primary
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                  <div className="flex gap-5">
                    {/* Number */}
                    <div className="w-7 shrink-0 pt-0.5">
                      <span
                        className="
                          font-mono
                          text-[9px]
                          tracking-[0.2em]
                          text-foreground/25
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Service */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <p
                          className="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-foreground
                            transition-colors
                            duration-300
                            group-hover:text-primary
                            sm:text-[15px]
                          "
                        >
                          {service.title}
                        </p>

                        <span
                          aria-hidden="true"
                          className="
                            shrink-0
                            font-mono
                            text-[10px]
                            text-foreground/15
                            transition-colors
                            duration-300
                            group-hover:text-primary
                          "
                        >
                          +
                        </span>
                      </div>

                      <p
                        className="
                          mt-3
                          max-w-2xl
                          text-sm
                          leading-7
                          text-foreground/60
                        "
                      >
                        {service.summary}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom rail */}
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />

                <span
                  className="
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.25em]
                    text-foreground/30
                  "
                >
                  Architecture / Delivery / Evolution
                </span>
              </div>

              <span
                className="
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.2em]
                  text-foreground/25
                "
              >
                {String(Math.min(services.length, 4)).padStart(2, "0")}{" "}
                CAPABILITIES
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PhilosophySection() {
  return (
    <section className="px-3 py-14 sm:px-4 lg:px-6 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="rounded-[18px] border border-black/10 bg-background/70 p-6 shadow-[0_8px_30px_rgba(11,11,10,0.03)] dark:border-white/10">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-foreground/55">
            Engineering philosophy
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.02em] text-foreground sm:text-5xl">
            We think in systems, not features.
          </h2>
          <p className="mt-4 text-sm leading-7 text-foreground/70">
            Good products feel simple because the thinking behind them is clear
            from the start.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary-foreground transition hover:-translate-y-0.5"
          >
            Start a discovery session
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            [
              "Structured systems",
              "Clear relationships, fewer surprises, and interfaces that stay understandable as the product evolves.",
            ],
            [
              "Reliable delivery",
              "Scoped releases, visible progress, and a pace that leaves room for quality.",
            ],
            [
              "Technical clarity",
              "Tradeoffs are discussed early and the implementation stays maintainable.",
            ],
            [
              "Long-term support",
              "The relationship continues beyond launch when the product needs steady refinement.",
            ],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-[12px] border border-black/10 bg-background/70 px-5 py-5 dark:border-white/10"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/45">
                Principle
              </p>
              <h3 className="mt-3 text-xl font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-foreground/70">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="px-3 py-14 sm:px-4 lg:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by teams that value clarity."
          description="Short signals from clients who wanted a calmer process and a stronger foundation."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {testimonials.slice(0, 2).map((testimonial) => {
            const initials = testimonial.name
              .split(" ")
              .map((part) => part[0])
              .join("");

            return (
              <div
                key={testimonial.name}
                className="rounded-[16px] border border-black/10 bg-background/70 p-5 dark:border-white/10"
              >
                <p className="text-sm leading-7 text-foreground/80">
                  “{testimonial.quote}”
                </p>
                <div className="mt-6 flex items-center gap-4 border-t border-black/10 pt-4 dark:border-white/10">
                  <div className="flex size-10 items-center justify-center rounded-full border border-black/10 bg-background/80 text-xs font-semibold uppercase tracking-[0.2em] text-foreground dark:border-white/10">
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-foreground/60">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function InsightsSection() {
  return (
    <section id="insights" className="px-3 py-14 sm:px-4 lg:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-8">
        <SectionHeading
          eyebrow="Insights"
          title="Short notes from the work itself."
          description="The writing stays close to the practice: practical thinking, useful patterns, and a few clear takeaways."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {blogTopics.slice(0, 2).map((topic, index) => (
            <div
              key={topic.title}
              className="overflow-hidden rounded-[16px] border border-black/10 bg-background/70 dark:border-white/10"
            >
              <div className="h-36 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.35))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]" />
              <div className="space-y-3 px-5 py-5">
                <p className="text-[10px] uppercase tracking-[0.32em] text-foreground/45">
                  0{index + 1}
                </p>
                <h3 className="text-xl font-semibold text-foreground">
                  {topic.title}
                </h3>
                <p className="text-sm leading-7 text-foreground/70">
                  {topic.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="px-3 py-14 sm:px-4 lg:px-6 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-foreground/55">
            FAQ
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.02em] text-foreground sm:text-5xl">
            A few clear answers.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-foreground/70">
            A simple way to understand the fit, the process, and what working
            together looks like.
          </p>
        </div>
        <div className="space-y-3">
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="rounded-[12px] border border-black/10 bg-background/70 px-5 py-4 dark:border-white/10"
            >
              <p className="text-base font-medium text-foreground">
                {item.question}
              </p>
              <p className="mt-2 text-sm leading-7 text-foreground/70">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="px-3 py-14 sm:px-4 lg:px-6 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="rounded-[18px] border border-black/10 bg-background/70 p-6 shadow-[0_8px_30px_rgba(11,11,10,0.03)] dark:border-white/10 lg:sticky lg:top-28">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-foreground/55">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.02em] text-foreground sm:text-5xl">
            Start a focused conversation.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-foreground/70">
            Send a short note with what you are building, what is feeling
            difficult, and what kind of support would help most.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {contactCategories.map((item) => (
              <MiniTag key={item}>{item}</MiniTag>
            ))}
          </div>
          <a
            href="mailto:hello@strix.com"
            className="mt-6 inline-flex items-center gap-2 rounded bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary-foreground transition hover:-translate-y-0.5"
          >
            hello@strix.com
            <Mail className="size-4" />
          </a>
        </div>
        <Surface className="overflow-hidden p-4 sm:p-5 lg:p-6">
          <div className="mb-5 grid gap-3 sm:grid-cols-3">
            {[
              ["< 48h", "Typical response"],
              ["1 pass", "Discovery review"],
              ["3 tracks", "Systems, support, launch"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-[10px] border border-black/10 bg-background/80 px-4 py-4 dark:border-white/10"
              >
                <p className="text-2xl font-semibold text-foreground">
                  {value}
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-foreground/45">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <ContactForm />
        </Surface>
      </div>
    </section>
  );
}
