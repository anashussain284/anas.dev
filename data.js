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
            title: "Laravel Data Encryption and Decryption", 
            reading_time_minutes: 3,
            url: "https://dev.to/anashussain284/data-encryption-and-decryption-in-laravel-58bf",
            description: "This guide explains how to implement encryption and decryption for sensitive data in Laravel models",
            tags: ["laravel", "security"]
        },
        { 
            id: 2, 
            date: "17 Dec 2024", 
            title: "Laravel Migrations", 
            reading_time_minutes: 3,
            url: "https://dev.to/anashussain284/laravel-migrations-2nab",
            description: "This guide explains how to create tablse use laravel migration",
            tags: ["laravel", "database"]
        },
        { 
            id: 3, 
            date: "17 Dec 2024", 
            title: "Laravel Factory and Seeder", 
            reading_time_minutes: 3,
            url: "https://dev.to/anashussain284/laravel-factory-and-seeder-implementation-12k1",
            description: "This guide explains how to use laravel factory and seeder to seed database",
            tags: ["laravel", "database"]
        },
        { 
            id: 4, 
            date: "20 Dec 2024", 
            title: "Laravel Request Validation", 
            reading_time_minutes: 3,
            url: "https://dev.to/anashussain284/laravel-request-validation-3895",
            description: "This guide explains how to use laravel request validation",
            tags: ["laravel"]
        },
        { 
            id: 5, 
            date: "21 Dec 2024", 
            title: "Laravel Centralized Exception Handling", 
            reading_time_minutes: 3,
            url: "https://dev.to/anashussain284/laravel-centralized-exception-handling-53f3",
            description: "This guide explains how to use laravel centralized exception handling",
            tags: ["laravel"]
        },
        { 
            id: 6, 
            date: "28 Dec 2024", 
            title: "Laravel Envoy", 
            reading_time_minutes: 3,
            url: "https://dev.to/anashussain284/automate-your-laravel-deployments-with-envoy-4fk0",
            description: "This guide explains how to use laravel envoy for zero downtime deployment",
            tags: ["laravel","package"]
        },
        { 
            id: 7, 
            date: "2 Jan 2025", 
            title: "Laravel Passport", 
            reading_time_minutes: 3,
            url: "https://dev.to/anashussain284/automate-your-laravel-deployments-with-envoy-4fk0",
            description: "This guide explains how to use laravel passport for authentication step by step guide",
            tags: ["laravel","package","authentication"]
        },
        { 
            id: 8, 
            date: "15 Jan 2025", 
            title: "Laravel Docker Setup", 
            reading_time_minutes: 3,
            url: "https://dev.to/anashussain284/laravel-application-setup-with-docker-a-step-by-step-guide-2ok0",
            description: "This guide explains how to setup docker for laravel application run, step by step guide",
            tags: ["laravel","docker"]
        },
        { 
            id: 9, 
            date: "2 Jul 2026", 
            title: "Single Responsibility Principle",
            reading_time_minutes: 3,
            url: "https://dev.to/anashussain284/single-responsibility-principle-srp-15hd",
            description: "Explain single responsibility principle",
            tags: ["php","solid","design-principle","oop"]
        },
        { 
            id: 10, 
            date: "2 Jul 2026", 
            title: "Open Closed Principle",
            reading_time_minutes: 3,
            url: "https://dev.to/anashussain284/open-closed-principle-ocp-290l",
            description: "Explain open closed principle",
            tags: ["php","solid","design-principle","oop"]
        },
        { 
            id: 11, 
            date: "4 Jul 2026", 
            title: "Liskov Substitution Principle",
            reading_time_minutes: 3,
            url: "https://dev.to/anashussain284/liskov-substitution-principle-lsp-46ja",
            description: "Explain liskov substitution principle",
            tags: ["php","solid","design-principle","oop"]
        },
        { 
            id: 12, 
            date: "6 Jul 2026", 
            title: "Interface Segregation Principle",
            reading_time_minutes: 3,
            url: "https://dev.to/anashussain284/interface-segregation-principle-isp-54bo",
            description: "Explain interface segregation principle",
            tags: ["php","solid","design-principle","oop"]
        },
        { 
            id: 13, 
            date: "8 Jul 2026", 
            title: "Dependency Inversion Principle",
            reading_time_minutes: 3,
            url: "https://dev.to/anashussain284/dependency-inversion-principle-dip-l9i",
            description: "Explain dependency inversion principle",
            tags: ["php","solid","design-principle","oop"]
        },
        { 
            id: 14, 
            date: "14 Jul 2026", 
            title: "Dependency Injection",
            reading_time_minutes: 3,
            url: "https://dev.to/anashussain284/why-laravels-service-container-feels-like-magic-dependency-injection-explained-23fm",
            description: "Why Laravel's Service Container Feels Like Magic: Dependency Injection Explained",
            tags: ["php","design-pattern","object-design-fundamentals","oop"]
        },
        { 
            id: 15, 
            date: "17 Jul 2026", 
            title: "Inversion of Control",
            reading_time_minutes: 3,
            url: "https://dev.to/anashussain284/from-procedural-to-pro-mastering-inversion-of-control-in-laravel-11np",
            description: "From Procedural to Pro: Mastering Inversion of Control in Laravel",
            tags: ["php","design-pattern","object-design-fundamentals","oop"]
        },
        { 
            id: 16, 
            date: "20 Jul 2026", 
            title: "Inheritance",
            reading_time_minutes: 3,
            url: "https://dev.to/anashussain284/the-inheritance-trap-how-laravel-developers-can-build-more-flexible-systems-3nme",
            description: "The Inheritance Trap: How Laravel Developers Can Build More Flexible Systems",
            tags: ["php","design-pattern","object-design-fundamentals","oop"]
        },
        { 
            id: 17, 
            date: "23 Jul 2026", 
            title: "Encapsulation",
            reading_time_minutes: 3,
            url: "https://dev.to/anashussain284/from-data-dump-to-domain-model-encapsulation-in-php-8-koe",
            description: "From Data Dump to Domain Model: Encapsulation in PHP 8",
            tags: ["php","design-pattern","object-design-fundamentals","oop"]
        },
        { 
            id: 18, 
            date: "26 Jul 2026", 
            title: "Polymorphism",
            reading_time_minutes: 3,
            url: "https://dev.to/anashussain284/kill-your-conditionals-mastering-polymorphism-in-php-laravel-2el0",
            description: "Kill Your Conditionals: Mastering Polymorphism in PHP & Laravel",
            tags: ["php","design-pattern","object-design-fundamentals","oop"]
        }
    ]
};