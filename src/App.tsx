import { useState, useEffect } from "react";
import Header from "./components/Header";
import ThemeButton from "./components/ThemeButton";
import IonIcon from "@reacticons/ionicons";

/*  
  TODO: fix checkboxes bug
*/

const App: React.FunctionComponent = (): React.ReactNode => {
  interface idk {
    text: string;
    turnedOn: boolean;
  }
  const [todos, setTodos] = useState<idk[]>([
    { text: "fds", turnedOn: false },
    { text: "asoidfjhas", turnedOn: false },
    { text: "", turnedOn: true },
    { text: "", turnedOn: false },
    { text: "", turnedOn: false },
    { text: "", turnedOn: false },
    { text: "", turnedOn: false },
    { text: "", turnedOn: false },
    { text: "", turnedOn: false },
    { text: "", turnedOn: false },
    { text: "", turnedOn: false },
    { text: "", turnedOn: false },
    { text: "", turnedOn: false },
    { text: "", turnedOn: false },
    { text: "", turnedOn: false },
  ]);

  const addTodo = () => {};

  const editTodo = () => {};

  const deleteTodo = () => {};

  const updateTodos = (index) => {
    const inputs = [...document.querySelectorAll('input[type="checkbox"]')];

    console.log(index);
  };

  return (
    <>
      <ThemeButton></ThemeButton>
      <main className="bg-secondary dark:bg-secondary-dark lg:shadow rounded-lg flex flex-col w-[500px] min-h-[560px] mt-[15vh] mb-[15vh]">
        <Header addTodo={addTodo}></Header>
        <section className="row-span-6 flex flex-col items-center py-10 pb-10">
          <ul>
            {todos.map((v, i) => {
              return (
                <Todo
                  key={i}
                  updateTodos={updateTodos}
                  checked={v.turnedOn}
                  index={i}
                >
                  {v.text}
                </Todo>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
};

interface babaca {
  index: number;
  editTodo: () => void;
  deleteTodo: () => void;
  updateTodos: (index) => void;
  checked: boolean;
  children: string;
}

const Todo: React.FunctionComponent<babaca> = ({
  editTodo,
  deleteTodo,
  updateTodos,
  checked,
  children,
}) => {
  return (
    <li
      className={
        "h-12 m-2 bg-tertiary w-[80vw] max-w-[400px] min-w-[250px] dark:bg-tertiary-dark rounded-lg shadow flex justify-between"
      }
    >
      <div className="flex items-center w-[100%] overflow-hidden">
        <input
          className="hover:cursor-pointer bg-white dark:bg-quaternary appearance-none p-4 rounded-lg ml-2 checked:bg-green-300 dark:checked:bg-[#95CC95]"
          type="checkbox"
          defaultChecked={checked}
          onClick={() => {
            updateTodos(index);
          }}
        />
        <div className="p-3 text-[13px] focus:outline-none bg-tertiary dark:bg-tertiary-dark w-[100%]">
          {children}
        </div>
        <input onBlur={() => {}} onKeyDown={() => {}} />
      </div>
      <div className="flex items-center">
        <IonIcon
          onClick={editTodo}
          className="hover:cursor-pointer hover:rounded-lg hover:bg-white dark:hover:bg-quaternary p-4"
          name="pencil"
        ></IonIcon>
        <IonIcon
          onClick={deleteTodo}
          className="hover:cursor-pointer hover:rounded-lg hover:bg-white dark:hover:bg-quaternary p-4"
          name="trash-bin"
        ></IonIcon>
      </div>
    </li>
  );
};

export default App;
