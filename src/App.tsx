import { useCallback, useEffect, useState } from "react";
import { EmptyList } from "./components/EmptyList";
import { Form } from "./components/Form";
import { Header } from "./components/Header"
import { TaskCard } from './components/TaskCard';

import { TaskProps } from "./interfaces/task";

function App() {
  const [taskList, setTaskList] = useState<TaskProps[]>([]);

  const reloadList = useCallback(() => {
    const listLocalStorage = localStorage.getItem('todolist-ig2-list');
    const list: TaskProps[] = listLocalStorage ? JSON.parse(listLocalStorage) : [];

    setTaskList(list);
  }, []);

  useEffect(() => {
    reloadList();
  }, []);

  const tasksCompleted = taskList.filter(task => task.completed).length;

  return (
    <div>
      <Header />

      <main className="w-full max-w-[46rem] mx-auto mt-[-27px]">
        <div>
          <Form reloadList={reloadList} />
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-between py-6">
            <span className="font-bold text-sm text-blue-500 flex items-center justify-center gap-2">
              Tarefas criadas

              <span className="bg-gray-400 text-gray-200 px-2 py-[2px] flex items-center justify-center rounded-full">
                {taskList.length}
              </span>
            </span>
            <span className="font-bold text-sm text-purple-500 flex items-center justify-center gap-2">
              Concluidas

              <span className="bg-gray-400 text-gray-200 px-2 py-[2px] flex items-center justify-center rounded-full">
                {taskList.length > 0 ? `${tasksCompleted} de ${taskList.length}` : '0'}
              </span>
            </span>
          </div>

          <div className="">
            <ul className="flex flex-col gap-3">
              {taskList.length > 0 ? taskList.map(task => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  name={task.name}
                  completed={task.completed}
                  reloadList={reloadList}
                />
              )) : (
                <EmptyList />
              )}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
