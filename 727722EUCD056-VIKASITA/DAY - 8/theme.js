import React, { useContext } from 'react';
import { ThemeContext } from './Exercise13Context';

const ThemeSwitcher = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>Toggle Theme</button>
    );
};

export default ThemeSwitcher;
