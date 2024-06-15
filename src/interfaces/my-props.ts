export interface TodoInterface {
    className?: string;
    children?: string;
}

export interface HeaderProps {
    todos: string[];
    setTodos: (newTodo: string[]) => void;
    className?: string;
}
