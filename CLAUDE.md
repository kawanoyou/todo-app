# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (Vite)
npm run build    # Type check with tsc and build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
npx tsc --noEmit # Type check only
```

## Architecture

This is a React + TypeScript TODO app built with Vite and Tailwind CSS v4.

### Key Directories

- `src/components/` - React components (TodoItem, TodoForm, LanguageSwitcher)
- `src/hooks/` - Custom hooks (`useTodos` for state management with localStorage persistence)
- `src/i18n/` - Internationalization (translations.ts for strings, useI18n.tsx for Context + hook)

### State Management

- Todo state is managed via `useTodos` custom hook with localStorage persistence
- Language state is managed via React Context (`I18nProvider`) with localStorage persistence

### Styling

Uses Tailwind CSS v4 with the Vite plugin. Import is in `src/index.css` via `@import "tailwindcss"`.

### Type Imports

When importing types from `.ts` files, use `import type` syntax to avoid Vite ESM issues:
```typescript
import { translations } from './translations'
import type { Language, TranslationKey } from './translations'
```
