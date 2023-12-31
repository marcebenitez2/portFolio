import React, { useEffect, useState } from "react";

const ChangeTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
      document.querySelector("#logo").src = '/logoMarceDark.png';
    } else {
      document.querySelector("html").classList.remove("dark");
      document.querySelector("#logo").src = '/logoMarceLight.png';
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={handleChangeTheme} className=" dark:text-white">
      Tema
    </button>
  );
};

export default ChangeTheme;
