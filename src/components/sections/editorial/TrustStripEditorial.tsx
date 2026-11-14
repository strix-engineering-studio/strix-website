import Link from "next/link";

const clientWork = [
  { name: "Hugged", href: "/case-studies/hugged-parenting-platform" },
  { name: "Instameasure", href: "/case-studies/instameasure-water-bill-management" },
  { name: "Atmabhan", href: "/case-studies/atmabhan-spiritual-learning-app" },
  { name: "QR IoT Sensor POC", href: "/case-studies/qr-based-iot-sensor-monitoring-poc" },
];

const studioProducts = [
  { name: "H2Go", href: "/products/h2go" },
  { name: "MagicalStones", href: "/products/magicalstones-store" },
  { name: "Classes360", href: "/products/classes360" },
  { name: "Imrabo", href: "/products/imrabo" },
];

const technologies = ["Next.js", "Flutter", "NestJS", "Firebase", "TypeScript", "PostgreSQL"];

function ReferenceList({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-2">
      {items.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            className="text-sm font-medium text-foreground/80 underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function TrustStripEditorial() {
  return (
    <section aria-label="Project experience, industries, and technologies" className="border-b border-border bg-surface-warm">
      <div className="strix-container grid gap-6 py-7 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <h2 className="editorial-meta mb-3 text-muted-foreground">Client projects</h2>
          <ReferenceList items={clientWork} />
        </div>
        <div>
          <h2 className="editorial-meta mb-3 text-muted-foreground">Studio products</h2>
          <ReferenceList items={studioProducts} />
        </div>
        <div>
          <h2 className="editorial-meta mb-3 text-muted-foreground">Industry experience</h2>
          <ul className="flex flex-wrap gap-2 text-sm text-foreground/80">
            <li>Parenting & community</li>
            <li aria-hidden="true" className="text-border">/</li>
            <li>Utilities</li>
            <li aria-hidden="true" className="text-border">/</li>
            <li>Education</li>
            <li aria-hidden="true" className="text-border">/</li>
            <li>IoT</li>
          </ul>
        </div>
        <div>
          <h2 className="editorial-meta mb-3 text-muted-foreground">Technologies</h2>
          <p className="text-sm leading-relaxed text-foreground/80">
            {technologies.join(" · ")}
          </p>
        </div>
      </div>
    </section>
  );
}
