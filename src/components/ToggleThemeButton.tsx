import { useToggleTheme } from "../context/ToggleThemeContext";
import { MdLightMode, MdNightlightRound } from "react-icons/md";

export default function ToggleThemeButton() {
  const { isDarkTheme, toggleTheme } = useToggleTheme();
  return (
    <button
      onClick={() => {
        toggleTheme();
      }}
      className=" bottom-5 right-2 rounded-full fixed transiction duration-300 z-20 outline-none"
    >
      {isDarkTheme ? (
        <MdLightMode
          className="size-12  rounded-full object-contain transition duration-300 hover:rotate-180"
          fill="white"
        />
      ) : (
        <MdNightlightRound className="size-12 rotate-180  rounded-full object-contain hover:rotate-0 transition duration-300" />
      )}
    </button>
  );
}
