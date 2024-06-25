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

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  return (
    <header
      className={
        "flex items-center justify-center pt-10" + " " + (className ?? "")
      }
    >
      <input
        type="text"
        className="bg-tertiary w-[35vw] min-w-[100px] dark:bg-tertiary-dark p-2 sm:w-64 rounded-l-lg shadow focus:outline-none"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="bg-blue-300 hover:bg-blue-200 dark:bg-[#3550CC] dark:hover:bg-[#5075FF] p-2 rounded-r-lg shadow"
        onClick={addTodo}
      >
        Add
      </button>
    </header>
  );
};

export default Header;
