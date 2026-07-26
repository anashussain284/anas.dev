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
            date: "12 FEB 2026", 
            title: "Minimalism in Code & Clean Laravel Patterns", 
            reading_time_minutes: 3,
            url: "https://dev.to/anashussain284",
            description: "Why stripping away unnecessary abstractions leads to maintainable enterprise software.",
            tags: ["php", "laravel", "oop", "architecture"] // <--- Added tags
        },
        { 
            id: 2, 
            date: "20 JAN 2026", 
            title: "Optimizing MySQL Queries for High Throughput", 
            reading_time_minutes: 5,
            url: "https://dev.to/anashussain284",
            description: "Indexing strategies and query tuning techniques for backend developers.",
            tags: ["mysql", "database", "backend", "performance"]
        },
        { 
            id: 3, 
            date: "05 JAN 2026", 
            title: "Unit Testing Laravel APIs with PHPUnit", 
            reading_time_minutes: 4,
            url: "https://dev.to/anashussain284",
            description: "Writing robust unit and integration tests to ensure code quality.",
            tags: ["unitesting", "phpunit", "laravel", "php"]
        }
    ]
};