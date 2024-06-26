import { useRef } from "react";
import { HeaderProps } from "../interfaces/my-props";

const Header: React.FunctionComponent<HeaderProps> = ({
  className,
  todos,
  setTodos,
}): React.ReactNode => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const addTodo = (): void => {
    if (inputRef.current?.value) {
      setTodos([...todos, inputRef.current.value]);
      inputRef.current.value = "";
    }
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
        ref={inputRef}
        type="text"
        className="bg-tertiary w-[50vw] max-w-60 min-w-[150px] dark:bg-tertiary-dark p-2 rounded-l-lg shadow focus:outline-none"
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
