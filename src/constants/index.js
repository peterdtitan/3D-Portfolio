import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  django,
  python,
  c,
  ruby,
  rails,
  laa,
  microverse,
  afrocentric,
  nstem,
  cryptogen,
  deras,
  metrics,
  bookstore
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Linux Admin",
    icon: mobile,
  },
  {
    title: "Database",
    icon: backend,
  },
  {
    title: "Technical Writing",
    icon: creator,
  },
];

const skills = [
  {
    id: 1,
    title: "Programming Languages",
    skills: [
      {
        color: "blue-text-gradient",
        skills: ["Python", "C", "Ruby", "JavaScript"]
      }
    ]
  },
  {
    id: 2,
    title: "Libraries & Frameworks",
    skills: [
      {
        color: "pink-text-gradient",
        skills: ["React", "Rails", "jQuery", "Django", "Node.js", "Docker", "Flask"]
      }
    ]
  },
  {
    id: 3,
    title: "Web Development",
    skills: [
      {
        color: "blue-text-gradient",
        skills: ["HTML 5", "CSS 3", "SASS", "JavaScript", "Tailwind-CSS", "Bootstrap"]
      }
    ]
  },
  {
    id: 4,
    title: "Database Management",
    skills: [
      {
        color: "green-text-gradient",
        skills: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"]
      }
    ]
  },
  {
    id: 5,
    title: "Operating Systems",
    skills: [
      {
        color: "pink-text-gradient",
        skills: ["Windows", "Linux", "Unix"]
      }
    ]
  },
  {
    id: 6,
    title: "Version Control",
    skills: [
      {
        color: "green-text-gradient",
        skills: ["Git", "SVN"]
      }
    ]
  },
  {
    id: 7,
    title: "Developer Tools",
    skills: [
      {
        color: "pink-text-gradient",
        skills: ["VSCode", "Visual Studio", "Github", "Slack", "Discord", "Trello", "Figma"]
      }
    ]
  },
  {
    id: 8,
    title: "Software Development Methodologies",
    skills: [
      {
        color: "blue-text-gradient",
        skills: ["Agile", "Waterfall"]
      }
    ]
  },
  {
    id: 9,
    title: "Professional",
    skills: [
      {
        color: "green-text-gradient",
        skills: ["Problem-Solving", "Solution-Oriented", "Collaboration", "Communication", "Adaptability"]
      }
    ]
  }
]

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "Rails",
    icon: rails,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web/IT and Analytics",
    company_name: "National STEM Honor Society (NSTEM)",
    icon: nstem,
    iconBg: "#383E56",
    points: [
      "Developing and maintaining web applications using html, css and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Student Mentor",
    company_name: "Microverse",
    icon: microverse,
    iconBg: "#E6DEDD",
    points: [
      "Provided guidance and assistance to new students enrolled in the Microverse Full-Stack Developer program",
      "Presented newbies with the tools needed to become successful in the most important week in 'The Portal' module.",
      "Booked and handled career advisory calls and chats.",
      "Code analysis and guide to external materials to improve learning.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Library Aid Africa",
    icon: laa,
    iconBg: "#ffff",
    points: [
      "Revamped the MVP to use up-to-date technologies.",
      "Actively collaborated in small teams with tight feedback loops to improve communication.",
      "Learnt a new tech stack in short timespan to deliver working product.",
      "Optimized data fetching using GraphQL. #383E56",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Afrocentric Kulture",
    icon: afrocentric,
    iconBg: "#E6DEDD",
    points: [
      "Developing a scalable MVP for a multi-vendor social e-commerce platform.",
      "Extensive database design and testing.",
      "Building, testing and integration of Google cloud functions, Next-Auth, Firestore, Google Maps.",
      "Reviewing, approving, and merging PR from across the team to deployment.",
      "Setting up optimized CI/CD pipelines.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Peter is a very responsive and timely person with a positive attitude towards his work. He is a great developer to work with as he discusses things openly. I recommend him.",
    name: "Mursedul Sumon",
    designation: "Developer",
    company: "Microverse",
    image: "https://ca.slack-edge.com/T47CT8XPG-U04F3N3FAGP-9e103e734ebf-512",
  },
  {
    testimonial:
      "Peter is exactly the sort of software developer any company would love. He views writing clean, accessible code as a calling, and he's great at identifying areas where we can improve UI. I can recommend him without reservation",
    name: "Blessing Okpara",
    designation: "Developer",
    company: "Microverse",
    image: "https://ca.slack-edge.com/T47CT8XPG-U03LQRX9SDU-6c7ac626729f-512",
  },
  {
    testimonial:
      "He created a stock management solution for me. I've never met a developer who truly cares about their clients' success like Peter does. Can't thank him enough!",
    name: "Nonso Nwankwo",
    designation: "Founder",
    company: "Bruno & Mark Pharmacy",
    image: "https://scontent.fecn1-1.fna.fbcdn.net/v/t1.18169-9/971741_10151482844118519_1799150855_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_Usu9OGoGX0AX8955Xo&_nc_ht=scontent.fecn1-1.fna&oh=00_AfB_Y9fgnVhPknaAIlk-KJ7Ag4kSHgSfnc5PSwB39PS_vw&oe=6482F4DA",
  },
];

const projects = [
  {
    name: "Dera's Kitchen",
    description:
      "Dera's Kitchen is a restaurant website that allows users to order food from their favorite restaurants and have it delivered to their doorstep. It features a Google sign-in with Firebase authentication, a dashboard for restaurant owners to manage their menu. Future updates would include a delivery tracking system, admin order management, and user info dashboard to manage delivery addresses.",
    tags: [
      {
        name: "vercel",
        color: "blue-text-gradient",
      },
      {
        name: "firestore",
        color: "green-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "pink-text-gradient",
      },
      {
        name: "storage",
        color: "blue-text-gradient",
      },
      {
        name: "firebase-auth",
        color: "green-text-gradient",
      },
      {
        name: "create-react",
        color: "pink-text-gradient",
      },
    ],
    image: deras,
    source_code_link: "https://github.com/peterdtitan/deras-kitchen",
    live_link: "https://deras-kitchen.vercel.app/"
  },
  {
    name: "Crypto Gen",
    description:
      "A demo website that makes use of a Next.Js framework to mock the functionalities of an investment website. The user has a profile route, dynamic pages use SSR, and there is an admin route to make changes to each user's data displayed. The project also has a Google Cloud Functions API that it makes use of to retrieve data from the Firestore in specified formats. Authentication is done with Credentials Provider from Next Auth combined with the Firestore to read user data and create a session.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firestore",
        color: "green-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "pink-text-gradient",
      },
      {
        name: "cloud-functions",
        color: "blue-text-gradient",
      },
      {
        name: "next-auth",
        color: "green-text-gradient",
      },
      {
        name: "GCP",
        color: "pink-text-gradient",
      },
    ],
    image: cryptogen,
    source_code_link: "https://github.com/peterdtitan/crypto-next",
    live_link: "https://crypto-next-seven.vercel.app/"
  },
  {
    name: "Metrics App",
    description:
      "Metrics App is an app designed to give each user an idea of what the air quality is like around supported cities of the world. It features a countries page with dynamic navigation to states and then cities within the country, before returning info on the selected city. It makes use of the redux store to update the countries as well as the state and cities for each country. Data on the city is fetched on each render as the values are constantly changed.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "pink-text-gradient",
      },
    ],
    image: metrics,
    source_code_link: "https://github.com/peterdtitan/metrics-app",
    live_link: "https://metrics-app.onrender.com"
  },
  {
    name: "Bookstore CMS",
    description:
      "A Bookstore CMS made with React and TailwindCSS. Uses an intro to redux for saving and managing progress on books read and added to the shelf. Future features would include a personalized profile library and ability to manage (add or remove books). Also, the state of the book being read would be persisted as opposed to being randomly generated. This app will then feature an integrated API and might be migrated to the Next.js framework.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "green-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "pink-text-gradient",
      },
    ],
    image: bookstore,
    source_code_link: "https://github.com/peterdtitan/bookstore",
    live_link: "https://bookstore-cms-widh.onrender.com"
  },
];

export { services, technologies, experiences, testimonials, projects, skills };
