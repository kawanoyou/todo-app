import { useState } from 'react'
import type { Todo } from '../types'
import { useI18n } from '../i18n/useI18n'

interface Props {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onEdit: (id: string, text: string) => void
}

export function TodoItem({ todo, onToggle, onDelete, onEdit }: Props) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)
  const { t } = useI18n()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editText.trim()) {
      onEdit(todo.id, editText)
      setIsEditing(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setEditText(todo.text)
      setIsEditing(false)
    }
  }

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          {t('save')}
        </button>
        <button
          type="button"
          onClick={() => {
            setEditText(todo.text)
            setIsEditing(false)
          }}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors dark:bg-gray-600 dark:text-gray-200"
        >
          {t('cancel')}
        </button>
      </form>
    )
  }

  return (
    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 group">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500 cursor-pointer"
      />
      <span
        className={`flex-1 ${
          todo.completed
            ? 'line-through text-gray-400 dark:text-gray-500'
            : 'text-gray-800 dark:text-gray-200'
        }`}
      >
        {todo.text}
      </span>
      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => setIsEditing(true)}
          className="px-3 py-1 text-sm text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded transition-colors"
        >
          {t('edit')}
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="px-3 py-1 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded transition-colors"
        >
          {t('delete')}
        </button>
      </div>
    </div>
  )
}
