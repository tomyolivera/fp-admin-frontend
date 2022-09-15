import { useContext } from "react";
import { FaMoon, FaSun } from 'react-icons/fa'
import Button from "./Form/Button";
import ThemeContext from "../Context/ThemeContext";

const ButtonTheme = () => {
    const { theme, setThemeMode } = useContext(ThemeContext);

    return (
        <Button
            className={"btn-yellow"}
            onClick={() => setThemeMode(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <FaSun /> : <FaMoon />}
        </Button>
    )
}

export default ButtonTheme