
export type ProjectStatus =
    | "live"
    | "beta"
    | "in-development"
    | "prototype"
    | "archived";

export type ProjectVisibility =
    | "public"
    | "private"
    | "limited";

export type OpenSourceStatus =
    | "open-source"
    | "partially-open-source"
    | "source-available"
    | "closed-source";

export type ProjectLinkType =
    | "website"
    | "app"
    | "repository"
    | "documentation"
    | "demo"
    | "changelog"
    | "social"
    | "support"
    | "other";

export type ProjectLink = {
    label: string;
    url: string;
    type: ProjectLinkType;

    /** Display this link prominently on the product card or detail page. */
    featured?: boolean;

    /** Optional platform identifier, such as GitHub, LinkedIn, or Instagram. */
    platform?: string;
};

export type OpenSourceInfo = {
    status: OpenSourceStatus;

    /** License identifier, e.g. MIT, Apache-2.0, or AGPL-3.0. */
    license?: string;

    /** Public source code repository URL. */
    repositoryUrl?: string;

    /** Specific modules or packages that are open-source. */
    openComponents?: string[];

    /** Components or services that remain private. */
    proprietaryComponents?: string[];

    /** Optional contribution guidelines URL. */
    contributingUrl?: string;
};

export type ProjectCapability = {
    name: string;
    description?: string;
};

export type ProjectMetric = {
    label: string;
    value: string;
    description?: string;
    verified?: boolean;
};

export type Project = {
    /** Stable identifier used in routes. */
    slug: string;

    title: string;
    category: string;
    summary: string;
    tagline: string;

     coverImageUrl?: string;

    /** Product lifecycle and access status. */
    status: ProjectStatus;
    visibility: ProjectVisibility;

    /** Portfolio presentation controls. */
    featured: boolean;
    featuredOrder?: number;

    /** Product links, including external platforms. */
    links: ProjectLink[];

    /** Source-code availability and licensing. */
    openSource: OpenSourceInfo;

    /** Product technologies and user-facing functionality. */
    stack: string[];
    capabilities: ProjectCapability[];
    targetAudience?: string[];

    /** Optional evidence-based outcomes. */
    metrics: ProjectMetric[];

    /** Product development information. */
    timeline?: string;
    launchedAt?: string;
    lastUpdated?: string;

    /** Product detail page content. */
    spotlight: string;
    problem: string;
    solution: string;
    result: string;

    /** Technical detail. */
    architecture: string[];
    deployment: string[];
    highlights: string[];

    /** Optional additional information. */
    pricingModel?: "free" | "freemium" | "subscription" | "one-time" | "custom" | "not-applicable";
    documentationUrl?: string;
};
