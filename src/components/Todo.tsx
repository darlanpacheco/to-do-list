import IonIcon from "@reacticons/ionicons";
import { MyProps } from "../interfaces/my-props";

const Todo: React.FunctionComponent<MyProps> = ({ className, children }) => {
    return (
        <li
            className={
                "h-12 m-2 w-[375px] rounded-lg bg-[#363636] flex justify-between" +
                " " +
                (className ?? "")
            }
        >
            <div className="flex items-center">
                <input
                    className="hover:cursor-pointer appearance-none p-4 bg-white border-[#454545] rounded-lg ml-2 checked:bg-green-300"
                    type="checkbox"
                />
                <span className="flex items-center p-3">{children}</span>
            </div>
            <div className="flex items-center">
                <IonIcon
                    className="hover:cursor-pointer hover:bg-[#454545] hover:rounded-lg p-4 border-l-[1px] border-[#454545] "
                    name="pencil"
                ></IonIcon>
                <IonIcon
                    className="hover:cursor-pointer hover:bg-[#454545] hover:rounded-lg p-4"
                    name="trash-bin"
                ></IonIcon>
            </div>
        </li>
    );
};

export default Todo;
