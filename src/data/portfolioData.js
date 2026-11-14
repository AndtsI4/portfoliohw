export const personalInfo = {
  name: "ანდრია ციციშვილი",
  handle: "andtsi4",
  initials: "აც",
  role: "Systems, Algorithm & Full-Stack Developer",
  status: "ღიაა ახალი გამოწვევებისა და პროექტებისთვის",
  tagline: "ვწერ ეფექტურ C++ ალგორითმებს, ვქმნი თანამედროვე React & Python ვებ-სისტემებს და ვაპროგრამებ Arduino მიკროკონტროლერებს.",
  about: `გამარჯობა! მე ვარ ანდრია ციციშვილი. ჩემი ფოკუსია კომპიუტერული მეცნიერების ფუნდამენტური და პრაქტიკული მიმართულებები:
ალგორითმული ოპტიმიზაცია და მონაცემთა სტრუქტურები C++-ში (Competitive Programming), თანამედროვე Full-Stack ვებ-ინჟინერია (React, Python/Flask, REST APIs), და დაბალდონიანი აპარატურული სისტემები (Arduino, Embedded C).
ჩემი სამუშაო გარემო აგებულია მინიმალისტურ და სწრაფ Linux დისტრიბუტივზე (Void Linux + Sway), რაც მაძლევს სისტემის სრულ კონტროლსა და მაქსიმალურ წარმადობას.`,
  email: "andria.tsitsishvilite06@geolab.edu.ge",
  github: "https://github.com/AndtsI4",
  systemSpecs: {
    os: "Void Linux x86_64",
    wm: "Sway (Wayland)",
    shell: "bash / zsh",
    editor: "Neovim / VS Code",
    compilers: "GCC 14.2 / Clang 18",
    status: "Active // Compiling"
  },
  stats: [
    { value: "3+", label: "წლიანი გამოცდილება", icon: "fa-solid fa-terminal", hint: "C++, Web & Embedded" },
    { value: "150+", label: "ამოხსნილი ალგორითმი", icon: "fa-solid fa-code-merge", hint: "Codeforces / LeetCode" },
    { value: "10+", label: "დასრულებული პროექტი", icon: "fa-solid fa-layer-group", hint: "Full-Stack & Hardware" },
    { value: "< 15ms", label: "საშუალო Run-time", icon: "fa-solid fa-bolt", hint: "ოპტიმიზებული კოდი" }
  ]
};

export const specializations = [
  {
    id: "cpp",
    badge: "Performance & Logic",
    iconText: "C++",
    iconColor: "cyan",
    title: "C++ Competitive Coding",
    subtitle: "ალგორითმული ოპტიმიზაცია & STL",
    description: "სირთულის შემცირება O(N log N) და O(1) ზღვრამდე. გრაფების თეორია, დინამიური დაპროგრამება, სეგმენტური ხეები და მეხსიერების ეფექტური მართვა.",
    tags: ["C++20", "STL Containers", "Graph Theory", "DP", "Segment Trees"]
  },
  {
    id: "web",
    badge: "Full-Stack Web",
    iconText: "</>",
    iconColor: "emerald",
    title: "Full-Stack Web Engineering",
    subtitle: "React, Python Flask & REST APIs",
    description: "რესპონსიული, კომპონენტური ვებ-აპლიკაციები React 18-ით, სუფთა RESTful არქიტექტურა, SQLAlchemy ORM მონაცემთა ბაზებითა და Tailwind CSS ინტერფეისით.",
    tags: ["React 18", "Python Flask", "SQLAlchemy", "Tailwind CSS", "REST API"]
  },
  {
    id: "hardware",
    badge: "Embedded & IoT",
    iconText: "⚡",
    iconColor: "amber",
    title: "Hardware & IoT Systems",
    subtitle: "Arduino, სენსორები & კიბერუსაფრთხოება",
    description: "მიკროკონტროლერების დაპროგრამება (C/C++), I2C/SPI საკომუნიკაციო პროტოკოლები, ანალოგური/ციფრული სენსორების მართვა და სისტემური კიბერუსაფრთხოების საფუძვლები.",
    tags: ["Arduino", "Embedded C++", "I2C / SPI", "Sensors", "Hardware Debugging"]
  },
  {
    id: "os",
    badge: "Core & Systems",
    iconText: "#_",
    iconColor: "violet",
    title: "Unix & Systems Architecture",
    subtitle: "Void Linux, Sway & Automation",
    description: "დაბალდონიანი სისტემების კონფიგურაცია, Wayland/Sway გარემო, Linux runit სერვისების მართვა, Bash/POSIX Shell სკრიპტინგი და პროცესების მონიტორინგი.",
    tags: ["Void Linux", "Sway / Wayland", "Bash Scripting", "Runit", "Git Workflow"]
  }
];

