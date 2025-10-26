# 🚀 Next.js Boilerplate by JasurCoder

A modern, production-ready Next.js boilerplate with TypeScript, featuring internationalization, state management, and a comprehensive development setup.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.9-764ABC?logo=redux)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## ✨ Features

- ⚡️ **Next.js 16** - Latest App Router with React Server Components
- 🎨 **Tailwind CSS v4** - Modern utility-first CSS framework
- 🧩 **Shadcn UI** - Beautiful, accessible component library
- 🌍 **Internationalization** - Multi-language support (English, Russian, Uzbek)
- 🔐 **Authentication** - Ready-to-use auth pages (Sign In, Sign Up)
- 🗃️ **Redux Toolkit** - Robust state management solution
- 🔄 **RTK Query** - Powerful data fetching & caching (built into Redux Toolkit)
- 🎯 **TypeScript** - Full type safety
- 💅 **ESLint + Prettier** - Code quality and formatting
- 🪝 **Husky + Lint-staged** - Pre-commit hooks for code quality
- 🏗️ **Atomic Design** - Organized component architecture

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 20.x or higher
- **npm** or **yarn** or **pnpm**

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jasurcoder/nextjs-boilerplate.git
cd nextjs-boilerplate
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📂 Project Structure

```
nextjs-boilerplate/
├── public/                  # Static files
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── [locale]/       # Internationalized routes
│   │   │   ├── (auth)/     # Authentication pages
│   │   │   ├── (root)/     # Main application pages
│   │   │   ├── layout.tsx  # Root layout
│   │   │   └── providers.tsx
│   │   ├── robots.ts       # Robots.txt configuration
│   │   └── sitemap.ts      # Sitemap configuration
│   ├── assets/             # Images, fonts, icons
│   ├── components/
│   │   ├── common/         # Shared components
│   │   ├── custom/         # Custom components
│   │   │   ├── atoms/      # Atomic design - atoms
│   │   │   ├── molecules/  # Atomic design - molecules
│   │   │   └── organisms/  # Atomic design - organisms
│   │   ├── features/       # Feature-specific components
│   │   ├── layout/         # Layout components (Header, Footer)
│   │   └── ui/             # Shadcn UI components
│   ├── context/            # Redux store configuration
│   │   ├── services/       # API services
│   │   ├── slices/         # Redux slices
│   │   ├── hooks.ts        # Redux hooks
│   │   └── store.ts        # Store configuration
│   ├── hooks/              # Custom React hooks
│   ├── i18n/               # Internationalization config
│   ├── interfaces/         # TypeScript interfaces
│   ├── lib/                # Utility functions
│   ├── locales/            # Translation files
│   │   ├── en.json         # English translations
│   │   ├── ru.json         # Russian translations
│   │   └── uz.json         # Uzbek translations
│   ├── styles/             # Global styles
│   └── middleware.ts       # Next.js middleware
├── .husky/                 # Git hooks
├── components.json         # Shadcn UI configuration
├── eslint.config.mjs       # ESLint configuration
├── next.config.ts          # Next.js configuration
├── package.json
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors automatically |
| `npm run lint:strict` | Run ESLint with zero warnings tolerance |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run type-check` | Run TypeScript type checking |
| `npm run check-all` | Run all checks (types, lint, format) |

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

### Internationalization

The boilerplate supports three languages out of the box:
- English (en)
- Russian (ru)
- Uzbek (uz)

To add a new language:
1. Add translation file in `src/locales/[language].json`
2. Update locale configuration in `src/i18n/routing.ts`

### Styling

This project uses:
- **Tailwind CSS v4** for utility-first styling
- **Shadcn UI** for pre-built components
- **CSS Variables** for theming

Customize theme in `src/styles/globals.css`

## 🧪 Code Quality

This project enforces code quality through:

- **TypeScript** - Static type checking
- **ESLint** - Code linting with strict rules
- **Prettier** - Consistent code formatting
- **Husky** - Git hooks for pre-commit validation
- **Lint-staged** - Run linters on staged files only

All commits are automatically checked for:
- TypeScript errors
- ESLint violations
- Prettier formatting
- Build errors

## 🎨 UI Components

This boilerplate uses [Shadcn UI](https://ui.shadcn.com/) components. To add new components:

```bash
npx shadcn@latest add [component-name]
```

Available components include:
- Button
- Input
- Form
- Select
- Checkbox
- Label
- And many more...

## 🔐 Authentication

Pre-configured authentication pages:
- `/sign-in` - Sign in page
- `/sign-up` - Sign up page

Redux slices are set up for auth state management in `src/context/slices/authSlice.ts`

## 🚦 Routing

The project uses Next.js App Router with internationalized routing:

```
/[locale]/(auth)/sign-in    → Sign in page
/[locale]/(auth)/sign-up    → Sign up page
/[locale]/(root)/           → Home page
/[locale]/(root)/dashboard  → Dashboard page
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure to:
- Follow the existing code style
- Run `npm run check-all` before committing
- Write clear commit messages
- Update documentation if needed

## 📝 Development Guidelines

### Component Structure

Follow Atomic Design principles:
- **Atoms**: Basic building blocks (buttons, inputs)
- **Molecules**: Simple combinations of atoms
- **Organisms**: Complex UI components

### Naming Conventions

- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Files**: camelCase for utilities (e.g., `formatDate.ts`)
- **Variables**: camelCase (e.g., `userName`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)

### State Management

Use Redux Toolkit for global state:
- Create slices in `src/context/slices/`
- Define API services in `src/context/services/`
- Use typed hooks from `src/context/hooks.ts`

### Why RTK Query?

This boilerplate uses **RTK Query** (built into Redux Toolkit) for data fetching and caching:

**✅ No Extra Dependencies**
- RTK Query comes bundled with Redux Toolkit
- No need to install additional libraries like Axios, React Query, or SWR
- Reduces bundle size and dependency management complexity

**✅ Powerful Features Out of the Box**
- Automatic caching and request deduplication
- Automatic re-fetching on focus/reconnection
- Optimistic updates support
- Built-in loading/error states
- TypeScript support with automatic type inference

**✅ Seamless Integration**
- Works perfectly with existing Redux slices
- Shares the same store and middleware
- Consistent state management patterns across the app

**Example Usage:**

```typescript
// src/context/services/authApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    getUser: builder.query({
      query: (userId) => `/users/${userId}`,
    }),
  }),
});

export const { useLoginMutation, useGetUserQuery } = authApi;
```

In components:
```typescript
const { data, isLoading, error } = useGetUserQuery(userId);
const [login, { isLoading }] = useLoginMutation();
```

No extra setup, no extra libraries – everything you need is already in Redux Toolkit! 🎯

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**JasurCoder**

- Website: [jasurcoder.uz](https://jasurcoder.uz)
- GitHub: [@jasurcoder](https://github.com/jasurumarov)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [next-intl](https://next-intl-docs.vercel.app/)

---

⭐️ If you find this boilerplate helpful, please consider giving it a star!

**Happy Coding! 🚀**

