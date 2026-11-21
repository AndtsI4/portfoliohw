# ანდრია ციციშვილი — პირადი პორტფოლიო (React Router & Vite)

თანამედროვე, სრულად რესპონსიული მრავალგვერდიანი პირადი პორტფოლიოს ვებსაიტი შექმნილი **React 18**-ის, **React Router**-ის (`react-router` / `react-router-dom`), **Vite**-ის, **Tailwind CSS**-ისა და **Font Awesome**-ის გამოყენებით.

---

## 🚀 დავალება 4: React Router მრავალგვერდიანი არქიტექტურა & API ინტეგრაცია

1. **`react-router` & `react-router-dom` ინსტალაცია და მარშრუტიზაცია:**
   აპლიკაციაში დაინსტალირდა `react-router` და `react-router-dom` (`npm install react-router react-router-dom`), ხოლო მარშრუტები გადანაწილდა შემდეგ გვერდებზე:
   - `/` — **მთავარი გვერდი (`HomePage.jsx`)**: სრული პორტფოლიო (Hero, ბიოგრაფია, სპეციალიზაციები, რჩეული პროექტები, გუნდის წევრები, კონტაქტი).
   - `/about` — **ჩემ შესახებ (`AboutPage.jsx`)**: დეტალური პროფილი, საინჟინრო ფილოსოფია, ტექნიკური სტატისტიკა და ინტერაქტიული Void Linux ტერმინალი.
   - `/skills` — **სპეციალიზაცია (`SkillsPage.jsx`)**: C++, Full-Stack Web, Arduino/IoT და ოპერაციული სისტემების დომენები.
   - `/projects` — **პროექტები (`ProjectsPage.jsx`)**: ყველა პროექტის კატალოგი რეალურ დროში ძებნის ფუნქციონალით, კატეგორიების ფილტრებითა და არქიტექტურული დეტალებით.
   - `/employees` — **თანამშრომლები (`EmployeesPage.jsx`)**: JSONPlaceholder `/users` რესურსი (GET, POST, DELETE, ძებნა და პოსტების მოდალი).
   - `/posts` — **ტექნიკური სტატიები (`PostsPage.jsx`)**: JSONPlaceholder `/posts` რესურსი რეალურ დროში საკვანძო სიტყვებით ძებნით, ახალი სტატიის დამატებით (POST) და კომენტარების ჩამოსაშლელი აკორდეონით (`GET /posts/:id/comments`).
   - `/contact` — **კონტაქტი (`ContactPage.jsx`)**: საკონტაქტო არხები, პირდაპირი ელ-ფოსტის კოპირების ხელსაწყო და React state-ით მართული ფორმა.
   - `*` — **404 Not Found (`NotFoundPage.jsx`)**: ტექნიკური 404 გვერდი მთავარზე დაბრუნების ბმულით.

2. **JSONPlaceholder API ინტეგრაცია & რესურსები:**
   - **`/posts` რესურსი**:
     - `GET /posts` — 100 სტატიის დინამიური ჩატვირთვა.
     - **ძებნის ფუნქციონალი** — რეალურ დროში ძებნა სათაურისა და ტექსტის მიხედვით შედეგების მთვლელით (`X / 100`).
     - `GET /posts/:id/comments` — კონკრეტული სტატიის კომენტარების ამოღება და ჩვენება.
     - `POST /posts` — ახალი სტატიის გამოქვეყნების ფორმა `HTTP 201 Created` დადასტურებით.
   - **`/users` რესურსი**:
     - `GET /users` — თანამშრომლების სიის წამოღება.
     - **ძებნა** — ფილტრაცია სახელის, მეილისა და კომპანიის მიხედვით.
     - `POST /users` — ახალი თანამშრომლის დამატება `HTTP 201 Created` სტატუსით.
     - `DELETE /users/:id` — თანამშრომლის წაშლა `HTTP 200 OK` სტატუსით.

3. **ავტომატური Scroll-To-Top:**
   - [ScrollToTop.jsx](file:///c:/Users/User/Desktop/ანდრია%20ციციშვილი%20-%20დავალება%202/src/components/ScrollToTop.jsx) კომპონენტი, რომელიც გვერდის შეცვლისას ხედს ავტომატურად აბრუნებს გვერდის დასაწყისში.

---

## 🛠 გამოყენებული ტექნოლოგიები

- **React 18**
- **React Router 7** (`react-router`, `react-router-dom`)
- **Vite**
- **Tailwind CSS**
- **Font Awesome 6.5.1**
- **JSONPlaceholder REST API** (`/users`, `/posts`, `/comments`)

---

## 💻 პროექტის გაშვება ლოკალურად

```bash
# დამოკიდებულებების ინსტალაცია
npm install

# დეველოპმენტ სერვერის გაშვება (Vite)
npm run dev

# საწარმოო (Production) ბილდის აწყობა
npm run build
```

---

## 📁 პროექტის სტრუქტურა

```text
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── EmployeeCard.jsx
│   │   ├── EmployeesSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── SkillCard.jsx
│   │   ├── Specializations.jsx
│   │   ├── StatCard.jsx
│   │   └── TerminalWidget.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── EmployeesPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── PostsPage.jsx        # JSONPlaceholder /posts with live search
│   │   ├── ProjectsPage.jsx     # Projects with live search & filters
│   │   └── SkillsPage.jsx
│   ├── App.jsx                  # React Router Routes
│   ├── index.css
│   └── main.jsx                 # BrowserRouter
├── index.html
├── package.json
└── vite.config.js
```
