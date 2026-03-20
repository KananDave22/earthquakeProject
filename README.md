## Project Link
```
https://earthquake-project-five.vercel.app/
```

## Project Organization

```
earthquake-dashboard/
├── node_modules/          # Installed dependencies
├── public/                # Static assets
├── src/
│   ├── app/               # Main App component
│   ├── components/        # Reusable components (Cards, Chart, DataTable)
│   ├── hooks/             # Custom hooks (data fetching)
│   ├── store/             # Zustand store for global state
│   ├── index.css          # Tailwind CSS import and base styles
│   └── main.jsx           # Entry point
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## Code Setup

1. Clone the repository:

```bash
git clone <repo-link>
cd earthquake-dashboard
```

2. Install Dependencies 
```
npm install
```

3. Run the development server
```
npm run dev
```
---
## Dependencies

Vite → Development build tool

Zustand → Global state management

Recharts → Scatter plot visualization

Axios → Data fetching from API

---

## Features

1. Responsive Two-Panel Layout:  
      Left Panel: Scatter plot chart,
      Right Panel: Data table with all columns

2. Interactive Selection: 
      Clicking a row selects the corresponding chart point
      Clicking a chart point highlights the corresponding table row

3. Dynamic Chart: 
      Users can change axes dynamically
      Chart updates based on selected variables

4. Loading and Error States: 
      Displays a spinner during data fetching
      Provides a retry option on failure
