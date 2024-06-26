import IonIcon from "@reacticons/ionicons";
import { TodoInterface } from "../interfaces/my-props";

const Todo: React.FunctionComponent<TodoInterface> = ({
  className,
  children,
}) => {
  const deleteTodo = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.currentTarget.parentElement?.parentElement?.remove();
  };

  const editTodo = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const input: HTMLInputElement | null | undefined =
      event.currentTarget.parentElement?.parentElement?.querySelector(
        "input.content-input"
      );

    input?.removeAttribute("readonly");
    input?.focus();
  };

  const leaveTodo = (
    event:
      | React.FocusEvent<HTMLInputElement, Element>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    event.currentTarget.setAttribute("readonly", "");
  };

  return (
    <li
      className={
        "h-12 m-2 bg-tertiary w-[80vw] max-w-[400px] min-w-[250px] dark:bg-tertiary-dark rounded-lg shadow flex justify-between" +
        " " +
        (className ?? "")
      }
    >
      <div className="flex items-center w-[100%]">
        <input
          className="hover:cursor-pointer bg-white dark:bg-quaternary appearance-none p-4 rounded-lg ml-2 checked:bg-green-300 dark:checked:bg-[#95CC95]"
          type="checkbox"
        />
        <input
          className="p-3 text-[13px] focus:outline-none bg-tertiary dark:bg-tertiary-dark content-input w-[100%]"
          readOnly
          onBlur={(event) => {
            leaveTodo(event);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              leaveTodo(event);
            }
          }}
          defaultValue={children}
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
          onClick={(event) => {
            deleteTodo(event);
          }}
          className="hover:cursor-pointer hover:rounded-lg hover:bg-white dark:hover:bg-quaternary p-4"
          name="trash-bin"
        ></IonIcon>
      </div>
    </li>
  );
};

export default Todo;
