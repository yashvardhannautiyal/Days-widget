import { useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";

function ThemeToggle(){
    const[darkMode, setDarkMode] = useState(false);

    const toggleBtn = () =>{
        setDarkMode(!darkMode);

        document.documentElement.classList.toggle("dark");
    };

    return(
        <>
        <button onClick={toggleBtn}
        className="p-2 rounded-full
                 bg-white text-gray-950
                 dark:bg-gray-700 dark:text-white">
        {darkMode ? <FiSun /> : <MdOutlineDarkMode />}
        </button>
        </>
    )
}

export default ThemeToggle;