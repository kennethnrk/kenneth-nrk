// Project data storage
const projects = {
  vibranium: {
    title: "Vibranium - API Security",
    subtitle: "Runners up at Flipkart Grid Infosec Hackathon 2024",
    tags: ["Security", "API", "DevOps", "Penetration Testing", "GenAI"],
    description: [
      "Developed a comprehensive API security solution with SDK, GitHub action, penetration testing server, and proxy server",
      "Designed for all the most prominent stages of the SDLC - Development, Testing, Deployment and Maitainenance",
      "Provides robust security measures for API endpoints with automated security testing through CI/CD pipelines",
      "SDK for easy code level security testing and vulnerability scanning",
      "GitHub action for automated security testing and vulnerability scanning",
      "Penetration testing server for whitebox and blackbox testing",
      "Proxy server for API traffic interception and inspection",
    ],
    technologies: [
      "Python",
      "Node.js",
      "System Design",
      "Github Actions",
      "REST APIs",
      "OWASP Top 10",
      "Cybersecurity",
      "LLMs",
      "GenAI"
    ],
    links: [
      {
        text: "GitHub",
        url: "https://github.com/GlenDsza/Vibranium-API-Guard",
        icon: "fa-github"
      },
      {
        text: "Demo",
        url: "https://drive.google.com/file/d/1IjzIT-9PDEnGN1k8VYMXagJqTVMyYoun/view?usp=drive_link",
        icon: "fa-external-link"
      }
    ],
    gallery: [
      "images/gallery-images/gallery-image-1.jpg",
      "images/project-images/vibranium/1.png",
      "images/gallery-images/gallery-image-4.jpg",


    ]
  },
  rakshak: {
    title: "Rakshak - AI Powered Comprehensive Security Solution",
    subtitle: "Web + Mobile platform built for Rajasthan Police National Hackathon",
    tags: ["Machine Learning", "Computer Vision", "Security", "AI/ML", "LLM"],
    description: [
      "AI-powered security solution with web interface for admins and multi-lingual mobile apps for on-duty guards and citizens.",
      "Integrates ML and deep learning models to detect and identify crimes and accidents in real time via CCTV streams.",
      "Admin dashboard: interactive map, real-time incident detections, automated alerts, and LLM-powered natural language querying of incidents.",
      "Feedback learning interface lets admins train models on false positives and negatives to improve detection accuracy.",
      "Mobile apps enable guards to report incidents with type, description, and visual evidence; citizens get automated alerts and incident details on a map.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "Flutter",
      "Dart",
      "BLOC",
      "MongoDB",
      "AWS S3",
      "TensorFlow",
      "YOLO",
      "PyTorch",
      "Mixtral 8x7B",
    ],
    links: [
      {
        text: "GitHub",
        url: "https://github.com/GlenDsza/Rakshak-AI_Powered_Comprehensive_Security_Solution",
        icon: "fa-github"
      },
      {
        text: "Demo",
        url: "https://youtu.be/zETnd8Bkduo",
        icon: "fa-external-link"
      }
    ],
    gallery: [
      "images/project-images/rakshak/1.png",
      "images/project-images/rakshak/2.png",
      "images/project-images/rakshak/3.png",
    ]
  },
  outfitai: {
    title: "OutfitAI - Generative AI for outfits",
    subtitle: "GenAI-Powered E-commerce Platform",
    tags: ["AI/ML", "LLMs", "E-commerce", "Frontend", "Backend"],
    description: [
      "Built a GenAI-powered e-commerce website with ML-based product recommendations",
      "Developed a fashion recommendation chatbot that generates AI outfits and suggests similar products",
      "Leverages large language models for natural language understanding",
      "Uses generative AI for creating personalized outfit combinations"
    ],
    technologies: [
      "Python",
      "React",
      "Node.js",
      "LLMs",
      "LangChain",
      "TensorFlow",
      "RAG",
      "Fine-tuning",
      "REST APIs"
    ],
    links: [
      {
        text: "GitHub",
        url: "https://github.com/code-bloodead/outfitai",
        icon: "fa-github"
      },
      {
        text: "Live Demo",
        url: "https://www.youtube.com/watch?v=rGxVOGcAbcI",
        icon: "fa-external-link"
      }
    ],
    gallery: [
      "images/project-images/outfit-ai/1.png",
      "images/project-images/outfit-ai/2.png",
    ]
  },
  legallinguist: {
    title: "Legal Linguist - Simplify Legal Documents",
    subtitle: "Platform for querying and simplifying legal documents using LLMs and NLP",
    tags: ["AI/ML", "LLMs", "RAG", "NLP", "Legal Tech", "Python"],
    description: [
      "Built a platform for querying legal documents using LLMs, RAG, and fine-tuning to simplify legal language.",
      "NLP-based glossary generation to extract and define legal terms from documents.",
      "Backend and frontend architecture with Jupyter notebooks for model API and translation workflows.",
      "Uses Zephyr and translation models to make legal documents more accessible.",
    ],
    technologies: [
      "Python",
      "Jupyter Notebook",
      "LLMs",
      "RAG",
      "NLP",
      "Fine-tuning",
    ],
    links: [
      {
        text: "GitHub",
        url: "https://github.com/Darshan2003/LegalLinguist",
        icon: "fa-github"
      }
    ],
    gallery: [
      "images/project-images/legal-linguist/1.png",
      "images/project-images/legal-linguist/2.png",
    ]
  },
  shortenit: {
    title: "ShortenIt - URL shortener",
    subtitle: "Scalable URL Shortening Service",
    tags: ["Go", "Redis", "Cassandra", "Docker", "REST APIs", "CI/CD", "System Design"],
    description: [
      "Designed, developed and containerized a scalable URL shortener using Go, Redis and Cassandra DB.",
      "Handles ~ 125000 requests per second with no latency spikes and 99% uptime.",
      "Cache-first, write-through architecture: Redis as the first read layer (~95% hit rate) with CassandraDB as the source of truth. Writes go to both in parallel for low-latency reads and durability.",
      "High-concurrency design with Go goroutines: Stateless API services use goroutines to parallelize I/O (Redis and Cassandra writes), enabling high throughput with minimal thread overhead and horizontal scaling.",
      "Base62-encoded variable-length IDs: Generates URL-safe short identifiers that improve space utilization and support higher key capacity without collisions, optimized for read-heavy traffic."
    ],
    technologies: [
      "Go",
      "Redis",
      "Cassandra",
      "Docker",
      "REST APIs",
      "CI/CD",
      "System Design",
      "Locust",
      "Load Testing",
      "Performance Testing",
      "CQL"

    ],
    links: [
      {
        text: "GitHub",
        url: "https://github.com/kennethnrk/Shorten.it",
        icon: "fa-github"
      },
      {
        text: "LinkedIn Post",
        url: "https://www.linkedin.com/posts/kenneth-rodrigues_how-fast-is-go-really-while-brushing-up-activity-7416899671291478017-aRsm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-3APoBEkVZ5O9CzdTOVTPvDst8XBEeKB8",
        icon: "fa-linkedin"
      }
    ],
    gallery: [
      "images/project-images/shorten-it/1.jpg",
    ]
  },
  sportsmatch: {
    title: "SportsMatch - Find people to play sports with",
    subtitle: "Cross-platform sports matching app",
    tags: ["Mobile App", "React Native", "Node.js", "MongoDB", "UI/UX Design", "Vector Search"],
    description: [
      "A mobile application designed for UMass students to organize, discover, and participate in sports games and competitions.",
      "The app streamlines the entire sports game lifecycle from creation to participation, including player matching, scheduling, and notifications.",
      "Uses vector search to find matches based on user's interests.",
      "Email and push notifications for updates.",
      "JWT Authentication"
    ],
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Vector Search",
      "Express.js",
      "Cloud Database (Atlas)",
      "Expo",
    ],
    links: [
      {
        text: "GitHub",
        url: "https://github.com/kennethnrk/sportsmatch",
        icon: "fa-github"
      },
      {
        text: "Demo",
        url: "https://drive.google.com/file/d/1p_02jQd5Tg83fOlWXkQ0k11zkH3ROjUY/view?usp=drive_link",
        icon: "fa-external-link"
      }
    ],
    gallery: [
      "images/project-images/sports-match/spm-1.png",
      "images/project-images/sports-match/spm-2.png",
    ]
  },
  strides: {
    title: "Strides - Marathon Organizer",
    subtitle: "All in one Marathon Organizer",
    tags: ["React", "Node.js", "MongoDB", "UI/UX Design", "Mapbox API", "Web Sockets"],
    description: [
      "A platform for designing marathon courses, managing runner registration, and tracking participants in real time.",
      "Includes course planning tools, registration management, and live GPS tracking with leaderboards and safety monitoring.",
      "Real-time communication using WebSockets."
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Mapbox API",
      "Express.js",
      "WebSockets",
      "Tailwind CSS",
    ],
    links: [
      {
        text: "GitHub",
        url: "https://github.com/kennethnrk/strides",
        icon: "fa-github"
      }
    ],
    gallery: [
      "images/project-images/strides/strides-1.png",
      "images/project-images/strides/strides-2.png",
    ]
  },
  blindmatch: {
    title: "Blind Match - Blind Dating App",
    subtitle: "Blind Dating App",
    tags: ["React", "React Native", "Node.js", "MongoDB", "UI/UX Design", "Web Sockets"],
    description: [
      "A web and mobile app that allows users to find matches based on their interests, preferences and location.",
      "Vector based similarity search to find matches based on user's interests.",
      "Real-time chatting using WebSockets."
    ],
    technologies: [
      "React",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Vector Search",
      "WebSockets",
    ],
    links: [
      {
        text: "GitHub Web",
        url: "https://github.com/kennethnrk/BlindMatchWeb",
        icon: "fa-github"
      },
      {
        text: "GitHub Mobile",
        url: "https://github.com/kennethnrk/BlindDatingApp",
        icon: "fa-github"
      }
    ],
    gallery: [
      "images/project-images/blind-match/1.png",
      "images/project-images/blind-match/3.png",
      "images/project-images/blind-match/4.png",
      "images/project-images/blind-match/5.png",
      "images/project-images/blind-match/6.png",
      "images/project-images/blind-match/7.png",
      "images/project-images/blind-match/8.png",
    ]
  },
  greencurve: {
    title: "GreenCurve - Trading Advisor",
    subtitle: "Freelance Project for GreenCurve Securities - a trading advisor platform",
    tags: ["React", "Node.js", "MongoDB", "UI/UX Design", "SEO", "Markdown"],
    description: [

      "Developed a trading advisory platform for a SEBI registered broker. SEO optimized to maximize visibility and user engagement.",
      "Designed and implemented the UI/UX for the trading platform, scalabe and responsive for all devices.",
      "Built a markdown blog generation engine to display the trading analysis.",
    ],
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "UI/UX Design",
      "SEO",
      "Markdown",
    ],
    links: [
    ],
    gallery: [
      "images/project-images/greencurve/1.png",
      "images/project-images/greencurve/2.png",
      "images/project-images/greencurve/3.png",
      "images/project-images/greencurve/4.png",
      "images/project-images/greencurve/5.png",
      "images/project-images/greencurve/6.png",
      "images/project-images/greencurve/7.png",
    ]
  },
  dcmedical: {
    title: "Distributed Medical File Store",
    subtitle: "Distributed File System designed for the healthcare industry",
    tags: ["Distributed File System", "System design", "gRPC", "Networking"],
    description: [
      "Scalable, distributed file storage system with dynamic overlay fabric architecture supporting heterogeneous server inter-operation.",
      "Implements RAFT consensus algorithm for cluster coordination, automatic failure recovery, and data replication across distributed nodes.",
      "Features intelligent file chunking with parallel execution, work-stealing algorithms, and caching optimization for high-performance file operations (upload, download, search, list, delete, update).",
    ],
    technologies: [
      "Distributed File System",
      "System Design",
      "Leader Election",
      "Consensus Algorithm",
      "File Replication",
      "CAP Theorem",
      "gRPC",
      "protobuf",
      "Python"
    ],
    links: [
      {
        text: "GitHub",
        url: "https://github.com/kennethnrk/distributed-healthcare-datastore",
        icon: "fa-github"
      }
    ],
    gallery: [
      "images/project-images/dcmedical/1.png",
      "images/project-images/dcmedical/2.png",
    ]
  },
  gsoc_contributor: {
    title: "Google Summer of Code",
    subtitle: "Open Source Contributor at Zulip",
    tags: ["Open Source", "Contributor", "Google Summer of Code", "Zulip"],
    description: [
      "Developed a new search filter to handle message reactions.",
      "Refactored the entire Django backend to use Pydantic models for validation and serialization.",
      "Collaborated on bug fixes while communicating across time zones.",
      "Worked on improving the usability of the Web UI using the keyboard.",
      "Contributed to 15+ issues across the codebase, writing automated unit, integration, and deployment tests.",
    ],
    technologies: [
      "Python",
      "SQL",
      "PostgreSQL",
      "Django",
      "Pydantic",
      "JQuery",
      "Code Review",
      "Unit Tests",
    ],
    links: [
      {
        text: "GitHub",
        url: "https://github.com/zulip/zulip/pulls?page=1&q=is%3Apr+author%3Akennethnrk+is%3Aclosed",
        icon: "fa-github"
      },
      {
        text: "Documentation",
        url: "https://summerofcode.withgoogle.com/archive/2024/projects/lKu2OOgZ",
        icon: "fa-book"
      }
    ],
    gallery: [
      "images/project-images/gsoc/reactions.png",
      "images/project-images/gsoc/isfollowed.png",
    ]
  },
  gsoc_mentor: {
    title: "Google Summer of Code",
    subtitle: "Mentor at Zulip",
    tags: ["Open Source", "Mentor", "Google Summer of Code", "Zulip", "Leadership"],
    description: [
      "Mentored a new contributor to the Zulip codebase.",
      "Managed the deployment of 7 new features and bug fixes, primarily focused on the search and settings features.",
      "Responsible for project planning and evaluation.",
      "Performed regular code and pull request reviews, ensuring high-quality code and maintenance of test coverage.",
    ],
    technologies: [
      "Project Management",
      "Code Review",
      "Test Coverage",
      "Code Quality",
      "Python",
      "Django",
      "JQuery",
    ],
    links: [
      {
        text: "Documentation",
        url: "https://summerofcode.withgoogle.com/archive/2025/projects/AtsZHFbc",
        icon: "fa-book"
      }
    ],
    gallery: [
      "images/project-images/gsoc/gate.gif",
      "images/project-images/gsoc/settings.png",
    ]
  },
  madads: {
    title: "Mad Ads - Smart Ad Matching for Content Creators",
    subtitle: "AI ad marketplace that auto-matches brands to creators and inserts ads at the right moment",
    tags: ["AI/ML", "Computer Vision", "Ad Tech", "Creator Economy", "Video", "LLMs"],
    description: [
      "AI ad marketplace that auto-matches brands to creators and programmatically inserts the right ads into natural breakpoints in video content.",
      "Computer vision and scene segmentation detect breakpoints; vector embeddings enable semantic matching between content themes and product categories.",
      "Automated video editing pipeline stitches ad clips into creator content at contextual moments — no manual editing required.",
      "Helps small creators access brand deals with fully automated matchmaking and insertion, not just the top 1%.",
      "Semantic-level content interpretation and ML-based ad selection scoring (beyond keyword matching) so ads blend instead of interrupt.",
      "Building toward generative ad creation, pay-per-performance revenue splits, and real-time A/B matching for viewer cohorts.",
    ],
    technologies: [
      "Python",
      "React",
      "Snowflake",
      "Computer Vision",
      "Vector Embeddings",
      "LLMs",
      "RAG",
      "Video Editing",
    ],
    links: [
      {
        text: "GitHub",
        url: "https://github.com/kennethnrk/mad-ads",
        icon: "fa-github"
      }
    ],
    gallery: [
      "images/project-images/mad-ads/1.png",
      "images/project-images/mad-ads/2.jpg",
      "images/project-images/mad-ads/3.jpg",
    ]
  }
};
