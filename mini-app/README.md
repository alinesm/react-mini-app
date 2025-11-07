# React Mini App - Project Management Dashboard

A modern, responsive project management dashboard built with React, TypeScript, and Tailwind CSS. This application allows users to view, search, and manage projects with a clean and intuitive interface.

## 🚀 Features

- **Project List View**: Browse all projects in a clean table layout
- **Project Details**: View detailed information about individual projects
- **Real-time Search**: Filter projects by ID, name, owner, or description with debounced input
- **Responsive Design**: Modern UI that works on all devices
- **Accessibility**: ARIA labels and semantic HTML for screen reader support
- **TypeScript**: Full type safety throughout the application

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

## 🛠️ Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd react-mini-app/mini-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## 🏃 Running the Application

### Development Mode

To start the development server with hot reload:

```bash
npm run dev
```

The application will be available at: **http://localhost:5173**

### Production Build

To create an optimized production build:

```bash
npm run build
```

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 🧪 Running Tests

This project uses Vitest and React Testing Library for testing.

### Run All Tests (Once)

```bash
npm test -- --run
```

### Run Tests in Watch Mode

```bash
npm test
```

### Run Tests with UI

```bash
npm run test:ui
```

## 📁 Project Structure

```
mini-app/
├── src/
│   ├── components/
│   │   ├── productDetail/      # Project detail page components
│   │   │   ├── leftSide.tsx
│   │   │   └── rightSide.tsx
│   │   ├── productList/        # Project list page components
│   │   │   ├── searchInput.tsx
│   │   │   ├── tableBody.tsx
│   │   │   └── tableHeader.tsx
│   │   └── shared/             # Shared components
│   │       ├── errorMessage.tsx
│   │       └── loading.tsx
│   ├── hooks/
│   │   └── useProjects.ts      # Custom hook for project data management
│   ├── pages/
│   │   ├── projectList.tsx     # Project list page
│   │   └── projectDetail.tsx   # Project detail page
│   ├── services/
│   │   ├── projects.api.ts     # API functions
│   │   └── projects.types.ts   # TypeScript types
│   ├── test/
│   │   └── setup.ts            # Test configuration
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Application entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
├── vitest.config.ts            # Vitest configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── package.json                # Project dependencies
```

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests in watch mode |
| `npm test -- --run` | Run tests once |
| `npm run test:ui` | Run tests with UI |

## 🔧 Technologies Used

### Core
- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### Routing
- **React Router DOM 7** - Client-side routing

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Class Variance Authority** - Component variants
- **clsx** & **tailwind-merge** - Conditional classes

### Utilities
- **Lodash** - Utility functions (debounce)

### Testing
- **Vitest** - Test runner
- **React Testing Library** - Component testing
- **jsdom** - DOM environment for tests
- **@testing-library/jest-dom** - Custom matchers
- **@testing-library/user-event** - User interaction simulation

### Development
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript linting rules

## 🎨 Key Features Explained

### Search Functionality
The search input component manages its own state and uses debouncing (300ms) to optimize performance. Search filters projects by:
- Project ID
- Project Name
- Owner Name
- Description

### Custom Hook (useProjects)
The `useProjects` hook centralizes all project-related data management:
- Fetches project list
- Fetches individual project details
- Filters projects based on search input
- Manages loading and error states

### Component Architecture
The application follows a component-based architecture with:
- **Pages**: High-level route components
- **Components**: Reusable UI components organized by feature
- **Shared Components**: Common components used across features
- **Hooks**: Custom React hooks for business logic
- **Services**: API and data management logic

## 📝 License

This project is private and not licensed for public use.

## 🤝 Contributing

This is a mini application. For contributions, please follow standard Git workflow practices.

---

**Made with ❤️ using React + TypeScript + Vite**

