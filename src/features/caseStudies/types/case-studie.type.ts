
export type CaseStudyStatus =
    | "published"
    | "draft"
    | "in-progress"
    | "archived";

export type CaseStudyVisibility =
    | "public"
    | "private"
    | "anonymized";

export type CaseStudyType =
    | "client-project"
    | "internal-project"
    | "product-development"
    | "technical-implementation"
    | "migration"
    | "optimization"
    | "research";

export type CaseStudyLinkType =
    | "live-product"
    | "website"
    | "repository"
    | "documentation"
    | "demo"
    | "related-product"
    | "other";

export type CaseStudyLink = {
    label: string;
    url: string;
    type: CaseStudyLinkType;

    /** Display prominently on the case-study page. */
    featured?: boolean;
};

export type CaseStudyMetric = {
    /** Metric name, e.g. API latency or deployment frequency. */
    label: string;

    /** Measured result, e.g. "180 ms" or "35% reduction". */
    value: string;

    /** Optional baseline for comparison. */
    baseline?: string;

    /** Optional explanation of the measurement. */
    description?: string;

    /** True only when the result is supported by evidence. */
    verified?: boolean;

    /** Optional source explaining how the result was measured. */
    evidenceUrl?: string;
};

export type CaseStudyImage = {
    src: string;
    alt: string;
    caption?: string;

    /** Optional grouping for the case-study gallery. */
    type?: "cover" | "screenshot" | "architecture" | "workflow" | "other";
};

export type CaseStudyTechnology = {
    name: string;
    category?:
        | "frontend"
        | "backend"
        | "database"
        | "infrastructure"
        | "ai"
        | "mobile"
        | "testing"
        | "other";
};

export type CaseStudySection = {
    heading: string;
    body: string;

    /** Optional bullet points for structured content. */
    points?: string[];
};

export type CaseStudy = {
    /** Stable identifier used in routes. */
    slug: string;

    /** Case-study title and listing content. */
    title: string;
    subtitle?: string;
    summary: string;
    category: string;
    type: CaseStudyType;

    /** Publication and confidentiality controls. */
    status: CaseStudyStatus;
    visibility: CaseStudyVisibility;
    featured: boolean;
    featuredOrder?: number;

    /** Client identity is optional for confidential engagements. */
    client?: {
        name?: string;
        industry?: string;
        websiteUrl?: string;
        logoUrl?: string;
        confidential?: boolean;
    };

    /** Engagement details. */
    role?: string;
    teamSize?: number;
    duration?: string;
    startedAt?: string;
    completedAt?: string;

    /** Optional visual assets. */
    coverImageUrl?: string;
    images?: CaseStudyImage[];

    /** Case-study narrative. */
    problem: string;
    constraints?: string[];
    objectives?: string[];
    approach: string;
    solution: string;
    implementation?: CaseStudySection[];
    architecture: string[];
    challenges?: CaseStudySection[];
    outcomes: string;
    lessonsLearned?: string[];

    /** Evidence-based results. */
    metrics: CaseStudyMetric[];

    /** Technology and capabilities. */
    technologies: CaseStudyTechnology[];
    capabilities?: string[];

    /** External references and related work. */
    links: CaseStudyLink[];
    relatedProducts?: string[];
    relatedCaseStudies?: string[];

    deliveryPartner?: string;

    /** Optional SEO and publication metadata. */
    publishedAt?: string;
    updatedAt?: string;
    tags: string[];
    seoTitle?: string;
    seoDescription?: string;
};
