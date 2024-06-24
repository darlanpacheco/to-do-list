import { useState } from "react";
import { HeaderProps } from "../interfaces/my-props";

const Header: React.FunctionComponent<HeaderProps> = ({
    className,
    todos,
    setTodos,
}): React.ReactNode => {
    const [inputValue, setInputValue] = useState<string>("");

    const addTodo = (): void => {
        setTodos([...todos, inputValue]);
    };

    return (
        <header
            className={
                "flex items-center justify-center pt-10" +
                " " +
                (className ?? "")
            }
        >
            <input
                type="text"
                className="bg-tertiary dark:bg-tertiary-dark p-2 w-64 rounded-l-lg shadow focus:outline-none"
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                className="bg-blue-300 hover:bg-blue-200 dark:bg-blue-500 dark:hover:bg-blue-400 p-2 rounded-r-lg shadow"
                onClick={addTodo}
            >
                Add
            </button>
        </header>
    );
};

export default Header;
