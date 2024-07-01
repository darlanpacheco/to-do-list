export interface TodoInterface {
  editTodo: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  editSubmitTodo: (
    event:
      | React.FocusEvent<HTMLInputElement, Element>
      | React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => void;
  deleteTodo: (index: number) => void;
  index: number;
  value: string;
  todosCheckboxes: boolean[];
  updateCheckboxes: () => void;
}

export interface HeaderInterface {
  addTodo: () => void;
}
