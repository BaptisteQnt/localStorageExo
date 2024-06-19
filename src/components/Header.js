import { useEffect } from "react";
import { useState } from "react";
import Logo from "../assets/images/logo-storageApp.png"

export const Header = () => {
    const [theme,setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "medium");

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme));
        document.documentElement.removeAttribute("class");
        document.documentElement.classList.add(theme);
    }, [theme]);

    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="Taskmate Logo"/>
                <span>Taskmate</span>
            </div>
            <div className="themeSelectore">
                <span onClick={() => setTheme("light")} className={ theme === "light" ? "light activeTheme" : "light"}></span>
                <span onClick={() => setTheme("medium")} className={ theme === "medium" ? "medium activeTheme" : "medium"}></span>
                <span onClick={() => setTheme("light")} className={ theme === "dark" ? "dark activeTheme" : "dark"}></span>
                <span onClick={() => setTheme("light")} className={ theme === "g0ne" ? "g0ne activeTheme" : "g0ne"}></span>
                <span onClick={() => setTheme("light")} className={ theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}></span>
                <span onClick={() => setTheme("light")} className={ theme === "gThree" ? "gThree activeTheme" : "gThree"}></span>
            </div>
        </header>
    );
};
