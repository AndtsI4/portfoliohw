# ანდრია ციციშვილი — პირადი პორტფოლიო (React & Vite)

თანამედროვე, სრულად რესპონსიული პირადი პორტფოლიოს ვებსაიტი შექმნილი **React 18**-ის, **Vite**-ის, **Tailwind CSS**-ისა და **Font Awesome**-ის გამოყენებით.

---

## 🚀 დავალება 3: React მიგრაცია და კომპონენტური არქიტექტურა

საიტი სრულად გარდაიქმნა მოდულარულ React აპლიკაციად ლექციის სტანდარტების (`geolab-asanidze/todo-list2`) მიხედვით:
1. **მთავარი გვერდის დაყოფა კომპონენტებად:**
   - `Navbar.jsx` — ჰედერი, ბრენდინგი, დესკტოპ ნავიგაცია და მობილური ბურგერ მენიუ `useState` ჰუკით.
   - `Hero.jsx` — მისასალმებელი ბანერი, სტატუსის ინდიკატორი, აღწერა, CTA ღილაკები და ავატარი.
   - `AboutSection.jsx` — ბიოგრაფია, სასწავლო სტატუსი და მიღწევების სტატისტიკური ბარათები.
   - `Specializations.jsx` — მიმართულებების სექცია, რომელიც იყენებს მრავალჯერად `SkillCard` კომპონენტს.
   - `ProjectsSection.jsx` — პროექტების სექცია კატეგორიების ინტერაქტიული ფილტრით (`useState`) და `ProjectCard` კომპონენტით.
   - `EmployeesSection.jsx` — თანამშრომლების REST API სექცია (`useEffect`, `useState`), ძებნისა და წაშლის მხარდაჭერით.
   - `ContactSection.jsx` — საკონტაქტო ბარათები და ინტერაქტიული კონტაქტის ფორმა state მართვითა და შეტყობინების დადასტურებით.
   - `Footer.jsx` — საიტის ქვედა ნაწილი სწრაფი ნავიგაციითა და საავტორო უფლებებით.

2. **მრავალჯერადად გამოყენებადი (Reusable) კომპონენტები:**
   - `SectionHeader.jsx` — უნიფიცირებული სათაურის, ბეიჯისა და მოქმედების ღილაკების კომპონენტი, რომელიც გამოიყენება ყველა სექციაში (`props`: `badge`, `badgeColor`, `title`, `icon`, `description`, `action`).
   - `SkillCard.jsx` — მიმართულებების ბარათი (`props`: `iconText`, `iconColor`, `title`, `description`, `tags`).
   - `ProjectCard.jsx` — პროექტის ქარდი სურათის პრევიუთი, ტეგებით, ბეიჯითა და GitHub ბმულებით (`props`: `project`).
   - `EmployeeCard.jsx` — API-დან წამოღებული თანამშრომლის ბარათი გრადიენტული ავატარით, დეტალებითა და წაშლის ქმედებით (`props`: `employee`, `onDelete`).
   - `StatCard.jsx` — სტატისტიკური მეტრიკის ბარათი აიქონითა და გრადიენტული რიცხვით (`props`: `value`, `label`, `icon`).

3. **მონაცემთა მოდელირება (Props & Data Separation):**
   - მონაცემები გამოყოფილია სუფთა მოდულში: `src/data/portfolioData.js`.
   - კომპონენტები იღებენ მონაცემებს `props`-ის საშუალებით და იყენებენ `.map()` მეთოდს გამეორებადი ელემენტების დასარენდერებლად.

4. **REST API & ინტერაქტიული State:**
   - `EmployeesSection.jsx` იყენებს `useEffect`-ს `https://jsonplaceholder.typicode.com/users` მისამართიდან მონაცემების წამოსაღებად (Loading & Error state-ებით).
   - ძებნის ველის ფილტრაცია სახელის, მეილისა და კომპანიის მიხედვით რეალურ დროში.
   - მობილური მენიუს გახსნა/დახურვა React State-ით.
   - კატეგორიების დინამიური ფილტრი პროექტების სექციაში.

---

## 🛠 გამოყენებული ტექნოლოგიები

- **React 18** (Functional Components, Hooks: `useState`, `useEffect`)
- **Vite** (Next Generation Frontend Tooling)
- **Tailwind CSS** & PostCSS / Autoprefixer
- **Font Awesome 6.5.1**
- **JSONPlaceholder API**

---

## 💻 პროექტის გაშვება ლოკალურად

```bash
# 1. დამოკიდებულებების ინსტალაცია
npm install

# 2. დეველოპმენტ სერვერის გაშვება
npm run dev

# 3. საწარმოო (Production) ბილდის აწყობა
npm run build
```

---

## 📁 პროექტის სტრუქტურა

```text
├── legacy-html/             # წინა დავალების სტატიკური HTML ფაილები
├── public/
│   └── images/              # პროექტების SVG ილუსტრაციები და ავატარი
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── EmployeeCard.jsx     # Reusable
│   │   ├── EmployeesSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx      # Reusable
│   │   ├── ProjectsSection.jsx
│   │   ├── SectionHeader.jsx    # Reusable
│   │   ├── SkillCard.jsx        # Reusable
│   │   ├── Specializations.jsx
│   │   └── StatCard.jsx         # Reusable
│   ├── data/
│   │   └── portfolioData.js     # Data definitions
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```
