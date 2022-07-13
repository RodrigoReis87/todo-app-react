export function Form() {
    return (
        <div className="flex flex-row items-center justify-center gap-2 mt-[-1.68rem] mb-16">
            <input type="text" placeholder="Adicione uma nova tarefa."
                className="max-w-3xl h-[3.36rem] text-base text-gray-100 w-full rounded-lg p-4 bg-gray-500 border border-gray-700 leading-6
                    hover:border-blueDark" />
            <button
                className="text-sm border-0 bg-blueDark text-gray-100 font-bold leading-none p-4 rounded-lg
                    w-24 h-[3.36rem] flex justify-center items-center gap-2">
                Criar
            </button>
        </div>
    )
}