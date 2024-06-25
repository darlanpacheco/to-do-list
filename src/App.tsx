import { useState } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";

const App: React.FunctionComponent = (): React.ReactNode => {
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <main className="bg-secondary dark:bg-secondary-dark lg:shadow-lg rounded-lg flex flex-col w-[500px] min-h-[550px] mt-[15vh] mb-[15vh]">
      <Header todos={todos} setTodos={setTodos} className="row-span-1"></Header>
      <section className="row-span-6 flex flex-col items-center py-10 pb-10">
        <ul>
          {todos.map((value, index) => (
            <Todo key={index}>{value}</Todo>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default App;
