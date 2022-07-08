import { useCallback } from 'react'
import { Circle, Trash, CheckCircle } from 'phosphor-react'
import classNames from 'classnames'

import { TaskProps } from '../interfaces/task'

interface TaskCardProps extends TaskProps {
  reloadList(): void;
}

export function TaskCard({ id, name, completed, reloadList }: TaskCardProps) {
  const completeTask = useCallback(() => {
    const listLocalStorage = localStorage.getItem('todolist-ig2-list');
    const list: TaskProps[] = listLocalStorage ? JSON.parse(listLocalStorage) : [];

    const objIndex = list.findIndex((obj => obj.id === id));

    list[objIndex].completed = !!!list[objIndex].completed;

    localStorage.setItem('todolist-ig2-list', JSON.stringify(list));
    reloadList();
  }, []);

  const removeTask = useCallback(() => {
    const listLocalStorage = localStorage.getItem('todolist-ig2-list');
    const list: TaskProps[] = listLocalStorage ? JSON.parse(listLocalStorage) : [];

    const updatedList = list.filter(item => item.id !== id);

    localStorage.setItem('todolist-ig2-list', JSON.stringify(updatedList));
    reloadList();
  }, []);

  return (
    <li className="w-full p-4 bg-gray-500 rounded-lg flex items-start justify-between gap-3">
      <button onClick={completeTask}>
        {completed ? (
          <CheckCircle size={20} className="text-purple-500" weight="fill" />
        ) : (
          <Circle size={20} className="text-blue-500" />
        )}
      </button>

      <span className={classNames('flex-1 text-gray-100 text-sm', {
        'line-through': completed
      })}>
        {name}
      </span>

      <button onClick={removeTask}>
        <Trash size={20} className="text-gray-300" />
      </button>
    </li>
  )
}