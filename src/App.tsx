import { useState } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";

const App: React.FunctionComponent = (): React.ReactNode => {
    const [todos, setTodos] = useState<string[]>([]);

    return (
        <main className="bg-[#242424] border-[1px] border-[#454545] rounded-lg grid grid-cols-1 grid-rows-7 w-[500px] min-h-[550px] mt-[15vh]">
            <Header
                todos={todos}
                setTodos={setTodos}
                className="row-span-1"
            ></Header>
            <ul className="row-span-6 flex flex-col items-center py-10 pb-10">
                {todos.map((value, index) => (
                    <Todo key={index}>{value}</Todo>
                ))}
            </ul>
        </main>
    );
};

export default App;
