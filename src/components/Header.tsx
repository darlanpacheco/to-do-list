import IonIcon from "@reacticons/ionicons";
import { MyProps } from "../interfaces/my-props";

const Header: React.FunctionComponent<MyProps> = ({
    className,
}): React.ReactNode => {
    return (
        <header
            className={"flex items-center justify-center" + " " + className}
        >
            <input
                type="text"
                className="p-2 mr-9 rounded-lg bg-[#1E1E1E] border-[1px] border-[#454545] focus:outline-none"
            />
            <button className="bg-green-300 p-2 rounded-full flex items-center justify-center text-black">
                <IonIcon name="add" size="large"></IonIcon>
            </button>
        </header>
    );
};

export default Header;
