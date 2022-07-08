import { ClipboardText } from "phosphor-react"

export function EmptyList() {
  return (
    <div className="flex flex-col items-center justify-center border-t border-t-gray-400 py-16">
      <ClipboardText className="text-gray-400" size={64} />

      <div className="flex flex-col items-center justify-center mt-4">
        <span className="font-bold text-base text-gray-300">
          Você ainda não tem tarefas cadastradas
        </span>
        <span className="text-base text-gray-300">
          Crie tarefas e organize seus itens a fazer
        </span>
      </div>
    </div>
  )
}