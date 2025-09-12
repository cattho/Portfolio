import { useTheme } from "../../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleTheme();
  };

  return (
    <div className="theme-toggle-container">
      <button
        className={`theme-toggle ${theme}`}
        onClick={handleClick}
        onMouseDown={(e) => e.preventDefault()}
        aria-label={`Cambiar a modo ${theme === "light" ? "oscuro" : "claro"}`}
        type="button"
      >
        <div className="toggle-track">
          <div className="toggle-thumb">
            <span className="toggle-icon">
              {theme === "light" ? "🌙" : "☀️"}
            </span>
          </div>
        </div>
      </button>
    </div>
  ); 
};

export default ThemeToggle;
