import { CaseStudy } from "../types/case-studie.type";


export const caseStudies: CaseStudy[] = [
    {
        slug: "hugged-parenting-platform",
        title: "Building Hugged: A Community-Based Parenting Platform",
        subtitle:
            "Full-stack product engineering across mobile, web, payments, and notifications.",
        summary:
            "Delivered engineering across the Hugged parenting platform, including a Flutter mobile application, a Next.js web console and website, Firebase backend services, payment integration, and push notifications.",

        category: "Full-Stack Product Engineering",
        type: "client-project",

        // Publish only after the case-study content is approved.
        status: "published",
        visibility: "public",
        featured: true,
        featuredOrder: 1,

        client: {
            name: "Hugged",
            industry: "Parenting and community platform",
            websiteUrl: "https://hugged.in",
        },

        role: "Mobile, web, backend integration, and release engineering",

        problem:
            "The product required a connected experience across its mobile application, web interfaces, backend services, payments, and community notifications.",

        objectives: [
            "Develop and maintain the Flutter mobile application.",
            "Build and maintain the Next.js console and website.",
            "Integrate Firebase services across application workflows.",
            "Support secure payment processing through Razorpay.",
            "Implement push notification and community messaging workflows.",
            "Prepare the mobile application for iOS distribution.",
        ],

        approach:
            "Developed the mobile and web experiences alongside Firebase-backed backend workflows, integrating payment processing and messaging services to support the wider parenting platform.",

        solution:
            "The engineering work spans a Flutter mobile application, Next.js web interfaces, Firebase Cloud Functions, Firebase services, Razorpay payments, and Firebase Cloud Messaging.",

        implementation: [
            {
                heading: "Mobile application",
                body:
                    "Flutter application development for the Hugged user experience, including feature implementation, application workflows, and release stabilization.",
                points: [
                    "Flutter mobile application",
                    "Application workflow integration",
                    "Android release support",
                    "iOS release preparation",
                ],
            },
            {
                heading: "Web platform",
                body:
                    "Next.js development across the public website and administrative console.",
                points: [
                    "Public website: hugged.in",
                    "Administrative console",
                    "Full-stack web development",
                ],
            },
            {
                heading: "Backend and payments",
                body:
                    "Firebase-backed backend services and payment integration supporting application workflows.",
                points: [
                    "Firebase Cloud Functions",
                    "Cloud Firestore and Firebase services",
                    "Razorpay payment integration",
                    "Server-side payment processing",
                ],
            },
            {
                heading: "Notifications and community workflows",
                body:
                    "Firebase Cloud Messaging integration for device notifications and community-related messaging workflows.",
                points: [
                    "FCM token management",
                    "Push notification delivery",
                    "Community messaging workflows",
                ],
            },
        ],

        architecture: [
            "Flutter",
            "Next.js",
            "TypeScript",
            "Firebase",
            "Cloud Firestore",
            "Firebase Cloud Functions",
            "Firebase Cloud Messaging",
            "Razorpay",
        ],

        challenges: [
            {
                heading: "Cross-platform product delivery",
                body:
                    "Maintaining consistent behavior across mobile, web, and administrative interfaces requires coordinated feature implementation and testing.",
            },
            {
                heading: "Payment processing",
                body:
                    "Payment workflows require server-side order creation, verification, and reliable handling of payment events.",
            },
            {
                heading: "Mobile release readiness",
                body:
                    "Android distribution and iOS release processing require platform-specific validation and release workflows.",
            },
        ],

        outcomes:
            "The Android application is live on Google Play, the public website is available at hugged.in, and iOS distribution is being processed. The engagement also includes the web console, Firebase-backed services, Razorpay integration, and notification workflows.",

        metrics: [],

        technologies: [
            { name: "Flutter", category: "mobile" },
            { name: "Dart", category: "mobile" },
            { name: "Next.js", category: "frontend" },
            { name: "TypeScript", category: "frontend" },
            { name: "Firebase", category: "infrastructure" },
            { name: "Cloud Firestore", category: "database" },
            { name: "Cloud Functions", category: "backend" },
            { name: "Firebase Cloud Messaging", category: "infrastructure" },
            { name: "Razorpay", category: "other" },
        ],

        capabilities: [
            "Flutter application engineering",
            "Full-stack Next.js development",
            "Firebase backend development",
            "Payment integration",
            "Push notifications",
            "Mobile release engineering",
        ],

        links: [
            {
                label: "Visit Hugged",
                url: "https://hugged.in",
                type: "website",
                featured: true,
            },
            {
                label: "View Android app",
                url: "https://play.google.com/store/apps/details?id=com.hugged.user",
                type: "live-product",
                featured: true,
            },
        ],

        relatedProducts: [],
        tags: [
            "Flutter",
            "Next.js",
            "Firebase",
            "Payments",
            "FCM",
            "Parenting",
        ],
        seoTitle: "Hugged Parenting Platform Engineering Case Study",
        seoDescription:
            "Explore engineering work across Hugged's Flutter mobile application, Next.js website and console, Firebase backend, payments, and notifications.",
    },

    {
        slug: "instameasure-water-bill-management",
        title: "Instameasure: Multi-Role Water-Bill Management",
        subtitle:
            "Four access roles managed within a single Flutter application.",
        summary:
            "A water-bill management application built with Flutter and Firebase for Bridget Tech Innovation Private Limited, delivered as client work through Compute OPC.",

        category: "Mobile Application Engineering",
        type: "client-project",

        status: "published",
        visibility: "public",
        featured: true,
        featuredOrder: 2,

        client: {
            name: "Bridget Tech Innovation Private Limited",
            industry: "Water billing and utility management",
        },

        role:
            "Flutter application development, Firebase integration, and role-based access control",

        problem:
            "The application needed to support customers, delegates, administrators, and super administrators without requiring four separate mobile applications.",

        objectives: [
            "Support four distinct user roles in a single application.",
            "Implement role-based access control.",
            "Build the mobile application with Flutter.",
            "Use Firebase services for application data and backend integration.",
        ],

        approach:
            "Designed the application around role-aware access and workflows so different user types could use the same application with permissions appropriate to their roles.",

        solution:
            "Built a Flutter and Firebase water-bill management application with four roles: customer, delegate, admin, and super admin.",

        implementation: [
            {
                heading: "Single-application architecture",
                body:
                    "A shared Flutter application serves all four user roles rather than requiring a separate application for each role.",
                points: [
                    "Customer",
                    "Delegate",
                    "Admin",
                    "Super admin",
                ],
            },
            {
                heading: "Role-based access control",
                body:
                    "Role-aware application workflows separate the experiences and permissions of different user types.",
                points: [
                    "Role-specific access",
                    "Permission-aware interfaces",
                    "Shared application codebase",
                ],
            },
            {
                heading: "Firebase integration",
                body:
                    "Firebase provides the backend services used by the application.",
                points: [
                    "Flutter client",
                    "Firebase integration",
                ],
            },
        ],

        architecture: [
            "Flutter",
            "Dart",
            "Firebase",
            "Role-based access control",
            "Multi-role application",
        ],

        challenges: [
            {
                heading: "Multiple roles in one application",
                body:
                    "The application needed to distinguish four user roles while maintaining a shared application experience.",
            },
            {
                heading: "Permission boundaries",
                body:
                    "Role-based interfaces must be backed by appropriate authorization checks so restricted operations and data cannot be accessed merely by changing the client interface.",
            },
        ],

        outcomes:
            "Delivered a water-bill management application supporting customer, delegate, admin, and super-admin roles within a single Flutter application. Quantified operational outcomes were not provided.",

        metrics: [],

        technologies: [
            { name: "Flutter", category: "mobile" },
            { name: "Dart", category: "mobile" },
            { name: "Firebase", category: "infrastructure" },
        ],

        capabilities: [
            "Water-bill management",
            "Multi-role application development",
            "Role-based access control",
            "Firebase integration",
        ],

        links: [],

        relatedProducts: [],
        tags: [
            "Flutter",
            "Firebase",
            "RBAC",
            "Water Billing",
            "Mobile Applications",
        ],

        seoTitle: "Instameasure Water-Bill Management Case Study",
        seoDescription:
            "A Flutter and Firebase water-bill management application supporting four roles within a single mobile application.",
    },

    {
        slug: "atmabhan-spiritual-learning-app",
        title: "Atmabhan: Spiritual Learning Mobile Application",
        subtitle:
            "A spiritual learning experience with YouTube integration and short-form video browsing.",
        summary:
            "A mobile application in development for a spiritual and yoga guru, combining spiritual course content, YouTube API integration, and a reels-style short-video viewing experience.",

        category: "Mobile Product Development",
        type: "client-project",

        status: "published",
        visibility: "public",
        featured: true,
        featuredOrder: 3,

        client: {
            name: "Atmabhan",
            industry: "Spiritual education and yoga",
        },

        role: "Flutter mobile application development and API integration",
        duration: "Planned 7-day development window",

        problem:
            "The client needed a dedicated mobile experience for spiritual learning and course content, with video consumption integrated into the application.",

        objectives: [
            "Build a Flutter mobile application.",
            "Support spiritual course content.",
            "Integrate YouTube APIs using Google Cloud Platform.",
            "Implement a reels-style or short-video viewing experience.",
        ],

        approach:
            "Plan a focused mobile development cycle using Flutter and Firebase, with YouTube API integration and a short-form video interface.",

        solution:
            "An in-development spiritual learning application that combines course-oriented content, YouTube integration, and short-video browsing.",

        implementation: [
            {
                heading: "Mobile application",
                body:
                    "Flutter is being used to develop the mobile application for the spiritual learning experience.",
                points: [
                    "Flutter application development",
                    "Mobile-first content experience",
                ],
            },
            {
                heading: "YouTube integration",
                body:
                    "YouTube API integration is planned through Google Cloud Platform to support video-related functionality.",
                points: [
                    "YouTube API integration",
                    "Google Cloud Platform configuration",
                ],
            },
            {
                heading: "Short-form video experience",
                body:
                    "A reels-style or short-video viewing interface is part of the planned application experience.",
                points: [
                    "Vertical video browsing",
                    "Short-form content presentation",
                ],
            },
        ],

        architecture: [
            "Flutter",
            "Dart",
            "Firebase",
            "YouTube APIs",
            "Google Cloud Platform",
        ],

        challenges: [
            {
                heading: "Video integration",
                body:
                    "The application needs to connect its learning experience with external video content through the YouTube API.",
            },
            {
                heading: "Focused delivery timeline",
                body:
                    "The project has a planned seven-day mobile development window. The final scope and delivery date should be confirmed against the implemented features.",
            },
        ],

        outcomes:
            "The application is in development and has not yet been published. The seven-day window is a planned delivery target, not a verified completed delivery time.",

        metrics: [],

        technologies: [
            { name: "Flutter", category: "mobile" },
            { name: "Dart", category: "mobile" },
            { name: "Firebase", category: "infrastructure" },
            { name: "YouTube APIs", category: "other" },
            { name: "Google Cloud Platform", category: "infrastructure" },
        ],

        capabilities: [
            "Spiritual course delivery",
            "Mobile application development",
            "YouTube API integration",
            "Short-form video browsing",
        ],

        links: [],

        relatedProducts: [],
        tags: [
            "Flutter",
            "Firebase",
            "YouTube API",
            "Google Cloud",
            "Spiritual Learning",
        ],

        seoTitle: "Atmabhan Spiritual Learning App Case Study",
        seoDescription:
            "An in-development Flutter mobile application for spiritual learning, YouTube integration, and short-form video browsing.",
    },

    {
        slug: "qr-based-iot-sensor-monitoring-poc",
        title: "QR-Based IoT Sensor Monitoring Proof of Concept",
        subtitle:
            "Connecting physical sensor identification to a web-based monitoring console.",
        summary:
            "A proof of concept for an IoT company involving a Flutter application for QR scanning and sensor identification, connected to a Next.js console backed by MongoDB and Prisma.",

        category: "IoT and Full-Stack Integration",
        type: "technical-implementation",

        status: "published",
        visibility: "anonymized",
        featured: true,
        featuredOrder: 4,

        client: {
            industry: "Internet of Things",
            confidential: true,
        },

        role:
            "Flutter application development, full-stack console integration, and database integration",

        problem:
            "The IoT workflow required users to scan a QR code, provide or retrieve sensor details, and make sensor readings available in a web-based console.",

        objectives: [
            "Build a Flutter application for QR-code scanning.",
            "Associate scanned QR codes with sensor details.",
            "Connect the mobile workflow to the application backend.",
            "Display sensor readings in a Next.js console.",
            "Use MongoDB and Prisma for the console-side data layer.",
        ],

        approach:
            "Designed a connected workflow between the Flutter mobile application and the web console, with QR-based identification and a shared data flow for sensor information and readings.",

        solution:
            "A proof of concept combining a Flutter QR-scanning application with a Next.js console backed by MongoDB and Prisma.",

        implementation: [
            {
                heading: "QR-based mobile workflow",
                body:
                    "The Flutter application lets users scan a QR code and work with the associated sensor details.",
                points: [
                    "QR-code scanning",
                    "Sensor identification",
                    "Mobile data-entry workflow",
                ],
            },
            {
                heading: "Web monitoring console",
                body:
                    "A Next.js console presents sensor information and readings for operational monitoring.",
                points: [
                    "Next.js console",
                    "Sensor information display",
                    "Reading visualization",
                ],
            },
            {
                heading: "Data integration",
                body:
                    "MongoDB and Prisma support the console's data layer and structured access to sensor-related records.",
                points: [
                    "MongoDB",
                    "Prisma",
                    "Mobile-to-console data integration",
                ],
            },
        ],

        architecture: [
            "Flutter",
            "Dart",
            "QR-code scanning",
            "Next.js",
            "TypeScript",
            "MongoDB",
            "Prisma",
        ],

        challenges: [
            {
                heading: "Physical-to-digital identification",
                body:
                    "A scanned QR code needs to identify the correct sensor or sensor record so users can access the relevant information.",
            },
            {
                heading: "Mobile and console integration",
                body:
                    "Sensor details and readings must move through a consistent data flow between the mobile application and the web console.",
            },
        ],

        outcomes:
            "The defined proof-of-concept workflow connects QR-based sensor identification on mobile with sensor information and readings in a web console. Production deployment, the telemetry transport mechanism, and measured performance were not specified.",

        metrics: [],

        technologies: [
            { name: "Flutter", category: "mobile" },
            { name: "Dart", category: "mobile" },
            { name: "Next.js", category: "frontend" },
            { name: "TypeScript", category: "frontend" },
            { name: "MongoDB", category: "database" },
            { name: "Prisma", category: "backend" },
        ],

        capabilities: [
            "QR-code scanning",
            "Sensor identification",
            "Flutter mobile development",
            "Next.js console development",
            "MongoDB data integration",
            "Sensor-reading presentation",
        ],

        links: [],

        relatedProducts: [],
        tags: [
            "IoT",
            "Flutter",
            "QR Code",
            "Next.js",
            "MongoDB",
            "Prisma",
            "Proof of Concept",
        ],

        seoTitle: "QR-Based IoT Sensor Monitoring POC",
        seoDescription:
            "A technical proof of concept connecting a Flutter QR-scanning application with a Next.js and MongoDB sensor monitoring console.",
    },
];
