import IonIcon from "@reacticons/ionicons";
import { TodoInterface } from "../interfaces/my-props";

const Todo: React.FunctionComponent<TodoInterface> = ({
    className,
    children,
}) => {
    const editTodo = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log("editTodo", event.currentTarget);
    };

    const deleteTodo = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        event.currentTarget.parentElement?.parentElement?.remove();
    };

    return (
        <li
            className={
                "h-12 m-2 w-[400px] bg-tertiary dark:bg-tertiary-dark rounded-lg shadow flex justify-between" +
                " " +
                (className ?? "")
            }
        >
            <div className="flex items-center">
                <input
                    className="hover:cursor-pointer bg-white dark:bg-quaternary appearance-none p-4 rounded-lg ml-2 checked:bg-green-300 dark:checked:bg-green-700"
                    type="checkbox"
                />
                <span className="p-3 text-[13px] truncate max-w-64">
                    {children}
                </span>
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
