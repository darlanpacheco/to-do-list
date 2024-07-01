import { HeaderInterface } from "../interfaces/my-props";

const Header: React.FunctionComponent<HeaderInterface> = ({
  addTodo,
}): React.ReactNode => {
  return (
    <header className="flex items-center justify-center pt-10 row-span-1">
      <input
        id="main-input"
        type="text"
        className="bg-tertiary w-[50vw] max-w-60 min-w-[150px] dark:bg-tertiary-dark p-2 rounded-l-lg shadow focus:outline-none"
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === "Enter") {
            addTodo();
          }
        }}
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
