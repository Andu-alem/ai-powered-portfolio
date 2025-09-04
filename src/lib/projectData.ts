
const projectsData = [{
    title: "TalkBookAI",
    subTitle: "Chat with any book",
    description: "TalkBookAI is an innovative web application that allows users to engage in dynamic conversations with books. By selecting a book from a curated list, users can ask questions and receive responses as if they were interacting with the author themselves. The app leverages RAG techniques to provide contextually relevant answers, enhancing the reading experience. Built with a robust tech stack including FastAPI, MongoDB (as a vector and document database), LangChain, Google Gemini API, and React Router V7. Authentication is securely managed with JWT Auth.",
    features: "Chat with books, Author-like responses, Conversation history, User authentication",
    techStack: ["FastAPI", "MongoDB Atlas", "LangChain", "Google Gemini API", "TypeScript", "React Router V7", "Tailwind", "Shadcn/ui", "JWT Auth", "Docker", "Render", "Vercel"],
    link: "https://chatbook-ai.vercel.app",
    codeLink: "https://github.com/Andu-alem/chatbook-ai",
    image: "/projects/talkbookai.PNG"
},{
    title: "FinTrack",
    subTitle: "A telegram mini app",
    description: "FinTrack is a modern and responsive Telegram Mini App designed to help users effortlessly track their income, expenses, and budgets within the Telegram ecosystem. Built with a mobile-first approach, the app provides a seamless user experience, adapting to Telegram's native theme (light/dark) using the Telegram WebApp SDK (TWA SDK).",
    features: "Dashboard overview, Budget management, Transaction tracking, Analytics, Responsive UI",
    techStack: ["React", "TS", "Tailwind", "ShadCN", "React-Router", "Tanstack Query", "Zod", "Firebase Firestore", "Telegram Web Api"],
    link: "https://t.me/fintrack_app_bot/FinTrack",
    codeLink: "https://github.com/Andu-alem",
    image: "/projects/fintrack.PNG"
},{
    title: "DevFriend",
    subTitle: "A developers tool",
    description: "DevFriend is a full-stack productivity web app for developers to organize their job applications, personal projects, and important events in one place, helping them stay focused while managing their career journey. Built using Next.js(App router & Api routes) and other modern stacks.",
    features: "Project Tracking, Job Application Tracker, Event Scheduling, Email and Social Authentication, Landing Page, Clean UI/UX",
    techStack: ["TypeScript", "Next.js", "Better-Auth", "TailwindCSS", "Shadcn/ui", "Drizzle", "Postgres", "Neon", "Vercel"],
    link: "https://devfriend-one.vercel.app",
    codeLink: "https://github.com/Andu-alem/devfriend",
    image: "/projects/devfriend.PNG"
},{
    title: "ChefGPT",
    subTitle: "Your Cooking Companion",
    description: "An AI-powered recipe recommender web application that transforms the ingredients you already have into delicious, step-by-step recipes in seconds. Built with a modern, scalable tech stack, ChefGPT blends seamless authentication, powerful AI integration, and a beautiful, responsive UI to make cooking inspiration accessible anytime.",
    techStack: ["TypeScript", "Nuxt3", "Better-Auth", "TailwindCSS", "Shadcn/ui", "MongoDB", "MongoDB Atlas", "Vercel AI-SDK", "Google GenAI", "Netlify", "Sentry"],
    link: "https://chefgpt-recipe.netlify.app",
    codeLink: "https://github.com/Andu-alem/ai-recipe-recommender",
    image: "/projects/chefgpt.PNG"
},{
    title: "Classice Men's",
    subTitle: "For Fashionista!",
    description: "A comprehensive, feature rich, and responsive e-commerce website for Ideal Men's Fashion store using a modern tech stack and deployed on Vercel, leveraging Vercel Blob Store ad Neon PostgreSQL DB provider.",
    features: "Product listing page, Product detail page, Pagination, Cart management, Admin functionality, and Dark/Light Mode.",
    techStack: ["Next.js", "TS", "Tailwind", "ShadCN", "Zustand", "Better-Auth", "Prisma", "PostgreSQL"],
    link: "https://mencollection.vercel.app/",
    codeLink: "https://github.com/Andu-alem/Men-Collection",
    image: "/projects/classicman.PNG"
},{
    title: "ServiceAd",
    subTitle: "Share your service, Find other's",
    description: "A platform designed to empower users to promote their services and businesses while making it easier for others to find what they need. The site provides an intuitive way for users to share their business locations and addresses, ensuring seamless connections between service providers and customers. The site deployed on Vercel and MongoDB Atlas for database hosting.",
    features: "Services and Businesses listing page, Detail page, Service creation and manage functionality, Search, filter, and rate service functionality",
    techStack: ["Next.js", "Tailwind", "Context API", "Next-Auth", "MongoDB", "Mongoose"],
    link: "https://servicead.vercel.app",
    codeLink: "https://github.com/Andu-alem",
    image: "/projects/serviceadv.PNG"
},{
    title: "NewFormHome",
    subTitle: "Furniture company",
    description: "Modern multi-page site with product listings, cart, and blog. The initial structure and layout were rapidly scaffolded using Vercel v0, which I then extensively customized by adjusting the generated code, fixing layout and functionality issues, and integrating it with a Strapi CMS backend for content management. Cloudinary is used for media storage.",
    features: "Responsive Design, Product Showcase, Blog, SEO Optimzation",
    techStack: ["Next.js", "Tailwind", "Shadcn/ui", "Strapi CMS", "v0.dev"],
    link: "https://newformhome.vercel.app/",
    codeLink: "https://github.com/Andu-alem",
    image: "/projects/newformhome.JPG"
},{
    title: "QuantumBit",
    subTitle: "Technology Institute",
    description: "I designed and developed a compelling landing page for QuantumBit, a Technology Institute, to showcase their courses, expertise, and offerings. The platform combines aesthetic appeal with functionality, delivering a high-performance and SEO-friendly experience. Deployed on Cloudflare pages",
    features: "SEO friendly Landing page with Courses, Pricing, FAQ, and  Testimonials, and with Blog functionality.",
    techStack: ["Astro", "Tailwind", "React", "Markdown"],
    link: "https://quantumbit.netlify.app",
    codeLink: "https://github.com/Andu-alem",
    image: "/projects/quantum-bit.PNG"
},{
    title: "Support Ticketing System",
    subTitle: "",
    description: "Users can issue support tickets; admins manage and update statuses. Built using the MERN stack and deployed on Vercel and Render.",
    features: "Signup/Login, Ticket Creation, Ticket Managment, Responsive Design",
    techStack: ["React", "React-Router", "Tailwind", "Node.js", "Express.js", "MongoDB"],
    link: "https://support-ticketing-system-silk.vercel.app",
    codeLink: "https://github.com/Andu-alem/support-ticketing-system",
    image: "/projects/support2.PNG"
},{
    title: "Personal Portfolio Website",
    subTitle: "Multilingual",
    description: "Multilingual support and SEO-friendly build using Astro, GitHub Pages, and GitHub Actions for automated deployment.",
    features: "Skill showcase, Projects Gallary, Certifications, Responsive Design",
    techStack: ["Astro", "Tailwind", "DaisyUi", "GitHub Actions"],
    link: "https://andu-alem.github.io",
    codeLink: "https://github.com/Andu-alem/Andu-alem.github.io",
    image: "/projects/portfolio-astro.PNG"
},{
    title: "ChessGame",
    subTitle: "Progressive Web App",
    description: "I developed ChessGame, a progressive web app that offers users a complete chess experience with versatile features and modern design. The app is designed for both chess enthusiasts and casual players, providing a platform to play against an AI opponent powerd by Stockfish or a friend. The app is deployed on Render.",
    features: "Board Customization, Opponent Options, Difficulty Levels, Full Chess Functionality, Progressive Web App - works offline",
    techStack: ["React", "Context API", "Tailwind", "Stockfish", "Chess.js"],
    link: "https://react-chess-app-uixz.onrender.com/",
    codeLink: "https://github.com/Andu-alem/react-chess-app",
    image: "/projects/chesszone.PNG"
},{
    title: "Portfolio 2",
    subTitle: "Website",
    description: "A modern and sleek portfolio site designed to highlight my skills, completed project, and certifications in a user-friendly and visually appealing format. Deployed on Netlify",
    features: "Skill showcase, Projects Gallary, Certifications, Responsive Design",
    techStack: ["Vue3", "Vue-Router", "Tailwind"],
    link: "https://andufereja-portfolio.netlify.app/",
    codeLink: "https://github.com/Andu-alem/AndualemFerejaPortolio",
    image: "/projects/portfolio.PNG"
},{
    title: "Cool Market",
    subTitle: "E-Commerce Web App",
    description: "A comprehensive, feature rich, and responsive e-commerce website store using a modern tech stack including Next.js, Tailwind CSS, and SWR in front-end and Laravel with Sanctum as a backend. With two communicate through a RESTful api.",
    features: "Product listing page, product detail page, pagination, cart management, and admin functionality.",
    techStack: ["Next.js", "Laravel", "Laravel Sanctum", "Tailwind", "SWR"],
    link: "https://github.com/Andu-alem/laravel-next-ecommerce",
    codeLink: "https://github.com/Andu-alem",
    image: "/projects/lara-next.PNG"
},{
    title: "EventUpdater",
    subTitle: "Event Sharing Platform",
    description: "i developed Event Updater, a dynamic web application designed to empower users to discover and share upcoming events in their town. The platform aims to be the ultimate go-to destination for all event-related information, fostering local connections and engagement. This platform is built using the MERN stack - React, Material UI, Express.js, MongoDB with MongoDB Atlas as a provider and Mongoose as an ORM and deployed on Render.",
    features: "Responsive Design, Event Listing, Event Creation and Sharing, Search and Filter",
    techStack: ["React", "MUI","Express.js", "MongoDB"],
    link: "https://eventsupcoming.onrender.com/",
    codeLink: "https://github.com/Andu-alem",
    image: "/projects/event_shot.JPG"
}]

export { projectsData }