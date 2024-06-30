import { useState } from "react";
import IonIcon from "@reacticons/ionicons";

// THEME SWITCH BUTTON
// TODOS SAVE

const ThemeButton: React.FunctionComponent = (): React.ReactNode => {
  const [theme, setTheme] = useState<boolean>(true);

  const themeToggle = () => {
    document.body.parentElement?.classList.toggle("dark", !theme);
    setTheme(!theme);
  };

  return (
    <button
      onClick={themeToggle}
      className="absolute dark:bg-quaternary dark:hover:bg-[#4E4E4E] bg-white w-10 h-10 right-[15px] top-[15px] flex items-center justify-center rounded-full"
    >
      {theme ? (
        <IonIcon name="moon"></IonIcon>
      ) : (
        <IonIcon name="sunny"></IonIcon>
      )}
    </button>
  );
};

export default ThemeButton;
