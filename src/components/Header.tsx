import IonIcon from "@reacticons/ionicons";
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
                className="p-2 mr-8 w-64 rounded-lg bg-[#1E1E1E] border-[1px] border-[#454545] focus:outline-none"
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                className="bg-green-300 p-2 rounded-full flex items-center justify-center text-black"
                onClick={addTodo}
            >
                <IonIcon name="add" size="large"></IonIcon>
            </button>
        </header>
    );
};

export default Header;
