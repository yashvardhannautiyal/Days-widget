import { useState } from "react";

function ThemeToggle(){
    const[darkMode, setDarkMode] = useState(false);

    const toggleBtn = () =>{
        setDarkMode(!darkMode);

        document.documentElement.classList.toggle("dark");
    };

    return(
        <>
        <button onClick={toggleBtn}
        className="px-4 py-2 rounded-lg
                 bg-white text-black
                 dark:bg-gray-700 dark:text-white">
        {darkMode ? "Light" : "Dark"}
        </button>
        </>
    )
}

export default ThemeToggle;