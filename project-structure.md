# Next Quest Project Structure

This document explains the main folders and files for the project. It can be used as a reference when adding features or refactoring components.

## Root

- `package.json`: dependencies and npm scripts
- `vite.config.ts`: Vite configuration
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`: TypeScript settings
- `eslint.config.js`: lint rules
- `README.md`: project overview and usage notes
- `copilot-instructions.md`: Copilot guidance
- `project-structure.md`: project structure documentation

## Public

- `public/`: static assets, favicon, and fixed files

## src

- `src/main.tsx`: application entry point
- `src/App.css` / `src/index.css`: global styles
- `src/apiClient.ts`: HTTP client for the third-party game API
- `src/types/index.ts`: TypeScript types used throughout the project

### Components

- `src/components/Card.tsx`: single game card component
- `src/components/icons.tsx`: reusable icon components

### Helpers

- `src/helpers/helpers.ts`: helper functions and small utilities

### Hooks

- `src/hooks/useGames.ts`: game data fetching and filtering logic
- `src/hooks/usePlatforms.ts`: platform retrieval and management

### Layout

- `src/layout/Header.tsx`: top navigation
- `src/layout/Sidebar.tsx`: sidebar or filter area
- `src/layout/Layout.tsx`: page layout wrapper

### Pages

- `src/pages/Home.tsx`: main game listing page
- `src/pages/Wishlist.tsx`: wishlist page and management

## Suggested expansion areas

- `src/services/`: API and data services
- `src/features/`: domain-specific features like wishlist, filters, and discovery
- `src/state/`: application state management (context, store)
- `src/components/common/`: shared UI components
- `src/tests/`: dedicated test files and scenarios

## New file recommendations

- `ARCHITECTURE.md`: architecture decisions, data flow, and layering
- `ACCESSIBILITY.md`: accessibility guidelines and checklist

> Note: When a new folder or structure is added, update this document to preserve quick navigation and consistency.
