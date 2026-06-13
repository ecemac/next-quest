# Next Quest - Architecture Guide

This document explains the core architecture decisions, data flow, and layers of the Next Quest application.

## Purpose

Next Quest fetches game data from a third-party API and presents it through React components. As a personal experiment project, it emphasizes modern React features, clean code, and accessibility.

## Layers

1. `src/apiClient.ts`
   - Centralizes API requests
   - Handles HTTP client setup and error handling

2. `src/types/index.ts`
   - Defines API schema and application types
   - Clarifies contracts between components

3. `src/hooks`
   - `useGames.ts`: game fetching, filtering, sorting, and wishlist logic
   - `usePlatforms.ts`: platform list retrieval and filter state
   - Custom hooks simplify component structure

4. `src/components`
   - UI components: cards, filter controls, state displays
   - Each component should have a single responsibility

5. `src/pages`
   - Pages provide the top-level application flow
   - Data loading and presentation are passed clearly to page components

6. `src/layout`
   - Page layout and repeating sections
   - Components such as `Header`, `Sidebar`, and `Layout`

## Data flow

- The user visits the site
- `src/pages/Home.tsx` or `src/pages/Wishlist.tsx` loads
- The page uses a custom hook to acquire data
- The hook calls the API through `apiClient.ts` and manages caching with Tanstack Query or local state
- Filtering, sorting, and wishlist logic are controlled inside the hook
- The page renders `GameCard` and filter components

## Wishlist and filtering

- The wishlist can be stored in local app state or localStorage
- `src/hooks/useGames.ts` should include add/remove wishlist functions
- Platform and genre filters can derive from API results or static definitions
- High-rated game filters should be applied at the page level

## Accessibility and UI components

- Use semantic HTML like `button`, `label`, `form`, `ul`, and `li`
- Add `aria-label`, `aria-describedby`, and appropriate status messages
- Ensure text and contrast are clear in all visual states
- Navigation should work well for keyboard users

## Expansion points

- `src/services/`: separate folder for more complex API logic or cache control
- `src/state/`: context and global state management for app-wide data
- `src/features/`: feature modules such as wishlist, filtering, and discovery
