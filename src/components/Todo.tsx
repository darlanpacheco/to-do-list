import { TodoInterface } from "../interfaces/my-props";
import IonIcon from "@reacticons/ionicons";

const Todo: React.FunctionComponent<TodoInterface> = ({
  editTodo,
  submitEditTodo,
  deleteTodo,
  index,
  value,
  todosCheckboxes,
  updateCheckboxes,
}): React.ReactNode => {
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
          defaultChecked={todosCheckboxes[index]}
          onClick={updateCheckboxes}
        />
        <div className="p-3 text-[13px] focus:outline-none bg-tertiary dark:bg-tertiary-dark w-[100%]">
          {value}
        </div>
        <input
          className="p-3 text-[13px] focus:outline-none bg-tertiary dark:bg-tertiary-dark w-[100%] hidden"
          onBlur={(event) => {
            submitEditTodo(event, index);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              submitEditTodo(event, index);
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
  );
};

export default Todo;
