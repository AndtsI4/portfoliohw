export const personalInfo = {
  name: "ანდრია ციციშვილი",
  initials: "აც",
  role: "Full-Stack & Systems Developer",
  status: "ღიაა ახალი გამოწვევებისა და პროექტებისთვის",
  tagline: "ვქმნი თანამედროვე ვებ-აპლიკაციებს, ვმუშაობ ალგორითმულ ამოცანებზე C++-ში, მაინტერესებს მიკროკონტროლერები (Arduino) და სისტემური ტექნოლოგიები.",
  about: `გამარჯობა! მე ვარ ანდრია ციციშვილი — პროგრამული უზრუნველყოფის დეველოპერი.
ჩემი ძირითადი ინტერესის სფეროებია ალგორითმული პროგრამირება (Competitive Coding) C++-ზე, Full-Stack ვებ-დეველოპმენტი (Python/Flask, React, REST API) და ჩაშენებული სისტემები (Arduino).
მიყვარს ოპტიმიზებული, სუფთა კოდის წერა, სისტემური გარემოს მორგება (Void Linux, Sway) და კომპლექსური ტექნიკური გამოწვევების გადაჭრა.`,
  email: "andria.tsitsishvilite06@geolab.edu.ge",
  github: "https://github.com/AndtsI4",
  stats: [
    { value: "3+", label: "წლიანი გამოცდილება", icon: "fa-solid fa-code" },
    { value: "10+", label: "დასრულებული პროექტი", icon: "fa-solid fa-diagram-project" },
    { value: "100%", label: "თავდადება & ხარისხი", icon: "fa-solid fa-check-double" },
    { value: "24/7", label: "სწავლის მოტივაცია", icon: "fa-solid fa-fire" }
  ]
};

export const specializations = [
  {
    id: "cpp",
    iconText: "C++",
    iconColor: "indigo",
    title: "C++ Competitive Coding",
    description: "ალგორითმული ამოცანების ამოხსნა და ოპტიმიზაცია C++ ენაზე. მონაცემთა სტრუქტურები და ეფექტური გამოთვლები.",
    tags: ["Algorithms", "STL", "Data Structures", "C++20"]
  },
  {
    id: "web",
    iconText: "</>",
    iconColor: "cyan",
    title: "Web Development",
    description: "სრული ვებ-დეველოპმენტი: React, Python (Flask), SQLAlchemy, Tailwind CSS, REST API და მონაცემთა ბაზები.",
    tags: ["React", "Flask", "SQLAlchemy", "TailwindCSS", "REST API"]
  },
  {
    id: "hardware",
    iconText: "⚡",
    iconColor: "amber",
    title: "Hardware & IoT",
    description: "Arduino მიკროკონტროლერებთან მუშაობა, სენსორების მართვა და საბაზისო კიბერუსაფრთხოება (Cybersecurity fundamentals).",
    tags: ["Arduino", "IoT", "Sensors", "Security"]
  },
  {
    id: "os",
    iconText: "#_",
    iconColor: "purple",
    title: "ოპერაციული სისტემები",
    description: "Void Linux with Sway, crDroid ROM. სისტემური გარემოს მორგება, პროცესების მართვა და Shell სკრიპტინგის ავტომატიზაცია.",
    tags: ["Void Linux", "Sway", "Bash", "Kernel"]
  }
];

export const projects = [
  {
    id: "ecommerce",
    title: "ვებ-აპლიკაცია (Python Flask & SQLAlchemy)",
    category: "Full-Stack Web App",
    badge: "Web App • Full-Stack",
    badgeColor: "blue",
    description: "მონაცემთა ბაზასთან ინტეგრირებული მრავალფუნქციური ვებ-აპლიკაცია CRUD ოპერაციებით, მომხმარებელთა უსაფრთხო ავტორიზაციითა და რესპონსიული ინტერფეისით.",
    technologies: "Python (Flask), SQLAlchemy, Bootstrap/Tailwind, HTML5, CSS",
    tags: ["Python", "Flask", "SQLAlchemy", "Bootstrap", "CRUD", "Auth"],
    image: "/images/project1.svg",
    githubUrl: "https://github.com/AndtsI4/portfoliohw",
    demoUrl: "#"
  },
  {
    id: "cpp-coding",
    title: "C++ ალგორითმული გადაწყვეტები (Competitive Coding)",
    category: "Algorithms & Optimization",
    badge: "Competitive Coding • Performance",
    badgeColor: "emerald",
    description: "ოპტიმიზებული ალგორითმული გადაწყვეტილებების ნაკრები რთული გამოთვლითი ამოცანებისთვის (გრაფები, დინამიური დაპროგრამება, რთული მონაცემთა სტრუქტურები).",
    technologies: "C++ (STL, Graph Theory, DP, Combinatorics)",
    tags: ["C++20", "STL", "Data Structures", "Graph Theory", "Optimization"],
    image: "/images/project2.svg",
    githubUrl: "https://github.com/AndtsI4/portfoliohw",
    demoUrl: "#"
  },
  {
    id: "arduino-iot",
    title: "ჭკვიანი მიკროკონტროლერის სისტემა (Arduino & IoT)",
    category: "Embedded & Hardware",
    badge: "Hardware • IoT & Sensors",
    badgeColor: "amber",
    description: "აპარატურული სისტემა აგებული Arduino პლატფორმაზე სხვადასხვა სენსორების (ტემპერატურა, მანძილი, განათება) მონიტორინგისთვის და აქტუატორების მართვისთვის.",
    technologies: "Arduino IDE, C/C++, Sensors, I2C / SPI Communication",
    tags: ["Arduino", "Embedded C++", "IoT", "Sensors", "Hardware"],
    image: "/images/project3.svg",
    githubUrl: "https://github.com/AndtsI4/portfoliohw",
    demoUrl: "#"
  }
];

export const navItems = [
  { label: "მთავარი", href: "#hero", icon: "fa-solid fa-house" },
  { label: "ჩემ შესახებ", href: "#about", icon: "fa-regular fa-user" },
  { label: "მიმართულებები", href: "#skills", icon: "fa-solid fa-code" },
  { label: "პროექტები", href: "#projects", icon: "fa-solid fa-layer-group" },
  { label: "თანამშრომლები", href: "#employees", icon: "fa-solid fa-users" },
  { label: "კონტაქტი", href: "#contact", icon: "fa-regular fa-envelope" }
];
