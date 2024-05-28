import { useRef } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";

const App: React.FunctionComponent = (): React.ReactNode => {
    const mainRef = useRef<HTMLElement>(null);
    console.log(mainRef);

    return (
        <main
            ref={mainRef}
            className="bg-[#242424] border-[1px] border-[#454545] rounded-lg grid grid-cols-1 grid-rows-7 w-[500px] min-h-[550px]"
        >
            <Header className="row-span-1"></Header>
            <section className="row-span-6 flex flex-col items-center py-10 pb-10">
                <Todo>Buy breads</Todo>
                <Todo>Buy breads</Todo>
                <Todo>Buy breads</Todo>
                <Todo>Buy breads</Todo>
                <Todo>Buy breads</Todo>
                <Todo>Buy breads</Todo>
                <Todo>Buy breads</Todo>
                <Todo>Buy breads</Todo>
            </section>
        </main>
    );
};

export default App;
