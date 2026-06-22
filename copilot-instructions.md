# Next Quest - GitHub Copilot Guide

This project is a personal web application built with React, TypeScript, and Vite. The goal is to use modern React features and clean code practices to fetch game data from a third-party API, filter it, and provide a polished user experience.

## Goals

- Clean code and readability
- Component-based single responsibility
- Accessible user interfaces (WCAG-friendly)
- Consistent naming and conventions
- Compatible structure with React 19, React Router, Tanstack Query, and Tailwind / CoreUI

## Core features

- Add and remove games from the wishlist
- List and filter available platforms and game genres
- Highlight high-rated games
- Separate components for game cards, pages, and filter panels
- Performance through data caching, request control, and minimal re-renders

## Expected approach

- Component names use PascalCase, hook names use `useX`, helper functions use camelCase
- Clear responsibility boundaries for `src/hooks`, `src/components`, `src/pages`, `src/layout`, and `src/types`
- Functional React components and custom hooks
- Reusable small components and helper modules
- Use `aria-*`, semantic HTML, keyboard accessibility, and color contrast
- Keep side effects minimal, prefer context/hooks over prop drilling
- Logical component naming: `Card`, `FilterPanel`, `WishlistButton`, `GamesGrid`

## Coding recommendations

- Design small, independent components before adding new features
- Handle `loading`, `error`, and `empty` states explicitly
- Separate UI layout from data logic
- Break apart components with more than one responsibility
- Consolidate API calls in `apiClient.ts` or `src/services`
- Manage types in `src/types/index.ts`

## Accessibility

- Build buttons with `button`, list items with `ul/ol` and `li`
- Label form controls and use `aria-label` / `aria-describedby` where needed
- Preserve tab navigation and keyboard interaction
- Include text alternatives and maintain contrast for visual states

## Documentation

- Update `project-structure.md` when adding a new folder or area
- Keep architecture decisions in `ARCHITECTURE.md`
- Document accessibility checks in `ACCESSIBILITY.md`
- Leave short notes or README comments for important design decisions

## Additional notes

- Update `project-structure.md` when adding new files or folders
- Move business logic out of `src/pages/Home.tsx` and `src/pages/Wishlist.tsx` into components when possible
- The app is a personal project, so it should support experimentation without breaking the structure
