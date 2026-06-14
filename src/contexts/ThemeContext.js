import React, { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto del tema
const ThemeContext = createContext();

// Hook personalizado para usar el tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  return context;
};

// Proveedor del tema
export const ThemeProvider = ({ children }) => {
  // Inicializamos el estado con 'light' para el renderizado en el servidor
  const [theme, setTheme] = useState('dark');

  // Este useEffect se encargará de obtener el tema del localStorage
  // y actualizar el estado una vez que la página se cargue en el cliente
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Función para alternar entre temas
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // Guardar tema en localStorage cuando cambie y aplicar al documento
  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};