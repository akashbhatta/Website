import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'

export const UseTheme = () => {
    const context = useContext(ThemeContext);
  
        if(!context) {
            throw new Error ("useTheme must be used within ThemeProvider");
        }  
    return context;
}
