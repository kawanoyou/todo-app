export const translations = {
  en: {
    title: 'Todo App',
    addPlaceholder: 'Add a new todo...',
    add: 'Add',
    save: 'Save',
    cancel: 'Cancel',
    edit: 'Edit',
    delete: 'Delete',
    all: 'All',
    active: 'Active',
    completed: 'Completed',
    noTodos: 'No todos yet. Add one above!',
    noActiveTodos: 'No active todos',
    noCompletedTodos: 'No completed todos',
    builtWith: 'Built with React + TypeScript + Vite + Tailwind CSS',
  },
  ja: {
    title: 'Todoアプリ',
    addPlaceholder: '新しいタスクを入力...',
    add: '追加',
    save: '保存',
    cancel: 'キャンセル',
    edit: '編集',
    delete: '削除',
    all: 'すべて',
    active: '未完了',
    completed: '完了済み',
    noTodos: 'タスクがありません。上から追加してください！',
    noActiveTodos: '未完了のタスクはありません',
    noCompletedTodos: '完了済みのタスクはありません',
    builtWith: 'React + TypeScript + Vite + Tailwind CSS で構築',
  },
} as const

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.en