export const projects = [
  {
    id: "ecommerce",
    category: "web",
    categoryLabel: "Web Development",
    title: "Flask & SQLAlchemy CRUD Web Platform",
    badge: "Full-Stack • Production Ready",
    badgeColor: "emerald",
    description: "მონაცემთა ბაზასთან ინტეგრირებული ვებ-აპლიკაცია CRUD ოპერაციებით, ავტორიზაციით, სესიების მართვითა და ოპტიმიზებული RESTful ენდფოინთებით.",
    metrics: "Flask 3.0 • SQLite/PostgreSQL • REST Endpoints",
    technologies: "Python (Flask), SQLAlchemy, Bootstrap & Tailwind, Jinja2, REST API",
    tags: ["Python", "Flask", "SQLAlchemy", "REST API", "CRUD", "Auth"],
    image: "/images/project1.svg",
    githubUrl: "https://github.com/AndtsI4/portfoliohw",
    demoUrl: null,
    highlights: [
      "მოდულარული სტრუქტურა Application Factory პატერნით",
      "უსაფრთხო პაროლების ჰეშირება Werkzeug-ით",
      "მონაცემთა ვალიდაცია და CSRF დაცვა"
    ]
  },
  {
    id: "cpp-coding",
    category: "algo",
    categoryLabel: "Algorithms & C++",
    title: "C++ Competitive Algorithm Suite",
    badge: "Algorithms • High Performance",
    badgeColor: "cyan",
    description: "ოპტიმიზებული ალგორითმების ბიბლიოთეკა რთული მათემატიკური და გრაფული ამოცანებისთვის. შემუშავებულია Codeforces & LeetCode სტანდარტების მიხედვით.",
    metrics: "0ms runtime • O(V+E) Graphs • O(log N) Queries",
    technologies: "C++20, STL, GCC Optimization flags (-O3), GDB",
    tags: ["C++20", "STL", "Graph Theory", "Dynamic Programming", "Bitmasking"],
    image: "/images/project2.svg",
    githubUrl: "https://github.com/AndtsI4/portfoliohw",
    demoUrl: null,
    highlights: [
      "Shortest Path: Dijkstra & Bellman-Ford",
      "Range Queries: Segment Tree & Fenwick Tree (BIT)",
      "Disjoint Set Union (DSU) ოპტიმიზირებული path compression-ით"
    ]
  },
  {
    id: "arduino-iot",
    category: "hardware",
    categoryLabel: "Hardware & IoT",
    title: "Smart Microcontroller Telemetry Hub",
    badge: "Embedded • Microcontrollers",
    badgeColor: "amber",
    description: "ავტონომიური აპარატურული გადაწყვეტილება Arduino-ზე: მრავალარხიანი სენსორული მონაცემების შეგროვება, I2C ეკრანზე ასახვა და სერიული ტელემეტრია.",
    metrics: "16MHz ATmega328P • 250ms Telemetry • Non-blocking loop",
    technologies: "Arduino IDE, Embedded C/C++, I2C, SPI, Sensor Arrays",
    tags: ["Arduino", "Embedded C++", "Hardware", "Sensors", "I2C Protocol"],
    image: "/images/project3.svg",
    githubUrl: "https://github.com/AndtsI4/portfoliohw",
    demoUrl: null,
    highlights: [
      "არაბლოკირებადი millis() ტაიმერები delay()-ს ნაცვლად",
      "I2C 0.96 OLED დისპლეის დრაივერის ინტეგრაცია",
      "ტემპერატურის, განათებისა და დისტანციის რეალურ დროში დამუშავება"
    ]
  }
];

export const navItems = [
  { label: "მთავარი", href: "#hero", icon: "fa-solid fa-terminal" },
  { label: "ჩემ შესახებ", href: "#about", icon: "fa-regular fa-user" },
  { label: "სპეციალიზაცია", href: "#skills", icon: "fa-solid fa-microchip" },
  { label: "პროექტები", href: "#projects", icon: "fa-solid fa-code-branch" },
  { label: "თანამშრომლები", href: "#employees", icon: "fa-solid fa-users-gear" },
  { label: "კონტაქტი", href: "#contact", icon: "fa-regular fa-envelope" }
];
