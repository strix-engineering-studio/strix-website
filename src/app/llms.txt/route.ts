import { seoConfig } from "@/seo/config";

export async function GET() {
  const body = `# ${seoConfig.siteName}

## Company

Strix Engineering Studio is a product engineering studio that designs, builds, and improves production software for startups and growing businesses.

## Positioning

Strix works across product engineering, web applications, backend systems, mobile applications, AI-enabled software, internal tools, operational software, software architecture, and software modernization.

## Philosophy

Strix focuses on building the right system before building unnecessary software.

The engineering approach connects product requirements, system architecture, implementation, deployment, and long-term product evolution.

## Services

- Product Engineering
- MVP Development
- Custom Software Development
- AI Engineering
- Internal Tools
- Operational Software
- Software Architecture
- Software Modernization

## Technology Capabilities

- Next.js Development
- NestJS Development
- Flutter Development
- TypeScript Development

## Products

- H2Go - Water-can management and operational software
- ICity - Intercity travel platform
- Imrabo - AI assistant and agentic software system
- GoHere - QR-based indoor navigation and location-aware software
- RacerAPI - FastAPI-based Python backend framework

## Work

Strix publishes selected engineering work and case studies covering product development, operational systems, web applications, mobile applications, backend systems, and AI-enabled software.

## Insights

Strix publishes engineering writing covering:

- Product engineering
- Software architecture
- Backend systems
- AI engineering
- System design
- Software modernization
- Product development
- Operational software

## Public Website

- Work: ${seoConfig.siteUrl}${seoConfig.navigation.work}
- Services: ${seoConfig.siteUrl}${seoConfig.navigation.services}
- Products: ${seoConfig.siteUrl}${seoConfig.navigation.products}
- Insights: ${seoConfig.siteUrl}${seoConfig.navigation.insights}
- About: ${seoConfig.siteUrl}${seoConfig.navigation.about}
- Start a Project: ${seoConfig.siteUrl}${seoConfig.navigation.projectInquiry}

## FAQs

### What is Strix?

Strix Engineering Studio is a product engineering studio focused on building and improving production software systems.

### Who is Strix for?

Strix works with startups, growing businesses, and technology teams that need product engineering, software development, architecture, modernization, or AI engineering support.

### What does Strix build?

Strix builds web applications, mobile applications, backend systems, internal tools, operational software, AI-enabled products, and custom software.

### Does Strix build MVPs?

Yes. Strix develops focused MVPs intended to validate product assumptions while establishing a technical foundation for further product development.

### Does Strix work on existing software?

Yes. Strix can improve existing products through architecture reviews, modernization, refactoring, feature development, and product engineering.

### Does Strix build AI software?

Yes. Strix builds AI-enabled software, assistants, agentic workflows, and AI integrations where they provide practical value within a product or business workflow.
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
