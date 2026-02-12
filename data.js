const portfolioData = {
    heading: "Turning Complex Ideas Into <br><span class='gradient-text'>Scalable Realities.</span>",
    subheading: "I am a Senior Software Engineer specializing in high-performance backend architectures and seamless user experiences. I help businesses automate, scale, and lead their industries.",
    photoUrl: "anasHussain.jpg",
    resumeLink: "https://drive.google.com/file/d/1uboXIj9gRQkXungPYdAijCEF3bfHzJiR/view",
    email: "anashussain284@gmail.com",
    
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
            desc: "Beyond simple websites: I build robust, high-traffic web applications designed to automate your business workflows and drive revenue.", 
            icon: "fa-layer-group" 
        },
        { 
            title: "Scalable API Architecture", 
            desc: "Designing secure, high-speed API ecosystems (REST/JWT) that allow your platforms to communicate seamlessly with third-party services.", 
            icon: "fa-network-wired" 
        },
        { 
            title: "Performance Engineering", 
            desc: "I specialize in database optimization and caching strategies that reduce load times by up to 40%, ensuring your customers never wait.", 
            icon: "fa-bolt" 
        },
        { 
            title: "Cloud & DevOps", 
            desc: "Deploying applications with Docker and AWS for 99.9% uptime, utilizing CI/CD pipelines for rapid, error-free releases.", 
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
            text: "Anas Hussain has demonstrated exceptional skill and leadership. I've worked closely with him for 3 years and his dedication to high-quality code is unmatched." 
        },
        { 
            name: "Princy Sugandh", 
            text: "An exceptional developer with strong expertise in Laravel. He consistently delivers scalable solutions while leading engineering teams with professionalism." 
        },
        { 
            name: "Kavya Sreekanth, Ph.D", 
            text: "Anas is self-motivated and stays ahead of tech trends. He contributed significantly to developing customer-centric features for our evolving needs." 
        }
    ],

    blogs: [
        { 
            id: 1, 
            date: "12 FEB 2026", 
            title: "Minimalism in Code", 
            subheading: "Why less is usually much more in modern software.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            paragraphs: [
                "Software development is often a battle against complexity. We spend more time reading code than writing it. Simple code is not just easier to maintain; it is cheaper to run and less prone to edge-case bugs.",
                "By stripping away unnecessary abstractions, we create systems that are easier to maintain and faster to deploy. The goal is to reach a point where nothing else can be taken away."
            ],
            references: [{ label: "Clean Code Principles", url: "#" }]
        },
        { 
            id: 2, 
            date: "05 FEB 2026", 
            title: "Why Next.js Wins", 
            paragraphs: ["A short look into the power of Server Components."]
        }
    ]
};