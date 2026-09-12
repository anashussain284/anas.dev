const portfolioData = {
    heading: "Engineered for Scale. <br><span class='gradient-text'>Architected for Reliability.</span>",
    subheading: "Senior Software Engineer with 7+ years of experience designing scalable backend architectures, high-throughput APIs, optimized database systems, and robust infrastructure.",
    photoUrl: "anasHussain.jpg",
    resumeLink: "https://drive.google.com/file/d/1uboXIj9gRQkXungPYdAijCEF3bfHzJiR/view",
    email: "anashussain284@gmail.com",
    devToUsername: "anashussain284",
    
    socials: [
        { icon: "fa-github", link: "https://github.com/anashussain284" },
        { icon: "fa-linkedin", link: "https://www.linkedin.com/in/anashussain284/" },
        { icon: "fab fa-stack-overflow", link: "https://stackoverflow.com/users/14830068/anas-hussain-m" },
        { icon: "fa-dev", link: "https://dev.to/anashussain284" },
        { icon: "fas fa-code", link: "https://leetcode.com/u/anashussain284/" }
    ],

    techStack: [
        "Backend Architecture",
        "System Design (HLD/LLD)",
        "Object-Oriented Design (OOP)",
        "SOLID & Design Patterns",
        "REST APIs",
        "MySQL (Query Optimization & Indexing)",
        "Redis Caching",
        "Asynchronous Processing & Queues",
        "Docker & Containerization",
        "AWS Cloud Infrastructure",
        "Linux Infrastructure",
        "CI/CD Pipelines",
        "Automated Testing (PHPUnit)",
        "Git Version Control",
        "Performance Engineering"
    ],

    solutions: [
        {
          "title": "Distributed Backend & System Architecture",
          "desc": "Designing resilient, loosely coupled backend systems, utilizing High-Level and Low-Level Design (HLD/LLD) principles for maintainable growth.",
          "icon": "fa-layer-group"
        },
        {
          "title": "High-Throughput API Ecosystems",
          "desc": "Building secure, low-latency RESTful APIs and microservice endpoints featuring robust authentication, rate limiting, and structured payloads.",
          "icon": "fa-network-wired"
        },
        {
          "title": "Database Engineering & Performance",
          "desc": "Optimizing relational schema design, query execution plans, indexing strategies, and Redis caching layers for sub-second responses at scale.",
          "icon": "fa-bolt"
        },
        {
          "title": "DevOps & Cloud Reliability",
          "desc": "Containerizing environments with Docker, setting up automated CI/CD pipelines, and managing AWS cloud deployments with strong security practices.",
          "icon": "fa-cloud"
        }
    ],

    works: [
        { 
            title: "Aakri App (Waste Management)", 
            brief: "A high-performance booking and real-time logistics ecosystem designed for sustainable waste collection operations.",
            stacks: ["Laravel", "MySQL", "AWS", "WebSockets", "Backend Queues"],
            challenge: "Handling concurrent real-time transactions and high-frequency live updates without introducing database locks or API latency.",
            solution: "Architected an event-driven notification architecture leveraging WebSockets and decoupled background processing, resulting in a 40% performance gain."
        },
        { 
            title: "iAlignEd (LMS)",
            brief: "A secure e-learning platform handling complex, multi-role data exchange between students, instructors, and administrators.", 
            stacks: ["Laravel", "Redis", "JWT", "Swagger"],
            challenge: "Ensuring ironclad data protection for sensitive educational payloads while maintaining rapid search and query execution times.",
            solution: "Implemented fine-grained JWT authentication protocols and engineered composite indexing over large educational datasets to preserve sub-second responses."
        },
        { 
            title: "BioticsLab CRM", 
            brief: "Custom enterprise CRM system engineered to automate document generation, client lifecycle tracking, and internal team workflows.", 
            stacks: ["Laravel", "REST APIs", "OAuth2/Passport", "Role-Based Access Control"],
            challenge: "Automating multi-tier financial document compilation alongside granular access control across hierarchical user roles.",
            solution: "Designed a dynamic document execution engine and implemented enterprise-grade Role-Based Access Control (RBAC) to enforce isolated data boundaries."
        },
        { 
            title: "QTC Airdrop (Blockchain Integration Gateway)", 
            brief: "A distribution network bridging traditional web backend infrastructure with blockchain verification networks.", 
            stacks: ["Laravel", "TronLink", "Google FCM", "Asynchronous Processing"],
            challenge: "Seamlessly syncing off-chain backend operations with distributed, non-deterministic on-chain transaction updates.",
            solution: "Engineered a state-reconciliation background processing service to handle transaction tracking asynchronously with real-time push notifications."
        },
        { 
            title: "Mind Max Analytical Engine", 
            brief: "Educational performance analytics engine calculating dynamic learning metrics for large student populations.", 
            stacks: ["Laravel", "Canvas.js", "MySQL", "Interactive Analytics"],
            challenge: "Processing, aggregating, and visualizing raw historical performance metrics without bottlenecking primary database reads.",
            solution: "Structured targeted aggregate view tables and optimized analytical SQL queries to render high-speed visual analytics dashboards."
        },
        { 
            title: "AlignERP Solutions", 
            brief: "High-deliverability transaction and communication gateway built for enterprise client lead processing.", 
            stacks: ["PHP", "JavaScript", "Bootstrap", "SMTP Protocols", "Reliability Engineering"],
            challenge: "Eliminating email deliverability drops and transaction loss during high-volume outgoing communication requests.",
            solution: "Engineered a dedicated outbound SMTP queuing system featuring automatic retries and failover handlers to ensure reliable message delivery."
        }
    ],

    testimonials: [
        { 
            name: "Sekhar C", 
            title: "Technical Lead & Engineering Manager",
            photo: "", 
            text: "Anas Hussain has demonstrated exceptional skill and leadership. I've worked closely with him for 3 years and his dedication to high-quality code is unmatched.",
            linkedInUrl: "https://www.linkedin.com/in/anashussain284/details/recommendations/"
        },
        { 
            name: "Princy Aaghaww", 
            title: "Leadership Facilitator & Catalyst",
            photo: "", 
            text: "An exceptional developer with strong expertise in Laravel. He consistently delivers scalable solutions while leading engineering teams with professionalism.",
            linkedInUrl: "https://www.linkedin.com/in/anashussain284/details/recommendations/"
        },
        { 
            name: "Kavya Sreekanth, Ph.D", 
            title: "Research Scientist & Tech Consultant",
            photo: "", 
            text: "Anas is self-motivated and stays ahead of tech trends. He contributed significantly to developing customer-centric features for our evolving needs.",
            linkedInUrl: "https://www.linkedin.com/in/anashussain284/details/recommendations/"
        }
    ],

    blogs: [
        { 
            id: 1, 
            date: "11 Dec 2024", 
            title: "Bulletproof Data Protection: Laravel Encryption & Decryption Guide", 
            reading_time_minutes: 9,
            url: "https://dev.to/anashussain284/data-encryption-and-decryption-in-laravel-58bf",
            description: "Learn how to seamlessly encrypt and decrypt sensitive data within Eloquent models to maintain enterprise-grade database security.",
            tags: ["laravel", "security"]
        },
        { 
            id: 2, 
            date: "17 Dec 2024", 
            title: "Mastering Database Schema Design with Laravel Migrations", 
            reading_time_minutes: 10,
            url: "https://dev.to/anashussain284/laravel-migrations-2nab",
            description: "A step-by-step developer guide to designing, updating, and maintaining robust relational database schemas using Laravel migrations.",
            tags: ["laravel", "database"]
        },
        { 
            id: 3, 
            date: "17 Dec 2024", 
            title: "Automated Data Seeding: Efficient Factories & Seeders in Laravel", 
            reading_time_minutes: 7,
            url: "https://dev.to/anashussain284/laravel-factory-and-seeder-implementation-12k1",
            description: "Streamline your development workflow by populating your database with realistic mock data using Eloquent Factories and Seeders.",
            tags: ["laravel", "database"]
        },
        { 
            id: 4, 
            date: "20 Dec 2024", 
            title: "Clean API Validation: Form Requests in Laravel", 
            reading_time_minutes: 8,
            url: "https://dev.to/anashussain284/laravel-request-validation-3895",
            description: "Keep controllers lean and incoming data secure by leveraging custom Form Request classes and sophisticated validation rules.",
            tags: ["laravel"]
        },
        { 
            id: 5, 
            date: "21 Dec 2024", 
            title: "Robust Architecture: Centralized Exception Handling in Laravel", 
            reading_time_minutes: 6,
            url: "https://dev.to/anashussain284/laravel-centralized-exception-handling-53f3",
            description: "Unify application error handling to deliver clean, predictable JSON error responses and simplify API debugging across teams.",
            tags: ["laravel"]
        },
        { 
            id: 6, 
            date: "28 Dec 2024", 
            title: "Zero-Downtime Deployments Made Simple with Laravel Envoy", 
            reading_time_minutes: 9,
            url: "https://dev.to/anashussain284/automate-your-laravel-deployments-with-envoy-4fk0",
            description: "Automate your production deployment pipeline and execute zero-downtime SSH tasks effortlessly using Laravel Envoy.",
            tags: ["laravel","package"]
        },
        { 
            id: 7, 
            date: "2 Jan 2025", 
            title: "Complete OAuth2 Authentication with Laravel Passport", 
            reading_time_minutes: 7,
            url: "https://dev.to/anashussain284/automate-your-laravel-deployments-with-envoy-4fk0",
            description: "A practical step-by-step walkthrough for configuring full-featured OAuth2 authentication servers in modern Laravel APIs.",
            tags: ["laravel","package","authentication"]
        },
        { 
            id: 8, 
            date: "15 Jan 2025", 
            title: "Containerizing Modern Applications: Complete Laravel Docker Setup", 
            reading_time_minutes: 8,
            url: "https://dev.to/anashussain284/laravel-application-setup-with-docker-a-step-by-step-guide-2ok0",
            description: "Configure local development and production environments seamlessly using Docker containers for PHP, Nginx, and MySQL.",
            tags: ["laravel","docker"]
        },
        { 
            id: 9, 
            date: "2 Jul 2026", 
            title: "SOLID Principles: Single Responsibility Principle (SRP) in PHP", 
            reading_time_minutes: 13,
            url: "https://dev.to/anashussain284/single-responsibility-principle-srp-15hd",
            description: "Write cleaner, more maintainable code by structuring PHP classes around a single well-defined purpose.",
            tags: ["php","solid","design-principle","oop"]
        },
        { 
            id: 10, 
            date: "2 Jul 2026", 
            title: "SOLID Principles: Open-Closed Principle (OCP) in PHP", 
            reading_time_minutes: 12,
            url: "https://dev.to/anashussain284/open-closed-principle-ocp-290l",
            description: "Build expandable software systems that allow adding new features without risky modifications to existing core logic.",
            tags: ["php","solid","design-principle","oop"]
        },
        { 
            id: 11, 
            date: "4 Jul 2026", 
            title: "SOLID Principles: Liskov Substitution Principle (LSP) in PHP", 
            reading_time_minutes: 13,
            url: "https://dev.to/anashussain284/liskov-substitution-principle-lsp-46ja",
            description: "Ensure object hierarchy consistency by designing sub-classes that can seamlessly replace their base classes without breaking execution.",
            tags: ["php","solid","design-principle","oop"]
        },
        { 
            id: 12, 
            date: "6 Jul 2026", 
            title: "SOLID Principles: Interface Segregation Principle (ISP) in PHP", 
            reading_time_minutes: 14,
            url: "https://dev.to/anashussain284/interface-segregation-principle-isp-54bo",
            description: "Prevent interface bloat by breaking down monolithic interfaces into smaller, focused contracts tailored to specific implementations.",
            tags: ["php","solid","design-principle","oop"]
        },
        { 
            id: 13, 
            date: "8 Jul 2026", 
            title: "SOLID Principles: Dependency Inversion Principle (DIP) in PHP", 
            reading_time_minutes: 13,
            url: "https://dev.to/anashussain284/dependency-inversion-principle-dip-l9i",
            description: "Decouple high-level domain logic from low-level infrastructure modules by depending on abstractions rather than concrete implementations.",
            tags: ["php","solid","design-principle","oop"]
        },
        { 
            id: 14, 
            date: "14 Jul 2026", 
            title: "Demystifying Dependency Injection & The Laravel Service Container", 
            reading_time_minutes: 12,
            url: "https://dev.to/anashussain284/why-laravels-service-container-feels-like-magic-dependency-injection-explained-23fm",
            description: "Uncover how Laravel resolves class dependencies behind the scenes using Dependency Injection and auto-wiring.",
            tags: ["php","design-pattern","object-design-fundamentals","oop"]
        },
        { 
            id: 15, 
            date: "17 Jul 2026", 
            title: "Mastering Inversion of Control (IoC) in Enterprise Laravel", 
            reading_time_minutes: 17,
            url: "https://dev.to/anashussain284/from-procedural-to-pro-mastering-inversion-of-control-in-laravel-11np",
            description: "Shift your development mindset from procedural code to highly scalable enterprise architectures using Inversion of Control patterns.",
            tags: ["php","design-pattern","object-design-fundamentals","oop"]
        },
        { 
            id: 16, 
            date: "20 Jul 2026", 
            title: "Avoiding the Inheritance Trap: Building Flexible Systems in Laravel", 
            reading_time_minutes: 15,
            url: "https://dev.to/anashussain284/the-inheritance-trap-how-laravel-developers-can-build-more-flexible-systems-3nme",
            description: "Discover why composition often beats inheritance and learn strategies to prevent rigid class structures in growing codebases.",
            tags: ["php","design-pattern","object-design-fundamentals","oop"]
        },
        { 
            id: 17, 
            date: "23 Jul 2026", 
            title: "Domain-Driven Encapsulation & Rich Data Models in PHP 8", 
            reading_time_minutes: 16,
            url: "https://dev.to/anashussain284/from-data-dump-to-domain-model-encapsulation-in-php-8-koe",
            description: "Transform raw data objects into expressive domain models using PHP 8 type safety, access modifiers, and encapsulated logic.",
            tags: ["php","design-pattern","object-design-fundamentals","oop"]
        },
        { 
            id: 18, 
            date: "26 Jul 2026",
            title: "Eliminate Conditional Logic with Polymorphism in PHP & Laravel", 
            reading_time_minutes: 14,
            url: "https://dev.to/anashussain284/kill-your-conditionals-mastering-polymorphism-in-php-laravel-2el0",
            description: "Replace cluttered `if/else` or `switch` statements with clean polymorphic behavior using interface-driven execution.",
            tags: ["php","design-pattern","object-design-fundamentals","oop"]
        },
        { 
            id: 19, 
            date: "29 Jul 2026",
            title: "The Art of Abstraction: Mastering Interfaces vs. Abstract Classes in PHP", 
            reading_time_minutes: 13,
            url: "https://dev.to/anashussain284/the-art-of-abstraction-when-to-use-interfaces-and-abstract-classes-hg7",
            description: "A developer's guide to choosing between interfaces and abstract classes to design clean, decoupled, and extensible object hierarchies.",
            tags: ["php","design-pattern","object-design-fundamentals","oop"]
        },
        { 
            id: 20, 
            date: "1 Aug 2026", 
            title: "High Cohesion & Low Coupling: Architecting Maintainable Systems in PHP", 
            reading_time_minutes: 16,
            url: "https://dev.to/anashussain284/7-high-cohesion-low-coupling-the-foundation-of-good-object-design-2c35",
            description: "Master the twin pillars of clean software design to build flexible, modular PHP applications that are easy to test and scale.",
            tags: ["php","design-pattern","object-design-fundamentals","oop"]
        }
    ]
};
