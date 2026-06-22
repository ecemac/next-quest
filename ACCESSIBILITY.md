# Next Quest - Accessibility Guide

This document collects the accessibility requirements and special considerations for the Next Quest application.

## General principles

- Use semantic HTML: `header`, `main`, `nav`, `section`, `article`, `button`, `ul`, `li`
- Do not convey visual states using only color
- Ensure all interactions are accessible via keyboard navigation
- Maintain a logical focus order through the interface

## Form and control elements

- Label all form controls and filter options or use `aria-label`
- Elements that behave like buttons should use the `button` element
- Use `aria-live` or `role="status"` for announcing UI status messages

## Notifications and state

- Provide explanatory text for loading, error, and empty states
- Use `aria-live="polite"` or `role="status"` to announce updates to users
- Include visible text labels alongside icon-only indicators

## Naming and accessibility

- Use appropriate attributes such as `aria-label`, `aria-describedby`, and `aria-pressed`
- Add descriptive `alt` text to any images and icons that require it
- Ensure game card and wishlist controls have clear accessible labels

## Color and contrast

- When using color to convey meaning, also provide a text label or icon
- Aim for a minimum contrast ratio of 4.5:1 for text and UI controls

## Keyboard users

- All interactions should be available with `Tab`, `Enter`, or `Space`
- Design focus states such as `:focus-visible` in addition to hover states
- Manage focus when opening or closing modals and filter panels

## Accessibility testing

- Navigate the app with a basic keyboard test
- Use browser accessibility tools like Lighthouse or axe
- Verify accessibility for new components during implementation
