const portfolioData = {
    heading: "Architecting High-Performance <br><span class='gradient-text'>Backend Systems.</span>",
    subheading: "I am a Senior Software Engineer specializing in Laravel, cloud infrastructure, and database optimization. Actively building, continuous learning, and publishing technical deep-dives.",
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
        "PHP (Laravel/CodeIgniter)", "JavaScript (jQuery/Ajax)", "MySQL", "MongoDB", 
        "Docker", "AWS (EC2/S3)", "Redis", "REST APIs", "JWT/Passport/Sanctum",
        "CI/CD", "Git/GitHub/GitLab", "Linux/Shell/SSH", "Unit Testing (PHPUnit)",
        "Tailwind CSS", "Bootstrap", "Agile/Scrum/Kanban"
    ],

    solutions: [
        { 
            title: "Enterprise Web Systems", 
            desc: "Architecting robust, maintainable, and high-throughput web applications with modern Laravel patterns.", 
            icon: "fa-layer-group" 
        },
        { 
            title: "Scalable API Architecture", 
            desc: "Designing secure, high-speed RESTful API ecosystems with granular authentication protocols.", 
            icon: "fa-network-wired" 
        },
        { 
            title: "Performance Engineering", 
            desc: "Optimizing query execution, indexing, and Redis caching strategies for sub-second system response times.", 
            icon: "fa-bolt" 
        },
        { 
            title: "Cloud & DevOps", 
            desc: "Configuring containerized environments with Docker and AWS CI/CD pipelines for reliable deployment.", 
            icon: "fa-cloud" 
        }
    ],

    works: [
        { 
            title: "Aakri App (Waste Management)", 
            brief: "A high-performance booking and logistics ecosystem for sustainable waste management.", 
            stacks: ["Laravel", "MySQL", "AWS", "WebSockets"],
            challenge: "Managing concurrent transactions and real-time updates for thousands of active users.",
            solution: "Architected a real-time notification system using WebSockets and optimized the database, resulting in a 40% increase in page speed."
        },
        { 
            title: "iAlignEd (LMS)", 
            brief: "A secure e-learning platform managing complex data exchange between students and educators.", 
            stacks: ["Laravel", "Redis", "JWT", "Swagger"],
            challenge: "Ensuring iron-clad security for sensitive educational data while maintaining high query performance.",
            solution: "Implemented JWT-based authentication and optimized indexing for large datasets to maintain sub-second response times."
        },
        { 
            title: "BioticsLab CRM", 
            brief: "Custom CRM solution built to streamline team collaboration and client lifecycle management.", 
            stacks: ["Laravel", "Ajax", "Passport", "jQuery"],
            challenge: "Automating complex financial document generation and multi-tier access control.",
            solution: "Developed a dynamic automated invoicing module and integrated Laravel Passport for enterprise-grade Role-Based Access Control (RBAC)."
        },
        { 
            title: "QTC Airdrop", 
            brief: "A blockchain-integrated platform for secure cryptocurrency distribution.", 
            stacks: ["Laravel", "TronLink", "Google FCM"],
            challenge: "Seamlessly bridging traditional web architecture with blockchain transaction layers.",
            solution: "Successfully integrated TronLink for transparent, secure blockchain verification and real-time transaction tracking."
        },
        { 
            title: "Mind Max", 
            brief: "Educational platform featuring a dynamic analytical dashboard for student performance metrics.", 
            stacks: ["Laravel", "Canvas.js", "MySQL", "Ajax"],
            challenge: "Processing and visualizing massive amounts of student data in real-time.",
            solution: "Engineered a custom analytics engine using Canvas.js for interactive, high-speed data visualization."
        },
        { 
            title: "AlignERP Solutions", 
            brief: "Corporate digital presence focusing on client acquisition and automated communication.", 
            stacks: ["PHP", "JavaScript", "Bootstrap"],
            challenge: "Building a reliable, high-deliverability client communication gateway.",
            solution: "Developed a custom SMTP-based mailer system to ensure 100% communication reliability between clients and the sales team."
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
        }
    ]
};