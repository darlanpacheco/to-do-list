import IonIcon from "@reacticons/ionicons";
import { MyProps } from "../interfaces/my-props";

const Todo: React.FunctionComponent<MyProps> = ({ className, children }) => {
    return (
        <div
            className={
                "h-12 p-2 m-2 w-[375px] rounded-lg bg-[#454545] flex justify-between" +
                " " +
                className
            }
        >
            <span className="flex items-center">{children}</span>
            <div className="flex items-center">
                <IonIcon
                    className="hover:cursor-pointer"
                    name="pencil"
                    size="large"
                ></IonIcon>
                <IonIcon
                    className="hover:cursor-pointer"
                    name="trash-bin"
                    size="large"
                ></IonIcon>
            </div>
        </div>
    );
};

export default Todo;
