import { useState } from 'react'
import { useTodos } from './hooks/useTodos'
import { TodoForm } from './components/TodoForm'
import { TodoItem } from './components/TodoItem'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { useI18n } from './i18n/useI18n'

type Filter = 'all' | 'active' | 'completed'

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, editTodo } = useTodos()
  const [filter, setFilter] = useState<Filter>('all')
  const { t } = useI18n()

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const activeCount = todos.filter((t) => !t.completed).length
  const completedCount = todos.filter((t) => t.completed).length

  const filterLabels: Record<Filter, string> = {
    all: t('all'),
    active: t('active'),
    completed: t('completed'),
  }

  const emptyMessage = {
    all: t('noTodos'),
    active: t('noActiveTodos'),
    completed: t('noCompletedTodos'),
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            {t('title')}
          </h1>
          <LanguageSwitcher />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
          <TodoForm onAdd={addTodo} />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="flex gap-2 mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
            {(['all', 'active', 'completed'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === f
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {filterLabels[f]}
                {f === 'all' && ` (${todos.length})`}
                {f === 'active' && ` (${activeCount})`}
                {f === 'completed' && ` (${completedCount})`}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filteredTodos.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400 py-8">
                {emptyMessage[filter]}
              </p>
            ) : (
              filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                  onEdit={editTodo}
                />
              ))
            )}
          </div>
        </div>

        <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-6">
          {t('builtWith')}
        </p>
      </div>
    </div>
  )
}

export default App
