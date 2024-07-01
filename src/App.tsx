import { useState, useEffect } from "react";
import Header from "./components/Header";
import ThemeButton from "./components/ThemeButton";
import IonIcon from "@reacticons/ionicons";

// DAILY CHECKED RELOAD TODOS

const App: React.FunctionComponent = (): React.ReactNode => {
  const [todosText, setTodosText] = useState<string[]>(
    JSON.parse(localStorage.getItem("todosStorage") || "[]")
  );
  const [todosCheckboxes, setTodosCheckboxes] = useState<boolean[]>(
    JSON.parse(localStorage.getItem("checkboxesStorage") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("todosStorage", JSON.stringify(todosText));
    localStorage.setItem("checkboxesStorage", JSON.stringify(todosCheckboxes));
  }, [todosText, todosCheckboxes]);

  const updateCheckboxes = () => {
    const tempCheckboxes: boolean[] = [];
    const checkboxElements = document.querySelectorAll(
      'input[type="checkbox"]'
    );
    checkboxElements.forEach((checkbox) => {
      if (checkbox instanceof HTMLInputElement) {
        tempCheckboxes.push(checkbox.checked);
      }
    });
    setTodosCheckboxes(tempCheckboxes);
  };

  const addTodo = () => {
    const input: HTMLInputElement = document.querySelector(
      "input#main-input"
    ) as HTMLInputElement;
    if (input.value) {
      setTodosText([...todosText, input.value]);
      input.value = "";
    }
  };

  const editTodo = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const contentInput = event.currentTarget.parentElement?.parentElement
      ?.childNodes[0].childNodes[2] as HTMLInputElement;
    const contentDiv = event.currentTarget.parentElement?.parentElement
      ?.childNodes[0].childNodes[1] as HTMLDivElement;

    contentDiv.classList.add("hidden");
    contentInput.classList.remove("hidden");
    contentInput.value = contentDiv.innerText;
    contentInput.focus();
  };
  const editSubmitTodo = (
    event:
      | React.FocusEvent<HTMLInputElement, Element>
      | React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const contentInput = event.currentTarget.parentElement?.parentElement
      ?.childNodes[0].childNodes[2] as HTMLInputElement;
    const contentDiv = event.currentTarget.parentElement?.parentElement
      ?.childNodes[0].childNodes[1] as HTMLDivElement;

    const tempTodos = [...todosText];
    tempTodos[index] = contentInput.value;
    setTodosText(tempTodos);

    contentDiv.innerHTML = contentInput.value;
    contentDiv.classList.remove("hidden");
    contentInput.classList.add("hidden");
  };

  const deleteTodo = (index: number) => {
    const tempTodos = [...todosText];
    tempTodos.splice(index, 1);
    setTodosText(tempTodos);
  };

  return (
    <>
      <ThemeButton></ThemeButton>
      <main className="bg-secondary dark:bg-secondary-dark lg:shadow-lg rounded-lg flex flex-col w-[500px] min-h-[560px] mt-[15vh] mb-[15vh]">
        <Header addTodo={addTodo} className="row-span-1"></Header>
        <section className="row-span-6 flex flex-col items-center py-10 pb-10">
          <ul>
            {todosText.map((value, index) => (
              <li
                key={index}
                className={
                  "h-12 m-2 bg-tertiary w-[80vw] max-w-[400px] min-w-[250px] dark:bg-tertiary-dark rounded-lg shadow flex justify-between"
                }
              >
                <div className="flex items-center w-[100%]">
                  <input
                    key={index}
                    className="hover:cursor-pointer bg-white dark:bg-quaternary appearance-none p-4 rounded-lg ml-2 checked:bg-green-300 dark:checked:bg-[#95CC95]"
                    type="checkbox"
                    defaultChecked={todosCheckboxes[index]}
                    onClick={updateCheckboxes}
                  />
                  <div className="p-3 text-[13px] focus:outline-none bg-tertiary dark:bg-tertiary-dark w-[100%]">
                    {value}
                  </div>
                  <input
                    className="p-3 text-[13px] focus:outline-none bg-tertiary dark:bg-tertiary-dark w-[100%] hidden"
                    onBlur={(event) => {
                      editSubmitTodo(event, index);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        editSubmitTodo(event, index);
                      }
                    }}
                  />
                </div>
                <div className="flex items-center">
                  <IonIcon
                    onClick={(event) => {
                      editTodo(event);
                    }}
                    className="hover:cursor-pointer hover:rounded-lg hover:bg-white dark:hover:bg-quaternary p-4"
                    name="pencil"
                  ></IonIcon>
                  <IonIcon
                    onClick={() => {
                      deleteTodo(index);
                    }}
                    className="hover:cursor-pointer hover:rounded-lg hover:bg-white dark:hover:bg-quaternary p-4"
                    name="trash-bin"
                  ></IonIcon>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default App;
