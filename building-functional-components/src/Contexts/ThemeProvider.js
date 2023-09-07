import { useState, createContext } from 'react';


export const ThemeContext = createContext();

function ThemeProvider({ startingTheme, children }){
    const [theme, setTheme] = useState(startingTheme || 'light')
    return (
        <ThemeContext.Provider  value={{ theme, setTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}

export { ThemeProvider };