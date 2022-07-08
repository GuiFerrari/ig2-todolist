import { FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';

import { TaskProps } from '../interfaces/task';

interface FormProps {
  reloadList(): void;
}

export function Form({ reloadList }: FormProps) {
  const [task, setTask] = useState('');

  function handleAddTask(event: FormEvent) {
    event.preventDefault();

    const listLocalStorage = localStorage.getItem('todolist-ig2-list');
    const list: TaskProps[] = listLocalStorage ? JSON.parse(listLocalStorage) : [];

    const newTask = {
      id: list.length + 1,
      name: task,
      completed: false
    };

    localStorage.setItem('todolist-ig2-list', JSON.stringify([...list, newTask]));
    reloadList();
  }

  return (
    <form
      onSubmit={event => handleAddTask(event)}
      className="flex items-center justify-between gap-2"
    >
      <input
        className="bg-gray-500 text-white placeholder-gray-300 rounded px-5 h-14 flex-1"
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={event => setTask(event.target.value)}
      />

      <button
        className="flex items-center gap-2 bg-blue-700 h-14 p-4 rounded font-bold text-sm hover:bg-blue-900 transition-colors"
        type="submit"
      >
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  )
}