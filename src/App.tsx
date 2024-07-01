import { useState, useEffect } from "react";
import Header from "./components/Header";
import ThemeButton from "./components/ThemeButton";
import Todo from "./components/Todo";

const App: React.FunctionComponent = (): React.ReactNode => {
  const [todosText, setTodosText] = useState<string[]>(
    JSON.parse(localStorage.getItem("todosStorage") || "[]")
  );

  const currentDate: number[] = [
    new Date().getDay(),
    new Date().getMonth(),
    new Date().getFullYear(),
  ];
  const prevDate: number[] = JSON.parse(
    localStorage.getItem("date") ?? "[0, 0, 0]"
  );
  const currentBiggerThanPrev = () => {
    if (currentDate[0] < prevDate[0]) {
      return true;
    } else {
      if (currentDate[1] < prevDate[1]) {
        return true;
      } else {
        if (currentDate[2] < prevDate[2]) {
          return true;
        } else {
          return false;
        }
      }
    }
  };
  const [todosCheckboxes, setTodosCheckboxes] = useState<boolean[]>(
    currentBiggerThanPrev()
      ? new Array(todosText.length).fill(false)
      : JSON.parse(localStorage.getItem("checkboxesStorage") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("date", JSON.stringify(currentDate));
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
        <Header addTodo={addTodo}></Header>
        <section className="row-span-6 flex flex-col items-center py-10 pb-10">
          <ul>
            {todosText.map((value, index) => (
              <Todo
                todosCheckboxes={todosCheckboxes}
                updateCheckboxes={updateCheckboxes}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
                editSubmitTodo={editSubmitTodo}
                value={value}
                key={index}
                index={index}
              ></Todo>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default App;
