import { useState } from 'react';


function useTheme( startingTheme = "light" ) {
    const [theme, setTheme ] = useState(startingTheme);
    function ValidateTheme(themeValue) {
        if(themeValue == "dark"){
            setTheme("dark")
        } else {
            setTheme("light");
        }
    }

    return {
        theme,
        setTheme: ValidateTheme
    }
}


export default useTheme;